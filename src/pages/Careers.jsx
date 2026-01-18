import { useState } from 'react'
import Toast, { useToast } from '../components/Toast'
import { submitCareerApplication } from '../utils/formSubmit'
import './Careers.css'

const careerPositions = [
    {
        id: 1,
        title: 'Campus Delegate',
        category: 'CAMPUS DELEGATE',
        description: 'Be the face of Eduholic at your campus. Help fellow students discover internship opportunities and grow professionally.',
        email: 'campusdelegate@eduholic.in',
        icon: '🎓'
    },
    {
        id: 2,
        title: 'Sales & Marketing',
        category: 'SALES & MARKETING',
        description: 'Drive growth through strategic marketing initiatives and build relationships with potential learners and partners.',
        email: 'HR@eduholic.in',
        icon: '📈'
    },
    {
        id: 3,
        title: 'Human Resources',
        category: 'HUMAN RESOURCES',
        description: 'Shape our company culture and help us find the best talent to join the Eduholic family.',
        email: 'HR@eduholic.in',
        icon: '👥'
    },
    {
        id: 4,
        title: 'Operations',
        category: 'OPERATIONS',
        description: 'Ensure smooth delivery of our programs and maintain operational excellence across all processes.',
        email: 'lakshman@eduholic.info',
        icon: '⚙️'
    },
    {
        id: 5,
        title: 'Collaborations',
        category: 'COLLABORATIONS',
        description: 'Build strategic partnerships with colleges, universities, and industry leaders to expand our reach.',
        email: 'lakshman@eduholic.info',
        icon: '🤝'
    }
]

function Careers() {
    const [showApplyModal, setShowApplyModal] = useState(false)
    const [selectedPosition, setSelectedPosition] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast, showToast, hideToast } = useToast()

    const handleApply = (position) => {
        setSelectedPosition(position)
        setShowApplyModal(true)
    }

    const handleSubmitApplication = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const result = await submitCareerApplication({
            ...formData,
            position: selectedPosition?.title || 'General Application'
        })

        if (result.success) {
            showToast('🎉 Your application has been submitted successfully! Our HR team will contact you soon.', 'success')
            setFormData({ name: '', email: '', phone: '', message: '' })
            setShowApplyModal(false)
        } else {
            showToast(result.message, 'error')
        }

        setIsSubmitting(false)
    }

    const handleSendResume = () => {
        setSelectedPosition({ title: 'General Application' })
        setShowApplyModal(true)
    }

    return (
        <div className="careers-page">
            {/* Toast Notification */}
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />

            {/* Application Modal */}
            {showApplyModal && (
                <div className="apply-modal-overlay" onClick={() => setShowApplyModal(false)}>
                    <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowApplyModal(false)}>×</button>
                        <h2>Apply for {selectedPosition?.title}</h2>
                        <p className="modal-subtitle">Fill in your details and we'll get back to you!</p>

                        <form onSubmit={handleSubmitApplication}>
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
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    placeholder="Tell us about yourself (or paste your resume link)"
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Hero Section with Motion Graphics */}
            <section className="careers-hero">
                <video
                    className="hero-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/motion_graphics5.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

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
                                </div>
                                <button
                                    className="btn btn-primary btn-apply"
                                    onClick={() => handleApply(position)}
                                >
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
                        <button
                            className="btn btn-primary"
                            onClick={handleSendResume}
                        >
                            Send Your Resume
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Careers
