const PrivacyPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg m-8 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
  
        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our AI-powered finance management services.</p>
          </section>
  
          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
            <ul className="list-disc pl-5">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
              <li><strong>Financial Information:</strong> Account details, transaction history, budgets, and spending habits.</li>
              <li><strong>Device and Usage Data:</strong> IP address, browser type, operating system, and usage patterns.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience and improve our services.</li>
            </ul>
          </section>
  
          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5">
              <li>Provide and improve our financial management services.</li>
              <li>Offer AI-powered insights and personalized recommendations.</li>
              <li>Process transactions and send notifications.</li>
              <li>Enhance security and prevent fraudulent activities.</li>
              <li>Communicate with you regarding updates, promotions, and support.</li>
            </ul>
          </section>
  
          {/* Data Sharing and Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Data Sharing and Security</h2>
            <ul className="list-disc pl-5">
              <li>We do <strong>not</strong> sell or share your personal data with third parties for marketing purposes.</li>
              <li>We implement <strong>strict security measures</strong> to protect your data from unauthorized access.</li>
              <li>Third-party service providers (e.g., payment processors) may access data as necessary for service fulfillment.</li>
            </ul>
          </section>
  
          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Your Rights and Choices</h2>
            <ul className="list-disc pl-5">
              <li>Access, update, or delete your personal data.</li>
              <li>Opt-out of promotional emails and marketing communications.</li>
              <li>Request data portability or restriction of processing.</li>
              <li>Manage cookie preferences through your browser settings.</li>
            </ul>
          </section>
  
          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Data Retention</h2>
            <p>We retain your data as long as necessary for service provision and compliance with legal obligations. Once no longer needed, we securely delete or anonymize your information.</p>
          </section>
  
          {/* Third-Party Links */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Third-Party Links</h2>
            <p>Our platform may contain links to third-party websites. We are not responsible for their privacy policies and encourage users to review them separately.</p>
          </section>
  
          {/* Changes to This Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.</p>
            <p>By using our services, you agree to the terms outlined in this Privacy Policy.</p>
          </section>
        </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  