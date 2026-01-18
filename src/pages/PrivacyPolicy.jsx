import './PolicyPage.css'

function PrivacyPolicy() {
    return (
        <div className="policy-page">
            <section className="policy-hero">
                <div className="container">
                    <h1 className="policy-title">Privacy Policy</h1>

                </div>
            </section>

            <section className="policy-content">
                <div className="container">
                    {/* Centered Eduholic Title */}
                    <div className="policy-intro text-center">
                        <h2 className="eduholic-title">EDUHOLIC EDTECH INDIA PRIVATE LIMITED</h2>
                        <p>
                            Thank you for choosing to be part of our community at EDUHOLIC EDTECH INDIA PRIVATE LIMITED
                            ("Company," "We," "Us," "Eduholic," or "Our"). We are committed to protecting your personal information
                            and your right to privacy.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at{' '}
                            <a href="mailto:support@eduholic.info" style={{ color: '#667eea' }}>support@eduholic.info</a>.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you:
                        </p>
                        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '15px auto' }}>
                            <li>Visit our website at <a href="https://www.eduholic.in" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>https://www.eduholic.in</a></li>
                            <li>Engage with us through sales, marketing, training programs, certifications, events, or other related services</li>
                        </ul>
                        <p>
                            If you do not agree with the terms of this Privacy Policy, please discontinue use of our Platform and Services immediately.
                        </p>
                    </div>

                    {/* Points in 2-column rows */}
                    <div className="policy-grid">
                        {/* 1. DEFINITIONS */}
                        <div className="policy-item">
                            <h3>1. DEFINITIONS</h3>
                            <ul>
                                <li><strong>"Website"</strong> refers to any website owned or operated by Eduholic that links to this Privacy Policy.</li>
                                <li><strong>"Platform"</strong> refers to the website/domain and related digital infrastructure created by the Company to deliver services.</li>
                                <li><strong>"Services"</strong> refer to all offerings including online/offline courses, certifications, training programs, internships, marketing activities, and events.</li>
                                <li><strong>"User" / "You" / "Your"</strong> means any individual or legal entity accessing or using the Platform.</li>
                                <li><strong>"Third Parties"</strong> mean any entity other than the User and Eduholic.</li>
                            </ul>
                        </div>

                        {/* 2. APPLICABILITY */}
                        <div className="policy-item">
                            <h3>2. APPLICABILITY</h3>
                            <p>
                                This Privacy Policy applies to all information collected from Users while accessing or using our Website,
                                Platform, or Services, whether online or offline.
                            </p>
                            <p>
                                By accessing the Platform or providing your information, you expressly consent to this Privacy Policy, the
                                Terms of Use, and applicable service terms, governed by the laws of India.
                            </p>
                        </div>

                        {/* 3. INFORMATION WE COLLECT */}
                        <div className="policy-item">
                            <h3>3. INFORMATION WE COLLECT</h3>
                            <p><strong>3.1 Personal Information</strong></p>
                            <p>We collect personal information voluntarily provided by you, including but not limited to:</p>
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Mobile number</li>
                                <li>Institution / Organization</li>
                                <li>Age</li>
                                <li>Address</li>
                                <li>Login credentials (passwords are encrypted)</li>
                            </ul>
                            <p><strong>3.2 Payment Information</strong></p>
                            <p>If you make a purchase, we may collect payment-related details necessary to process transactions. Eduholic does not store credit/debit card details. Payments are processed through secure third-party payment gateways.</p>
                            <p><strong>3.3 Communications & Interactions</strong></p>
                            <p>We may collect information when you:</p>
                            <ul>
                                <li>Contact us via email, phone, or messaging platforms</li>
                                <li>Participate in surveys, feedback forms, or discussions</li>
                                <li>Post comments, messages, or testimonials</li>
                            </ul>
                            <p><strong>3.4 Information from Other Sources</strong></p>
                            <p>We may receive information from:</p>
                            <ul>
                                <li>Public databases</li>
                                <li>Marketing partners</li>
                                <li>Affiliate programs</li>
                                <li>Social media platforms</li>
                            </ul>
                            <p>This information may include IP address, job titles, social media handles, and engagement data.</p>
                        </div>

                        {/* 4. HOW WE USE YOUR INFORMATION */}
                        <div className="policy-item">
                            <h3>4. HOW WE USE YOUR INFORMATION</h3>
                            <p>We use the collected information to:</p>
                            <ul>
                                <li>Create and manage user accounts</li>
                                <li>Provide and improve our Services</li>
                                <li>Process payments and confirmations</li>
                                <li>Communicate updates, offers, and service information</li>
                                <li>Send marketing and promotional communications (with opt-out options)</li>
                                <li>Deliver targeted advertisements</li>
                                <li>Conduct research, analytics, and internal audits</li>
                                <li>Comply with legal and regulatory obligations</li>
                                <li>Prevent fraud, abuse, and unauthorized access</li>
                            </ul>
                        </div>

                        {/* 5. SHARING OF INFORMATION */}
                        <div className="policy-item">
                            <h3>5. SHARING OF INFORMATION</h3>
                            <p>We do not sell, rent, or trade your personal information.</p>
                            <p>We may share information with:</p>
                            <ul>
                                <li>Service providers (payment gateways, hosting providers, analytics tools)</li>
                                <li>Legal and regulatory authorities when required by law</li>
                                <li>Affiliates and partners (only with prior consent)</li>
                            </ul>
                            <p>All third parties are contractually bound to protect your data.</p>
                        </div>

                        {/* 6. COOKIES & TRACKING TECHNOLOGIES */}
                        <div className="policy-item">
                            <h3>6. COOKIES & TRACKING TECHNOLOGIES</h3>
                            <p>Eduholic uses cookies and similar technologies to:</p>
                            <ul>
                                <li>Improve website functionality</li>
                                <li>Analyze user behavior</li>
                                <li>Enhance security and performance</li>
                            </ul>
                            <p>You may disable cookies via browser settings, but some features may not function properly.</p>
                        </div>

                        {/* 7. DATA RETENTION */}
                        <div className="policy-item">
                            <h3>7. DATA RETENTION</h3>
                            <p>We retain personal information only as long as necessary to:</p>
                            <ul>
                                <li>Fulfill the purposes outlined in this Policy</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                            <p>Data may be anonymized and retained for research and analytics.</p>
                        </div>

                        {/* 8. YOUR RIGHTS & CHOICES */}
                        <div className="policy-item">
                            <h3>8. YOUR RIGHTS & CHOICES</h3>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access, update, or correct your information</li>
                                <li>Withdraw consent</li>
                                <li>Request data deletion or download</li>
                                <li>Opt out of marketing communications</li>
                            </ul>
                            <p>Requests can be sent to <a href="mailto:support@eduholic.info" style={{ color: '#667eea' }}>support@eduholic.info</a>.</p>
                        </div>

                        {/* 9. THIRD-PARTY LINKS */}
                        <div className="policy-item">
                            <h3>9. THIRD-PARTY LINKS</h3>
                            <p>Our Platform may contain links to third-party websites. Eduholic is not responsible for the privacy practices or content of such websites.</p>
                        </div>

                        {/* 10. SECURITY MEASURES */}
                        <div className="policy-item">
                            <h3>10. SECURITY MEASURES</h3>
                            <p>We implement reasonable technical and organizational safeguards to protect your data. However, no system is 100% secure, and data transmission is at your own risk.</p>
                        </div>

                        {/* 11. CHILDREN'S PRIVACY */}
                        <div className="policy-item">
                            <h3>11. CHILDREN'S PRIVACY</h3>
                            <p>Eduholic does not knowingly collect data from individuals under 18 years of age. Minors may use the Platform only under parental or guardian supervision.</p>
                        </div>

                        {/* 12. GOVERNING LAW & JURISDICTION */}
                        <div className="policy-item">
                            <h3>12. GOVERNING LAW & JURISDICTION</h3>
                            <p>This Privacy Policy shall be governed by the laws of India.</p>
                            <p>Courts located in HYDERABAD-TELANGANA, PALAKONDA-ANDHRA PRADESH, shall have exclusive jurisdiction.</p>
                        </div>

                        {/* 13. CHANGES TO THIS POLICY */}
                        <div className="policy-item">
                            <h3>13. CHANGES TO THIS POLICY</h3>
                            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date.</p>
                        </div>

                        {/* 14. CONSENT WITHDRAWAL & DATA REQUESTS */}
                        <div className="policy-item">
                            <h3>14. CONSENT WITHDRAWAL & DATA REQUESTS</h3>
                            <p>To withdraw consent or request data access/deletion, email us at:</p>
                            <p><a href="mailto:support@eduholic.info" style={{ color: '#667eea' }}>support@eduholic.info</a></p>
                        </div>

                        {/* 15. CONTACT DETAILS - Full width */}
                        <div className="policy-item" style={{ gridColumn: '1 / -1' }}>
                            <h3>15. CONTACT DETAILS</h3>
                            <p><strong>EDUHOLIC EDTECH INDIA PRIVATE LIMITED</strong></p>
                            <p>Email: <a href="mailto:support@eduholic.info" style={{ color: '#667eea' }}>support@eduholic.info</a></p>
                            <p>Website: <a href="https://www.eduholic.in" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>https://www.eduholic.in</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
