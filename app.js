const express = require('express')
const app = express()
const mysql = require('mysql');
const port =  process.env.PORT || 8080;

const pool = mysql.createPool({
    host: '65.21.118.123',
    user: 'specscam_prouser',
    password: 'Mardan8110',
    database: 'specscam_phones'
  });

if(pool){
    console.log('pool');
}else{

    console.log('else');
}

app.get('/' ,async (req , res)=> {
    try {
        pool.query('select * from `user`' , (err , rows , fields)=>{
            res.json(err);
          
        })
        
    } catch (error) {
        res.send('nothing')
    }
})


  app.listen(port , ()=> {
    console.log(`server is running on ${port}`);
})