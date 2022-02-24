const nodemailer = require('nodemailer');

async function main() {
    let testAccount = await nodemailer.createTestAccount();
  
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "37f1282508e342",
          pass: "f9417e32b559c8"
        }
    });

    let info = await transporter.sendMail({
        from: 'a20281013@gamil.com',
        to: 'a20281013@gamil.com',
        subject: 'test mail',
        text: 'nodejs 1hour ending'
    });

    console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);