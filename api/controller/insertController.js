const user=require('../../model/User')

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

            // return user.create({
            //     id:req.body.id,
            //     name,
            //     phone,
            //     blood_group,
            //     donation_date,
            //     location,
            //     district
            // }).then((user)=>{
            //     if(user){
            //         res.json({
            //             result:"success"
            //         })
            //     }else{
            //         res.json({
            //             result:'error'
            //         })
            //     }
            // })

        }catch(e){
            console.log(e)

        }

}