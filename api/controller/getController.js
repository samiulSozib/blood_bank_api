const User=require('../../model/User')


exports.userlist=async(req,res,next)=>{
    try{
        let users=await User.findAll()
        if(users){
            res.json(
                users
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