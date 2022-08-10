import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  auth:{
    user: process.env.EMAIL_USER_CREDENTIAL,
    pass: process.env.EMAIL_PASSWORD_CREDENTIAL
  }
});

async function sendRegisterEmail(email: string, name: string, password: string) {
  const mailOptions = {
    from: 'do-not-reply@flextimate.com',
    to: email,
    subject: `${name}, cadastre-se no Flextimate`,
    text: `
      Bem vindo ao Flextimate, ${name}!

      Sua senha provisória é ${password}

      Acesse o link abaixo para registrar uma nova senha finalizar o seu cadastro no Flextimate. 

      Este é um email automático. Por favor, não responda.
    `
  };
  
  await transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      throw{code: 500, message: 'Não foi possível enviar email de confirmação. Tente novamente.'};
    } else {
      console.log('Email sent: ' + info.response);
      return;
    }
    
  });
}


const emailUtils = {
  sendRegisterEmail
};

export default emailUtils;