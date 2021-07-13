
const apiRoute=require('../api/route/getRoutes')
const authRoute=require('./authRoute')
const dashboardRoute=require('./dashboardRoute')

const routes=[
    {
        path:'/api',
        handler:apiRoute
    },
    {
        path:'/admin',
        handler:authRoute
    },
    {
        path:'/dashboard',
        handler:dashboardRoute
    },
    {
        path:'/',
        handler:(req,res)=>{
            res.json({
                message:'Welcome to our smart care'
            })
        }
    }
]

module.exports=(app)=>{
    routes.forEach(r=>{
        if(r.path=='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}