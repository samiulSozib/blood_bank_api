const router=require('express').Router()
const {getDashbordController,
    getDonorController,
    getrequestController,
    getNewsController,
    addDonorGetController,
    addNewsGetController,
    addDonorPostController,
    addNewsPostController,
    deleteDonor,
    deleteRequest,
    deleteNews
    }=require('../controller/dashboardController')
const {isAuthenticated}=require('../middleware/authMiddleWare')


router.get('/',isAuthenticated,getDashbordController)
router.get('/donor',isAuthenticated,getDonorController)
router.get('/request',isAuthenticated,getrequestController)
router.get('/news',isAuthenticated,getNewsController)

///////////////////////
router.get('/addDonor',isAuthenticated,addDonorGetController)
router.get('/addNews',isAuthenticated,addNewsGetController)

/////////////////////
router.post('/addDonor',isAuthenticated,addDonorPostController)
router.post('/addNews',isAuthenticated,addNewsPostController)

///////////
router.get('/delete-donor/:id',isAuthenticated,deleteDonor)
router.get('/delete-request/:id',isAuthenticated,deleteRequest)
router.get('/delete-news/:id',isAuthenticated,deleteNews)

module.exports=router