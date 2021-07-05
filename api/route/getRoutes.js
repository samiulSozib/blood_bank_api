const router=require('express').Router()
const {userlist}=require('../controller/getController')
const {insertUser}=require('../controller/insertController')

router.get('/userlist.php',userlist)
router.post('/insertuser',insertUser)

module.exports=router