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
    return (
        <div className="about-page">
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

            {/* Vision Section */}
            <section className="vision-section">
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

            {/* Mission Section */}
            <section className="mission-section">
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
                            With a little over <span className="text-gradient">half a Lakh</span> learners turned professionals,
                        </h2>
                        <p className="global-subtitle text-center">
                            Eduholic has expanded its reach into more than 15 countries, and is impacting lives across the globe.
                        </p>

                        <div className="glass-orb-large animate-float"></div>

                        <div className="countries-grid">
                            {countries.map((country, idx) => (
                                <div key={idx} className="country-badge" data-aos="fade-up" data-aos-delay={idx * 50}>
                                    <span className="country-flag">{country.flag}</span>
                                    <span className="country-name">{country.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="about-contact-section">
                <div className="container">
                    <div className="about-contact-grid">
                        <div className="about-contact-info" data-aos="fade-right">
                            <h2>Join more than <span className="text-gradient">10 million</span> learners worldwide</h2>
                            <p>Start your journey with Eduholic today and transform your career.</p>
                        </div>
                        <div className="about-contact-form" data-aos="fade-left">
                            <h3>Talk to our experts</h3>
                            <form>
                                <div className="form-row">
                                    <input type="text" placeholder="Your Name" required />
                                    <input type="email" placeholder="Email Address" required />
                                </div>
                                <div className="form-row">
                                    <input type="tel" placeholder="Mobile Number" required />
                                    <select required>
                                        <option value="">Select Course</option>
                                        <option value="ml">Machine Learning</option>
                                        <option value="web">Web Development</option>
                                        <option value="ai">Artificial Intelligence</option>
                                        <option value="ds">Data Science</option>
                                    </select>
                                </div>
                                <textarea placeholder="Your Message (Optional)" rows="3"></textarea>
                                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                                <p className="form-terms">
                                    By submitting, I agree to <a href="/terms-and-conditions">terms & conditions</a> and <a href="/privacy-policy">privacy policy</a>
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
