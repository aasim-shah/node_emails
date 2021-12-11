const express = require('express')
const app = express()
var nodemailer = require('nodemailer');
const port =  process.env.PORT || 8080;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'syedaasimshah1@gmail.com',
    pass: 'lewani007'
  }
});


var mailOptions = {
  from: 'syedaasimshah1@gmail.com',
  to: 'syedaasimshah1@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};



app.get('/' , (req , res) => {
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send(error)
  } else {
    res.send('Email sent: ' + info.response);
  }
});

})

  app.listen(port , ()=> {
    console.log(`server is running on ${port}`);
})
