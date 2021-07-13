const router=require('express').Router()
const {userlist,donorlist,checkUser,requestlist,managementlist,newslist,getProfile}=require('../controller/getController')
const {insertUser,insertDonor,insertRequest,insertNews,updateProfile}=require('../controller/insertController')
const {deleteRequest}=require('../controller/deleteController')

router.get('/userlist',userlist)
router.post('/insertuser',insertUser)


router.get('/donorlist',donorlist)
router.post('/insertDonor',insertDonor)

router.get('/requestlist',requestlist)
router.post('/insertRequest',insertRequest)

router.get('/managementlist',managementlist)

router.get('/newslist',newslist)
router.post('/insertNews',insertNews)

router.post('/check-user',checkUser)

router.post('/profile',getProfile)
router.post('/update-profile',updateProfile)

router.post('/deleteRequest',deleteRequest)

module.exports=router