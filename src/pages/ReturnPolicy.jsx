import { useState } from 'react'
import './PolicyPage.css'

function ReturnPolicy() {
    const [openSection, setOpenSection] = useState(null)

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section)
    }

    return (
        <div className="policy-page">
            <div className="policy-hero compact">
                <div className="container">
                    <h1>Return, Refund & Course Change Policy</h1>
                </div>
            </div>

            <div className="policy-content compact">
                <div className="container">
                    <p className="policy-intro">
                        This policy applies to all courses, programs, and services purchased through
                        <strong> EDUHOLIC EDTECH INDIA PRIVATE LIMITED</strong> via <a href="https://www.eduholic.in">www.eduholic.in</a>.
                    </p>

                    <div className="accordion-container">
                        {/* Section 1 */}
                        <div className={`accordion-item ${openSection === 1 ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={() => toggleSection(1)}>
                                <span>1. No Return Policy (Digital Services)</span>
                                <span className="accordion-icon">{openSection === 1 ? '−' : '+'}</span>
                            </div>
                            {openSection === 1 && (
                                <div className="accordion-content">
                                    <p>Eduholic offers non-tangible educational services including online/offline courses, certifications, internships, and mentorship.</p>
                                    <p><strong>No return, reversal, or cancellation</strong> is permitted once payment is completed, except as stated in this policy.</p>
                                </div>
                            )}
                        </div>

                        {/* Section 2 */}
                        <div className={`accordion-item ${openSection === 2 ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={() => toggleSection(2)}>
                                <span>2. Course Change Policy</span>
                                <span className="accordion-icon">{openSection === 2 ? '−' : '+'}</span>
                            </div>
                            {openSection === 2 && (
                                <div className="accordion-content">
                                    <p><strong>Eligibility:</strong></p>
                                    <ul>
                                        <li>Request 7 days before course starts</li>
                                        <li>Alternative course has seat availability</li>
                                        <li>One-time change only</li>
                                    </ul>
                                    <p><strong>Financial Terms:</strong></p>
                                    <ul>
                                        <li>Higher value course: Pay difference</li>
                                        <li>Lower value course: No refund</li>
                                        <li>₹500 admin fee (non-refundable)</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Section 3 */}
                        <div className={`accordion-item ${openSection === 3 ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={() => toggleSection(3)}>
                                <span>3. How to Request Course Change</span>
                                <span className="accordion-icon">{openSection === 3 ? '−' : '+'}</span>
                            </div>
                            {openSection === 3 && (
                                <div className="accordion-content">
                                    <ol>
                                        <li>Email <a href="mailto:learnersupport@eduholic.in">learnersupport@eduholic.in</a></li>
                                        <li>Submit Course Change Form (within 3 days)</li>
                                        <li>Pay applicable fees</li>
                                        <li>Get confirmation (5-7 business days)</li>
                                    </ol>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="policy-contact-box">
                        <strong>Contact:</strong> <a href="mailto:learnersupport@eduholic.in">learnersupport@eduholic.in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnPolicy
