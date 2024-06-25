import express, {NextFunction, Request, Response, json} from 'express'
import user_router from './routes/user.router'
import cors from 'cors'
import route from './routes/tour.router'
import auth_router from './routes/auth.router'


let app = express()

app.use(express.json())
app.use(cors())

app.use('/user',user_router)
app.use('/tour',route)
app.use('/auth',auth_router)

app.use((err:Error,req:Request,res:Response,Next:NextFunction)=>{
    res.json({
        error:err.message
    })
})

app.listen(3000, ()=>{
    console.log("server running on port 3000")
})