const router=require('express').Router()
const {signinGetController,signinPostContrtoller,signoutController}=require('../controller/authController')
const {isUnAuthenticated}=require('../middleware/authMiddleWare')


router.get('/signin',isUnAuthenticated,signinGetController)
router.post('/signin',isUnAuthenticated,signinPostContrtoller)

router.get('/signout',signoutController)

module.exports=router