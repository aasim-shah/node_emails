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
  to: 'myfriend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


app.get('/' ,async (req , res)=> {
 transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send(error);
  console.log('last errror')
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})



app.listen(port)