

const express = require('express')
const app = express()
var nodemailer = require('nodemailer');
const port =  process.env.PORT || 8080;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'mypassword'
  }
});


app.get('/' , (req , res)=>{
    
res.send('okay')
})

app.use(express.json())
app.post('/' ,  async (req , res)=> {
var mailOptions = {
  from: 'asimshah8110@gmail.com',
  to: req.body.tuu ,
  subject: req.body.sub ,
  text: req.body.text ,
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
