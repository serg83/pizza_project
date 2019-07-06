const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  // console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
   <h3>Contact Details</h3>
   <ul>
   <li>Email: ${req.body.email}</li>
   <li>Comments: ${req.body.text}</li>
   </ul>
   `;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "rocio9@ethereal.email",
        pass: "BUw1GTxv6jCdWN2V7D"
      }
    });

    let mailOptions = {
      from: "test@testaccount.com",
      to: "rocio9@ethereal.email",
      replyTo: "test@testaccount.com",
      subject: "New Message",
      text: req.body.text,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log("Message sent: %s", info.text);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
