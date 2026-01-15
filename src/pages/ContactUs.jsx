import './ContactUs.css'

function ContactUs() {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero star-bg">
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
                                <h3>Address</h3>
                                <p>
                                    Acmegrade Pvt Ltd, 64, 27th Main Road 1st Sector,
                                    HSR Layout Hustlehub Techpark, 36/5, Somasundra palya,
                                    harlurkunte, village, Bengaluru, Karnataka 560102
                                </p>
                            </div>

                            <div className="contact-block">
                                <h3>Phone Numbers</h3>
                                <a href="tel:+918884080003" className="contact-link">
                                    <span className="link-icon">📞</span>
                                    +91 8884080003
                                </a>
                            </div>

                            <div className="contact-block">
                                <h3>Email</h3>
                                <a href="mailto:support@acmegrade.com" className="contact-link">
                                    <span className="link-icon">✉️</span>
                                    support@acmegrade.com
                                </a>
                            </div>

                            <div className="contact-block">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="https://facebook.com/acmegrade" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
                                    <a href="https://instagram.com/acmegrade" target="_blank" rel="noopener noreferrer" className="social-icon">📸</a>
                                    <a href="https://linkedin.com/company/acmegrade" target="_blank" rel="noopener noreferrer" className="social-icon">💼</a>
                                    <a href="https://twitter.com/acmegrade" target="_blank" rel="noopener noreferrer" className="social-icon">🐦</a>
                                    <a href="https://youtube.com/acmegrade" target="_blank" rel="noopener noreferrer" className="social-icon">📺</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container" data-aos="fade-left">
                            <div className="contact-form-card">
                                <h2>Get In Touch <span>👋</span></h2>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone Number" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Institute Name" required />
                                    </div>
                                    <div className="form-group">
                                        <select required>
                                            <option value="">Select Course of Interest</option>
                                            <option value="ml">Machine Learning</option>
                                            <option value="web">Web Development</option>
                                            <option value="ai">Artificial Intelligence</option>
                                            <option value="ds">Data Science</option>
                                            <option value="cyber">Cyber Security</option>
                                            <option value="iot">Internet of Things</option>
                                            <option value="autocad">AutoCAD</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Your Message (Optional)" rows="4"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Request Callback
                                    </button>
                                    <p className="form-terms">
                                        By submitting, I agree to <a href="/terms-and-conditions">terms & conditions</a> and <a href="/privacy-policy">privacy policy</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="map-section">
                <div className="map-container">
                    <div className="map-placeholder">
                        <span>📍</span>
                        <p>Acmegrade Pvt Ltd, HSR Layout, Bengaluru</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
