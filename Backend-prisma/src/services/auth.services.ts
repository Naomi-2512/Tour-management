import { pool } from "mssql"
import { login_details } from "../interface/interfaces"
import bcrypt from "bcrypt"
import DbHelper from "../dbHelpers/helper"

export class authService{

    async login(logins: login_details){

        let user = (await DbHelper.query(`SELECT * FROM Users WHERE email = '${logins.email}'`)).recordset;

        if(user.length < 1){
            return {
                error: "user not found"
            }
        }else{
            
            let hashedPassword = user[0].password
            console.log(logins.password + " hashed password: " + hashedPassword);
            
          
            let passwordMatches = bcrypt.compareSync(logins.password, hashedPassword)

            if(passwordMatches){

                return {
                    message: "Logged in successfully",
                    user:user
                }
                
            }else{
                return {
                    error: "Incorrect password"
                }
            }
           
        }
    }
}