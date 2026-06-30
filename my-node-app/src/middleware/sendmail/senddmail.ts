import nodemailer from 'nodemailer';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  host: 'techturbine.com',
  port: 587,
  secure: false,
  auth: {
    user: 'email',
    pass: '*********'
  }
});

export const sendEmail = (to: string, subject: string, text: string, html: string, pdfFilePath: string) => {
  const mailOptions = {
    from: 'email',
    to,
    subject,
    text,
    html,
    attachments: [
      {
        filename: 'document.pdf', // Change the filename as per your requirement
        content: fs.createReadStream(pdfFilePath), // Read the PDF file as stream
        contentType: 'application/pdf' // Set the content type of the attachment
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return;
    }
    console.log('Email sent successfully:', info.response);
  });
};
