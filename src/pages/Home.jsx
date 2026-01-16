import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// Data
const trendingInternships = [
    { id: 1, title: 'Machine Learning', category: 'CSE / IT', icon: '🤖', color: '#667eea', path: '/programs/machine-learning' },
    { id: 2, title: 'Web Development', category: 'CSE / IT', icon: '💻', color: '#11998e', path: '/programs/web-development' },
    { id: 3, title: 'AutoCAD', category: 'Mechanical', icon: '📐', color: '#ee0979', path: '/programs/autocad' },
    { id: 4, title: 'Internet of Things', category: 'ECE / EEE', icon: '📡', color: '#f093fb', path: '/programs/internet-of-things' },
    { id: 5, title: 'Data Science', category: 'CSE / IT', icon: '📊', color: '#4facfe', path: '/programs/data-science' },
    { id: 6, title: 'Artificial Intelligence', category: 'CSE / IT', icon: '🧠', color: '#764ba2', path: '/programs/artificial-intelligence' }
]

const trainingPartners = [
    'IIT Bombay', 'IIM Ahmedabad', 'BITS Pilani', 'NIT Trichy', 'VIT', 'SRM', 'Manipal', 'IIIT Hyderabad'
]

const techLogos = [
    'Java', 'Python', 'React', 'Node.js', 'AWS', 'Android', 'Flutter', 'MongoDB', 'TensorFlow', 'Docker'
]

const categories = [
    {
        id: 1,
        name: 'Computer Science & IT',
        icon: '💻',
        slug: 'computer-science-it',
        gradient: 'linear-gradient(135deg, #0a1a3a 0%, #1a2f6d 100%)',
        courses: [
            { name: 'Cyber Security', path: '/programs/cyber-security' },
            { name: 'Data Analytics', path: '/programs/data-analytics' },
            { name: 'Web Development', path: '/programs/web-development' },
            { name: 'Machine Learning with Python', path: '/programs/machine-learning' },
            { name: 'Artificial Intelligence (AI)', path: '/programs/artificial-intelligence' },
            { name: 'Android Development', path: '/programs/android-development' },
            { name: 'Full Stack Web Development', path: '/programs/full-stack-web-development' }
        ]
    },
    {
        id: 2,
        name: 'ECE / EEE',
        icon: '⚡',
        slug: 'ece-eee',
        gradient: 'linear-gradient(135deg, #0d2137 0%, #0a3d5c 100%)',
        courses: [
            { name: 'Internet of Things (IoT)', path: '/programs/internet-of-things' },
            { name: 'Hybrid & Electric Vehicles', path: '/programs/hybrid-electric-vehicles' },
            { name: 'Embedded Systems', path: '/programs/embedded-systems' }
        ]
    },
    {
        id: 3,
        name: 'Mechanical',
        icon: '⚙️',
        slug: 'mechanical',
        gradient: 'linear-gradient(135deg, #1a1a3e 0%, #2d1f4a 100%)',
        courses: [
            { name: 'AutoCAD', path: '/programs/autocad' },
            { name: 'Hybrid & Electric Vehicles', path: '/programs/hybrid-electric-vehicles' }
        ]
    },
    {
        id: 4,
        name: 'Civil',
        icon: '🏗️',
        slug: 'civil',
        gradient: 'linear-gradient(135deg, #0f2847 0%, #1a3a5c 100%)',
        courses: [
            { name: 'AutoCAD', path: '/programs/autocad' },
            { name: 'Building Design & Construction', path: '/programs/building-design-construction' }
        ]
    },
    {
        id: 5,
        name: 'Management & Business',
        icon: '📈',
        slug: 'management-business',
        gradient: 'linear-gradient(135deg, #0a1a3a 0%, #0d3a5c 100%)',
        courses: [
            { name: 'Digital Marketing', path: '/programs/digital-marketing' },
            { name: 'Stock Market & Cryptocurrency', path: '/programs/stock-market' },
            { name: 'Finance', path: '/programs/finance' },
            { name: 'Human Resources (HR)', path: '/programs/human-resources' },
            { name: 'Project Management', path: '/programs/project-management' },
            { name: 'Supply Chain & Logistics', path: '/programs/supply-chain-logistics' },
            { name: 'Business Analytics', path: '/programs/business-analytics' }
        ]
    },
    {
        id: 6,
        name: 'IT & Design',
        icon: '🎨',
        slug: 'it-design',
        gradient: 'linear-gradient(135deg, #1a1a40 0%, #2a2a5a 100%)',
        courses: [
            { name: 'UI/UX Designing', path: '/programs/ui-ux-designing' },
            { name: 'Graphic Designing', path: '/programs/graphic-designing' }
        ]
    },
    {
        id: 7,
        name: 'Media & Communication',
        icon: '✍️',
        slug: 'media-communication',
        gradient: 'linear-gradient(135deg, #0d2137 0%, #1a3a5c 100%)',
        courses: [
            { name: 'Content Writing', path: '/programs/content-writing' }
        ]
    },
    {
        id: 8,
        name: 'Healthcare & Life Sciences',
        icon: '🏥',
        slug: 'healthcare-life-sciences',
        gradient: 'linear-gradient(135deg, #0a1a3a 0%, #1a2f6d 100%)',
        courses: [
            { name: 'Medical Coding', path: '/programs/medical-coding' }
        ]
    }
]


const statistics = [
    { value: 95, suffix: '%', label: 'Satisfaction Rate' },
    { value: 100000, suffix: '+', label: 'Learners Worldwide' },
    { value: 50, suffix: '+', label: 'Industry Experts' },
    { value: 40000, suffix: '+', label: 'Success Stories' }
]

const alumniCompanies = [
    { name: 'Amazon', logo: '/logos/Amazon_logo.svg' },
    { name: 'Google', logo: '/logos/Google.png' },
    { name: 'Microsoft', logo: '/logos/microsoft.png' },
    { name: 'Wipro', logo: '/logos/wipro.png' },
    { name: 'Infosys', logo: '/logos/infosys.png' },
    { name: 'Accenture', logo: '/logos/accenture.png' },
    { name: 'IBM', logo: '/logos/ibm.png' },
    { name: 'HCL', logo: '/logos/hcl.png' },
    { name: 'Oracle', logo: '/logos/oracle.png' },
    { name: 'Salesforce', logo: '/logos/salesforce.png' },
    { name: 'TCS', logo: '' },
    { name: 'Deloitte', logo: '' },
    { name: 'Cognizant', logo: '' },
    { name: 'Capgemini', logo: '' },
    { name: 'Adobe', logo: '' },
    { name: 'Flipkart', logo: '' },
    { name: 'Samsung', logo: '' },
    { name: 'Zoho', logo: '' }
]


const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'ML Engineer',
        company: 'Google',
        image: '👨‍💻',
        text: 'Eduholic transformed my career. The hands-on projects and mentorship helped me land my dream job at Google.'
    },
    {
        name: 'Priya Patel',
        role: 'Full Stack Developer',
        company: 'Amazon',
        image: '👩‍💻',
        text: 'The internship program gave me real-world experience that no classroom could provide. Highly recommended!'
    },
    {
        name: 'Amit Kumar',
        role: 'Data Scientist',
        company: 'Microsoft',
        image: '👨‍🔬',
        text: 'From a fresher to a data scientist - Eduholic made this journey possible with their industry-relevant courses.'
    },
    {
        name: 'Sneha Reddy',
        role: 'Digital Marketer',
        company: 'Zoho',
        image: '👩‍💼',
        text: 'The digital marketing course was comprehensive. The practical approach helped me understand real campaign strategies.'
    },
    {
        name: 'Vikram Singh',
        role: 'IoT Engineer',
        company: 'Bosch',
        image: '👨‍🔧',
        text: 'The IoT internship was exactly what I needed. Working on real hardware projects prepared me for the industry.'
    },
    {
        name: 'Anjali Nair',
        role: 'HR Manager',
        company: 'Infosys',
        image: '👩‍💼',
        text: 'The HR program covered everything from recruitment to employee engagement. Best investment in my career!'
    },
    {
        name: 'Karthik R',
        role: 'Android Developer',
        company: 'Flipkart',
        image: '👨‍💻',
        text: 'Built 3 apps during the internship. The mentors were always available to help. Got placed within 2 months!'
    },
    {
        name: 'Meera Joshi',
        role: 'Business Analyst',
        company: 'Deloitte',
        image: '👩‍💻',
        text: 'The analytics course taught me real tools like Power BI and Tableau. Now I make data-driven decisions daily.'
    }
]


// Counter Animation Hook
function useCountUp(end, duration = 2000, trigger = true) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!trigger) return

        let startTime = null
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }
        requestAnimationFrame(animate)
    }, [end, duration, trigger])

    return count
}

// Stat Counter Component
function StatCounter({ stat, inView }) {
    const count = useCountUp(stat.value, 2000, inView)

    const formatNumber = (num) => {
        if (num >= 100000) return (num / 1000).toFixed(0) + 'K'
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K'
        return num.toString()
    }

    return (
        <div className="stat-item" data-aos="fade-up">
            <div className="stat-value">
                {stat.value >= 1000 ? formatNumber(count * 1000) : count}
                <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
        </div>
    )
}

function Home() {
    const statsRef = useRef(null)
    const [statsInView, setStatsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsInView(true)
                }
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section">
                {/* Motion Graphics Background Video */}
                <div className="hero-video-wrapper">
                    <video
                        className="hero-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
                    >
                        <source src="/motion_graphics1.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-video-overlay"></div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title" data-aos="fade-up">
                        DON'T STUDY FOR THE REAL WORLD,<br />
                        <span className="text-gradient">PREPARE FOR THE REAL WORLD</span>
                    </h1>
                    <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
                        Bridge the gap between education and industry with hands-on internships and real-world projects
                    </p>
                    <div className="hero-cta" data-aos="fade-up" data-aos-delay="200">
                        <a href="#programs" className="btn btn-primary">Explore Programs</a>
                        <a href="#about" className="btn btn-outline">Know More</a>
                    </div>
                </div>
            </section>

            {/* About Eduholic - Scroll Driven Animation */}
            <section className="about-scroll-section" id="about">
                <div className="about-sticky-wrapper">
                    {/* Stage 1: About Intro */}
                    <div className="about-stage about-intro">
                        <span className="about-label">ABOUT EDUHOLIC</span>
                        <h2 className="about-title">
                            WE ARE A KNOWLEDGE<br />
                            AND SKILL ACQUISITION<br />
                            PLATFORM
                        </h2>
                        <p className="about-subtitle">
                            FOR STUDENTS ENVISIONING TO BE<br />
                            SUCCESSFUL IN THE REAL WORLD<br />
                            THROUGH LEARNING
                        </p>
                    </div>

                    {/* Stage 2: Why Choose with Orbiting Features */}
                    <div className="about-stage why-choose-stage">
                        <h2 className="why-choose-title">WHY CHOOSE EDUHOLIC?</h2>

                        <div className="orbit-system">
                            {/* Center Logo */}
                            <div className="orbit-center">
                                <img src="/logo.png" alt="Eduholic" className="center-logo-img" />
                            </div>

                            {/* Orbit Ring - the circle background */}
                            <div className="orbit-ring"></div>

                            {/* Rotating wrapper for bubbles */}
                            <div className="orbit-bubbles-wrapper">
                                <div className="feature-bubble" style={{ '--angle': '0deg' }}>
                                    <div className="bubble-content">
                                        <div className="bubble-icon">👨‍🏫</div>
                                        <span className="bubble-text">Distinguished<br />Mentors</span>
                                    </div>
                                </div>
                                <div className="feature-bubble" style={{ '--angle': '60deg' }}>
                                    <div className="bubble-content">
                                        <div className="bubble-icon">💼</div>
                                        <span className="bubble-text">Industrial<br />Projects</span>
                                    </div>
                                </div>
                                <div className="feature-bubble" style={{ '--angle': '120deg' }}>
                                    <div className="bubble-content">
                                        <div className="bubble-icon">🎥</div>
                                        <span className="bubble-text">Live Interactive<br />Sessions</span>
                                    </div>
                                </div>
                                <div className="feature-bubble" style={{ '--angle': '180deg' }}>
                                    <div className="bubble-content">
                                        <div className="bubble-icon">🎓</div>
                                        <span className="bubble-text">Internship<br />Experience</span>
                                    </div>
                                </div>
                                <div className="feature-bubble" style={{ '--angle': '240deg' }}>
                                    <div className="bubble-content">
                                        <div className="bubble-icon">📚</div>
                                        <span className="bubble-text">LMS Portal<br />Access</span>
                                    </div>
                                </div>
                                <div className="feature-bubble" style={{ '--angle': '300deg' }}>
                                    <div className="bubble-content">
                                        <div className="bubble-icon">🏆</div>
                                        <span className="bubble-text">Multiple<br />Certifications</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Alternative - Feature Cards Grid (shown only on mobile) */}
                        <div className="mobile-features-grid">
                            <div className="mobile-feature-card">
                                <span className="mobile-feature-icon">👨‍🏫</span>
                                <span className="mobile-feature-text">Distinguished Mentors</span>
                            </div>
                            <div className="mobile-feature-card">
                                <span className="mobile-feature-icon">💼</span>
                                <span className="mobile-feature-text">Industrial Projects</span>
                            </div>
                            <div className="mobile-feature-card">
                                <span className="mobile-feature-icon">🎥</span>
                                <span className="mobile-feature-text">Live Sessions</span>
                            </div>
                            <div className="mobile-feature-card">
                                <span className="mobile-feature-icon">🎓</span>
                                <span className="mobile-feature-text">Internship</span>
                            </div>
                            <div className="mobile-feature-card">
                                <span className="mobile-feature-icon">📚</span>
                                <span className="mobile-feature-text">LMS Portal</span>
                            </div>
                            <div className="mobile-feature-card">
                                <span className="mobile-feature-icon">🏆</span>
                                <span className="mobile-feature-text">Certifications</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Partners Marquee */}
            <section className="marquee-section">
                <div className="marquee-container">
                    <div className="marquee-track">
                        {[...techLogos, ...techLogos].map((logo, idx) => (
                            <div key={idx} className="marquee-item">
                                <span className="tech-logo">{logo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Trending Internships */}
            < section className="trending-section section-dark" id="programs" >
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">
                        <span className="text-gradient">Trending</span> Internships
                    </h2>
                    <p className="section-subtitle text-center" data-aos="fade-up">
                        Explore our most popular programs designed for industry success
                    </p>

                    <div className="trending-grid">
                        {trendingInternships.map((item, idx) => (
                            <div
                                key={item.id}
                                className="trending-card"
                                style={{ '--card-color': item.color }}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="trending-icon">{item.icon}</div>
                                <h3 className="trending-title">{item.title}</h3>
                                <span className="trending-category">{item.category}</span>
                                <Link to={item.path} className="trending-link">Learn More →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section >


            {/* Browse by Category - Premium Cards */}
            < section className="categories-section section-dark" >
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">
                        Browse By <span className="text-gradient">Category</span>
                    </h2>
                    <p className="section-subtitle text-center" data-aos="fade-up">
                        Obtain the practical skills you need to start a successful career in Engineering and Management domains.
                    </p>

                    {/* Auto-scrolling Carousel */}
                    <div className="categories-carousel-wrapper">
                        <div className="categories-carousel-track">
                            {/* First set of cards */}
                            {categories.map((cat, idx) => (
                                <div
                                    key={cat.id}
                                    className="premium-category-card"
                                >
                                    {/* Card Background */}
                                    <div className="card-bg" style={{ background: cat.gradient }}></div>

                                    {/* Cyan glow border */}
                                    <div className="card-glow-border"></div>

                                    {/* Card Front Content */}
                                    <div className="card-front">
                                        <span className="card-icon">{cat.icon}</span>
                                        <h3 className="card-title">{cat.name}</h3>
                                        <span className="card-count">{cat.courses.length} Programs</span>
                                    </div>

                                    {/* Card Hover Details */}
                                    <div className="card-details">
                                        <h4 className="details-title">{cat.name}</h4>
                                        <div className="details-courses">
                                            {cat.courses.slice(0, 4).map((course, cidx) => (
                                                <Link
                                                    key={cidx}
                                                    to={course.path}
                                                    className="detail-course-link"
                                                >
                                                    <span className="course-arrow">→</span>
                                                    {course.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <Link to={`/category/${cat.slug}`} className="card-cta">
                                            Explore All →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate for infinite scroll */}
                            {categories.map((cat, idx) => (
                                <div
                                    key={`dup-${cat.id}`}
                                    className="premium-category-card"
                                >
                                    <div className="card-bg" style={{ background: cat.gradient }}></div>
                                    <div className="card-glow-border"></div>
                                    <div className="card-front">
                                        <span className="card-icon">{cat.icon}</span>
                                        <h3 className="card-title">{cat.name}</h3>
                                        <span className="card-count">{cat.courses.length} Programs</span>
                                    </div>
                                    <div className="card-details">
                                        <h4 className="details-title">{cat.name}</h4>
                                        <div className="details-courses">
                                            {cat.courses.slice(0, 4).map((course, cidx) => (
                                                <Link
                                                    key={cidx}
                                                    to={course.path}
                                                    className="detail-course-link"
                                                >
                                                    <span className="course-arrow">→</span>
                                                    {course.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <Link to={`/category/${cat.slug}`} className="card-cta">
                                            Explore All →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Statistics Section */}
            < section className="stats-section section-white" ref={statsRef} >
                <div className="container">
                    <div className="stats-grid">
                        {statistics.map((stat, idx) => (
                            <StatCounter key={idx} stat={stat} inView={statsInView} />
                        ))}
                    </div>
                </div>
            </section >

            {/* Alumni Section */}
            < section className="alumni-section section-dark star-bg" >
                <div className="container">
                    <h2 className="section-title text-center" data-aos="fade-up">
                        What Our <span className="text-gradient">Alumni</span> Say
                    </h2>
                    {/* Horizontal Moving Carousel */}
                    <div className="testimonials-track-wrapper">
                        <div className="testimonials-track">
                            {/* First set of cards */}
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx} className="testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="testimonial-avatar-emoji">{testimonial.image}</div>
                                        <div className="testimonial-info">
                                            <h4>{testimonial.name}</h4>
                                            <span>{testimonial.role} at {testimonial.company}</span>
                                        </div>
                                    </div>
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                </div>
                            ))}
                            {/* Duplicate for infinite scroll */}
                            {testimonials.map((testimonial, idx) => (
                                <div key={`dup-${idx}`} className="testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="testimonial-avatar-emoji">{testimonial.image}</div>
                                        <div className="testimonial-info">
                                            <h4>{testimonial.name}</h4>
                                            <span>{testimonial.role} at {testimonial.company}</span>
                                        </div>
                                    </div>
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Alumni Companies Section */}
                    <div className="alumni-work-section">
                        <h3 className="alumni-companies-title text-center" data-aos="fade-up">
                            Our Alumni <span className="text-gradient">Work At</span>
                        </h3>
                        <p className="alumni-description text-center" data-aos="fade-up">
                            Our alumni are already starting to make waves in their industries. Our former students are already working in high-profile industries and are shaping our futures.
                        </p>
                        <div className="alumni-companies-grid" data-aos="fade-up">
                            {alumniCompanies.map((company, idx) => (
                                <div key={idx} className="company-card">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="company-logo"
                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                    />
                                    <span className="company-name-fallback" style={{ display: 'none' }}>{company.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Startup India Recognition */}
                    <div className="recognition-section" data-aos="fade-up">
                        <h3 className="recognition-title text-center">
                            <span className="text-gradient">Recognized by</span>
                        </h3>
                        <div className="recognition-badge">
                            <span className="startup-india-text">#startupindia</span>
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact Form Section */}
            < section className="contact-section section-dark" >
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info" data-aos="fade-right">
                            <h2 className="section-title">
                                Ready to <span className="text-gradient">Transform</span> Your Career?
                            </h2>
                            <p>
                                Join thousands of learners who have successfully transitioned from students to professionals.
                                Get in touch with us today!
                            </p>
                            <div className="contact-features">
                                <div className="feature-item">✅ Industry-Relevant Curriculum</div>
                                <div className="feature-item">✅ Hands-On Projects</div>
                                <div className="feature-item">✅ Expert Mentorship</div>
                                <div className="feature-item">✅ Placement Assistance</div>
                            </div>
                        </div>
                        <div className="contact-form-wrapper" data-aos="fade-left">
                            <form className="contact-form">
                                <h3>Get a Free Consultation</h3>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Contact Number" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Institute Name" required />
                                </div>
                                <div className="form-group">
                                    <select required>
                                        <option value="">Select Program</option>
                                        <option value="ml">Machine Learning</option>
                                        <option value="web">Web Development</option>
                                        <option value="ai">Artificial Intelligence</option>
                                        <option value="ds">Data Science</option>
                                        <option value="other">Other</option>
                                    </select>
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
            </section >
        </div >
    )
}

export default Home
