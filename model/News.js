const {Sequelize}=require('sequelize')
const database=require('../config/connectDB')
 
const News=database.define('new',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    title:{
        type:Sequelize.STRING
    },
    period:{
        type:Sequelize.STRING
    },
    body:{
        type:Sequelize.STRING
    },
    author:{
        type:Sequelize.STRING
    },
},{
    timestamps:true
})

module.exports=News