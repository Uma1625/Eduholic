import { useState } from 'react'
import './PolicyPage.css'

function TermsAndConditions() {
    const [openSection, setOpenSection] = useState(null)

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section)
    }

    const sections = [
        { id: 1, title: 'Electronic Record & Legal Compliance', content: 'This is an electronic record under IT Act, 2000. No physical signature required.' },
        { id: 2, title: 'Company Details', content: 'EDUHOLIC EDTECH INDIA PRIVATE LIMITED, incorporated under Companies Act, 2013, India.' },
        { id: 3, title: 'Definitions', content: '"Website" = www.eduholic.in | "Services" = courses, certifications, internships | "User" = any person using the platform.' },
        { id: 4, title: 'Acceptance of Terms', content: 'Using this Website means you accept these Terms. If you disagree, stop using the Website.' },
        { id: 5, title: 'Modification of Terms', content: 'We may update these Terms anytime. Continued use = acceptance of changes.' },
        { id: 6, title: 'Eligibility & Registration', content: 'Users under 18 need parent consent. Keep login credentials confidential.' },
        { id: 7, title: 'Courses & Pricing', content: 'Prices may change without notice. Access granted after payment confirmation.' },
        { id: 8, title: 'Payments', content: 'Payments via authorized gateways. We don\'t store card details.' },
        { id: 9, title: 'Refunds & Returns', content: 'Governed by our separate Return & Refund Policy.' },
        { id: 10, title: 'Intellectual Property', content: 'All content is owned by Eduholic. No copying/distribution without permission.' },
        { id: 11, title: 'User Conduct', content: 'No unlawful use, hacking, spamming, or harmful activities allowed.' },
        { id: 12, title: 'Data Protection', content: 'Personal data processed per Privacy Policy and DPDP Act, 2023.' },
        { id: 13, title: 'Security', content: 'Unauthorized access is prohibited. Violations = civil/criminal liability.' },
        { id: 14, title: 'Termination', content: 'We may suspend accounts for Terms violation or harmful conduct.' },
        { id: 15, title: 'Disclaimer', content: 'Services provided "as is". No guarantee of uninterrupted access.' },
        { id: 16, title: 'Limitation of Liability', content: 'Max liability = amount paid for specific service.' },
        { id: 17, title: 'Indemnity', content: 'Users indemnify Eduholic from claims arising from misuse.' },
        { id: 18, title: 'Third-Party Links', content: 'We\'re not responsible for external websites.' },
        { id: 19, title: 'Electronic Communications', content: 'You consent to receiving communications electronically.' },
        { id: 20, title: 'Force Majeure', content: 'Not liable for delays due to events beyond control.' },
        { id: 21, title: 'Governing Law', content: 'Indian laws apply. Jurisdiction: Hyderabad, Telangana.' },
        { id: 22, title: 'Severability', content: 'Invalid provisions don\'t affect remaining Terms.' },
        { id: 23, title: 'Entire Agreement', content: 'These Terms + policies = complete agreement.' },
        { id: 24, title: 'Contact', content: 'Email: support@eduholic.info | Website: www.eduholic.in' }
    ]

    return (
        <div className="policy-page">
            <div className="policy-hero compact">
                <div className="container">
                    <h1>Terms & Conditions</h1>
                </div>
            </div>

            <div className="policy-content compact">
                <div className="container">
                    <p className="policy-intro">
                        By using <a href="https://www.eduholic.in">www.eduholic.in</a>, you agree to these Terms,
                        our Privacy Policy, and Refund Policy. Click any section below to expand.
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

export default TermsAndConditions
