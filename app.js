require('dotenv').config()
const express=require('express')
const setMiddleware=require('./middleware/middleware')
const setRoute=require('./route/routes')
const database=require('./config/connectDB')
const mongoose=require('mongoose')



const app=express()
app.set('view engine','ejs')
app.set('views')

setMiddleware(app)
setRoute(app)

mongoose.connect(`mongodb+srv://${process.env.DB_USER_MONGO}:${process.env.DB_PASSWORD_MONGO}@mycluster.oazue.mongodb.net/${process.env.DB_NAME_MONGO}?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('database connect success')
}).catch(e=>{
    return console.log(e)
})

database.authenticate()
    .then(()=>{
        console.log('Database Connect Success')
        app.listen(1000,()=>{
            console.log('Server Created Success')
        })
    }).catch((e)=>{
        console.log(e)
    })

