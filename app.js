const express = require('express')
const app = express()
const mysql = require('mysql2');
const port =  process.env.PORT || 8080;

const pool = mysql.createPool({
    host: '',
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
        pool.query('SELECT * FROM news' , (err , rows , fields)=>{
          console.log(err);
          res.json(err);
          
          
        })
        
    } catch (error) {
        res.send('nothing')
    }
})


  app.listen(port , ()=> {
    console.log(`server is running on ${port}`);
})