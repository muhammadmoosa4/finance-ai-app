const TermsAndConditions = () => {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg m-8 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
  
        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p>These Terms and Conditions govern your use of our AI-powered finance management services. By accessing our platform, you agree to abide by these terms.</p>
          </section>
  
          {/* Use of Services */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Use of Services</h2>
            <ul className="list-disc pl-5">
              <li>Our platform provides financial tracking, budgeting, and analytical tools for personal and business use.</li>
              <li>You must be at least <strong>18 years old</strong> to use our services.</li>
              <li>You agree to provide <strong>accurate and up-to-date information</strong> while using our platform.</li>
              <li><strong>Unauthorized use</strong> of our platform, including hacking or data breaches, is strictly prohibited.</li>
            </ul>
          </section>
  
          {/* Account Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Account Security</h2>
            <ul className="list-disc pl-5">
              <li>You are responsible for maintaining the <strong>confidentiality</strong> of your account credentials.</li>
              <li>Notify us immediately if you suspect <strong>unauthorized access</strong> to your account.</li>
              <li>We are not responsible for any losses arising from unauthorized access due to <strong>user negligence</strong>.</li>
            </ul>
          </section>
  
          {/* Payments and Subscription */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Payments and Subscription</h2>
            <ul className="list-disc pl-5">
              <li>Certain features may require a <strong>subscription</strong> or <strong>one-time payment</strong>.</li>
              <li>Payments are processed through <strong>secure third-party providers</strong>.</li>
              <li>Subscription fees are <strong>billed on a recurring basis</strong> unless canceled before the renewal date.</li>
            </ul>
          </section>
  
          {/* Data Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Data Privacy</h2>
            <ul className="list-disc pl-5">
              <li>We prioritize the <strong>security and privacy</strong> of your data.</li>
              <li>We <strong>do not sell or share</strong> your personal data with third parties for marketing purposes.</li>
            </ul>
          </section>
  
          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Limitation of Liability</h2>
            <ul className="list-disc pl-5">
              <li>We provide <strong>financial insights and tools</strong>, but we do not offer professional <strong>financial or investment advice</strong>.</li>
              <li>Users are responsible for their <strong>financial decisions</strong> based on our platform's insights.</li>
              <li>We are <strong>not liable</strong> for any losses or damages resulting from your use of our services.</li>
            </ul>
          </section>
  
          {/* Termination of Services */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Termination of Services</h2>
            <ul className="list-disc pl-5">
              <li>We reserve the right to <strong>suspend or terminate</strong> accounts that violate these terms.</li>
              <li>Users may <strong>deactivate</strong> their accounts at any time through the platform settings.</li>
            </ul>
          </section>
  
          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Changes to Terms</h2>
            <p>We may <strong>update these Terms and Conditions</strong> periodically. Continued use of our services after updates <strong>constitutes acceptance</strong> of the revised terms.</p>
          </section>
        </div>
      </div>
    );
  };
  
  export default TermsAndConditions;
  