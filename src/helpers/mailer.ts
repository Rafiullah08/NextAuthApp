import nodemailer from 'nodemailer'

const sendMail = async({email, emailType, userId}:any)=> {

try {

    // todo : configure email for usage

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });

      const mailOptions = {
        from: 'rfai@gmail.com', 
        to: email, 
        subject: emailType === 'verify' ? "verify your email": "Forgot Password",
        html: "<b>Hello world?</b>", 
      };

      const mailResponse = transporter.sendMail(mailOptions)

      return mailResponse
} catch (error) {
    console.log(error);
    
}

} 