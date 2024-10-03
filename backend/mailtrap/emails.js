import { mailtrapClient, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification"
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending Email", error);
    throw new Error("Error sending Email", error);
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "0889247a-2594-4009-af32-36b4c604fc35",
      template_variables: {
        company_info_name: "AUTH Company",
        name: name
      }
    });

    console.log(" Welcome Email sent successfully", response);
  } catch (error) {
    console.error("Error sending Welcome Email", error);
    throw new Error("Error sending Welcome Email", error);
  }
};
