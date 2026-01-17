import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { alumniCompanies } from '../data/programsData'
import './ProgramPage.css'

// Project image mapping using Unsplash images
const getProjectImage = (projectName) => {
    const projectImages = {
        // Machine Learning
        'Face Detection': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        'Music Recommendation': 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
        'Movie Recommendation': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop',
        'Breast Cancer Detection': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
        'Walmart Sales Prediction': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',

        // Web Development
        'Portfolio Website': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'E-commerce Platform': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        'Social Media Dashboard': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',

        // Data Science
        'Customer Segmentation': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        'Sentiment Analysis': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        'Stock Price Prediction': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',

        // Cyber Security
        'Network Security Audit': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
        'Penetration Testing': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
        'Vulnerability Assessment': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',

        // Android Development
        'E-commerce App': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
        'Social Media App': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop',
        'Task Manager': 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=400&h=300&fit=crop',

        // IoT
        'Smart Home System': 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
        'Weather Station': 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop',
        'Health Monitoring': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',

        // AutoCAD
        'Building Floor Plan': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
        'Machine Part Design': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
        '3D Model Development': 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=400&h=300&fit=crop',

        // AI
        'Chatbot Development': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop',
        'Image Classification': 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=300&fit=crop',
        'Object Detection': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',

        // Embedded Systems
        'Home Automation System': 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
        'Temperature Monitoring': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop',
        'Motor Control System': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',

        // Electric Vehicles
        'EV Battery Design': 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop',
        'HEV Modelling': 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop',
        'Charging Station Design': 'https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=400&h=300&fit=crop',

        // Digital Marketing
        'SEO Campaign': 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop',
        'Social Media Strategy': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
        'Content Marketing Plan': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',

        // Finance
        'Financial Analysis': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
        'Portfolio Management': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
        'Risk Assessment': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',

        // Stock Market
        'Trading Simulation': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
        'Technical Analysis': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop',
        'Crypto Portfolio': 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop',

        // HR
        'Recruitment System': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
        'Employee Portal': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        'Performance Dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',

        // UI/UX
        'Mobile App Redesign': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
        'E-commerce Website': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'Dashboard Design': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',

        // Graphic Design
        'Brand Identity Package': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        'Social Media Campaign': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
        'Publication Design': 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop',

        // Content Writing
        'Blog Series': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
        'Website Copy': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
        'Content Strategy': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',

        // Medical Coding
        'Case Study Coding': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
        'Audit Project': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        'CPC Practice Test': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',

        // Project Management
        'Project Plan Development': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        'Agile Sprint Simulation': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        'Risk Management Plan': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',

        // Supply Chain
        'Supply Chain Optimization': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
        'Inventory Management System': 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop',
        'Logistics Planning': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop',

        // Building Design
        'Residential Building Design': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
        'Project Estimation': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        'Construction Planning': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',

        // Business Analytics
        'Sales Analytics Dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        'Customer Segmentation': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'Forecasting Model': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop',

        // Default/Generic
        'Capstone Project': 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop',
        'Portfolio Project': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        'Industry Project': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    }

    // Return mapped image or a default based on keywords
    if (projectImages[projectName]) {
        return projectImages[projectName]
    }

    // Default fallback based on keywords
    const lowerName = projectName.toLowerCase()
    if (lowerName.includes('app') || lowerName.includes('mobile')) {
        return 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    }
    if (lowerName.includes('web') || lowerName.includes('website')) {
        return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
    if (lowerName.includes('data') || lowerName.includes('analytics')) {
        return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    }
    if (lowerName.includes('design')) {
        return 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
    }

    // Ultimate fallback
    return 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop'
}

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

    // Carousel ref and scroll handler for Why Eduholic
    const whyCarouselRef = useRef(null)
    const [whyCarouselPaused, setWhyCarouselPaused] = useState(false)

    const scrollWhyCarousel = (direction) => {
        if (!whyCarouselRef.current) return
        const cardWidth = 280 // approximate card width
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
        whyCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your interest! Our team will contact you shortly.')
        setFormData({ name: '', phone: '', email: '', institute: '' })
    }

    return (
        <div className="program-page">
            {/* Hero Section with Motion Graphics */}
            <section className="program-hero">
                {/* Motion Graphics Video Background */}
                <video
                    className="hero-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/motion_graphics6.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

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

            {/* Why Eduholic Section with Carousel */}
            <section className="why-section">
                <div className="container">
                    <h2 className="section-title">Why <span className="text-gradient">Eduholic?</span></h2>

                    {/* Carousel Container with Navigation */}
                    <div className="why-carousel-container">
                        <button
                            className="why-carousel-btn why-carousel-prev"
                            onClick={() => scrollWhyCarousel('left')}
                            aria-label="Previous"
                        >
                            ‹
                        </button>

                        <div
                            className={`why-cards-carousel ${whyCarouselPaused ? 'paused' : ''}`}
                            ref={whyCarouselRef}
                            onMouseEnter={() => setWhyCarouselPaused(true)}
                            onMouseLeave={() => setWhyCarouselPaused(false)}
                        >
                            <div className="why-cards-track">
                                {/* First set of cards */}
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
                                <div className="why-card">
                                    <div className="why-icon">📚</div>
                                    <h3>LMS Portal Access</h3>
                                    <p>24/7 access to learning materials and resources</p>
                                </div>
                                <div className="why-card">
                                    <div className="why-icon">🏆</div>
                                    <h3>Multiple Certifications</h3>
                                    <p>Earn recognition with valuable certificates</p>
                                </div>
                                {/* Duplicate cards for infinite scroll */}
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
                                <div className="why-card">
                                    <div className="why-icon">📚</div>
                                    <h3>LMS Portal Access</h3>
                                    <p>24/7 access to learning materials and resources</p>
                                </div>
                                <div className="why-card">
                                    <div className="why-icon">🏆</div>
                                    <h3>Multiple Certifications</h3>
                                    <p>Earn recognition with valuable certificates</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="why-carousel-btn why-carousel-next"
                            onClick={() => scrollWhyCarousel('right')}
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </section>

            {/* Overview Section - Premium Redesign */}
            <section className="overview-section-new">
                {/* Animated Background Elements */}
                <div className="overview-bg-animation">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                    <div className="floating-shape shape-4"></div>
                    <div className="floating-shape shape-5"></div>
                </div>

                <div className="container">
                    <h2 className="section-title overview-title-animated">
                        Overview of the <span className="text-gradient">Program</span>
                    </h2>
                    <p className="overview-subtitle">Discover what makes this program exceptional</p>

                    <div className="overview-cards-grid">
                        {program.overview.map((item, idx) => (
                            <div
                                key={idx}
                                className="overview-card-new"
                                style={{ animationDelay: `${idx * 0.15}s` }}
                            >
                                <div className="overview-card-glow"></div>
                                <div className="overview-card-content">
                                    <div className="overview-card-number">
                                        <span>{String(idx + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="overview-card-title">{item.question}</h3>
                                    <p className="overview-card-text">{item.answer}</p>
                                </div>
                                <div className="overview-card-border"></div>
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
                        {program.projects.map((project, idx) => {
                            // Get unique image based on project name
                            const projectImage = getProjectImage(project.name)
                            return (
                                <div key={idx} className="project-card" style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.9)), url(${projectImage})` }}>
                                    <div className="project-content">
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Certifications Section - Premium Animated */}
            <section className="certifications-section">
                {/* Animated Background */}
                <div className="cert-animated-bg">
                    <div className="cert-particle cert-p1"></div>
                    <div className="cert-particle cert-p2"></div>
                    <div className="cert-particle cert-p3"></div>
                    <div className="cert-particle cert-p4"></div>
                    <div className="cert-ring cert-ring-1"></div>
                    <div className="cert-ring cert-ring-2"></div>
                    <div className="cert-glow-orb"></div>
                </div>

                <div className="container">
                    <h2 className="section-title"><span className="text-gradient">Certifications</span></h2>
                    <p className="section-subtitle cert-subtitle">
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
                                <div className="plan-content">
                                    <h3 className="plan-name">{plan.plan}</h3>
                                    <div className="plan-price">{plan.price}</div>
                                    <ul className="plan-features">
                                        {plan.features.map((feature, fidx) => (
                                            <li key={fidx}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button
                                    className="btn btn-primary enroll-btn"
                                    onClick={() => {
                                        // Redirect to Razorpay based on plan type
                                        if (plan.plan.toLowerCase().includes('placement')) {
                                            window.open('https://rzp.io/rzp/T9H3q0OO', '_blank')
                                        } else {
                                            window.open('https://rzp.io/rzp/uZaBHOBo', '_blank')
                                        }
                                    }}
                                >Enroll Now</button>
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
                    <div className="alumni-companies-grid">
                        {alumniCompanies.map((logo, idx) => (
                            <div key={idx} className="company-card">
                                <img src={logo} alt={`Company ${idx + 1}`} className="company-logo" />
                            </div>
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


        </div>
    )
}

export default ProgramPage
