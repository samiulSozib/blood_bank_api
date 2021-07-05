const {Sequelize}=require('sequelize')
const database=require('../config/connectDB')
 
const User=database.define('user',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    name:{
        type:Sequelize.STRING
    },
    phone:{
        type:Sequelize.STRING
    },
    blood_group:{
        type:Sequelize.STRING
    },
    donation_date:{
        type:Sequelize.STRING
    }, 
    location:{
        type:Sequelize.STRING
    },
    district:{
        type:Sequelize.STRING
    }
},{
    timestamps:true
})

module.exports=User