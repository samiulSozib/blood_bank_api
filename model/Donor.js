const {Sequelize}=require('sequelize')
const database=require('../config/connectDB')
 
const Donor=database.define('donor',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    name:{
        type:Sequelize.STRING
    },
    blood_group:{
        type:Sequelize.STRING
    },
    phone:{
        type:Sequelize.STRING
    },
    location:{
        type:Sequelize.STRING
    },
},{
    timestamps:true
})

module.exports=Donor