const express = require('express')
const app = express()
var nodemailer = require('nodemailer');
const port =  process.env.PORT || 8080;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'asimshah8110@gmail.com',
    pass: 'Noob@developer'
  }
});

var mailOptions = {
  from: 'asimshah8110@gmail.com',
  to: 'syedaasimshah1@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


app.get('/' , (req , res)=>{
    
res.send('okay')
})

app.post('/' ,async (req , res)=> {
var mailOptions = {
  from: 'asimshah8110@gmail.com',
  to: 'syedaasimshah1@gmail.com',
  subject: req.body.subject,
  text: req.body.text
};
  
  
  await transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send(error);
  console.log('last errror')
  } else {
    res.send('email send')
    console.log('Email sent: ' + info.response);
  }
});

})



app.listen(port)