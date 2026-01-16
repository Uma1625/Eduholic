import { useState } from 'react'
import { Link } from 'react-router-dom'
import { alumniCompanies } from '../data/programsData'
import './ProgramPage.css'

function ProgramPage({ program }) {
    const [openOverview, setOpenOverview] = useState(0)
    const [openCurriculum, setOpenCurriculum] = useState(null)
    const [openFaq, setOpenFaq] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        institute: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your interest! Our team will contact you shortly.')
        setFormData({ name: '', phone: '', email: '', institute: '' })
    }

    return (
        <div className="program-page">
            {/* Hero Section */}
            <section
                className="program-hero"
                style={{ background: program.gradient }}
            >
                <div className="container">
                    <div className="hero-content">
                        <div className="program-icon-large">{program.icon}</div>
                        <h1 className="program-title">{program.title} Training</h1>
                        <p className="program-category">{program.category}</p>
                    </div>
                    <div className="program-stats">
                        <div className="stat-card">
                            <span className="stat-value">{program.stats.duration}</span>
                            <span className="stat-label">Duration</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-value">{program.stats.hours}</span>
                            <span className="stat-label">Training Hours</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-value">{program.stats.students}</span>
                            <span className="stat-label">Students</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-value">{program.stats.experts}</span>
                            <span className="stat-label">Experts</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-value">{program.stats.interaction}</span>
                            <span className="stat-label">Interaction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Acmegrade Section */}
            <section className="why-section">
                <div className="container">
                    <h2 className="section-title">Why <span className="text-gradient">Eduholic?</span></h2>
                    <div className="why-cards">
                        <div className="why-card">
                            <div className="why-icon">🎓</div>
                            <h3>Professional Certifications</h3>
                            <p>Get industry-recognized certificates on completion</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">💼</div>
                            <h3>Placement Support</h3>
                            <p>Dedicated placement assistance for all students</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">👨‍🏫</div>
                            <h3>Expert Mentors</h3>
                            <p>Learn from industry professionals</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">🚀</div>
                            <h3>Real Projects</h3>
                            <p>Work on industry-relevant projects</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="overview-section">
                <div className="container">
                    <h2 className="section-title">Overview of the <span className="text-gradient">Program</span></h2>
                    <div className="overview-accordion">
                        {program.overview.map((item, idx) => (
                            <div
                                key={idx}
                                className={`accordion-item ${openOverview === idx ? 'active' : ''}`}
                            >
                                <button
                                    className="accordion-header"
                                    onClick={() => setOpenOverview(openOverview === idx ? null : idx)}
                                >
                                    <span className="accordion-number">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="accordion-question">{item.question}</span>
                                    <span className="accordion-icon">{openOverview === idx ? '−' : '+'}</span>
                                </button>
                                <div className="accordion-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="curriculum-section">
                <div className="container">
                    <h2 className="section-title"><span className="text-gradient">Curriculum</span></h2>
                    <div className="curriculum-grid">
                        {program.curriculum.map((module, idx) => (
                            <div
                                key={idx}
                                className={`curriculum-card ${openCurriculum === idx ? 'expanded' : ''}`}
                            >
                                <button
                                    className="curriculum-header"
                                    onClick={() => setOpenCurriculum(openCurriculum === idx ? null : idx)}
                                >
                                    <span className="module-number">{idx + 1}</span>
                                    <span className="module-title">{module.module}</span>
                                    <span className="module-icon">{openCurriculum === idx ? '▲' : '▼'}</span>
                                </button>
                                <div className="curriculum-content">
                                    <ul>
                                        {module.topics.map((topic, tidx) => (
                                            <li key={tidx}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <h2 className="section-title"><span className="text-gradient">Projects</span></h2>
                    <div className="projects-grid">
                        {program.projects.map((project, idx) => (
                            <div key={idx} className="project-card">
                                <div className="project-icon">📁</div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="certifications-section">
                <div className="container">
                    <h2 className="section-title"><span className="text-gradient">Certifications</span></h2>
                    <p className="section-subtitle">
                        On completion of a program each participant gets a course completion,
                        internship and outstanding performance certificates.
                    </p>
                    <div className="cert-cards">
                        <div className="cert-card">
                            <div className="cert-icon">📜</div>
                            <h3>Course Completion</h3>
                            <p>Awarded for dedication and time provided to learn and enhance your skills</p>
                        </div>
                        <div className="cert-card">
                            <div className="cert-icon">🏆</div>
                            <h3>Internship Completion</h3>
                            <p>Awarded after gaining practical exposure and work experience</p>
                        </div>
                        <div className="cert-card">
                            <div className="cert-icon">⭐</div>
                            <h3>Outstanding Performer</h3>
                            <p>Awarded to extraordinary students who performed exceptionally well</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-section">
                <div className="container">
                    <h2 className="section-title">Choose Your <span className="text-gradient">Plan</span></h2>
                    <div className="pricing-grid">
                        {program.pricing.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                            >
                                {plan.recommended && <div className="recommended-badge">Most Popular</div>}
                                <h3 className="plan-name">{plan.plan}</h3>
                                <div className="plan-price">{plan.price}</div>
                                <ul className="plan-features">
                                    {plan.features.map((feature, fidx) => (
                                        <li key={fidx}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Section */}
            <section className="alumni-section">
                <div className="container">
                    <h2 className="section-title">Our Alumni <span className="text-gradient">Work At</span></h2>
                    <p className="section-subtitle">
                        Our alumni are already making waves in their industries.
                    </p>
                    <div className="alumni-logos">
                        {alumniCompanies.map((company, idx) => (
                            <div key={idx} className="company-badge">{company}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
                    <div className="faq-accordion">
                        {program.faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`faq-item ${openFaq === idx ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-header"
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                >
                                    <span className="faq-number">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="faq-question">{faq.question}</span>
                                    <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
                                </button>
                                <div className="faq-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h2 className="section-title">
                                Ready to <span className="text-gradient">Start?</span>
                            </h2>
                            <p>
                                Join thousands of learners who have successfully transitioned from
                                students to professionals. Get in touch with us today!
                            </p>
                            <div className="contact-features">
                                <div className="feature-item">✅ Industry-Relevant Curriculum</div>
                                <div className="feature-item">✅ Hands-On Projects</div>
                                <div className="feature-item">✅ Expert Mentorship</div>
                                <div className="feature-item">✅ Placement Assistance</div>
                            </div>
                        </div>
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Get a Free Consultation</h3>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        placeholder="Contact Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Institute Name"
                                        value={formData.institute}
                                        onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Request Callback
                                </button>
                                <p className="form-terms">
                                    By submitting, I agree to <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Programs Section */}
            <section className="more-programs-section">
                <div className="container">
                    <h2 className="section-title">Explore More <span className="text-gradient">Domains</span></h2>
                    <div className="more-programs-grid">
                        <Link to="/programs/machine-learning" className="more-program-card">
                            <span className="program-emoji">🤖</span>
                            <span>Machine Learning</span>
                        </Link>
                        <Link to="/programs/web-development" className="more-program-card">
                            <span className="program-emoji">💻</span>
                            <span>Web Development</span>
                        </Link>
                        <Link to="/programs/artificial-intelligence" className="more-program-card">
                            <span className="program-emoji">🧠</span>
                            <span>Artificial Intelligence</span>
                        </Link>
                        <Link to="/programs/data-science" className="more-program-card">
                            <span className="program-emoji">📊</span>
                            <span>Data Science</span>
                        </Link>
                        <Link to="/programs/internet-of-things" className="more-program-card">
                            <span className="program-emoji">📡</span>
                            <span>Internet of Things</span>
                        </Link>
                        <Link to="/programs/autocad" className="more-program-card">
                            <span className="program-emoji">📐</span>
                            <span>AutoCAD</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProgramPage
