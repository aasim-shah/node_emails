const express = require('express')
const app = express()
var nodemailer = require('nodemailer');
const port =  process.env.PORT || 8080;
var transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
     port: 587,
     secure: false,
  auth: {
    user: 'asimshah8110@gmail.com',
    pass: 'lewani007'
  }
});

var mailOptions = {
  from: 'syedaasimshah1@@gmail.com',
  to: 'myfriend@yahoo.com',
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