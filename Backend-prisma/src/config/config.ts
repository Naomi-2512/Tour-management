import dotenv from 'dotenv';
import mssql from 'mssql';
dotenv.config();

export const sql_config = {
    user: process.env.DB_USER as string,
    password: process.env.DB_PWD as string,
    database:process.env.DB_NAME as string,
    server:process.env.DB_SERVER as string,
    pool: {
        max:10,
        min:0,
        idleTimeoutMillis: 30000,
    },
    options:{
        encrypt:false,
        trustServerCertificate:true,
    }
}

async function testConnetion() {
    let pool =await mssql.connect(sql_config);
    if (pool.connected) {
        console.log('connected to database succefully');
        
    }
    else{
        console.log('databse connection failed');
        
    }
}
testConnetion();