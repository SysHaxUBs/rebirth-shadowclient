var nodemailer = require('nodemailer');
const express = require('express')
const app = express()
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
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


app.all('/', (req, res) => {
    console.log("SHXLOGS - homepage visit.")
    res.send('This is the shadow client for project rebirth, an unbl*cked games site for your enjoyment. This is an early test version of the site.')
})
app.listen(process.env.PORT || 3000)
