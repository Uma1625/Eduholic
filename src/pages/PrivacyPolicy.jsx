import { useState } from 'react'
import './PolicyPage.css'

function PrivacyPolicy() {
    const [openSection, setOpenSection] = useState(null)

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section)
    }

    const sections = [
        { id: 1, title: 'Data Fiduciary', content: 'Eduholic acts as a Data Fiduciary and determines the purpose and means of processing personal data.' },
        { id: 2, title: 'Personal Data Collected', content: 'Name, contact details, educational details, payment-related information, IP address, and usage data.' },
        { id: 3, title: 'Purpose of Processing', content: 'Account creation, service delivery, payments, communication, marketing (with consent), analytics, and legal compliance.' },
        { id: 4, title: 'Consent', content: 'Consent is obtained explicitly before collecting personal data and may be withdrawn at any time by contacting support@eduholic.info.' },
        { id: 5, title: 'Data Sharing', content: 'Data may be shared with authorized processors such as payment gateways, hosting providers, and legal authorities where required.' },
        { id: 6, title: 'Data Retention', content: 'Personal data is retained only for the duration necessary for lawful purposes or as required by law.' },
        { id: 7, title: 'Data Principal Rights', content: 'Users may request access, correction, erasure, grievance redressal, or nomination under DPDP Act, 2023.' },
        { id: 8, title: 'Grievance Redressal', content: 'Grievance Officer: Eduholic Privacy Officer | Email: support@eduholic.info | Response Time: Within 7 working days.' },
        { id: 9, title: 'Security Safeguards', content: 'Reasonable security practices are implemented to protect personal data.' },
        { id: 10, title: 'Governing Law', content: 'This Policy is governed by Indian laws with jurisdiction in Bengaluru, Karnataka.' }
    ]

    return (
        <div className="policy-page">
            <div className="policy-hero compact">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>DPDP Act, 2023 Compliant</p>
                </div>
            </div>

            <div className="policy-content compact">
                <div className="container">
                    <p className="policy-intro">
                        <strong>EDUHOLIC EDTECH INDIA PRIVATE LIMITED</strong> is committed to protecting personal data
                        in accordance with the Digital Personal Data Protection Act, 2023 (India).
                    </p>

                    <div className="accordion-container">
                        {sections.map((section) => (
                            <div key={section.id} className={`accordion-item ${openSection === section.id ? 'open' : ''}`}>
                                <div className="accordion-header" onClick={() => toggleSection(section.id)}>
                                    <span>{section.id}. {section.title}</span>
                                    <span className="accordion-icon">{openSection === section.id ? '−' : '+'}</span>
                                </div>
                                {openSection === section.id && (
                                    <div className="accordion-content">
                                        <p>{section.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
