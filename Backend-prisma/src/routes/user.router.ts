import {Router} from 'express'
import { userController } from '../controller/user.controller'


let controller = new userController()

let user_router = Router()
user_router.post('/create', controller.createUser)
user_router.get('/all-users', controller.getAllUsers)
user_router.put('/update-user/:userId', controller.updateUserDetails)
user_router.delete('/delete/:userId', controller.deleteUser)
user_router.get('/one-user/:userId', controller.fetchSingleUser)


export default user_router