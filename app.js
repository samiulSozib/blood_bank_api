require('dotenv').config()
const express=require('express')
const setMiddleware=require('./middleware/middleware')
const setRoute=require('./route/routes')
const database=require('./config/connectDB')



const app=express()
app.set('view engine','ejs')
app.set('views')

setMiddleware(app)
setRoute(app)

database.authenticate()
    .then(()=>{
        console.log('Database Connect Success')
        app.listen(1000,()=>{
            console.log('Server Created Success')
        })
    }).catch((e)=>{
        console.log(e)
    })

