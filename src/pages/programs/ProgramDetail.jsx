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
                price: '₹5,000',
                plan: 'Self-Paced',
                features: ['Recorded Lectures', 'Real Time Projects', '4+ Hrs of Live Sessions', 'One On One Doubt Sessions', 'Certifications', 'Mentor Support', 'Placement Guidance', 'Interview Assistance']
            },
            {
                price: '₹9,000',
                plan: 'Mentor-Led',
                features: ['Recorded Lectures', 'Real Time Projects', '16+ Hrs of Live Sessions', 'One On One Doubt Sessions', 'Certifications', 'Mentor Support', 'Placement Guidance', 'Interview Assistance'],
                recommended: true
            },
            {
                price: '₹13,000',
                plan: 'Advanced',
                features: ['Recorded Lectures', 'Real Time Projects', '24+ Hrs of Live Sessions', 'One On One Doubt Sessions', 'Certifications', 'Mentor Support', 'Placement Guidance', 'Interview Assistance']
            }
        ],
        faqs: [
            {
                question: 'Do I need prior experience to join this program?',
                answer: 'No, our program is designed to take you from beginner to professional level. We cover all fundamentals and provide comprehensive training.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our self-paced and mentor led courses both last for a period of 2 months. Our advanced courses last for a period of 3 months.'
            },
            {
                question: 'Will Acmegrade help with placements?',
                answer: 'Acmegrade provides placement support for all students of our advanced courses. Students that perform well during their internship period will also get placement support.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Acmegrade guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later before starting the program.'
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
