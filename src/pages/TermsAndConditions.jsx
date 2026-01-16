import './PolicyPage.css'

function TermsAndConditions() {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <h1>Terms & Conditions</h1>
                    <p>Last updated: January 2024</p>
                </div>
            </div>

            <div className="policy-content">
                <div className="container">
                    <section className="policy-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Eduholic's website and services, you accept and agree to be bound
                            by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>2. Services</h2>
                        <p>
                            Eduholic provides online training programs, internships, and placement assistance services.
                            We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>3. Registration and Account</h2>
                        <p>To access certain services, you may need to register for an account. You agree to:</p>
                        <ul>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Accept responsibility for all activities under your account</li>
                            <li>Notify us immediately of any unauthorized use</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>4. Payment Terms</h2>
                        <p>
                            All fees for our programs are due at the time of enrollment unless otherwise specified.
                            We accept payments through secure payment gateways. Prices are subject to change.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>5. Intellectual Property</h2>
                        <p>
                            All content, materials, and resources provided by Eduholic are protected by intellectual
                            property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>6. Limitation of Liability</h2>
                        <p>
                            Eduholic shall not be liable for any indirect, incidental, special, or consequential damages
                            arising from your use of our services.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>7. Contact</h2>
                        <p>
                            For questions regarding these Terms & Conditions, contact us at:
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

export default TermsAndConditions
