import { Request, Response } from 'express';
import { sendEmail } from '../middleware/sendmail/senddmail'; // Import the sendEmail function from the email service file
import { log } from 'console';

export const sendSlip = async (req: Request, res: Response) => {
    try {
        // Extract PDF file and user ID from request body
        const {  userId,Email } = req.body;
        //const {pdf}=req.file;
    console.log(req.file, userId,Email);
    
    const pdfFilePath = req.file.path;
  const gmail="ssawant@techturbine.com";
    // Send the email with the PDF attachment
    await sendEmail(Email, 'Salary Slip', 'Please find your salary slip attached.', '<p>Please find your salary slip attached.</p>', pdfFilePath);

          return res.status(200).json({ message: 'PDF file saved successfully' });
        }
       catch (error) {
       
        
        return res.status(500).json({ error: 'Failed to send salary slip' });
      }
    };
