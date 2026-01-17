import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const programsData = {
    programs: [
        { id: 'internship', name: 'INTERNSHIP PROGRAM', icon: '📋', path: null },
        { id: 'placement', name: 'PLACEMENT PROVISION PROGRAM', icon: '🎯', path: '/placement' }
    ],
    branches: [
        { id: 'cse', name: 'CSE / IT', program: 'internship' },
        { id: 'ece', name: 'ECE / EEE', program: 'internship' },
        { id: 'mechanical', name: 'Mechanical', program: 'internship' },
        { id: 'civil', name: 'Civil', program: 'internship' },
        { id: 'management', name: 'Management & Business', program: 'internship' },
        { id: 'itdesign', name: 'IT & Design', program: 'internship' },
        { id: 'media', name: 'Media & Communication', program: 'internship' },
        { id: 'healthcare', name: 'Healthcare & Life Sciences', program: 'internship' },
        { id: 'jobguarantee', name: 'Job Guarantee Programs', program: 'placement' }
    ],
    domains: {
        cse: [
            { name: 'Cyber Security', path: '/programs/cyber-security' },
            { name: 'Data Analytics', path: '/programs/data-analytics' },
            { name: 'Web Development', path: '/programs/web-development' },
            { name: 'Machine Learning with Python', path: '/programs/machine-learning' },
            { name: 'Artificial Intelligence (AI)', path: '/programs/artificial-intelligence' },
            { name: 'Android Development', path: '/programs/android-development' },
            { name: 'Full Stack Web Development', path: '/programs/full-stack-web-development' }
        ],
        ece: [
            { name: 'Internet of Things (IoT)', path: '/programs/internet-of-things' },
            { name: 'Hybrid & Electric Vehicles', path: '/programs/hybrid-electric-vehicles' },
            { name: 'Embedded Systems', path: '/programs/embedded-systems' }
        ],
        mechanical: [
            { name: 'AutoCAD', path: '/programs/autocad' },
            { name: 'Hybrid & Electric Vehicles', path: '/programs/hybrid-electric-vehicles' }
        ],
        civil: [
            { name: 'AutoCAD', path: '/programs/autocad' },
            { name: 'Building Design & Construction Planning', path: '/programs/building-design-construction' }
        ],
        management: [
            { name: 'Digital Marketing', path: '/programs/digital-marketing' },
            { name: 'Stock Market & Cryptocurrency', path: '/programs/stock-market' },
            { name: 'Finance', path: '/programs/finance' },
            { name: 'Human Resources (HR)', path: '/programs/human-resources' },
            { name: 'Project Management', path: '/programs/project-management' },
            { name: 'Supply Chain & Logistics', path: '/programs/supply-chain-logistics' },
            { name: 'Business Analytics', path: '/programs/business-analytics' }
        ],
        itdesign: [
            { name: 'UI/UX Designing', path: '/programs/ui-ux-designing' },
            { name: 'Graphic Designing', path: '/programs/graphic-designing' }
        ],
        media: [
            { name: 'Content Writing', path: '/programs/content-writing' }
        ],
        healthcare: [
            { name: 'Medical Coding', path: '/programs/medical-coding' }
        ],
        jobguarantee: [
            { name: 'Full-Stack Web Development', path: '/job-guarantee/full-stack-web-development' },
            { name: 'Marketing & Digital Marketing', path: '/job-guarantee/digital-marketing' },
            { name: 'Human Resources', path: '/job-guarantee/human-resources' },
            { name: 'Flutter', path: '/job-guarantee/flutter' }
        ]
    }
}


const trainingPartners = [
    { name: 'Mood Indigo', subtitle: 'IIT Bombay' },
    { name: 'Chaos', subtitle: 'IIM Ahmedabad' }
]

function Header() {
    const location = useLocation()
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [selectedProgram, setSelectedProgram] = useState('internship')
    const [selectedBranch, setSelectedBranch] = useState('cse')
    const [isScrolled, setIsScrolled] = useState(false)

    // Mobile accordion states
    const [mobileExpandedProgram, setMobileExpandedProgram] = useState(null)
    const [mobileExpandedBranch, setMobileExpandedBranch] = useState(null)

    // Scroll detection for header background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    const filteredBranches = programsData.branches.filter(b => b.program === selectedProgram)
    const domains = programsData.domains[selectedBranch] || []

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Eduholic" className="logo-image" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    <div
                        className="nav-item has-dropdown"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <span className="nav-link">
                            Programs
                            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12">
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>

                        {/* Mega Menu */}
                        {isMegaMenuOpen && (
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    {/* Programs Column */}
                                    <div className="mega-col">
                                        <div className="mega-col-header">
                                            Program <span className="arrow">→</span>
                                        </div>
                                        <div className="mega-col-items">
                                            {programsData.programs.map(program => (
                                                program.path ? (
                                                    <Link
                                                        key={program.id}
                                                        to={program.path}
                                                        className={`mega-item ${selectedProgram === program.id ? 'active' : ''}`}
                                                        onMouseEnter={() => {
                                                            setSelectedProgram(program.id)
                                                            const firstBranch = programsData.branches.find(b => b.program === program.id)
                                                            if (firstBranch) setSelectedBranch(firstBranch.id)
                                                        }}
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                    >
                                                        <span className="mega-item-icon">{program.icon}</span>
                                                        <span>{program.name}</span>
                                                    </Link>
                                                ) : (
                                                    <div
                                                        key={program.id}
                                                        className={`mega-item ${selectedProgram === program.id ? 'active' : ''}`}
                                                        onMouseEnter={() => {
                                                            setSelectedProgram(program.id)
                                                            const firstBranch = programsData.branches.find(b => b.program === program.id)
                                                            if (firstBranch) setSelectedBranch(firstBranch.id)
                                                        }}
                                                    >
                                                        <span className="mega-item-icon">{program.icon}</span>
                                                        <span>{program.name}</span>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>

                                    {/* Branches Column */}
                                    <div className="mega-col">
                                        <div className="mega-col-header">
                                            Branch <span className="arrow">→</span>
                                        </div>
                                        <div className="mega-col-items">
                                            {filteredBranches.map(branch => (
                                                <div
                                                    key={branch.id}
                                                    className={`mega-item ${selectedBranch === branch.id ? 'active' : ''}`}
                                                    onMouseEnter={() => setSelectedBranch(branch.id)}
                                                >
                                                    <span>{branch.name}</span>
                                                    <span className="arrow">›</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Domains Column */}
                                    <div className="mega-col">
                                        <div className="mega-col-header">
                                            Domain <span className="arrow">↓</span>
                                        </div>
                                        <div className="mega-col-items domains">
                                            {domains.map((domain, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={domain.path}
                                                    className="domain-item"
                                                    onClick={() => setIsMegaMenuOpen(false)}
                                                >
                                                    {domain.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Certification & Recognition Footer */}
                                <div className="mega-footer">
                                    {/* Microsoft Entra ID Badge */}
                                    <div className="microsoft-entra-badge">
                                        <img src="/microsoft_logo.png" alt="Microsoft" className="microsoft-logo" />
                                        <div className="entra-content">
                                            <span className="entra-title">Powered by Microsoft Entra ID</span>
                                            <span className="entra-tagline">Industry-Focused Internships with Microsoft Entra ID–Verified Certification</span>
                                        </div>
                                    </div>

                                    {/* Startup India Badge */}
                                    <div className="startup-india-badge">
                                        <img src="/startup_logo.jpeg" alt="Startup India" className="startup-india-logo" />
                                        <div className="startup-content">
                                            <span className="startup-text">recognized by</span>
                                            <span className="startup-highlight">#StartupIndia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/aboutus" className={`nav-link ${location.pathname === '/aboutus' ? 'active' : ''}`}>
                        About Us
                    </Link>
                    <Link to="/careers" className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>
                        Careers
                    </Link>
                    <Link to="/contactus" className="btn btn-outline nav-btn">
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Mobile Navigation - Accordion Style */}
                <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

                    {/* Programs Accordion */}
                    <div className="mobile-accordion">
                        <div
                            className="mobile-accordion-header"
                            onClick={() => setMobileExpandedProgram(mobileExpandedProgram ? null : 'programs')}
                        >
                            <span>Programs</span>
                            <span className={`accordion-arrow ${mobileExpandedProgram ? 'open' : ''}`}>▼</span>
                        </div>

                        {mobileExpandedProgram && (
                            <div className="mobile-accordion-content">
                                {/* Internship Program */}
                                <div className="mobile-sub-accordion">
                                    <div
                                        className="mobile-sub-header"
                                        onClick={() => setMobileExpandedBranch(mobileExpandedBranch === 'internship' ? null : 'internship')}
                                    >
                                        <span>📋 Internship Program</span>
                                        <span className={`accordion-arrow ${mobileExpandedBranch === 'internship' ? 'open' : ''}`}>▼</span>
                                    </div>

                                    {mobileExpandedBranch === 'internship' && (
                                        <div className="mobile-domains-list">
                                            {programsData.branches
                                                .filter(b => b.program === 'internship')
                                                .map(branch => (
                                                    <div key={branch.id} className="mobile-branch-group">
                                                        <div className="mobile-branch-name">{branch.name}</div>
                                                        <div className="mobile-domain-links">
                                                            {programsData.domains[branch.id]?.map((domain, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    to={domain.path}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {domain.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}
                                </div>

                                {/* Placement Provision Program */}
                                <div className="mobile-sub-accordion">
                                    <div
                                        className="mobile-sub-header"
                                        onClick={() => setMobileExpandedBranch(mobileExpandedBranch === 'placement' ? null : 'placement')}
                                    >
                                        <span>🎯 Placement Provision Program</span>
                                        <span className={`accordion-arrow ${mobileExpandedBranch === 'placement' ? 'open' : ''}`}>▼</span>
                                    </div>

                                    {mobileExpandedBranch === 'placement' && (
                                        <div className="mobile-domains-list">
                                            <Link to="/placement" onClick={() => setIsMobileMenuOpen(false)}>
                                                View All Placement Programs
                                            </Link>
                                            {programsData.domains.jobguarantee?.map((domain, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={domain.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {domain.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                    <Link to="/contactus" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </nav>
            </div>
        </header >
    )
}

export default Header
