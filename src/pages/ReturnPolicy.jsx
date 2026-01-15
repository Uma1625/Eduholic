import './PolicyPage.css'

function ReturnPolicy() {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <h1>Return Policy</h1>
                    <p>Last updated: January 2024</p>
                </div>
            </div>

            <div className="policy-content">
                <div className="container">
                    <section className="policy-section">
                        <h2>1. Refund Eligibility</h2>
                        <p>
                            At Acmegrade, we strive to provide the best learning experience. If you are not satisfied
                            with your program, you may be eligible for a refund under the following conditions:
                        </p>
                        <ul>
                            <li>Request made within 7 days of enrollment</li>
                            <li>Less than 20% of course content accessed</li>
                            <li>No certificates have been issued</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>2. Non-Refundable Items</h2>
                        <p>The following are not eligible for refunds:</p>
                        <ul>
                            <li>Programs purchased during promotional offers</li>
                            <li>Courses where more than 20% content has been accessed</li>
                            <li>Programs where certificates have been issued</li>
                            <li>Placement guarantee programs after onboarding</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>3. Refund Process</h2>
                        <p>To request a refund:</p>
                        <ul>
                            <li>Email us at support@acmegrade.com with your enrollment details</li>
                            <li>Include your reason for requesting a refund</li>
                            <li>Our team will review and respond within 3-5 business days</li>
                            <li>Approved refunds will be processed within 7-10 business days</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>4. Program Transfers</h2>
                        <p>
                            If you wish to transfer to a different program instead of a refund, please contact our
                            support team. Program transfers may be subject to price differences.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>5. Contact Us</h2>
                        <p>
                            For any questions regarding our Return Policy, please reach out to us:
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

export default ReturnPolicy
