import './ContactUs.css'

function ContactUs() {
    return (
        <div className="contact-page">
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
                                            <option value="">Select Program</option>
                                            <option value="ml">Machine Learning with Python</option>
                                            <option value="web">Web Development</option>
                                            <option value="ai">Artificial Intelligence(AI)</option>
                                            <option value="ds">Data Analytics</option>
                                            <option value="cyber">Cyber Security</option>
                                            <option value="android">Android Development</option>
                                            <option value="fullstack">Full Stack Web Development</option>
                                            <option value="hybrid">Hybrid & Electronic Vehicles</option>
                                            <option value="iot">Internet of Things</option>
                                            <option value="embedded">Embedded Systems</option>
                                            <option value="autocad">AutoCAD</option>
                                            <option value="building">Building Design and Construction Planning</option>
                                            <option value="digital">Digital Marketing</option>
                                            <option value="stock">Stock Market & Cryptocurrency</option>
                                            <option value="finance">Finance</option>
                                            <option value="hr">Human Resources (HR)</option>
                                            <option value="project">Project Management</option>
                                            <option value="supply">Supply Chain & Logistics</option>
                                            <option value="business">Business Analytics</option>
                                            <option value="ui">UI/UX Design</option>
                                            <option value="graphic">Graphic Designing</option>
                                            <option value="content">Content Writing</option>
                                            <option value="medical">Medical Coding</option>
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
            {/* <section className="map-section">
                <div className="map-container">
                    <div className="map-placeholder">
                        <span>📍</span>
                        <p>Eduholic Pvt Ltd, HSR Layout, Bengaluru</p>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default ContactUs
