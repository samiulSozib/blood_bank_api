const Donor = require('../model/Donor')
const News = require('../model/News')
const Request = require('../model/Request')
const User=require('../model/User')
const donor=require('../model/Donor')
const news=require('../model/News')
const request=require('../model/Request')

exports.getDashbordController=async(req,res,next)=>{
    try{
        let users=await User.findAll()
        //console.log(users)
        return res.render('page/dashboard/dashboard',{title:'Dashboard',users})
    }catch(e){
        console.log(e)
        next(e)
    }
    
}

exports.getDonorController=async(req,res,next)=>{
    try{
        let donors=await Donor.findAll()
        return res.render('page/dashboard/donor.ejs',{title:'Donor List',donors})
    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.getrequestController=async(req,res,next)=>{
    try{
        let requests=await Request.findAll()
        return res.render('page/dashboard/request.ejs',{title:'Request List',requests})
    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.getNewsController=async(req,res,next)=>{
    try{
        let news=await News.findAll()
        return res.render('page/dashboard/news.ejs',{title:'News List',news})
    }catch(e){
        console.log(e)
        next(e)
    }
}

////////////////////////////////////////////
////////////////////////////////////////////
// insert section or add section

exports.addDonorGetController=async(req,res,next)=>{
    return res.render('page/dashboard/addDonor.ejs',{title:'Add Donor'})
}
exports.addNewsGetController=async(req,res,next)=>{
    return res.render('page/dashboard/addNews.ejs',{title:'Add News'})
} 

//////////////////////////
exports.addDonorPostController=async(req,res,next)=>{
    let {name,blood_group,phone,location}=req.body
    try{
        return donor.create({
            name,
            blood_group,
            phone,
            location
        }).then((donor)=>{
            if(donor){
                return res.redirect('/dashboard/donor')
            }else{
                return res.redirect('/dashboard/addDonor')
            }
        })
    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.addNewsPostController=async(req,res,next)=>{
    let {title,period,body,author}=req.body
    try{
        return news.create({
            title,
            period,
            body,
            author
        }).then((news)=>{
            if(news){
                return res.redirect('/dashboard/news')
            }else{
                return res.redirect('/dashboard/addNews')
            }
        })
    }catch(e){
        console.log(e)
        next(e)
    }
}

//////////////////////////////
//delete 

exports.deleteDonor=async(req,res,next)=>{
    let {id}=req.params
    try{
        let result=await donor.destroy({where:{id:id}})
        if(result){
            return res.redirect('/dashboard/donor')
        }else{
            return res.redirect('/dashboard/donor')
        }
    }catch(e){
        console.log(e)
        next(e)
    }
}


exports.deleteRequest=async(req,res,next)=>{
    let {id}=req.params
    try{
        let result=await request.destroy({where:{id:id}})
        if(result){
            return res.redirect('/dashboard/request')
        }else{
            return res.redirect('/dashboard/request')
        }
    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.deleteNews=async(req,res,next)=>{
    let {id}=req.params
    try{
        let result=await news.destroy({where:{id:id}})
        if(result){
            return res.redirect('/dashboard/news')
        }else{
            return res.redirect('/dashboard/news')
        }
    }catch(e){
        console.log(e)
        next(e)
    }
}