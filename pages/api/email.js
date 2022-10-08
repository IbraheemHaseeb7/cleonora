// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const sgMail = require("@sendgrid/mail");
  const dotenv = require("dotenv");

  dotenv.config();

  const body = JSON.parse(req.body);
  sgMail.setApiKey(process.env.API_KEY);

  let msg;

  if (body.type === "glow") {
    let str = `<ol>`;

    body?.treatments?.map((data) => {
      str += `<li>` + data + `</li>`;
    });

    str += `</ol>`;
    msg = {
      to: "cleonorasalon@gmail.com",
      from: "cleonorasalon@gmail.com",
      subject: "Application - Glow Up Squad - CleoNora Website",
      text: `Application Sent From: ${body.name}\nContact Information: \n\t- EMAIL: ${body.email}\n\t- PHONE NUMBER: ${body.phoneNumber}`,
      html: `<div>
        <pre style="font-size: 1.5rem">Application Sent From: ${body.name}\nContact Information: \n\t- EMAIL: ${body.email}\n\t- PHONE NUMBER: ${body.phoneNumber}</pre>
        <div>
        <h2>Treatments</h2>
          <ol>
          ${str}
          </ol>
        </div>
      </div>`,
    };
  } else {
    msg = {
      to: "cleonorasalon@gmail.com",
      from: "cleonorasalon@gmail.com",
      subject: "Contact - CleoNora Website",
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone Number: ${body.phoneNumber}\nMessage: \n${body.message}`,
      html: `<div>
        <pre style="font-size: 1.5rem">Name: ${body.name}\nEmail: ${body.email}\nPhone Number: ${body.phoneNumber}\nMessage: \n${body.message}</pre>
      </div>`,
    };
  }

  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch(() => {
      console.log("Email not sent");
    });

  res.status(200).json({ res: "Email Sent" });
}
