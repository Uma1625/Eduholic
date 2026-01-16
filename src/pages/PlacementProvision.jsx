import { Link } from 'react-router-dom'
import './PlacementProvision.css'

// Job Guarantee Programs data
const jobGuaranteePrograms = [
    {
        id: 'full-stack-web-development',
        title: 'Full-Stack Web Development',
        icon: '💻',
        description: 'Master frontend and backend development with guaranteed job placement',
        duration: '6 Months',
        features: ['MERN Stack', 'Real Projects', '100% Placement']
    },
    {
        id: 'digital-marketing',
        title: 'Marketing & Digital Marketing',
        icon: '📈',
        description: 'Learn SEO, Social Media, PPC and more with job guarantee',
        duration: '4 Months',
        features: ['SEO & SEM', 'Social Media', '100% Placement']
    },
    {
        id: 'human-resources',
        title: 'Human Resources',
        icon: '👥',
        description: 'Comprehensive HR training with guaranteed placement',
        duration: '4 Months',
        features: ['HR Analytics', 'Recruitment', '100% Placement']
    },
    {
        id: 'flutter',
        title: 'Flutter',
        icon: '📱',
        description: 'Build cross-platform mobile apps with Flutter',
        duration: '5 Months',
        features: ['Dart & Flutter', 'iOS & Android', '100% Placement']
    }
]


function PlacementProvision() {
    return (
        <div className="placement-provision-page">
            {/* Hero Section with Motion Graphics */}
            <section className="placement-hero">
                <video
                    className="hero-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/motion_graphics8.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>

                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Placement Provision <span className="text-gradient">Programs</span>
                        </h1>
                        <p className="hero-subtitle">
                            Launch your career with our industry-recognized programs featuring
                            guaranteed job placements and professional certifications
                        </p>
                    </div>
                </div>
            </section>

            {/* Job Guarantee Programs Section */}
            <section className="programs-section job-guarantee-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="title-icon">🎯</span>
                            Job Guarantee <span className="text-gradient">Programs</span>
                        </h2>
                        <p className="section-description">
                            Get 100% job placement guarantee with our intensive training programs
                        </p>
                    </div>
                    <div className="programs-grid">
                        {jobGuaranteePrograms.map((program) => (
                            <Link
                                key={program.id}
                                to={`/job-guarantee/${program.id}`}
                                className="program-card job-guarantee-card"
                            >
                                <div className="card-icon">{program.icon}</div>
                                <h3 className="card-title">{program.title}</h3>
                                <p className="card-description">{program.description}</p>
                                <div className="card-meta">
                                    <span className="duration">
                                        <span className="meta-icon">⏱️</span>
                                        {program.duration}
                                    </span>
                                </div>
                                <div className="card-features">
                                    {program.features.map((feature, idx) => (
                                        <span key={idx} className="feature-tag">{feature}</span>
                                    ))}
                                </div>
                                <div className="card-cta">
                                    <span>Learn More</span>
                                    <span className="arrow">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Launch Your Career?</h2>
                        <p>Join thousands of successful professionals who started their journey with us</p>
                        <div className="cta-stats">
                            <div className="stat">
                                <span className="stat-value">10,000+</span>
                                <span className="stat-label">Placed Students</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">500+</span>
                                <span className="stat-label">Hiring Partners</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">95%</span>
                                <span className="stat-label">Placement Rate</span>
                            </div>
                        </div>
                        <Link to="/contactus" className="cta-button">
                            Get Free Counselling
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PlacementProvision
