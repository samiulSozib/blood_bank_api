const express=require('express')
const morgan = require('morgan')
const {}=require('sequelize')
const database=require('../config/connectDB')
const session=require('express-session')
const MongoDBStore=require('connect-mongodb-session')(session)
const {bindUserWithRequest}=require('./authMiddleWare')
const setLocals=require('./setLocals')

const Mongo_URL=`mongodb+srv://${process.env.DB_USER_MONGO}:${process.env.DB_PASSWORD_MONGO}@mycluster.oazue.mongodb.net/${process.env.DB_NAME_MONGO}?retryWrites=true&w=majority`

const store=new MongoDBStore({
    uri:Mongo_URL,
    collection:'session',
    expires:1000*60*60*2
})

const middleware=[
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended:true}),
    express.json(),
    session({
        secret:process.env.SECRET_KEY || 'SECRET_KEY',
        resave:false,
        saveUninitialized:false,
        store:store
    }),
    bindUserWithRequest(),
    setLocals(),
]

module.exports=(app)=>{
    middleware.forEach(m=>{
        app.use(m)
    })
}