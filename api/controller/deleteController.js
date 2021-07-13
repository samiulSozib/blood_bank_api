const Request=require('../../model/Request')
const request=require('../../model/Request')

exports.deleteRequest=async(req,res,next)=>{
    let {id}=req.body
    try{
        let result=await request.destroy({where:{id:id}})
        if(result){
            res.json({
                message:"delete success"
            })
        }else{
            res.json({
                message:"delete fail"
            })
        }
            
    }catch(e){
        console.log(e)
        next(e)
    }
}