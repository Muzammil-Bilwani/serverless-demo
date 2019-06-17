'use strict';
const emailEngine = require('email-engine');
require('dotenv').config()

emailEngine.setKey(process.env.SEND_GRID, 'SEND_GRID');
module.exports.mailSend = async (event) => {

  const to = "muzammil.bilwani@hotmail.com";
  const subject = "Lambda is up";
  const html = "<p>Hold you nerves Server Less will get you</p>";
  const from = "admin@demoapp.com";



  emailEngine.sendMailFromSendGrid(to, subject, html, from).then((res) => {
    console.log("===EMAIL SENT===");
  }, err => {
    console.error("===EMAIL CANNOT SENT===");
    console.error(err);
  });


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
