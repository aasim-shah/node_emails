const express = require('express')
const app = express()
var nodemailer = require('nodemailer');
const port =  process.env.PORT || 8080;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'syedaasimshah1@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
app.get('/' ,async (req , res)=> {
  res.send('okay')
})



app.listen(port)