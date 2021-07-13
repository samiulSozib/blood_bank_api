const user=require('../../model/User')
const donor=require('../../model/Donor')
const request=require('../../model/Request')
const news=require('../../model/News')
const User = require('../../model/User')
const admin = require("firebase-admin");

const serviceAccount=require('../../json_file/magura-blood-bank-system-firebase-adminsdk-odepp-64c03f683f.json')

exports.insertUser=async(req,res,next)=>{
    
    let {
        name,
        phone,
        blood_group,
        donation_date,
        location,
        district}=req.body

        console.log(name,phone)

        try{

            return user.create({
                id:req.body.id,
                name,
                phone,
                blood_group,
                donation_date,
                location,
                district
            }).then((user)=>{
                if(user){
                    res.status(200).send()
                }else{
                    res.status(400).send()
                }
            })

        }catch(e){
            console.log(e)

        }

}

// insert donor

exports.insertDonor=async(req,res,next)=>{
    let {name,blood_group,phone,location}=req.body

    try{

        return donor.create({
            id:req.body.id,
            name,
            blood_group,
            phone,
            location
        }).then((donor)=>{
            if(donor){
                res.status(200).send()
            }else{
                res.status(400).send()
            }
        })

    }catch(e){
        console.log(e)
        next(e)
    }
}


// insert request

exports.insertRequest=async(req,res,next)=>{
    let {user,rePhone, reLocation, reBlood,  reQuantity, reDate,reReason}=req.body
    try{

        return request.create({
            id:req.body.id,
            user,
            rePhone,
            reLocation,
            reBlood,
            reQuantity,
            reDate,
            reReason
        }).then((request)=>{
            if(request){
                
                //res.status(200).send()
                //
                // send notification
                    if(!admin.apps.length){
                        admin.initializeApp({
                        credential: admin.credential.cert(serviceAccount),
                        databaseURL: "https://magura-blood-bank-system.firebaseio.com"
                  });
                    }
                  var topic = 'general';

                  var message = {
                  notification: {
                      title: `Need ${reBlood} Blood`,
                      body: `For ${reReason}`,
                  },
                  topic: topic
                  };
                  admin.messaging().send(message)
                    res.status(200).send()
                //
            }else{
                
                res.status(400).send()
            }
        })

    }catch(e){
        res.json("success"+e)
        console.log(e)
        next(e)
    }
}

// insert news

exports.insertNews=async(req,res,next)=>{
    let{title,period,body,author}=req.body

    try{
        return news.create({
            id:req.body.id,
            title,
            period,
            body,
            author
        }).then((news)=>{
            if(news){
                res.status(200).send()
            }else{
                res.status(400).send()
            }
        })
    }catch(e){
        console.log(e)
        next(e)
    }
}

// update profile

exports.updateProfile=async(req,res,next)=>{
    let{name,phone,blood_group,donation_date,location,district}=req.body

    try{

        let updatedProfile=await User.update({name:name,blood_group:blood_group,donation_date:donation_date,location:location,district:district},{where:{phone:phone}})
        if(updatedProfile){
            res.status(200).send()
        }else{
            res.status(404).send()
        }

    }catch(e){
        console.log(e)
        next(e)
    }
}
