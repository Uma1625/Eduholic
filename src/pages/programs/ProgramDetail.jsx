import { useParams } from 'react-router-dom'
import ProgramPage from '../../components/ProgramPage'
import { getProgram, programsData } from '../../data/programsData'

// Default program template for programs not in the data file
const createDefaultProgram = (slug) => {
    const title = slug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')

    return {
        id: slug,
        title: title,
        category: 'Professional Training',
        icon: '📚',
        color: '#667eea',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        stats: {
            duration: '2 Months',
            hours: '25+ Hours',
            students: '1 Lakh+',
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
                question: 'Why Acmegrade?',
                answer: 'At Acmegrade we place an emphasis on equipping our interns with the practical skills necessary to succeed. We provide hands-on experience with real projects and guidance from industry experts who are distinguished in their respective fields.'
            }
        ],
        curriculum: [
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
        projects: [
            { name: 'Capstone Project', description: 'Build a complete industry-standard project' },
            { name: 'Portfolio Project', description: 'Create professional portfolio pieces' },
            { name: 'Industry Project', description: 'Work on real-world industry problems' }
        ],
        pricing: [
            {
                price: '₹7,000',
                plan: 'Mentor Led Training',
                features: ['24+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support', 'LMS Portal Access', 'Internship Portal Access']
            },
            {
                price: '₹10,000',
                plan: 'Mentor Led + Placement Guidance',
                features: ['40+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support & Placement Guidance', 'LMS Portal Access', 'Internship Portal Access'],
                recommended: true
            }
        ],
        faqs: [
            {
                question: 'Do I need prior experience to join this program?',
                answer: 'No, our program is designed to take you from beginner to professional level. We cover all fundamentals and provide comprehensive training.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led courses last for 2 months with 24+ hours of live sessions, and our Placement Guidance courses also last for 2 months with 40+ hours of live sessions.'
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
