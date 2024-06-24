import mssql from 'mssql'
import { sql_config } from '../config/config'

export default class DbHelper{

    static async query(query:string){
        const pool = mssql.connect(sql_config) as Promise<mssql.ConnectionPool>

        let request = ((await pool).request().query(query))

        return request
    }

    static async execute(procedureName: string, data:{[c:string | number]: string | number | boolean}){
        const pool = mssql.connect(sql_config) as Promise<mssql.ConnectionPool>

        let request = ((await pool).request()) as mssql.Request

        for(let key in data){
            request.input(key, data[key])
        }

        const result = await request.execute(procedureName)

        return result
    }
}