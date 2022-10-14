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
        to: "cleonoralondon@gmail.com",
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
      to: "cleonoralondon@gmail.com",
      from: "cleonorasalon@gmail.com",
      subject: "Contact - CleoNora Website",
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone Number: ${body.phoneNumber}\nMessage: \n${body.message}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="x-apple-disable-message-reformatting" />
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!--<![endif]-->
          <title></title>
      
          <style type="text/css">
            @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
      
              .u-row .u-col-100 {
                width: 600px !important;
              }
            }
      
            @media (max-width: 620px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: calc(100% - 40px) !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
      
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
      
            p {
              margin: 0;
            }
      
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
      
            * {
              line-height: inherit;
            }
      
            a[x-apple-data-detectors="true"] {
              color: inherit !important;
              text-decoration: none !important;
            }
      
            table,
            td {
              color: #000000;
            }
            #u_body a {
              color: #0000ee;
              text-decoration: underline;
            }
            @media (max-width: 480px) {
              #u_content_heading_2 .v-container-padding-padding {
                padding: 10px !important;
              }
              #u_content_heading_2 .v-font-size {
                font-size: 32px !important;
              }
              #u_column_4 .v-col-padding {
                padding: 0px !important;
              }
              #u_content_text_7 .v-container-padding-padding {
                padding: 10px 25px !important;
              }
              #u_content_text_8 .v-container-padding-padding {
                padding: 10px 40px !important;
              }
              #u_column_11 .v-col-background-color {
                background-color: #343434 !important;
              }
              #u_content_social_1 .v-container-padding-padding {
                padding: 0px !important;
              }
            }
          </style>
      
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter:wght@600&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
        </head>
      
        <body
          class="clean-body u_body"
          style="
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            background-color: #ffffff;
            color: #000000;
          "
        >
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table
            id="u_body"
            style="
              border-collapse: collapse;
              table-layout: fixed;
              border-spacing: 0;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              vertical-align: top;
              min-width: 320px;
              margin: 0 auto;
              background-color: #ffffff;
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr style="vertical-align: top">
                <td
                  style="
                    word-break: break-word;
                    border-collapse: collapse !important;
                    vertical-align: top;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: transparent;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding v-col-background-color" style="background-color: #343434;width: 600px;padding: 10px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div
                            class="v-col-background-color"
                            style="
                              background-color: #343434;
                              height: 100%;
                              width: 100% !important;
                            "
                          >
                            <!--[if (!mso)&(!IE)]><!--><div
                              class="v-col-padding"
                              style="
                                height: 100%;
                                padding: 10px 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                              "
                            ><!--<![endif]-->
                              <table
                                id="u_content_heading_2"
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px 100px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <h1
                                        class="v-font-size"
                                        style="
                                          margin: 0px;
                                          color: #efcb71;
                                          line-height: 140%;
                                          text-align: center;
                                          word-wrap: break-word;
                                          font-weight: normal;
                                          font-family: Bitter;
                                          font-size: 40px;
                                        "
                                      >
                                        <div>
                                          <div>Message from Contact Us Page</div>
                                        </div>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: transparent;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding v-col-background-color" style="background-color: #343434;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                        <div
                          id="u_column_4"
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div
                            class="v-col-background-color"
                            style="
                              background-color: #343434;
                              height: 100%;
                              width: 100% !important;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          >
                            <!--[if (!mso)&(!IE)]><!--><div
                              class="v-col-padding"
                              style="
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            ><!--<![endif]-->
                              <table
                                id="u_content_text_7"
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px 10px 10px 40px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          color: #efcb71;
                                          line-height: 190%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 190%">
                                          Name: ${body.name}
                                        </p>
                                        <p style="font-size: 14px; line-height: 190%">
                                          Email: ${body.email}
                                        </p>
                                        <p style="font-size: 14px; line-height: 190%">
                                          Phone Number: ${body.phoneNumber}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: transparent;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding v-col-background-color" style="background-color: #343434;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                        <div
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div
                            class="v-col-background-color"
                            style="
                              background-color: #343434;
                              height: 100%;
                              width: 100% !important;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          >
                            <!--[if (!mso)&(!IE)]><!--><div
                              class="v-col-padding"
                              style="
                                height: 100%;
                                padding: 0px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            ><!--<![endif]-->
                              <table
                                id="u_content_text_8"
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px 100px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          color: #efcb71;
                                          line-height: 140%;
                                          text-align: left;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 140%">
                                          ${body.message}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <div
                    class="u-row-container"
                    style="padding: 0px; background-color: transparent"
                  >
                    <div
                      class="u-row"
                      style="
                        margin: 0 auto;
                        min-width: 320px;
                        max-width: 600px;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        word-break: break-word;
                        background-color: transparent;
                      "
                    >
                      <div
                        style="
                          border-collapse: collapse;
                          display: table;
                          width: 100%;
                          height: 100%;
                          background-color: transparent;
                        "
                      >
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
                        <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding v-col-background-color" style="background-color: #343434;width: 600px;padding: 25px 30px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                        <div
                          id="u_column_11"
                          class="u-col u-col-100"
                          style="
                            max-width: 320px;
                            min-width: 600px;
                            display: table-cell;
                            vertical-align: top;
                          "
                        >
                          <div
                            class="v-col-background-color"
                            style="
                              background-color: #343434;
                              height: 100%;
                              width: 100% !important;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          >
                            <!--[if (!mso)&(!IE)]><!--><div
                              class="v-col-padding"
                              style="
                                height: 100%;
                                padding: 25px 30px;
                                border-top: 0px solid transparent;
                                border-left: 0px solid transparent;
                                border-right: 0px solid transparent;
                                border-bottom: 0px solid transparent;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                              "
                            ><!--<![endif]-->
                              <table
                                id="u_content_social_1"
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div align="center">
                                        <div style="display: table; max-width: 140px">
                                          <!--[if (mso)|(IE)]><table width="140" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:140px;"><tr><![endif]-->
      
                                          <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                          <!--[if (mso)|(IE)]></td><![endif]-->
      
                                          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <table
                                style="font-family: 'Montserrat', sans-serif"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="v-container-padding-padding"
                                      style="
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        padding: 10px;
                                        font-family: 'Montserrat', sans-serif;
                                      "
                                      align="left"
                                    >
                                      <div
                                        style="
                                          color: #efcb71;
                                          line-height: 160%;
                                          text-align: center;
                                          word-wrap: break-word;
                                        "
                                      >
                                        <p style="font-size: 14px; line-height: 160%">
                                          Developed with love
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
      
                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                      </div>
                    </div>
                  </div>
      
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
      </html>      
    `,
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
