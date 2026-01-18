import { useParams } from 'react-router-dom'
import ProgramPage from '../../components/ProgramPage'
import { getProgram, programsData } from '../../data/programsData'

// Icon mapping for all programs - ensures unique icons for each domain
const programIcons = {
    // Computer Science & IT
    'cyber-security': '🔐',
    'data-analytics': '📊',
    'web-development': '🌐',
    'machine-learning': '🤖',
    'artificial-intelligence': '🧠',
    'android-development': '📱',
    'full-stack-web-development': '💻',
    'data-science': '📈',

    // ECE / EEE
    'internet-of-things': '📡',
    'hybrid-electric-vehicles': '🚗',
    'embedded-systems': '🔌',

    // Mechanical
    'autocad': '📐',

    // Civil
    'building-design-construction': '🏠',

    // Management & Business
    'digital-marketing': '📣',
    'stock-market': '💹',
    'finance': '💰',
    'human-resources': '👥',
    'project-management': '📋',
    'supply-chain-logistics': '🚚',
    'business-analytics': '📉',

    // IT & Design
    'ui-ux-designing': '🎯',
    'graphic-designing': '🖌️',

    // Media & Communication
    'content-writing': '✏️',

    // Healthcare & Life Sciences
    'medical-coding': '🩺',

    // Job Guarantee Programs
    'fullstack-jg': '💻',
    'flutter': '📲'
}

// Special title mappings for programs that need custom formatting
const specialTitles = {
    'ui-ux-designing': 'UI/UX Designing',
    'iot': 'IoT',
    'autocad': 'AutoCAD'
}

// Default program template for programs not in the data file
const createDefaultProgram = (slug) => {
    // Check for special title mapping first
    let title = specialTitles[slug]

    // If no special title, generate from slug
    if (!title) {
        title = slug.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
    }

    // Get unique icon from mapping or fallback to a category-based default
    const icon = programIcons[slug] || '📚'

    // Domain-specific curricula for programs not on Eduholic.com
    const domainCurricula = {
        'ui-ux-designing': [
            { module: 'Introduction to UI/UX Design', topics: ['What is Design?', 'UI vs UX Distinction', 'Design Thinking Methodology', 'User-Centered Design Principles'] },
            { module: 'User Research & Analysis', topics: ['User Interviews & Surveys', 'User Personas Creation', 'User Journey Mapping', 'Empathy Maps', 'Competitor Analysis'] },
            { module: 'Information Architecture', topics: ['Structuring Content', 'User Flows & Task Flows', 'Wireframing Techniques', 'Low & High Fidelity Prototyping'] },
            { module: 'Visual Design Principles', topics: ['Color Theory & Psychology', 'Typography Fundamentals', 'Layout & Composition', 'Grid Systems', 'Visual Hierarchy'] },
            { module: 'UI Design & Tools', topics: ['Figma Mastery', 'Adobe XD', 'Design Systems', 'Component Libraries', 'Responsive Design'] },
            { module: 'Usability Testing', topics: ['Usability Testing Methods', 'Heuristic Evaluation', 'A/B Testing', 'Gathering User Feedback', 'Design Iteration'] },
            { module: 'Professional Development', topics: ['Portfolio Development', 'Case Study Creation', 'Industry Best Practices', 'Accessibility (WCAG)'] }
        ],
        'graphic-designing': [
            { module: 'Design Foundations', topics: ['Introduction to Graphic Design', 'Design History & Movements', 'Art & Visual Perception', 'Design Elements & Principles'] },
            { module: 'Color Theory & Typography', topics: ['Color Wheel & Harmony', 'Color Psychology', 'Typography Fundamentals', 'Font Pairing & Hierarchy'] },
            { module: 'Adobe Photoshop', topics: ['Interface & Tools', 'Image Editing & Retouching', 'Layer Management', 'Photo Manipulation', 'Effects & Filters'] },
            { module: 'Adobe Illustrator', topics: ['Vector Graphics Basics', 'Shape Tools & Pathfinder', 'Pen Tool Mastery', 'Logo Design', 'Icon Design'] },
            { module: 'Adobe InDesign', topics: ['Page Layout Design', 'Publication Design', 'Brochure & Magazine Design', 'Print Production'] },
            { module: 'Branding & Identity', topics: ['Logo Design Process', 'Brand Identity Systems', 'Style Guides', 'Corporate Identity Design'] },
            { module: 'Portfolio Development', topics: ['Building Your Portfolio', 'Case Study Presentation', 'Freelancing Skills', 'Client Communication'] }
        ],
        'content-writing': [
            { module: 'Introduction to Content Writing', topics: ['What is Content Writing?', 'Content Writing Life Cycle', 'Content vs Copywriting', 'Understanding Your Audience'] },
            { module: 'Writing Fundamentals', topics: ['Grammar & Mechanics', 'Paragraph Construction', 'Tone & Voice Development', 'Storytelling Techniques'] },
            { module: 'Content Types', topics: ['Blog Writing', 'Website Content', 'Social Media Content', 'Email Marketing', 'Product Descriptions'] },
            { module: 'SEO for Content Writers', topics: ['Introduction to SEO', 'Keyword Research', 'On-Page SEO', 'Meta Descriptions & Titles', 'Content Optimization'] },
            { module: 'Research & Strategy', topics: ['Content Research Methods', 'Content Marketing Strategy', 'Audience Analysis', 'Content Calendar Planning'] },
            { module: 'Tools & Technologies', topics: ['Grammarly & Editing Tools', 'SEO Tools (Yoast, SurferSEO)', 'WordPress Publishing', 'Analytics Tools'] },
            { module: 'Professional Development', topics: ['Portfolio Creation', 'Freelancing Skills', 'Client Pitching', 'Building Your Brand'] }
        ],
        'medical-coding': [
            { module: 'Medical Terminology', topics: ['Medical Term Structure', 'Prefixes & Suffixes', 'Root Words', 'Pronunciation & Spelling'] },
            { module: 'Anatomy & Physiology', topics: ['Human Body Systems', 'Diseases & Treatments', 'Medical Documentation', 'Clinical Procedures'] },
            { module: 'ICD-10-CM Coding', topics: ['ICD-10-CM Overview', 'Coding Guidelines', 'Diagnosis Coding', 'Conventions & Rules'] },
            { module: 'CPT Coding', topics: ['CPT Code Structure', 'Evaluation & Management', 'Surgical Coding', 'Medicine Section'] },
            { module: 'HCPCS Level II', topics: ['HCPCS Overview', 'Durable Medical Equipment', 'Supplies Coding', 'Modifiers'] },
            { module: 'Specialty Coding', topics: ['Surgery Sections', 'Radiology Coding', 'Pathology & Laboratory', 'Anesthesia Coding'] },
            { module: 'Revenue Cycle Management', topics: ['Healthcare Reimbursement', 'Insurance Claims', 'Compliance & Ethics', 'CPC Exam Preparation'] }
        ],
        'project-management': [
            { module: 'Introduction to Project Management', topics: ['Project Management Fundamentals', 'Role of a Project Manager', 'Project Life Cycle', 'Project Selection Methods'] },
            { module: 'People Domain', topics: ['Team Building & Leadership', 'Conflict Management', 'Stakeholder Engagement', 'Communication Skills', 'Coaching & Mentoring'] },
            { module: 'Process Domain', topics: ['Project Planning', 'Scope Management', 'Schedule Management', 'Cost & Budget Management', 'Quality Management'] },
            { module: 'Risk & Procurement', topics: ['Risk Identification', 'Risk Analysis & Response', 'Procurement Management', 'Vendor Management'] },
            { module: 'Agile Methodologies', topics: ['Agile Principles', 'Scrum Framework', 'Kanban', 'Hybrid Approaches', 'Sprint Planning'] },
            { module: 'Tools & Techniques', topics: ['WBS & Gantt Charts', 'Project Management Software', 'Resource Allocation', 'Performance Metrics'] },
            { module: 'PMP Exam Preparation', topics: ['Business Environment Domain', 'Exam Content Outline', 'Practice Questions', 'Certification Process'] }
        ],
        'supply-chain-logistics': [
            { module: 'Supply Chain Fundamentals', topics: ['Introduction to Supply Chain', 'Supply Chain Components', 'Value Chain Analysis', 'Supply Chain Strategy'] },
            { module: 'Logistics Management', topics: ['Transportation Management', 'Warehousing Operations', 'Distribution Networks', 'Fleet Management'] },
            { module: 'Inventory Management', topics: ['Inventory Control Methods', 'Demand Forecasting', 'Safety Stock Planning', 'JIT & Lean Principles'] },
            { module: 'Procurement & Sourcing', topics: ['Supplier Selection', 'Contract Negotiation', 'Vendor Management', 'Strategic Sourcing'] },
            { module: 'Technology in Supply Chain', topics: ['ERP Systems', 'SCM Software', 'Blockchain in Supply Chain', 'IoT Applications'] },
            { module: 'Global Supply Chain', topics: ['International Trade', 'Customs & Regulations', 'Risk Management', 'Sustainability Practices'] }
        ],
        'building-design-construction': [
            { module: 'Introduction to Building Design', topics: ['Fundamentals of Construction', 'Building Types & Classifications', 'Design Process Overview', 'Safety Standards'] },
            { module: 'AutoCAD for Construction', topics: ['AutoCAD Basics', '2D Drafting', 'Floor Plans', 'Elevations & Sections', 'Construction Drawings'] },
            { module: 'Structural Design', topics: ['Load Calculations', 'Foundation Design', 'Structural Elements', 'RCC Design Basics'] },
            { module: 'Building Materials', topics: ['Cement & Concrete', 'Steel & Iron', 'Bricks & Blocks', 'Sustainable Materials'] },
            { module: 'Estimation & Costing', topics: ['Quantity Estimation', 'Rate Analysis', 'Project Costing', 'Tender Documentation'] },
            { module: 'Project Planning', topics: ['Construction Planning', 'Resource Management', 'Timeline Development', 'Quality Control'] }
        ],
        'business-analytics': [
            { module: 'Introduction to Business Analytics', topics: ['What is Business Analytics?', 'Types of Analytics', 'Data-Driven Decision Making', 'Analytics in Business'] },
            { module: 'Data Collection & Preparation', topics: ['Data Sources', 'Data Cleaning', 'Data Transformation', 'ETL Processes'] },
            { module: 'Statistical Analysis', topics: ['Descriptive Statistics', 'Probability Distributions', 'Hypothesis Testing', 'Regression Analysis'] },
            { module: 'Data Visualization', topics: ['Visualization Principles', 'Excel Charts', 'Tableau', 'Power BI Dashboards'] },
            { module: 'Predictive Analytics', topics: ['Forecasting Methods', 'Machine Learning Basics', 'Classification Models', 'Clustering Techniques'] },
            { module: 'Business Intelligence', topics: ['BI Tools', 'Report Generation', 'KPIs & Metrics', 'Data Storytelling'] }
        ]
    }

    // Domain-specific projects
    const domainProjects = {
        'ui-ux-designing': [
            { name: 'Mobile App Redesign', description: 'Complete UI/UX redesign of a mobile application' },
            { name: 'E-commerce Website', description: 'Design user experience for an online shopping platform' },
            { name: 'Dashboard Design', description: 'Create data visualization dashboard UI' }
        ],
        'graphic-designing': [
            { name: 'Brand Identity Package', description: 'Complete branding for a startup including logo, colors, and guidelines' },
            { name: 'Social Media Campaign', description: 'Design posts and stories for a marketing campaign' },
            { name: 'Publication Design', description: 'Create magazine layout or brochure design' }
        ],
        'content-writing': [
            { name: 'Blog Series', description: 'Write a series of SEO-optimized blog posts' },
            { name: 'Website Copy', description: 'Create complete website content for a business' },
            { name: 'Content Strategy', description: 'Develop content marketing strategy with calendar' }
        ],
        'medical-coding': [
            { name: 'Case Study Coding', description: 'Code medical records using ICD-10-CM and CPT' },
            { name: 'Audit Project', description: 'Perform coding audit and compliance check' },
            { name: 'CPC Practice Test', description: 'Complete mock CPC certification exam' }
        ],
        'project-management': [
            { name: 'Project Plan Development', description: 'Create comprehensive project plan with WBS' },
            { name: 'Agile Sprint Simulation', description: 'Run simulated sprints with Scrum methodology' },
            { name: 'Risk Management Plan', description: 'Develop risk register and mitigation strategies' }
        ],
        'supply-chain-logistics': [
            { name: 'Supply Chain Optimization', description: 'Analyze and optimize supply chain network' },
            { name: 'Inventory Management System', description: 'Design inventory control system' },
            { name: 'Logistics Planning', description: 'Create distribution and logistics plan' }
        ],
        'building-design-construction': [
            { name: 'Residential Building Design', description: 'Complete AutoCAD drawings for a house' },
            { name: 'Project Estimation', description: 'Prepare detailed quantity estimation and costing' },
            { name: 'Construction Planning', description: 'Develop project timeline and resource plan' }
        ],
        'business-analytics': [
            { name: 'Sales Analytics Dashboard', description: 'Build interactive sales dashboard in Power BI' },
            { name: 'Customer Segmentation', description: 'Perform customer segmentation analysis' },
            { name: 'Forecasting Model', description: 'Develop sales forecasting model' }
        ]
    }

    return {
        id: slug,
        title: title,
        category: 'Professional Training',
        icon: icon,
        color: '#667eea',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        stats: {
            duration: '3 Months',
            hours: '25+ Hours',
            students: '10000+',
            experts: '50+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: `What is ${title}?`,
                answer: `${title} is a comprehensive training program designed to equip you with industry-relevant skills and practical knowledge. This program combines theoretical foundations with hands-on projects to prepare you for a successful career.`
            },
            {
                question: `Is ${title} a good career choice?`,
                answer: `Yes! Professionals with ${title} skills are in high demand across industries. This field offers excellent career prospects and competitive salaries for skilled practitioners.`
            },
            {
                question: 'Why Eduholic?',
                answer: 'At Eduholic we place an emphasis on equipping our interns with the practical skills necessary to succeed. We provide hands-on experience with real projects and guidance from industry experts who are distinguished in their respective fields.'
            }
        ],
        curriculum: domainCurricula[slug] || [
            {
                module: 'Foundation & Fundamentals',
                topics: ['Introduction to the Field', 'Core Concepts', 'Basic Principles', 'Industry Overview']
            },
            {
                module: 'Essential Tools & Technologies',
                topics: ['Required Software', 'Industry Tools', 'Best Practices', 'Setup & Configuration']
            },
            {
                module: 'Core Skills Development',
                topics: ['Practical Techniques', 'Problem Solving', 'Real-world Applications', 'Case Studies']
            },
            {
                module: 'Advanced Concepts',
                topics: ['Complex Topics', 'Industry Standards', 'Professional Practices', 'Expert Techniques']
            },
            {
                module: 'Project Work',
                topics: ['Live Projects', 'Portfolio Development', 'Industry Exposure', 'Mentorship']
            }
        ],
        projects: domainProjects[slug] || [
            { name: 'Capstone Project', description: 'Build a complete industry-standard project' },
            { name: 'Portfolio Project', description: 'Create professional portfolio pieces' },
            { name: 'Industry Project', description: 'Work on real-world industry problems' }
        ],
        pricing: [
            {
                price: '₹7,000',
                plan: 'Mentor Led Training',
                features: ['24+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support', 'LMS Portal Access', 'Internship Portal Access'],
                recommended: true
            },
            {
                price: '₹10,000',
                plan: 'Mentor Led + Placement Guidance',
                features: ['40+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support & Placement Guidance', 'LMS Portal Access', 'Internship Portal Access']
            }
        ],
        faqs: [
            {
                question: 'Do I need prior experience to join this program?',
                answer: 'No, our program is designed to take you from beginner to professional level. We cover all fundamentals and provide comprehensive training.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led programs last for 3 months with 24+ hours of live sessions, and our Placement Guidance programs also last for 3 months with 40+ hours of live sessions.'
            },
            {
                question: 'Will Eduholic help with placements?',
                answer: 'Yes, Eduholic provides placement guidance and support for students in our Mentor Led + Placement Guidance plan.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic provides access to the Internship Portal where you can access stipend-based internships in the third month.'
            },
            {
                question: 'Can I pay the fee in installments?',
                answer: 'Yes, you can book your slot by paying ₹1000 as pre-registration and the remaining amount can be paid later before starting the program.'
            }
        ]
    }
}

function ProgramDetail() {
    const { programSlug } = useParams()

    // Try to get program from data, otherwise create default
    let program = getProgram(programSlug)
    if (!program) {
        program = createDefaultProgram(programSlug)
    }

    return <ProgramPage program={program} />
}

export default ProgramDetail
