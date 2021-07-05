const express=require('express')
const morgan = require('morgan')
const {}=require('sequelize')
const database=require('../config/connectDB')



const middleware=[
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended:true}),
    express.json(),
]

module.exports=(app)=>{
    middleware.forEach(m=>{
        app.use(m)
    })
}