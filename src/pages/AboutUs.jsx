import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toast, { useToast } from '../components/Toast'
import { submitCallbackRequest } from '../utils/formSubmit'
import './AboutUs.css'

const visionPoints = [
    'Empowering youth with real-world experience',
    'Broadening horizons through practical learning',
    'Developing well-rounded professionals',
    'Creating industry-ready graduates'
]

const countries = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Kenya', flag: '🇰🇪' }
]

function AboutUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast, showToast, hideToast } = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const result = await submitCallbackRequest(formData, 'about-page')

        if (result.success) {
            showToast(result.message, 'success')
            setFormData({ name: '', email: '', phone: '', program: '', message: '' })
        } else {
            showToast(result.message, 'error')
        }

        setIsSubmitting(false)
    }

    return (
        <div className="about-page">
            {/* Toast Notification */}
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />

            {/* Hero Section with Motion Graphics */}
            <section className="about-hero">
                {/* Video Background */}
                <video
                    className="hero-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/motion_graphics2.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

                <div className="about-hero-content">
                    <div className="glass-orb animate-float"></div>
                    <h1 className="about-title" data-aos="fade-up">Aim & Accomplish</h1>
                    <p className="about-subtitle" data-aos="fade-up" data-aos-delay="100">
                        Transforming education, one learner at a time
                    </p>
                </div>
            </section>

            {/* Vision Section with Motion Graphics */}
            <section className="vision-section">
                {/* Video Background */}
                <video
                    className="section-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/motion_graphics5.mp4" type="video/mp4" />
                </video>
                <div className="section-overlay vision-overlay"></div>

                {/* Animated Background Elements */}
                <div className="vision-animated-bg">
                    <div className="vision-particle v-p1"></div>
                    <div className="vision-particle v-p2"></div>
                    <div className="vision-particle v-p3"></div>
                    <div className="vision-ring"></div>
                </div>

                <div className="container">
                    <div className="vision-grid">
                        <div className="vision-content" data-aos="fade-right">
                            <h2 className="section-heading">Our Vision</h2>
                            <p className="vision-text">
                                Our vision is to <strong>empower the youth of today</strong>, broaden their horizons,
                                develop them as individuals, and give them the work experience that they need to
                                join the workforce and immediately make a difference.
                            </p>
                            <p className="vision-text">
                                At Eduholic we envision a brighter future driven by the well-rounded youth of today.
                                With Eduholic, the only way to go is forward!
                            </p>
                            <ul className="vision-list">
                                {visionPoints.map((point, idx) => (
                                    <li key={idx}>✓ {point}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="vision-graphic" data-aos="fade-left">
                            <div className="lightbulb-container">
                                <span className="lightbulb-icon">💡</span>
                                <div className="glow-ring"></div>
                                <div className="glow-ring delay-1"></div>
                                <div className="glow-ring delay-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section with Motion Graphics */}
            <section className="mission-section">
                {/* Video Background */}
                <video
                    className="section-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/motion_graphics6.mp4" type="video/mp4" />
                </video>
                <div className="section-overlay mission-overlay"></div>

                {/* Animated Background Elements */}
                <div className="mission-animated-bg">
                    <div className="mission-particle m-p1"></div>
                    <div className="mission-particle m-p2"></div>
                    <div className="mission-particle m-p3"></div>
                    <div className="mission-arrow-trail"></div>
                </div>

                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-graphic" data-aos="fade-right">
                            <div className="plane-container">
                                <span className="plane-icon">✈️</span>
                            </div>
                        </div>
                        <div className="mission-content" data-aos="fade-left">
                            <h2 className="section-heading">Our Mission</h2>
                            <p className="mission-text">
                                Our mission is to give the youth of today the chance to <strong>learn and upskill</strong> themselves.
                                Our supervised internships and creative, industry-relevant projects make sure that they
                                walk into the workforce equipped with everything they need to be successful.
                            </p>
                            <p className="mission-text">
                                Our mission is to re-define the concept of education. To bring it back to what the
                                essence of education really is – preparing students for real-world challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goals Section */}
            <section className="goals-section star-bg">
                <div className="container">
                    <div className="goals-grid">
                        <div className="goals-content" data-aos="fade-right">
                            <h2 className="section-heading">Our Goals</h2>
                            <p className="goals-text">
                                We aim to <strong>remove the association between marks and success</strong> and instead
                                put an emphasis on the association between skills and success.
                            </p>
                            <p className="goals-text">
                                Our goal is to revolutionize the educational landscape. We hope to make teaching
                                a practice where students are taught practical skills that they can apply in
                                the real world.
                            </p>
                        </div>
                        <div className="goals-graphic" data-aos="fade-left">
                            <div className="trophy-container">
                                <span className="trophy-icon">🏆</span>
                                <div className="star-particles">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Reach Section */}
            <section className="global-section star-bg">
                <div className="container">
                    <div className="global-content" data-aos="fade-up">
                        <h2 className="section-heading text-center">
                            With a little more than <span className="text-gradient text-underline">one Lakh</span> students turned professionals,
                        </h2>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="about-contact-section">
                <div className="container">
                    <div className="about-contact-grid">
                        <div className="about-contact-info" data-aos="fade-right">
                            <h2>Joined more than <span className="text-gradient">1 Lakh</span> learners worldwide</h2>
                            <p>Start your journey with Eduholic today and transform your career.</p>
                        </div>
                        <div className="about-contact-form" data-aos="fade-left">
                            <h3>Talk to our experts</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-row">
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
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
                                <textarea
                                    placeholder="Your Message (Optional)"
                                    rows="3"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                                </button>
                                <p className="form-terms">
                                    By submitting, I agree to <Link to="/terms-and-conditions">terms & conditions</Link> and <Link to="/privacy-policy">privacy policy</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
