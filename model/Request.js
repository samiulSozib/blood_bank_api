const {Sequelize}=require('sequelize')
const database=require('../config/connectDB')

const Request=database.define('request',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    user:{
        type:Sequelize.STRING
    },
    rePhone:{
        type:Sequelize.STRING
    },
    reLocation:{
        type:Sequelize.STRING
    },
    reBlood:{
        type:Sequelize.STRING
    },
    reQuantity:{
        type:Sequelize.STRING
    },
    reDate:{
        type:Sequelize.STRING
    },
    reReason:{
        type:Sequelize.STRING
    }
},{
    timestamps:true
})

module.exports=Request