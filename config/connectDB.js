const { Sequelize }=require('sequelize')
require('dotenv').config()
// const DB_NAME=process.env.DB_NAME
// const DB_USERNAME=process.env.DB_USERNAME
// const DB_PASSWORD=process.env.DB_PASSWORD
// const DB_HOST=process.env.DB_HOST

const DB_NAME='myalsncr_samiul_test_data'
const DB_USERNAME='myalsncr_samiul_test_data'
const DB_PASSWORD='+$+o1;hRUa^L'
const DB_HOST='localhost'

// module.exports=new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD,{
//     host:DB_HOST,
//     dialect:'mysql'
// }) 

module.exports=new Sequelize('myalsncr_samiul_test_data','myalsncr_samiul_test_data','+$+o1;hRUa^L',{
    host:'localhost',
    dialect:'mysql'
}) 