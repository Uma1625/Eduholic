import './PolicyPage.css'

function PrivacyPolicy() {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: January 2024</p>
                </div>
            </div>

            <div className="policy-content">
                <div className="container">
                    <section className="policy-section">
                        <h2>1. Information We Collect</h2>
                        <p>
                            At Eduholic, we collect information you provide directly to us, such as when you create an account,
                            enroll in a program, contact us for support, or communicate with us through our website.
                        </p>
                        <ul>
                            <li>Personal information (name, email address, phone number)</li>
                            <li>Educational information (college name, course, year of study)</li>
                            <li>Payment information (processed securely through payment gateways)</li>
                            <li>Usage data and device information</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments, questions, and requests</li>
                            <li>Communicate with you about programs, promotions, and events</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal information to outside parties
                            without your consent, except as described in this policy or as required by law.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <ul>
                            <li>Email: support@acmegrade.com</li>
                            <li>Phone: +91 8884080003</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
