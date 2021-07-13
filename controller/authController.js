const bcrypt=require('bcrypt')
const Admin=require('../model/admin')


exports.signinGetController=(req,res,next)=>{
    res.render('page/auth/signin',{
        title:'SignIn Admin',
        error:{},
        value:{}
    })
}

exports.signinPostContrtoller=async(req,res,next)=>{
    try{
        let admin=await Admin.find({email:req.body.email})
        if(!admin){
            return res.status(401).json({
                message:'Authentication fail'
            })
        }
        const isValidatePassword=await bcrypt.compare(req.body.password,admin[0].password)
        if(!isValidatePassword){
            return res.status(401).json({
                message:'Authentication fail'
            })
        }

        req.session.isLoggedIn=true
        req.session.admin=admin
        req.session.save(error=>{
            if(error){
                console.log(error)
                return next(error)
            }
            return res.redirect('/dashboard')
            //console.log('signin')
        })


    }catch(e){
        console.log(e)
        next(e)
    }
}
exports.signoutController=(req,res,next)=>{
    req.session.destroy(error=>{
        if(error){
            console.log(error)
            return newxt(eror)
        }

        res.redirect('/admin/signin')
    })
}
