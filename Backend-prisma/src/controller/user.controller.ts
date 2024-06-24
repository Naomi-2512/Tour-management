import {Request,Response, response} from 'express'
import { userService } from "../services/users.services";

let service = new userService()

export class userController{
    async createUser(req:Request,res:Response){
        try{
            let {firstName,lastName,profileImage,email,password,role} = req.body
            let response = await service.createUser(req.body)
            return res.json(response)
        } catch(error){
            return res.json({error})
        }
        
    }
    async getAllUsers(req:Request,res:Response) {
        try {
            let result = await service.getAllUsers()
    
            return res.json(result)
    
        } catch (error) {
            return res.json({
                error
            })
        }
    }

    async deleteUser(req:Request, res:Response){
        try {
            let userId = req.params.userId
    
            let response = await service.deleteUser(userId)
    
            return res.json(response)
        } catch (error) {
            return res.json({
                error: error
            })
        }
    }

    async updateUserDetails(req:Request, res:Response){
        try {
            let userId = req.params.userId
    
            let {firstName,lastName,profileImage,email,password,role} = req.body

            let response = await service.updateUserDetails(userId, req.body);
          
            return res.json(response)
            
    
        } catch (error) {
            return res.json({
                error: error
            })
        }
    }
}

