
import { user } from "../interface/interfaces";
import { v4 } from "uuid";
import DbHelper from "../dbHelpers/helper";
import lodash from "lodash";
import bcrypt from 'bcrypt'

export class userService{
    

    async createUser(user:user){
        let hashedPassword = bcrypt.hashSync(user.password, 6)

        //check if email exists
        let emailExists = (await DbHelper.query(`SELECT * FROM Users WHERE email = '${user.email}'`)).recordset
        
        if(!lodash.isEmpty(emailExists)){       
            return {
                error: "Email already in use"
            }
        }   

        let response = (await DbHelper.execute("createUser", {userId     :v4(),    
            firstName  : user.firstName,
            lastName   : user.lastName, 
            profileImage: user.profileImage,
            email      : user.email, 
            password   : user.password, 
            role       : user.role})
        ).rowsAffected;

        if (response[0] < 1) {
            return {
                error: "unable to create user"
            }
        }
        else{{
            return {
                message: "user created successfully"
            }
        }}
    }
    async getAllUsers(){
        let result = (await DbHelper.query("SELECT * FROM Users")).recordset

        if(result.length == 0){
            return {
                message: "No users at the moment"
            }
        }else{
            return {
                users: result
            }
        }
    }

    async updateUserDetails(userId:string, user:user){
        let userExists = (await DbHelper.query(`SELECT * FROM Users WHERE userId='${userId}'`)).recordset;
        

        if(lodash.isEmpty(userExists)){
            return {
                error: "user not found"
            }
        }else{

        let result = (await DbHelper.execute("updateUser", {userId: userExists[0].userId,firstName: user.firstName,lastName:user.lastName,profileImage:user.profileImage,email:user.email,password:userExists[0].password,role:user.role })).rowsAffected

        if(result[0] < 1){
            return {
                error: "Was not able to update user"
            }
        }else{
            return {
                message: "user updated successfully"
            };
        }
                    
    }
    }

    async deleteUser(userId:string){
        let response = (await DbHelper.query(`SELECT * FROM Users WHERE userId = '${userId}'`)).recordset
        
        if(response.length < 1){
            return {
                error: "User not found"
            }
        }else{
            await DbHelper.query(`DELETE FROM Users WHERE userId = '${userId}'`)
            return {
                message: "User deleted successfully"
            }
        }
        
    }

}