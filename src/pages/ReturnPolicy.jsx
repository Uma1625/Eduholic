import './PolicyPage.css'

function ReturnPolicy() {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <div className="container">
                    <h1>Return, Refund, Rescheduling & Course Change Policy</h1>
                </div>
            </div>

            <div className="policy-content">
                <div className="container">
                    <section className="policy-section intro">
                        <p className="intro-text">
                            This policy applies to all courses, programs, certifications, internships, and services purchased through
                            the payment pages of Eduholic and via the official website <a href="https://www.eduholic.in">www.eduholic.in</a>.
                        </p>
                        <p>
                            <strong>EDUHOLIC EDTECH INDIA PRIVATE LIMITED</strong> ("Eduholic", "Company", "We", "Us", "Our") provides
                            digital and blended learning services. Due to the nature of educational services and digital content delivery,
                            Eduholic follows a strict and well-defined policy regarding returns, refunds, course changes, and rescheduling.
                        </p>
                        <p className="agreement-notice">
                            By enrolling in any course or making a payment on Eduholic's Platform, you expressly acknowledge, understand,
                            and agree to be bound by this policy.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>1. No Return Policy (Digital Services)</h2>
                        <p>Eduholic offers non-tangible, irrevocable educational services, including but not limited to:</p>
                        <ul>
                            <li>Online and offline courses</li>
                            <li>Certification programs</li>
                            <li>Internship programs</li>
                            <li>Mentorship, training, and placement assistance services</li>
                        </ul>
                        <p>
                            Accordingly, <strong>no return, reversal, or cancellation</strong> of purchased services shall be permitted
                            once payment has been successfully completed, except as explicitly mentioned under the Refund section of this policy.
                        </p>
                        <p className="legal-note">
                            This policy is in accordance with the Consumer Protection (E-Commerce) Rules, 2020, which recognize
                            exceptions for digital and service-based products once delivery or access has commenced.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>2. Course Change Policy</h2>
                        <p>Eduholic permits a <strong>one-time course change</strong> under controlled conditions to ensure fairness and academic continuity.</p>

                        <h3>Eligibility Conditions</h3>
                        <p>A course change request shall be considered only if:</p>
                        <ul>
                            <li>The request is submitted in writing at least <strong>7 (seven) days prior</strong> to the commencement of the originally enrolled course</li>
                            <li>The alternative course has confirmed seat availability</li>
                            <li>The alternative course is scheduled to conclude within <strong>1 month</strong> of the original course's completion date</li>
                            <li>The request is the <strong>first and only</strong> course change during the entire program lifecycle</li>
                        </ul>

                        <h3>Financial Terms</h3>
                        <ul>
                            <li>If the alternative course is of <strong>higher value</strong>, the student must pay the difference in fees</li>
                            <li>If the alternative course is of <strong>lower value</strong>, no refund or credit of the difference shall be provided</li>
                            <li>A <strong>non-refundable administrative processing fee of ₹500</strong> must be paid within 3 calendar days of approval</li>
                            <li>Failure to complete payment within the stipulated time shall result in automatic cancellation of the request</li>
                        </ul>

                        <h3>Procedure for Course Change</h3>
                        <ol className="numbered-list">
                            <li>Email the request to <a href="mailto:learnersupport@eduholic.in">learnersupport@eduholic.in</a> with enrollment details</li>
                            <li>Upon provisional approval, submit the Course Change Form within 3 business days</li>
                            <li>Pay applicable fees and submit proof of payment</li>
                            <li>Final confirmation will be issued within 5–7 business days</li>
                        </ol>

                        <p className="legal-note">Eduholic reserves the right to reject requests that do not meet the above criteria.</p>
                    </section>

                    <section className="policy-section">
                        <h2>Contact Us</h2>
                        <div className="contact-info-box">
                            <p><strong>Email:</strong> <a href="mailto:learnersupport@eduholic.in">learnersupport@eduholic.in</a></p>
                            <p><strong>Website:</strong> <a href="https://www.eduholic.in">www.eduholic.in</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ReturnPolicy
