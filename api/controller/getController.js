const User=require('../../model/User')
const Donor=require('../../model/Donor')
const Request=require('../../model/Request')
const Management=require('../../model/Management')
const News=require('../../model/News')

exports.userlist=async(req,res,next)=>{
    try{
        let users=await User.findAll()
        if(users){
            res.json(
                {users}
            )
        }else{
            res.json({
                message:'No Post Available'
            })
        }
    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.donorlist=async(req,res,next)=>{
    try{
        let donors=await Donor.findAll()
        if(donors){
            res.json(
                {donors}
            )
        }else{
            res.json({
                message:'No Post Available'
            })
        }
    }catch(e){
        console.log(e)
        next(e)
    }
}

// check user
exports.checkUser=async(req,res,next)=>{
    let {phone}=req.body
    //console.log(phone)
    try{
        let user=await User.findOne({where:{phone:phone}})
        if(user){
            res.json("success")
        }else{
            res.json("fail")
        }

    }catch(e){
        console.log(e)
        next(e)
    }
}

// get all request
exports.requestlist=async(req,res,next)=>{
    try{
        let requests=await Request.findAll()
        if(requests){
            res.json(
                {requests}
            )
        }else{
            res.json({
                message:'No Post Available'
            })
        }
    }catch(e){
        console.log(e)
        next(e)
    }
}

// get management team

exports.managementlist=async(req,res,next)=>{
    try{
        let managements=await Management.findAll()
        if(managements){
            res.json(
                {managements}
            )
        }else{
            res.json({
                message:'No Post Available'
            })
        }
    }catch(e){
        console.log(e)
        next(e)
    }
}

// get news list

exports.newslist=async(req,res,next)=>{
    try{

        let news=await News.findAll()
        if(news){
            res.json({
                news
            })
        }else{
            res.json({
                message:'no news'
            })
        }

    }catch(e){
        console.log(e)
        next(e)
    }
}

// get profile 

exports.getProfile=async(req,res,next)=>{
    let phone=req.body.phone
    
    try{
        console.log(phone)
        const profile=await User.findOne({where:{phone:phone}})
        //let profile=await User.findAll()
        if(profile){
            res.json(profile)
        }else{
            console.log(profile)
            res.json(
             "No Data Found"
            )
        } 

    }catch(e){
        console.log(e)
        next(e)
    }
}