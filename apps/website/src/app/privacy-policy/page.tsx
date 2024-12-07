import { PageTitle, GridContainer } from "@/components/shared";

export const metadata = {
  title: "Privacy Policy - Sahil App",
  description:
    "Discover the wide range of services we offer. Our innovative solutions are designed to help you streamline your business operations.",
};

export default function privacyPolicy() {
  return (
    <>
      <PageTitle
        title="Privacy Policy"
        description="Learn about our commitment to protecting your personal information and how we handle data privacy."
      />
      <GridContainer>
        <div className="space-y-10">
          
          <div className="space-y-4">
            <h3 className="font-semibold">Last Updated Date: November 21, 2024</h3>
            <p className="text-gray-600">
              At Sahil, we are committed to protecting your privacy and ensuring that your personal information is handled with care. 
              Our platform connects businesses, suppliers, and couriers to create a seamless and efficient supply chain solution. 
            </p>
            <p className="text-gray-600">
              We are dedicated to maintaining transparency and providing you with control over your data. If you have any questions or 
              concerns, feel free to reach out to us at <a href="mailto:sahil.business@gmail.com" className="font-semibold">sahil.business@gmail.com</a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold md:text-2xl">What Information Do We Collect?</h2>
            <h3 className="text-lg font-semibold">A. Information You Provide Directly</h3>
            <p className="ms-4 text-gray-600">
              • <strong className="font-medium">Personal Information:</strong> Name, email address, phone number, and business details such as business name and address. <br />
              • <strong className="font-medium">Profile Information:</strong> Preferences, feedback, and details you include when setting up your account. <br />
              • <strong className="font-medium">Communication Details:</strong> Information you provide through customer support, surveys, or platform feedback.
            </p>
            <h3 className="text-lg font-semibold">B. Information from Third Parties</h3>
            <p className="ms-4 text-gray-600">
              • <strong className="font-medium">Partners:</strong> Suppliers, couriers, or third-party services integrated with Sahil. <br />
              • <strong className="font-medium">Analytics Providers:</strong> Tools like Google Analytics to monitor platform performance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold md:text-2xl">How We Use Your Information?</h2>
            <p className="ms-4 text-gray-600">
              • <strong className="font-medium">To Communicate with You:</strong> Send updates, respond to inquiries, and provide customer support. <br />
              • <strong className="font-medium">To Enhance User Experience:</strong> Analyze platform usage to improve functionality, features, and overall performance. <br />
              • <strong className="font-medium">To Ensure Security:</strong> Detect and prevent fraudulent activity or unauthorized access to our platform. <br />
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold md:text-2xl">What Are Your Privacy Rights?</h2>
            <h3 className="text-lg font-semibold">A. Access and Update Your Data</h3>
            <p className="ms-4 text-gray-600">
              • You can review and update your account details anytime by logging into the platform or contacting customer support.
            </p>
            <h3 className="text-lg font-semibold">B. Opt-Out of Communications</h3>
            <p className="ms-4 text-gray-600">
              • <strong className="font-medium">Marketing Emails:</strong> Unsubscribe using the link at the bottom of promotional emails. <br />
              • <strong className="font-medium">Cookies and Tracking:</strong> Adjust your browser settings to block cookies or use our cookie management tool.
            </p>
            <h3 className="text-lg font-semibold">C. Lodge a Complaint</h3>
            <p className="ms-4 text-gray-600">
              • If you believe your rights have been violated, you can file a complaint with your local data protection authority.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold md:text-2xl">How Do We Keep Your Information Safe?</h2>
            <h3 className="text-lg font-semibold">A. Encryption</h3>
            <p className="ms-4 text-gray-600">
              • All sensitive data is encrypted during storage and transmission using industry-standard encryption protocols.
            </p>
            <h3 className="text-lg font-semibold">B. Secure Access Controls</h3>
            <p className="ms-4 text-gray-600">
              • Access to your information is limited to authorized personnel and protected by multi-factor authentication.
            </p>
            <h3 className="text-lg font-semibold">C. Fraud Prevention Tools</h3>
            <p className="ms-4 text-gray-600">
              • Real-time monitoring systems detect and block suspicious activities, such as unauthorized login attempts or fraudulent transactions.
            </p>
            <h3 className="text-lg font-semibold">C. Data Backup and Recovery</h3>
            <p className="ms-4 text-gray-600">
              • Automated backups ensure that your information is not lost in case of system failures, and recovery procedures are in place to restore functionality quickly.
            </p>
          </div>

          <div className="py-8 p-8 text-center bg-gray-50 border rounded-lg md:py-16 md:p-16">
            &#34;Despite these efforts, no online platform is 100% secure. We encourage you to take precautions, such as using strong passwords and avoiding sharing sensitive information over insecure channels.&#34;
          </div>
        </div>
      </GridContainer>
    </>
  );
}
