import './PolicyPage.css'

function PrivacyPolicy() {
    return (
        <div className="policy-page">
            <section className="policy-hero">
                <div className="container">
                    <h1 className="policy-title">Privacy Policy</h1>
                    <p className="policy-subtitle">DPDP Act, 2023 Compliant</p>
                </div>
            </section>

            <section className="policy-content">
                <div className="container">
                    {/* Centered Eduholic Title */}
                    <div className="policy-intro text-center">
                        <h2 className="eduholic-title">EDUHOLIC EDTECH INDIA PRIVATE LIMITED</h2>
                        <p>
                            ("Eduholic", "We", "Us") is committed to protecting personal data in accordance with the Digital Personal Data Protection Act, 2023 (India).
                        </p>
                    </div>

                    {/* Points in 2-column rows */}
                    <div className="policy-grid">
                        {/* Row 1 */}
                        <div className="policy-item">
                            <h3>1. DATA FIDUCIARY</h3>
                            <p>Eduholic acts as a Data Fiduciary and determines the purpose and means of processing personal data.</p>
                        </div>
                        <div className="policy-item">
                            <h3>2. PERSONAL DATA COLLECTED</h3>
                            <p>Name, contact details, educational details, payment-related information, IP address, and usage data.</p>
                        </div>

                        {/* Row 2 */}
                        <div className="policy-item">
                            <h3>3. PURPOSE OF PROCESSING</h3>
                            <p>Account creation, service delivery, payments, communication, marketing (with consent), analytics, and legal compliance.</p>
                        </div>
                        <div className="policy-item">
                            <h3>4. CONSENT</h3>
                            <p>Consent is obtained explicitly before collecting personal data and may be withdrawn at any time by contacting support@eduholic.info.</p>
                        </div>

                        {/* Row 3 */}
                        <div className="policy-item">
                            <h3>5. DATA SHARING</h3>
                            <p>Data may be shared with authorized processors such as payment gateways, hosting providers, and legal authorities where required.</p>
                        </div>
                        <div className="policy-item">
                            <h3>6. DATA RETENTION</h3>
                            <p>Personal data is retained only for the duration necessary for lawful purposes or as required by law.</p>
                        </div>

                        {/* Row 4 */}
                        <div className="policy-item">
                            <h3>7. DATA PRINCIPAL RIGHTS</h3>
                            <p>Users may request access, correction, erasure, grievance redressal, or nomination under DPDP Act, 2023.</p>
                        </div>
                        <div className="policy-item">
                            <h3>8. GRIEVANCE REDRESSAL</h3>
                            <p>
                                Grievance Officer: Eduholic Privacy Officer<br />
                                Email: support@eduholic.info<br />
                                Response Time: Within 7 working days.
                            </p>
                        </div>

                        {/* Row 5 */}
                        <div className="policy-item">
                            <h3>9. SECURITY SAFEGUARDS</h3>
                            <p>Reasonable security practices are implemented to protect personal data.</p>
                        </div>
                        <div className="policy-item">
                            <h3>10. GOVERNING LAW</h3>
                            <p>This Policy is governed by Indian laws with jurisdiction in Bengaluru, Karnataka.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
