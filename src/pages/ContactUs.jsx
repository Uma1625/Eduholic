import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toast, { useToast } from '../components/Toast'
import { submitCallbackRequest } from '../utils/formSubmit'
import './ContactUs.css'

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institute: '',
        program: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast, showToast, hideToast } = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const result = await submitCallbackRequest(formData, 'contact-page')

        if (result.success) {
            showToast(result.message, 'success')
            setFormData({ name: '', email: '', phone: '', institute: '', program: '', message: '' })
        } else {
            showToast(result.message, 'error')
        }

        setIsSubmitting(false)
    }

    return (
        <div className="contact-page">
            {/* Toast Notification */}
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />

            {/* Hero Section with Motion Graphics */}
            <section className="contact-hero">
                <video
                    className="hero-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/motion_graohics3.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

                <div className="container">
                    <h1 className="contact-title" data-aos="fade-up">Contact Us</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Details */}
                        <div className="contact-details" data-aos="fade-right">
                            <div className="contact-block">
                                <h3>Registered Address</h3>
                                <p>
                                    9-1 Nagavamsapu Street, Ward No-3, Main Road,
                                    Palakonda, Srikakulam, Andhra Pradesh, 532440
                                </p>
                            </div>

                            <div className="contact-block">
                                <h3>Branch Address</h3>
                                <p>
                                    Eduholic Edtech India Private Limited,
                                    Unit No. 203, 2nd Floor, Suite No. 502,
                                    SBR CV Towers, Sector-I, Sy No. 64 HUDA Techno Enclave,
                                    Madhapur, Hyderabad – 500081
                                </p>
                            </div>

                            <div className="contact-block">
                                <h3>Email Support</h3>
                                <a href="mailto:Learnersupport@eduholic.in" className="contact-link">
                                    <span className="link-icon">📚</span>
                                    Learner Support: Learnersupport@eduholic.in
                                </a>
                                <a href="mailto:Support@eduholic.info" className="contact-link">
                                    <span className="link-icon">✉️</span>
                                    General Support: Support@eduholic.info
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container" data-aos="fade-left">
                            <div className="contact-form-card">
                                <h2>Get In Touch <span>👋</span></h2>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Email"
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
                                        <input
                                            type="text"
                                            placeholder="Institute Name"
                                            value={formData.institute}
                                            onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            value={formData.program}
                                            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                                            required
                                        >
                                            <option value="">Select Program</option>
                                            <option value="Machine Learning with Python">Machine Learning with Python</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Artificial Intelligence(AI)">Artificial Intelligence(AI)</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                            <option value="Android Development">Android Development</option>
                                            <option value="Full Stack Web Development">Full Stack Web Development</option>
                                            <option value="Hybrid & Electronic Vehicles">Hybrid & Electronic Vehicles</option>
                                            <option value="Internet of Things">Internet of Things</option>
                                            <option value="Embedded Systems">Embedded Systems</option>
                                            <option value="AutoCAD">AutoCAD</option>
                                            <option value="Building Design and Construction Planning">Building Design and Construction Planning</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Stock Market & Cryptocurrency">Stock Market & Cryptocurrency</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Human Resources (HR)">Human Resources (HR)</option>
                                            <option value="Project Management">Project Management</option>
                                            <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                                            <option value="Business Analytics">Business Analytics</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="Graphic Designing">Graphic Designing</option>
                                            <option value="Content Writing">Content Writing</option>
                                            <option value="Medical Coding">Medical Coding</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            placeholder="Your Message (Optional)"
                                            rows="4"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Request Callback'}
                                    </button>
                                    <p className="form-terms">
                                        By submitting, I agree to <Link to="/terms-and-conditions">terms & conditions</Link> and <Link to="/privacy-policy">privacy policy</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
