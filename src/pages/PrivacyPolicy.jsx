import './PolicyPage.css'

function PrivacyPolicy() {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>DPDP Act, 2023 Compliant</p>
                </div>
            </div>

            <div className="policy-content">
                <div className="container">
                    <section className="policy-section intro">
                        <p className="intro-text">
                            <strong>EDUHOLIC EDTECH INDIA PRIVATE LIMITED</strong> ("Eduholic", "We", "Us") is committed to protecting
                            personal data in accordance with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong>.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>1. Data Fiduciary</h2>
                        <p>Eduholic acts as a Data Fiduciary and determines the purpose and means of processing personal data.</p>
                    </section>

                    <section className="policy-section">
                        <h2>2. Personal Data Collected</h2>
                        <ul>
                            <li>Name and contact details</li>
                            <li>Educational details</li>
                            <li>Payment-related information</li>
                            <li>IP address</li>
                            <li>Usage data</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>3. Purpose of Processing</h2>
                        <ul>
                            <li>Account creation</li>
                            <li>Service delivery</li>
                            <li>Payments</li>
                            <li>Communication</li>
                            <li>Marketing (with consent)</li>
                            <li>Analytics</li>
                            <li>Legal compliance</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>4. Consent</h2>
                        <p>Consent is obtained explicitly before collecting personal data and may be withdrawn at any time by contacting <a href="mailto:support@eduholic.info">support@eduholic.info</a>.</p>
                    </section>

                    <section className="policy-section">
                        <h2>5. Data Sharing</h2>
                        <p>Data may be shared with authorized processors such as:</p>
                        <ul>
                            <li>Payment gateways</li>
                            <li>Hosting providers</li>
                            <li>Legal authorities (where required by law)</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>6. Data Retention</h2>
                        <p>Personal data is retained only for the duration necessary for lawful purposes or as required by law.</p>
                    </section>

                    <section className="policy-section">
                        <h2>7. Data Principal Rights</h2>
                        <p>Under the DPDP Act, 2023, users may request:</p>
                        <ul>
                            <li>Access to personal data</li>
                            <li>Correction of personal data</li>
                            <li>Erasure of personal data</li>
                            <li>Grievance redressal</li>
                            <li>Nomination</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>8. Grievance Redressal</h2>
                        <div className="contact-info-box">
                            <p><strong>Grievance Officer:</strong> Eduholic Privacy Officer</p>
                            <p><strong>Email:</strong> <a href="mailto:support@eduholic.info">support@eduholic.info</a></p>
                            <p><strong>Response Time:</strong> Within 7 working days</p>
                        </div>
                    </section>

                    <section className="policy-section">
                        <h2>9. Security Safeguards</h2>
                        <p>Reasonable security practices are implemented to protect personal data against unauthorized access, alteration, disclosure, or destruction.</p>
                    </section>

                    <section className="policy-section">
                        <h2>10. Governing Law</h2>
                        <p>This Policy is governed by Indian laws with jurisdiction in <strong>Bengaluru, Karnataka</strong>.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
