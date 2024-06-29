import nodemailer, { Transporter } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import SMTPConnection from "nodemailer/lib/smtp-connection";

// Ensure all required environment variables are set
const {
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD,
} = process.env;
if (
  !EMAIL_SERVER_HOST ||
  !EMAIL_SERVER_PORT ||
  !EMAIL_SERVER_USER ||
  !EMAIL_SERVER_PASSWORD
) {
  throw new Error(
    "Missing required environment variables for email configuration"
  );
}

export const smtpOptions: SMTPConnection.Options = {
  host: EMAIL_SERVER_HOST,
  port: parseInt(EMAIL_SERVER_PORT),
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD,
  },
};

export const transporter: Transporter = nodemailer.createTransport(smtpOptions);

/**
 * Sends an email using the configured transporter.
 *
 * @param {MailOptions} mailOptions - The email options object.
 * @param {string} mailOptions.from - The email address of the sender.
 * @param {string} mailOptions.to - The email address(es) of the recipient(s). Multiple addresses can be separated by commas.
 * @param {string} mailOptions.subject - The subject of the email.
 * @param {string} mailOptions.text - The plain text body of the email.
 * @param {string} [mailOptions.html] - The HTML body of the email. Optional if `text` is provided.
 * @param {Array|Attachment} [mailOptions.attachments] - An array of attachment objects. Optional.
 *
 * @returns {Promise<object>} - A promise that resolves to the information about the sent email.
 *
 * @throws Will throw an error if the email could not be sent.
 *
 * @example
 * const mailOptions = {
 *   from: 'sender@example.com',
 *   to: 'recipient@example.com',
 *   subject: 'Hello ✔',
 *   text: 'Hello world?',
 *   html: '<b>Hello world?</b>',
 * };
 *
 * sendEmail(mailOptions)
 *   .then(info => console.log('Email sent:', info))
 *   .catch(error => console.error('Error sending email:', error));
 */
export const sendEmail = async (mailOptions: MailOptions): Promise<object> => {
  try {
    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
