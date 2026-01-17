import { useParams, Link } from 'react-router-dom'
import './CategoryPrograms.css'

// Category data with programs - each program has a unique icon
const categoriesData = {
    'computer-science-it': {
        name: 'Computer Science & IT',
        icon: '💻',
        description: 'Master cutting-edge technologies and programming skills',
        programs: [
            { name: 'Cyber Security', path: '/programs/cyber-security', duration: '3 Months', icon: '🔐' },
            { name: 'Data Analytics', path: '/programs/data-analytics', duration: '3 Months', icon: '📊' },
            { name: 'Web Development', path: '/programs/web-development', duration: '3 Months', icon: '🌐' },
            { name: 'Machine Learning with Python', path: '/programs/machine-learning', duration: '3 Months', icon: '🤖' },
            { name: 'Artificial Intelligence (AI)', path: '/programs/artificial-intelligence', duration: '3 Months', icon: '🧠' },
            { name: 'Android Development', path: '/programs/android-development', duration: '3 Months', icon: '📱' },
            { name: 'Full Stack Web Development', path: '/programs/full-stack-web-development', duration: '3 Months', icon: '💻' }
        ]
    },
    'ece-eee': {
        name: 'ECE / EEE',
        icon: '⚡',
        description: 'Explore electronics and electrical engineering programs',
        programs: [
            { name: 'Internet of Things (IoT)', path: '/programs/internet-of-things', duration: '3 Months', icon: '📡' },
            { name: 'Hybrid & Electric Vehicles', path: '/programs/hybrid-electric-vehicles', duration: '3 Months', icon: '🚗' },
            { name: 'Embedded Systems', path: '/programs/embedded-systems', duration: '3 Months', icon: '🔌' }
        ]
    },
    'mechanical': {
        name: 'Mechanical',
        icon: '⚙️',
        description: 'Learn mechanical engineering tools and techniques',
        programs: [
            { name: 'AutoCAD', path: '/programs/autocad', duration: '3 Months', icon: '📐' },
            { name: 'Hybrid & Electric Vehicles', path: '/programs/hybrid-electric-vehicles', duration: '3 Months', icon: '🔋' }
        ]
    },
    'civil': {
        name: 'Civil',
        icon: '🏗️',
        description: 'Master civil engineering and construction skills',
        programs: [
            { name: 'AutoCAD', path: '/programs/autocad', duration: '3 Months', icon: '📏' },
            { name: 'Building Design & Construction', path: '/programs/building-design-construction', duration: '3 Months', icon: '🏠' }
        ]
    },
    'management-business': {
        name: 'Management & Business',
        icon: '📈',
        description: 'Develop business and management expertise',
        programs: [
            { name: 'Digital Marketing', path: '/programs/digital-marketing', duration: '3 Months', icon: '📣' },
            { name: 'Stock Market & Cryptocurrency', path: '/programs/stock-market', duration: '3 Months', icon: '📈' },
            { name: 'Finance', path: '/programs/finance', duration: '3 Months', icon: '💰' },
            { name: 'Human Resources (HR)', path: '/programs/human-resources', duration: '3 Months', icon: '👥' },
            { name: 'Project Management', path: '/programs/project-management', duration: '3 Months', icon: '📋' },
            { name: 'Supply Chain & Logistics', path: '/programs/supply-chain-logistics', duration: '3 Months', icon: '🚚' },
            { name: 'Business Analytics', path: '/programs/business-analytics', duration: '3 Months', icon: '📉' }
        ]
    },
    'it-design': {
        name: 'IT & Design',
        icon: '🎨',
        description: 'Creative design and user experience programs',
        programs: [
            { name: 'UI/UX Designing', path: '/programs/ui-ux-designing', duration: '3 Months', icon: '🎯' },
            { name: 'Graphic Designing', path: '/programs/graphic-designing', duration: '3 Months', icon: '🖌️' }
        ]
    },
    'media-communication': {
        name: 'Media & Communication',
        icon: '✍️',
        description: 'Content creation and communication skills',
        programs: [
            { name: 'Content Writing', path: '/programs/content-writing', duration: '3 Months', icon: '✏️' }
        ]
    },
    'healthcare-life-sciences': {
        name: 'Healthcare & Life Sciences',
        icon: '🏥',
        description: 'Healthcare and medical industry programs',
        programs: [
            { name: 'Medical Coding', path: '/programs/medical-coding', duration: '3 Months', icon: '🩺' }
        ]
    }
}

function CategoryPrograms() {
    const { slug } = useParams()
    const category = categoriesData[slug]

    if (!category) {
        return (
            <div className="category-not-found">
                <h1>Category Not Found</h1>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        )
    }

    return (
        <div className="category-programs-page">
            {/* Hero Section with Motion Graphics */}
            <section className="category-hero">
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
                    <div className="category-hero-content">
                        <span className="category-icon-large">{category.icon}</span>
                        <h1 className="category-title">{category.name}</h1>
                        <p className="category-description">{category.description}</p>
                        <span className="programs-count">{category.programs.length} Programs Available</span>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="programs-section">
                <div className="container">
                    <h2 className="section-title">
                        Available <span className="text-gradient">Programs</span>
                    </h2>
                    <div className="programs-grid">
                        {category.programs.map((program, idx) => (
                            <Link key={idx} to={program.path} className="program-card">
                                <span className="program-icon">{program.icon}</span>
                                <div className="program-content">
                                    <h3 className="program-name">{program.name}</h3>
                                    <span className="program-duration">{program.duration}</span>
                                </div>
                                <span className="program-arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CategoryPrograms
