const express = require('express')
const app = express()
var mysql = require('mysql');
const port =  process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: '65.21.118.123',
    user: 'specscam_prouser',
    password: 'Mardan8110',
    database: 'specscam_phones'
  });

if(connection){
    console.log('pool');
}else{

    console.log('else');
}

app.get('/' ,async (req , res)=> {
    try {
        connection.query('SELECT * FROM news' , (err , rows , fields)=>{
          console.log(err);
          res.json(err);})
        

    } catch (error) {
        res.send('nothing')
    }
})


  app.listen(port , ()=> {
    console.log(`server is running on ${port}`);
})
