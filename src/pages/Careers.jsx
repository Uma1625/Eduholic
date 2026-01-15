import './Careers.css'

const careerPositions = [
    {
        id: 1,
        title: 'Campus Delegate',
        category: 'CAMPUS DELEGATE',
        description: 'Be the face of Acmegrade at your campus. Help fellow students discover internship opportunities and grow professionally.',
        email: 'careers@acmegrade.com',
        phone: '+91 8884922231',
        icon: '🎓'
    },
    {
        id: 2,
        title: 'Sales & Marketing',
        category: 'SALES & MARKETING',
        description: 'Drive growth through strategic marketing initiatives and build relationships with potential learners and partners.',
        email: 'careers@acmegrade.com',
        phone: '+91 8884080003',
        icon: '📈'
    },
    {
        id: 3,
        title: 'Human Resources',
        category: 'HUMAN RESOURCES',
        description: 'Shape our company culture and help us find the best talent to join the Acmegrade family.',
        email: 'careers@acmegrade.com',
        phone: '+91 8884080003',
        icon: '👥'
    },
    {
        id: 4,
        title: 'Operations',
        category: 'OPERATIONS',
        description: 'Ensure smooth delivery of our programs and maintain operational excellence across all processes.',
        email: 'careers@acmegrade.com',
        phone: '+91 8884080003',
        icon: '⚙️'
    },
    {
        id: 5,
        title: 'Collaborations',
        category: 'COLLABORATIONS',
        description: 'Build strategic partnerships with colleges, universities, and industry leaders to expand our reach.',
        email: 'collaborations@acmegrade.com',
        phone: '+91 8884972900',
        icon: '🤝'
    }
]

function Careers() {
    return (
        <div className="careers-page">
            {/* Hero Section */}
            <section className="careers-hero star-bg">
                <div className="container">
                    <div className="careers-hero-content" data-aos="fade-up">
                        <h1 className="careers-title">CAREERS</h1>
                        <p className="careers-subtitle">
                            Join our team and help shape the future of education
                        </p>
                    </div>
                </div>
            </section>

            {/* Positions Section */}
            <section className="positions-section">
                <div className="container">
                    <div className="positions-grid">
                        {careerPositions.map((position, idx) => (
                            <div
                                key={position.id}
                                className="position-card"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="position-header">
                                    <span className="position-icon">{position.icon}</span>
                                    <div className="position-category">{position.category}</div>
                                </div>
                                <h3 className="position-title">To Join our {position.title} team</h3>
                                <p className="position-description">{position.description}</p>
                                <div className="position-contact">
                                    <h4>Reach us through</h4>
                                    <a href={`mailto:${position.email}`} className="contact-link">
                                        <span className="contact-icon">✉️</span>
                                        {position.email}
                                    </a>
                                    <a href={`tel:${position.phone.replace(/\s/g, '')}`} className="contact-link">
                                        <span className="contact-icon">📞</span>
                                        {position.phone}
                                    </a>
                                </div>
                                <button className="btn btn-primary btn-apply">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="careers-cta section-dark star-bg">
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2>Don't see a position that fits?</h2>
                        <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities!</p>
                        <a href="mailto:careers@acmegrade.com" className="btn btn-primary">
                            Send Your Resume
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Careers
