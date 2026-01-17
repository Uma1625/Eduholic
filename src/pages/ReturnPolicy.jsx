import './PolicyPage.css'

function ReturnPolicy() {
    return (
        <div className="policy-page">
            <section className="policy-hero">
                <div className="container">
                    <h1 className="policy-title">Return, Refund, Rescheduling & Program Change Policy</h1>

                </div>
            </section>

            <section className="policy-content">
                <div className="container">
                    {/* Full-width intro box */}
                    <div className="policy-intro">
                        <p>
                            This policy applies to all courses, programs, certifications, internships, and services purchased through
                            the payment pages of Eduholic and via the official website <a href="https://www.eduholic.in">www.eduholic.in</a>.
                        </p>
                        <p>
                            <strong>EDUHOLIC EDTECH INDIA PRIVATE LIMITED</strong> ("Eduholic", "Company", "We", "Us", "Our")
                            provides digital and blended learning services. Due to the nature of educational services and digital content
                            delivery, Eduholic follows a strict and well-defined policy regarding returns, refunds, course changes, and
                            rescheduling.
                        </p>
                        <p>
                            By enrolling in any course or making a payment on Eduholic's Platform, you expressly acknowledge,
                            understand, and agree to be bound by this policy.
                        </p>
                    </div>

                    {/* 2-column grid for policy sections */}
                    <div className="policy-grid">

                        <div className="policy-item">
                            <h3>1. NO RETURN POLICY (DIGITAL SERVICES)</h3>
                            <p>Eduholic offers non-tangible, irrevocable educational services, including but not limited to:</p>
                            <ul>
                                <li>Online and offline courses</li>
                                <li>Certification programs</li>
                                <li>Internship programs</li>
                                <li>Mentorship, training, and placement assistance services</li>
                            </ul>
                            <p>Accordingly, no return, reversal, or cancellation of purchased services shall be permitted once payment has been successfully completed, except as explicitly mentioned under the Refund section of this policy.</p>
                            <p>This policy is in accordance with the Consumer Protection (E-Commerce) Rules, 2020, which recognize exceptions for digital and service-based products once delivery or access has commenced.</p>
                        </div>

                        <div className="policy-item">
                            <h3>2. PROGRAM CHANGE POLICY</h3>
                            <p>Eduholic permits a one-time program change under controlled conditions to ensure fairness and academic continuity.</p>
                            <p><strong>Eligibility Conditions:</strong></p>
                            <ul>
                                <li>The request is submitted in writing at least 7 (seven) days prior to the commencement of the originally enrolled course.</li>
                                <li>The alternative course has confirmed seat availability.</li>
                                <li>The alternative course is scheduled to conclude within 1 month of the original course's completion date.</li>
                                <li>The request is the first and only course change during the entire program lifecycle.</li>
                            </ul>
                            <p><strong>Financial Terms:</strong></p>
                            <ul>
                                <li>If the alternative course is of higher value, the student must pay the difference in fees.</li>
                                <li>If the alternative course is of lower value, no refund or credit of the difference shall be provided.</li>
                                <li>A non-refundable administrative processing fee of ₹500 must be paid within 3 calendar days of approval.</li>
                                <li>Failure to complete payment within the stipulated time shall result in automatic cancellation of the request.</li>
                            </ul>
                            <p><strong>Procedure for Course Change:</strong></p>
                            <ol>
                                <li>Email the request to learnersupport@eduholic.in with enrollment details</li>
                                <li>Upon provisional approval, submit the Course Change Form within 3 business days</li>
                                <li>Pay applicable fees and submit proof of payment</li>
                                <li>Final confirmation will be issued within 5–7 business days</li>
                            </ol>
                            <p>Eduholic reserves the right to reject requests that do not meet the above criteria.</p>
                        </div>

                        <div className="policy-item">
                            <h3>3. RESCHEDULING POLICY</h3>
                            <p><strong>A. Rescheduling Initiated by Eduholic</strong></p>
                            <p>If Eduholic is unable to commence a course within 30 business days of the published start date due to operational or academic reasons, the learner shall be entitled to choose either:</p>
                            <ul>
                                <li>A full refund of the course fee, OR</li>
                                <li>Transfer to a different batch or equivalent course</li>
                            </ul>
                            <p>If rescheduling occurs due to unforeseen circumstances such as instructor unavailability, technical failures, or force majeure events, Eduholic's liability shall be strictly limited to the course fee paid.</p>
                            <p><strong>Eduholic shall not be liable for any indirect or incidental expenses, including travel, accommodation, loss of opportunity, or personal costs.</strong></p>
                            <p><strong>B. Rescheduling Requested by the Learner</strong></p>
                            <p>Learners may request rescheduling subject to the following conditions:</p>
                            <ul>
                                <li>Request must be submitted at least 10 business days prior to course commencement</li>
                                <li>New batch must begin within 90 days of the original start date</li>
                                <li>Rescheduling does not permit course change</li>
                                <li>Subject to seat availability</li>
                                <li>A non-refundable rescheduling fee of ₹500 must be paid within 5 business days of approval</li>
                            </ul>
                            <p><strong>Fee Adjustments:</strong></p>
                            <ul>
                                <li>Higher-value batch → learner pays the difference</li>
                                <li>Lower-value batch → no refund of difference</li>
                                <li>Failure to pay within timelines results in automatic cancellation of the request</li>
                            </ul>
                            <p><strong>Rescheduling Process:</strong></p>
                            <ol>
                                <li>Email request to learnersupport@eduholic.in</li>
                                <li>Submit Reschedule Course Form within 3 business days</li>
                                <li>Pay applicable fees and submit proof</li>
                                <li>Confirmation issued within 5–7 business days</li>
                            </ol>
                        </div>

                        <div className="policy-item">
                            <h3>4. CANCELLATION OR MODIFICATION BY EDUHOLIC</h3>
                            <p>Eduholic reserves the right to cancel, postpone, or modify any course, batch, instructor, or delivery mode due to:</p>
                            <ul>
                                <li>Insufficient enrollments</li>
                                <li>Instructor unavailability</li>
                                <li>Technical or operational constraints</li>
                                <li>Force majeure events including natural disasters, strikes, government actions, civil unrest, pandemics, or other uncontrollable events</li>
                            </ul>
                            <p>Such decisions shall not constitute a breach of contract.</p>
                        </div>

                        <div className="policy-item">
                            <h3>5. REFUND POLICY</h3>
                            <p>Refunds shall be considered only in the following limited circumstance:</p>
                            <ul>
                                <li>Eduholic fails to deliver the enrolled course within 30 days from the officially announced commencement date</li>
                            </ul>
                            <p>No refund shall be provided under any other condition, including:</p>
                            <ul>
                                <li>Change of mind</li>
                                <li>Partial attendance</li>
                                <li>Dissatisfaction with course content</li>
                                <li>Non-usage of course access</li>
                                <li>Failure to attend sessions</li>
                            </ul>
                            <p>All refund decisions shall be at the sole discretion of Eduholic and subject to verification and statutory deductions.</p>
                        </div>

                        <div className="policy-item">
                            <h3>6. MODE & TIMELINE OF REFUNDS</h3>
                            <p>Approved refunds shall be processed only through the original payment method:</p>
                            <ul>
                                <li>Card payments → refunded to the same card (may take up to 30 days depending on bank)</li>
                                <li>UPI / Net banking → refunded to the same account</li>
                                <li>Payment gateways → refunded to original source</li>
                            </ul>
                            <p><strong>Cash refunds are not permitted under any circumstances.</strong></p>
                        </div>

                        <div className="policy-item">
                            <h3>7. LIMITATION OF LIABILITY</h3>
                            <p>Eduholic's maximum liability, under any circumstance, shall not exceed the amount paid by the learner for the specific course or service.</p>
                            <p>Eduholic shall not be liable for indirect, incidental, consequential, or punitive damages.</p>
                        </div>

                        <div className="policy-item">
                            <h3>8. GOVERNING LAW & JURISDICTION</h3>
                            <p>This policy shall be governed by and construed in accordance with the laws of India.</p>
                            <p>Courts located in <strong>HYDERABAD-TELANGANA, PALAKONDA-ANDHRA PRADESH</strong> shall have exclusive jurisdiction.</p>
                        </div>

                        <div className="policy-item full-width">
                            <h3>9. CONTACT & GRIEVANCE REDRESSAL</h3>
                            <p>For any questions, clarifications, or grievances related to this policy, please contact:</p>
                            <p><a href="mailto:learnersupport@eduholic.in">learnersupport@eduholic.in</a></p>
                            <p><a href="https://www.eduholic.in">https://www.eduholic.in</a></p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReturnPolicy
