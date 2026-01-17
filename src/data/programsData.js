// Program data for all internship programs
export const programsData = {
    'machine-learning': {
        id: 'machine-learning',
        title: 'Machine Learning',
        category: 'Computer Science & IT',
        icon: '🤖',
        color: '#667eea',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        stats: {
            duration: '3 Months',
            hours: '25+ Hours',
            students: '1 Lakh+',
            experts: '50+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'Why is machine learning becoming so important?',
                answer: 'In the past Decade, the growth and implementation of Artificial Intelligence has been immense, one of the major contributors to this has been the study of algorithms, or machine learning. It is an entirely data driven concept that analyses user behavior and business operational patterns regardless of the field it is applied in.'
            },
            {
                question: 'Is a career in machine learning rewarding?',
                answer: 'Machine Learning engineers are among the highest paid professionals in the tech industry. Senior ML engineers can earn upwards of rupees 1 crore per annum. In order to get into this field as a profession, you will need to possess the necessary skills, as well as a level of exposure to the industry.'
            },
            {
                question: 'Why Eduholic?',
                answer: 'At Eduholic we place an emphasis on equipping our interns with the practical skills necessary to succeed. This doesn\'t mean however, that the subject\'s theory is exempted from our course. We will teach you the necessary theoretical concepts and practical skills to succeed. We will also let you get hands-on experience from our top associated mentors who are distinguished in their respective fields.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction to Programming',
                topics: ['Course Introduction', 'Programming Basics']
            },
            {
                module: 'Introduction to Python',
                topics: ['Python Basics', 'Scope of Python', 'Python Data Structures', 'Python Programming Fundamentals', 'Working with Data in Python']
            },
            {
                module: 'Advanced Concepts of Python',
                topics: ['Error handling', 'Object Oriented Programming concepts', 'Regular Expressions', 'Decorators']
            },
            {
                module: 'Analysing Data with Python',
                topics: ['Reading and writing data with pandas', 'Data frames and data summarisation', 'Numpy array operations', 'Numerical computing with Numpy']
            },
            {
                module: 'Introduction to Machine Learning',
                topics: ['Decoding Artificial Intelligence', 'Fundamentals of Machine Learning', 'Types of machine learning', 'Machine Learning Workflow', 'Performance Metrics', 'Supervised vs unsupervised learning', 'Classification vs regression']
            },
            {
                module: 'Machine Learning Algorithms',
                topics: ['Introduction to ML algorithms', 'Types of ML algorithms', 'Machine learning techniques', 'Machine learning approaches']
            },
            {
                module: 'Overview of Common Algorithms',
                topics: ['Linear Regression', 'Logistic Regression', 'Decision Tree', 'Support vector machine (SVM)', 'Naive Bayes', 'kNN', 'K-Means', 'Random Forest', 'Dimensionality Reduction', 'Gradient Boosting']
            },
            {
                module: 'Natural Language Processing',
                topics: ['What is natural language?', 'Natural Language Toolkits (NLTK)', 'Stopwords', 'Stemming', 'Lemmatization', 'Sentiment analysis', 'Naive and Bayes']
            },
            {
                module: 'Pre-processing',
                topics: ['What is pre-processing?', 'Preprocessing with python', 'Importing datasets', 'Resolving missing values', 'Managing category variables', 'Testing datasets', 'Normalizing Variables']
            },
            {
                module: 'Regression',
                topics: ['Regression in machine learning', 'Simple linear regression', 'Multiple linear regression', 'Decision trees', 'Random Forest']
            },
            {
                module: 'Statistics',
                topics: ['Probability & distribution', 'Central limit theorem', 'Hypothesis testing', 'Categorical data']
            },
            {
                module: 'Classification',
                topics: ['kNN introduction & practical', 'SVM introduction & practical', 'Decision tree classifier', 'Random forest classifier in python']
            }
        ],
        projects: [
            { name: 'Face Detection', description: 'Build a face detection system using OpenCV and ML algorithms' },
            { name: 'Music Recommendation', description: 'Create a music recommendation system based on user preferences' },
            { name: 'Movie Recommendation', description: 'Develop a movie recommendation engine using collaborative filtering' },
            { name: 'Breast Cancer Detection', description: 'Build a classification model to detect breast cancer' },
            { name: 'Walmart Sales Prediction', description: 'Predict sales using regression techniques' }
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
                question: 'Do I need knowledge in computer science to join this program?',
                answer: 'No, at Eduholic we teach you all the important concepts surrounding machine learning from scratch, train you in the necessary skills, and provide you with an internship to make sure you get the necessary industry exposure.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led programs last for a period of 3 months. All programs include comprehensive training and hands-on projects.'
            },
            {
                question: 'Will Eduholic help with placements?',
                answer: 'Eduholic provides placement support for all students of our advanced courses. Students that perform well during their internship period in our self-paced and mentor led courses will also get placement support.'
            },
            {
                question: 'What kind of companies hire machine learning engineers?',
                answer: 'ML engineers are hired by Global MNCs like Amazon, Microsoft, General Electric, Accenture, Alibaba etc and are very valuable to the companies.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later before starting the program.'
            }
        ]
    },
    'cyber-security': {
        id: 'cyber-security',
        title: 'Cyber Security',
        category: 'Computer Science & IT',
        icon: '🔐',
        color: '#dc2626',
        gradient: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is Cyber Security?',
                answer: 'Cyber security is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.'
            },
            {
                question: 'Why is Cyber Security important?',
                answer: 'With the increasing reliance on technology and the internet, organizations and individuals are at greater risk of cyber attacks. Cyber security helps protect sensitive data, ensures business continuity, and maintains trust with customers and stakeholders.'
            },
            {
                question: 'Why Eduholic for Cyber Security?',
                answer: 'At Eduholic, we provide hands-on training with real-world scenarios, covering ethical hacking, penetration testing, and security analysis. Our expert mentors guide you through practical projects to build industry-ready skills.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['Networking concepts overview', 'What is cyber security?', 'Why is cyber security so important?', 'Cyber security roles in an organization', 'Key cybersecurity processes']
            },
            {
                module: 'Cybersecurity Fundamentals',
                topics: ['Introduction To cybersecurity', 'Fundamentals of cybersecurity', 'Threats, attacks and mitigation']
            },
            {
                module: 'Concepts of Information Security',
                topics: ['Introduction', 'Governance of information security', 'Types of attacks and Security measures', 'Information security programs']
            },
            {
                module: 'Operating System',
                topics: ['What is an operating system?', 'Introduction to Kernels', 'BIOS', 'Functions of BIOS', 'Architecture of OS']
            },
            {
                module: 'Ethical Hacking',
                topics: ['What is Hacking?', 'Who is a Hacker?', 'Skills of a Hacker', 'Types of Hackers', 'Reasons for Hacking', 'Who are at the risk of hacking attacks?', 'Effects of Computer Hacking on an organization', 'The Security, Functionality & Usability Triangle', 'What is Ethical Hacking?', 'Why is Ethical Hacking Necessary?', 'Scope & Limitations of Ethical Hacking']
            },
            {
                module: 'Foot Printing & Reconnaissance',
                topics: ['What is Footprinting', 'Objectives of Footprinting', 'Finding a company\'s details', 'Finding a company\'s domain name', 'Finding a company\'s Internal URLs', 'Finding a company\'s Server details', 'Finding the details of domain registration', 'Finding the range of IP Address', 'Finding the DNS information', 'Finding the location of servers', 'Traceroute analysis', 'Tracking email communications']
            },
            {
                module: 'Scanning',
                topics: ['What is network scanning?', 'Objectives of network scanning', 'Finding the live hosting a network', 'SNMP Enumeration', 'SMTP Enumeration', 'DNS Enumeration', 'Finding open ports on a server', 'Finding the services on a server', 'OS fingerprinting', 'Server Banner grabbing tools', 'What is Vulnerability Scanning?', 'What is a proxy server?', 'How does a proxy server work?', 'Why do hackers use proxy servers?', 'What is a TOR network?', 'Why hackers prefer to use TOR networks']
            },
            {
                module: 'Hacking & Web Server Applications',
                topics: ['What is a web server?', 'Different web server applications', 'Why are web servers hacked & its consequences?', 'Directory traversal attacks', 'Website defacement', 'Website password brute forcing']
            },
            {
                module: 'Cross-site Scripting',
                topics: ['Persistent XSS', 'Reflected XSS', 'DOM-based XSS']
            },
            {
                module: 'SQL Injection',
                topics: ['What is SQL Injection', 'Effects of SQL Injection', 'Types of SQL Injection attacks', 'SQL Injection detection tools']
            }
        ],
        projects: [
            { name: 'Web Application Penetration Testing', description: 'Perform comprehensive security testing on web applications to identify vulnerabilities' },
            { name: 'Man in the Middle Attack', description: 'Simulate and understand MITM attacks in a controlled environment' },
            { name: 'Hack into Windows Target Machine', description: 'Learn exploitation techniques on Windows systems ethically' },
            { name: 'Perform MITM on Windows Machine', description: 'Execute man-in-the-middle attacks on Windows networks' },
            { name: 'Mock Site Ethical Hacking', description: 'Practice ethical hacking on a mock website with real vulnerabilities' }
        ],
        pricing: [
            {
                name: 'Mentor Led Training',
                price: 7000,
                features: ['40+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support', 'LMS Portal Access', 'Internship Portal Access']
            },
            {
                name: 'Mentor Led + Placement Guidance',
                price: 10000,
                features: ['40+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support & Placement Guidance', 'LMS Portal Access', 'Internship Portal Access']
            }
        ],
        faqs: [
            {
                question: 'Do I need prior coding knowledge for Cyber Security?',
                answer: 'Basic understanding of programming and networking concepts is helpful but not mandatory. We cover fundamentals in the initial modules.'
            },
            {
                question: 'What tools will I learn?',
                answer: 'You will learn industry-standard tools like Nmap, Wireshark, Metasploit, Burp Suite, and various other penetration testing tools.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later before starting the program.'
            }
        ]
    },
    'data-analytics': {
        id: 'data-analytics',
        title: 'Data Analytics',
        category: 'Computer Science & IT',
        icon: '📊',
        color: '#8b5cf6',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is Data Analytics?',
                answer: 'Data Analytics is the science of analyzing raw data to make conclusions about information. It involves applying algorithms and statistical analysis to data sets to identify trends, patterns, and relationships.'
            },
            {
                question: 'Why is Data Analytics important?',
                answer: 'Data Analytics helps organizations make data-driven decisions, optimize operations, understand customer behavior, predict future trends, and gain competitive advantage in the market.'
            },
            {
                question: 'Why Eduholic for Data Analytics?',
                answer: 'At Eduholic, we provide comprehensive training covering Python, data visualization, machine learning, and statistics with hands-on projects on real datasets. Our expert mentors guide you through industry-relevant skills.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['What is data science?', 'Applications & uses of data science', 'Relation between data science, AI & machine learning']
            },
            {
                module: 'Introduction to Python',
                topics: ['Understanding Python', 'Data types, list, dictionary', 'Array, string operations', 'Conditions and loops']
            },
            {
                module: 'Fundamental of Python',
                topics: ['Inbuilt and user defined functions', 'IO, Excel and DB operations', 'Error Handling', 'OOPs and Regular Expressions', 'Scope of Python', 'Decorators']
            },
            {
                module: 'Data Analysis',
                topics: ['Data Visualization', 'Building a data visualization library', 'Numpy', 'Pandas', 'Matplot and seaborn libraries']
            },
            {
                module: 'Introduction to Machine Learning',
                topics: ['Decoding Artificial Intelligence', 'Fundamentals of Machine Learning', 'Types of machine learning']
            },
            {
                module: 'Tools Required for Data Science',
                topics: ['Training, Testing', 'Cross validation Data Pickling', 'Scaling Technique', 'Error Metrics Features and label']
            },
            {
                module: 'Machine Learning in Data Science',
                topics: ['Performance Metrics', 'Understanding Algorithms', 'Implementation of algorithms']
            },
            {
                module: 'Supervised vs Unsupervised Learning',
                topics: ['Classification vs regression', 'Support vector machine', 'K-means clustering', 'Random forest linear']
            },
            {
                module: 'Deriving Insights from Data Sets',
                topics: ['Introduction to Joins', 'Working with geodata & what-ifs parameters', 'Creation, calculation, and grouping of fields', 'Sorting, filtering, & analyzing data']
            },
            {
                module: 'Natural Language',
                topics: ['What is natural language?', 'Natural Language Toolkits (NLTK)', 'Stopwords', 'Stemming', 'Lemmatization', 'What is sentiment analysis?', 'Native and bayes']
            },
            {
                module: 'Statistics',
                topics: ['Probability & distribution', 'Central limit theorem', 'Hypothesis testing', 'Categorical data']
            },
            {
                module: 'Predictive Modelling',
                topics: ['Introduction', 'Types of productive modelling', 'Data extraction', 'Data exploration']
            }
        ],
        projects: [
            { name: 'Used Cars Cost Prediction', description: 'Build a predictive model to estimate used car prices based on various features' },
            { name: 'Detection of Parkinson\'s Disease', description: 'Develop a machine learning model to detect Parkinson\'s disease from medical data' },
            { name: 'Sales Forecasting', description: 'Create a forecasting model to predict future sales trends' },
            { name: 'Movie Recommendation Engine', description: 'Build a recommendation system to suggest movies based on user preferences' },
            { name: 'Stock Price Prediction', description: 'Develop a model to predict stock prices using historical data and analytics' }
        ],
        pricing: [
            {
                name: 'Mentor Led Training',
                price: 7000,
                features: ['40+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support', 'LMS Portal Access', 'Internship Portal Access']
            },
            {
                name: 'Mentor Led + Placement Guidance',
                price: 10000,
                features: ['40+ Hours of Live Sessions', 'One on One Doubt Clearing Sessions', 'Recorded Sessions', 'Mentor Support & Placement Guidance', 'LMS Portal Access', 'Internship Portal Access']
            }
        ],
        faqs: [
            {
                question: 'Do I need prior programming knowledge?',
                answer: 'Basic understanding of programming concepts is helpful but we cover Python fundamentals from scratch in the initial modules.'
            },
            {
                question: 'What tools will I learn?',
                answer: 'You will learn Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, and other industry-standard data analysis tools.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later before starting the program.'
            }
        ]
    },
    'web-development': {
        id: 'web-development',
        title: 'Web Development',
        category: 'Computer Science & IT',
        icon: '💻',
        color: '#11998e',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        stats: {
            duration: '3 Months',
            hours: '25+ Hours',
            students: '1 Lakh+',
            experts: '50+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What are the prospects for a career in website development?',
                answer: 'Web development is one of the most in-demand skills in the tech industry. With businesses increasingly moving online, the demand for web developers continues to grow exponentially. Full-stack developers are particularly sought after.'
            },
            {
                question: 'Why are websites so important?',
                answer: 'Websites are the digital storefront for businesses. They are essential for brand presence, customer engagement, e-commerce, and digital marketing. A well-designed website can significantly impact a business\'s success.'
            },
            {
                question: 'Why Eduholic?',
                answer: 'At Eduholic we place an emphasis on equipping our interns with the practical skills necessary to succeed. We will teach you the necessary theoretical concepts and practical skills to succeed with hands-on experience from our top associated mentors.'
            }
        ],
        curriculum: [
            {
                module: 'Web Development Introduction',
                topics: ['Introduction to Web Development', 'Client-Server Architecture', 'How the Web Works']
            },
            {
                module: 'Website Design Principles',
                topics: ['UI/UX Fundamentals', 'Design Thinking', 'Responsive Design', 'Accessibility']
            },
            {
                module: 'HTML5',
                topics: ['HTML Basics', 'Semantic HTML', 'Forms and Validation', 'HTML5 APIs']
            },
            {
                module: 'CSS',
                topics: ['CSS Fundamentals', 'Flexbox', 'CSS Grid', 'Animations and Transitions', 'CSS Preprocessors']
            },
            {
                module: 'JavaScript',
                topics: ['JavaScript Basics', 'DOM Manipulation', 'ES6+ Features', 'Async Programming', 'API Integration']
            },
            {
                module: 'jQuery',
                topics: ['jQuery Basics', 'DOM Manipulation with jQuery', 'AJAX with jQuery', 'jQuery Plugins']
            },
            {
                module: 'Database Management',
                topics: ['SQL Fundamentals', 'NoSQL Databases', 'MongoDB', 'Database Design']
            },
            {
                module: 'Backend Programming',
                topics: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Deployment']
            }
        ],
        projects: [
            { name: 'Portfolio Website', description: 'Build a responsive personal portfolio website' },
            { name: 'E-commerce Website', description: 'Create a full-stack e-commerce platform' },
            { name: 'Blog Platform', description: 'Develop a blogging platform with CMS' },
            { name: 'Social Media Dashboard', description: 'Build an interactive dashboard application' }
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
                question: 'Is full-stack web development hard?',
                answer: 'Full-stack development requires learning both frontend and backend technologies. While it may seem challenging initially, our structured curriculum makes it accessible to beginners.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led programs last for a period of 3 months. All programs include comprehensive training and hands-on projects.'
            },
            {
                question: 'Will Eduholic help with placements?',
                answer: 'Eduholic provides placement support for all students of our advanced courses. Students that perform well during their internship period will also get placement support.'
            },
            {
                question: 'Are full-stack web developers in demand?',
                answer: 'Yes! Full-stack developers are among the most sought-after professionals in the tech industry due to their versatility.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later before starting the program.'
            }
        ]
    },
    'autocad': {
        id: 'autocad',
        title: 'AutoCAD',
        category: 'Mechanical / Civil',
        icon: '📐',
        color: '#ee0979',
        gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
        stats: {
            duration: '3 Months',
            hours: '25+ Hours',
            students: '1 Lakh+',
            experts: '50+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is AutoCAD used for?',
                answer: 'AutoCAD is industry-standard software for 2D and 3D computer-aided design. It\'s used extensively in architecture, engineering, construction, and manufacturing for creating precise technical drawings and models.'
            },
            {
                question: 'What careers can you pursue with AutoCAD expertise?',
                answer: 'AutoCAD skills open doors to careers as CAD technicians, draftsmen, architects, mechanical engineers, civil engineers, interior designers, and more. These are well-paying positions in demand across multiple industries.'
            },
            {
                question: 'Why Eduholic?',
                answer: 'At Eduholic we place an emphasis on equipping our interns with the practical skills necessary to succeed. We will teach you both the theoretical concepts and practical skills with hands-on experience from our top associated mentors.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['Introduction to CAD', 'Software Installation', 'Interface Overview']
            },
            {
                module: 'Know the Software',
                topics: ['AutoCAD Workspace', 'Tools and Toolbars', 'Command Line Interface', 'File Management']
            },
            {
                module: 'Geometry Development',
                topics: ['Drawing Basic Shapes', 'Lines and Polylines', 'Circles and Arcs', 'Rectangles and Polygons']
            },
            {
                module: 'Constraints & Plots',
                topics: ['Geometric Constraints', 'Dimensional Constraints', 'Plotting and Printing', 'Page Setup']
            },
            {
                module: 'Advanced Functions in AutoCAD 1',
                topics: ['Layers Management', 'Blocks and References', 'Hatching', 'Text and Dimensions']
            },
            {
                module: 'Advanced Functions in AutoCAD 2',
                topics: ['3D Modeling Basics', '3D Navigation', 'Solid Modeling', 'Rendering']
            },
            {
                module: 'Introduction to Inventor',
                topics: ['Inventor Interface', 'Part Modeling', 'Assembly Design', 'Drawing Creation']
            },
            {
                module: 'Drafting',
                topics: ['Engineering Drawing Standards', 'Orthographic Projections', 'Sectional Views', 'Detail Drawings']
            }
        ],
        projects: [
            { name: 'Building Floor Plan', description: 'Create detailed architectural floor plans' },
            { name: 'Mechanical Part Design', description: 'Design precision mechanical components' },
            { name: 'Civil Structure Drawing', description: 'Develop civil engineering drawings' },
            { name: '3D Product Modeling', description: 'Create 3D models of industrial products' }
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
                question: 'Why should I learn AutoCAD?',
                answer: 'AutoCAD is the industry standard for technical drawing. Learning it opens up career opportunities in architecture, engineering, and design fields with competitive salaries.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led programs last for a period of 3 months. All programs include comprehensive training and hands-on projects.'
            },
            {
                question: 'Will Eduholic help with placements?',
                answer: 'Eduholic provides placement support for all students of our advanced courses.'
            },
            {
                question: 'How is AutoCAD different from CATIA?',
                answer: 'AutoCAD is primarily for 2D drafting and basic 3D, while CATIA is more advanced for complex 3D modeling. Both are valuable skills in engineering.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later before starting the program.'
            }
        ]
    },
    'internet-of-things': {
        id: 'internet-of-things',
        title: 'Internet of Things',
        category: 'Electronics & Communication',
        icon: '📡',
        color: '#f093fb',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        stats: {
            duration: '3 Months',
            hours: '25+ Hours',
            students: '1 Lakh+',
            experts: '50+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'Why is IoT valuable?',
                answer: 'IoT connects physical devices to the internet, enabling smart automation in homes, industries, healthcare, and cities. The global IoT market is projected to reach $1.5 trillion by 2025, making it a crucial technology.'
            },
            {
                question: 'Is IoT a good career?',
                answer: 'Yes! IoT professionals are in high demand across industries. From smart home devices to industrial automation, IoT skills are valuable and well-compensated.'
            },
            {
                question: 'Why Eduholic?',
                answer: 'At Eduholic we place an emphasis on equipping our interns with the practical skills necessary to succeed. We provide hands-on experience with real IoT devices and platforms.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['What is IoT?', 'IoT Architecture', 'IoT Applications', 'Future of IoT']
            },
            {
                module: 'Concepts in Microcontroller',
                topics: ['Microcontroller Basics', 'I/O Ports', 'Interrupts', 'Timers and Counters']
            },
            {
                module: 'Arduino',
                topics: ['Arduino Setup', 'Arduino Programming', 'Sensors and Actuators', 'Arduino Projects']
            },
            {
                module: 'Wireless Communications',
                topics: ['WiFi', 'Bluetooth', 'ZigBee', 'LoRa', 'MQTT Protocol']
            },
            {
                module: 'Cloud',
                topics: ['Cloud Platforms for IoT', 'AWS IoT', 'Azure IoT Hub', 'Data Storage and Analytics']
            },
            {
                module: 'Other Platforms',
                topics: ['Raspberry Pi', 'ESP8266/ESP32', 'NodeMCU', 'Integration Projects']
            }
        ],
        projects: [
            { name: 'Smart Home System', description: 'Build an automated home control system' },
            { name: 'Weather Station', description: 'Create an IoT-based weather monitoring station' },
            { name: 'Industrial Monitoring', description: 'Develop equipment monitoring solution' },
            { name: 'Health Monitor', description: 'Build a wearable health monitoring device' }
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
                question: 'Apart from the listed scope, is there anything else that IoT is used for?',
                answer: 'IoT is used in agriculture, smart cities, retail, logistics, environmental monitoring, and many more fields. Its applications are virtually limitless.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led programs last for a period of 3 months. All programs include comprehensive training and hands-on projects.'
            },
            {
                question: 'Will Eduholic help with placements?',
                answer: 'Eduholic provides placement support for all students of our advanced courses.'
            },
            {
                question: 'What is industrial equipment monitoring?',
                answer: 'Industrial IoT enables real-time monitoring of factory equipment, predicting maintenance needs, and optimizing operations.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later before starting the program.'
            }
        ]
    },
    'data-science': {
        id: 'data-science',
        title: 'Data Science',
        category: 'Computer Science & IT',
        icon: '📊',
        color: '#4facfe',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        stats: {
            duration: '3 Months',
            hours: '25+ Hours',
            students: '1 Lakh+',
            experts: '50+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is Data Science?',
                answer: 'Data Science combines statistics, programming, and domain expertise to extract insights from data. It\'s the backbone of modern business decision-making and AI applications.'
            },
            {
                question: 'Is Data Science a good career choice?',
                answer: 'Data Scientists are among the highest-paid professionals in tech. With the explosion of data, skilled data scientists are in extremely high demand across all industries.'
            },
            {
                question: 'Why Eduholic?',
                answer: 'At Eduholic we provide comprehensive data science training with real-world projects, industry mentors, and practical experience that employers value.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction to Data Science',
                topics: ['What is Data Science?', 'Data Science Lifecycle', 'Tools and Technologies', 'Career Paths']
            },
            {
                module: 'Python for Data Science',
                topics: ['Python Basics', 'NumPy', 'Pandas', 'Data Manipulation', 'Data Cleaning']
            },
            {
                module: 'Statistics and Mathematics',
                topics: ['Descriptive Statistics', 'Probability', 'Inferential Statistics', 'Linear Algebra']
            },
            {
                module: 'Data Visualization',
                topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Storytelling with Data']
            },
            {
                module: 'Machine Learning for Data Science',
                topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering']
            },
            {
                module: 'Big Data Technologies',
                topics: ['Introduction to Big Data', 'Hadoop', 'Spark', 'Cloud Platforms']
            }
        ],
        projects: [
            { name: 'Customer Segmentation', description: 'Cluster customers based on behavior' },
            { name: 'Sales Forecasting', description: 'Predict future sales using time series' },
            { name: 'Sentiment Analysis', description: 'Analyze customer reviews and feedback' },
            { name: 'Fraud Detection', description: 'Build a fraud detection model' }
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
                question: 'Do I need a strong math background?',
                answer: 'Basic math knowledge is helpful, but we teach all required concepts from the ground up.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led programs last for a period of 3 months. All programs include comprehensive training and hands-on projects.'
            },
            {
                question: 'Will Eduholic help with placements?',
                answer: 'Eduholic provides placement support for all students of our advanced courses.'
            },
            {
                question: 'What tools will I learn?',
                answer: 'You\'ll learn Python, SQL, Tableau, and various ML libraries like scikit-learn, TensorFlow, and more.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later.'
            }
        ]
    },
    'artificial-intelligence': {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence',
        category: 'Computer Science & IT',
        icon: '🧠',
        color: '#764ba2',
        gradient: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
        stats: {
            duration: '3 Months',
            hours: '25+ Hours',
            students: '1 Lakh+',
            experts: '50+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is Artificial Intelligence?',
                answer: 'Artificial Intelligence is the simulation of human intelligence by machines. It encompasses machine learning, natural language processing, computer vision, and robotics.'
            },
            {
                question: 'Why is AI important?',
                answer: 'AI is revolutionizing every industry from healthcare to finance. AI skills are among the most sought-after in the job market, with significant earning potential.'
            },
            {
                question: 'Why Eduholic?',
                answer: 'At Eduholic we provide comprehensive AI training with real-world projects, covering both theory and practical implementation with guidance from industry experts.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction to AI',
                topics: ['What is AI?', 'History of AI', 'Types of AI', 'AI Applications']
            },
            {
                module: 'Python for AI',
                topics: ['Python Fundamentals', 'Libraries for AI', 'Data Structures', 'OOP Concepts']
            },
            {
                module: 'Machine Learning Foundations',
                topics: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Model Training']
            },
            {
                module: 'Deep Learning',
                topics: ['Neural Networks', 'Convolutional Neural Networks', 'Recurrent Neural Networks', 'Transfer Learning']
            },
            {
                module: 'Natural Language Processing',
                topics: ['Text Processing', 'Sentiment Analysis', 'Language Models', 'Transformers']
            },
            {
                module: 'Computer Vision',
                topics: ['Image Processing', 'Object Detection', 'Image Classification', 'OpenCV']
            }
        ],
        projects: [
            { name: 'Chatbot Development', description: 'Build an intelligent conversational AI' },
            { name: 'Image Recognition', description: 'Create an image classification system' },
            { name: 'Voice Assistant', description: 'Develop a voice-controlled AI assistant' },
            { name: 'Game AI', description: 'Build an AI agent for playing games' }
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
                question: 'Do I need prior programming experience?',
                answer: 'No, we teach programming fundamentals as part of the course. However, some basic computer knowledge is helpful.'
            },
            {
                question: 'How long is the training?',
                answer: 'Our Mentor Led programs last for a period of 3 months. All programs include comprehensive training and hands-on projects.'
            },
            {
                question: 'Will Eduholic help with placements?',
                answer: 'Eduholic provides placement support for all students of our advanced courses.'
            },
            {
                question: 'What is the difference between AI and ML?',
                answer: 'AI is the broader concept of machines mimicking human intelligence, while ML is a subset of AI focused on learning from data.'
            },
            {
                question: 'Will I get an internship?',
                answer: 'Yes, Eduholic guarantees an internship opportunity for all our students across all our courses.'
            },
            {
                question: 'Can I pay the fee in instalment?',
                answer: 'Yes, you can book your slot by paying 1000 INR as pre-registration and the remaining amount can be paid later.'
            }
        ]
    },

    // Job Guarantee Programs
    'fullstack-web-development': {
        id: 'fullstack-web-development',
        title: 'Full-Stack Web Development',
        category: 'Job Guarantee Program',
        icon: '💻',
        color: '#11998e',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        stats: {
            duration: '6 Months',
            hours: '200+ Hours',
            students: '5000+',
            experts: '25+',
            interaction: 'Live Batches'
        },
        overview: [
            {
                question: 'What makes this a Job Guarantee Program?',
                answer: 'Our Job Guarantee Program offers 100% placement assurance. If you complete the program with satisfactory performance and don\'t get placed within 6 months, we refund your fees. We have tie-ups with 500+ hiring partners actively looking for full-stack developers.'
            },
            {
                question: 'What technologies will I learn?',
                answer: 'You will master the complete MERN stack (MongoDB, Express.js, React.js, Node.js), along with HTML5, CSS3, JavaScript ES6+, TypeScript, Git, and deployment on cloud platforms like AWS and Vercel.'
            },
            {
                question: 'Why choose Eduholic Job Guarantee?',
                answer: 'We provide dedicated placement support, mock interviews, resume building, and soft skills training. Our alumni work at top companies like Amazon, Google, Microsoft, and leading startups.'
            }
        ],
        curriculum: [
            { module: 'Web Fundamentals', topics: ['HTML5 & Semantic Elements', 'CSS3 & Flexbox/Grid', 'Responsive Design', 'Bootstrap & Tailwind'] },
            { module: 'JavaScript Mastery', topics: ['ES6+ Features', 'DOM Manipulation', 'Async Programming', 'TypeScript Basics'] },
            { module: 'React.js Development', topics: ['Components & Props', 'Hooks & State Management', 'Redux Toolkit', 'React Router'] },
            { module: 'Backend with Node.js', topics: ['Node.js Fundamentals', 'Express.js Framework', 'RESTful APIs', 'Authentication & JWT'] },
            { module: 'Database & DevOps', topics: ['MongoDB & Mongoose', 'SQL Databases', 'Git & GitHub', 'CI/CD & Deployment'] },
            { module: 'Projects & Career Prep', topics: ['Capstone Projects', 'Portfolio Building', 'Mock Interviews', 'Resume Preparation'] }
        ],
        projects: [
            { name: 'E-commerce Platform', description: 'Full-featured online store with payment integration' },
            { name: 'Social Media App', description: 'Real-time social networking application' },
            { name: 'Project Management Tool', description: 'Collaborative task management system' },
            { name: 'Video Streaming Platform', description: 'Netflix-like streaming service' }
        ],
        pricing: [
            { price: '₹75,000', plan: 'Standard', features: ['200+ Hours Training', 'Live Batch Sessions', 'Placement Guarantee', '1:1 Mentorship', 'Resume Building', 'Mock Interviews', 'Lifetime Access'] },
            { price: '₹99,000', plan: 'Premium', features: ['200+ Hours Training', 'Live Batch Sessions', 'Placement Guarantee', '1:1 Mentorship', 'Resume Building', 'Mock Interviews', 'Lifetime Access', 'Priority Placement', 'Internship Included'], recommended: true }
        ],
        faqs: [
            { question: 'What is the Job Guarantee?', answer: 'If you complete the program successfully and don\'t get placed within 6 months of completion, we offer a full refund of your course fees.' },
            { question: 'What is the average salary after placement?', answer: 'Our graduates typically receive offers ranging from ₹4-12 LPA depending on their performance and location.' },
            { question: 'Are there any prerequisites?', answer: 'Basic computer knowledge is sufficient. We teach everything from scratch.' },
            { question: 'What support do I get for placements?', answer: 'We provide resume building, LinkedIn optimization, mock interviews, soft skills training, and direct referrals to our 500+ hiring partners.' }
        ]
    },
    'digital-marketing': {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        category: 'Job Guarantee Program',
        icon: '📈',
        color: '#ee0979',
        gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
        stats: {
            duration: '4 Months',
            hours: '120+ Hours',
            students: '3000+',
            experts: '20+',
            interaction: 'Live Batches'
        },
        overview: [
            { question: 'Why Digital Marketing with Job Guarantee?', answer: 'Digital Marketing is the fastest-growing career field. With our job guarantee, you\'re assured a position in marketing teams of top companies or agencies.' },
            { question: 'What will I learn?', answer: 'Complete digital marketing including SEO, SEM, Social Media Marketing, Email Marketing, Content Marketing, PPC campaigns, Analytics, and Marketing Automation.' },
            { question: 'Why Eduholic?', answer: 'Learn from industry practitioners, work on live campaigns for real brands, and get placed with our extensive network of agencies and in-house marketing teams.' }
        ],
        curriculum: [
            { module: 'Digital Marketing Fundamentals', topics: ['Marketing Basics', 'Digital Landscape', 'Customer Journey', 'Brand Strategy'] },
            { module: 'Search Engine Optimization', topics: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'SEO Tools & Analytics'] },
            { module: 'Paid Advertising', topics: ['Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Ads', 'Remarketing Strategies'] },
            { module: 'Social Media Marketing', topics: ['Platform Strategies', 'Content Creation', 'Community Management', 'Influencer Marketing'] },
            { module: 'Content & Email Marketing', topics: ['Content Strategy', 'Copywriting', 'Email Campaigns', 'Marketing Automation'] }
        ],
        projects: [
            { name: 'SEO Audit & Strategy', description: 'Complete SEO analysis for a business' },
            { name: 'Paid Campaign Management', description: 'Run and optimize actual ad campaigns' },
            { name: 'Social Media Strategy', description: 'Develop comprehensive social media plan' }
        ],
        pricing: [
            { price: '₹45,000', plan: 'Standard', features: ['120+ Hours Training', 'Live Sessions', 'Placement Guarantee', 'Tool Certifications', 'Resume Building', 'Mock Interviews'] },
            { price: '₹65,000', plan: 'Premium', features: ['120+ Hours Training', 'Live Sessions', 'Placement Guarantee', 'Tool Certifications', 'Resume Building', 'Mock Interviews', 'Google & Meta Certifications', 'Agency Internship'], recommended: true }
        ],
        faqs: [
            { question: 'What certifications will I get?', answer: 'Google Ads, Google Analytics, Meta Blueprint, HubSpot, and Eduholic completion certificate.' },
            { question: 'What is the salary range?', answer: 'Digital marketers typically start at ₹3-6 LPA and can grow to ₹15+ LPA with experience.' }
        ]
    },
    'human-resources': {
        id: 'human-resources',
        title: 'Human Resources',
        category: 'Job Guarantee Program',
        icon: '👥',
        color: '#667eea',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: 'Live Batches'
        },
        overview: [
            { question: 'Why HR with Job Guarantee?', answer: 'HR professionals are essential to every organization. Our program prepares you for roles in recruitment, employee engagement, HR operations, and people management.' },
            { question: 'What will I learn?', answer: 'Talent acquisition, employee lifecycle management, HR analytics, payroll, labor laws, performance management, and HR technology tools.' },
            { question: 'Why Eduholic?', answer: 'Our curriculum is designed by HR leaders from Fortune 500 companies. We provide hands-on experience with HR tools and real recruitment scenarios.' }
        ],
        curriculum: [
            { module: 'HR Fundamentals', topics: ['HR Functions', 'Organizational Behavior', 'Employment Law', 'HR Metrics'] },
            { module: 'Talent Acquisition', topics: ['Recruitment Strategies', 'Interview Techniques', 'Employer Branding', 'ATS Systems'] },
            { module: 'HR Operations', topics: ['Onboarding', 'Payroll Management', 'Benefits Administration', 'HRIS Tools'] },
            { module: 'People Development', topics: ['Performance Management', 'Learning & Development', 'Employee Engagement', 'Retention Strategies'] }
        ],
        projects: [
            { name: 'Recruitment Drive', description: 'End-to-end hiring for a position' },
            { name: 'HR Policy Framework', description: 'Develop company HR policies' },
            { name: 'Employee Engagement Plan', description: 'Design engagement initiatives' }
        ],
        pricing: [
            { price: '₹40,000', plan: 'Standard', features: ['100+ Hours Training', 'Live Sessions', 'Placement Guarantee', 'HR Tool Training', 'Resume Building'] },
            { price: '₹55,000', plan: 'Premium', features: ['100+ Hours Training', 'Live Sessions', 'Placement Guarantee', 'HR Tool Training', 'Resume Building', 'SHRM Prep', 'HR Internship'], recommended: true }
        ],
        faqs: [
            { question: 'What roles can I apply for?', answer: 'HR Executive, Recruiter, Talent Acquisition Specialist, HR Generalist, HR Operations roles.' },
            { question: 'What is the salary range?', answer: 'HR professionals start at ₹3-5 LPA and can grow to ₹12+ LPA with experience.' }
        ]
    },
    'flutter-development': {
        id: 'flutter-development',
        title: 'Flutter Development',
        category: 'Job Guarantee Program',
        icon: '📱',
        color: '#4facfe',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        stats: {
            duration: '5 Months',
            hours: '150+ Hours',
            students: '2500+',
            experts: '20+',
            interaction: 'Live Batches'
        },
        overview: [
            { question: 'Why Flutter with Job Guarantee?', answer: 'Flutter allows building beautiful apps for iOS, Android, and web from a single codebase. Companies are actively hiring Flutter developers for their cross-platform needs.' },
            { question: 'What will I learn?', answer: 'Dart programming, Flutter widgets, state management (Provider, Riverpod, Bloc), Firebase integration, REST APIs, and publishing apps to stores.' },
            { question: 'Why Eduholic?', answer: 'Build 10+ production-ready apps during training. Our mentors include developers from Google and top app development companies.' }
        ],
        curriculum: [
            { module: 'Dart Programming', topics: ['Dart Basics', 'OOP in Dart', 'Async Programming', 'Null Safety'] },
            { module: 'Flutter Fundamentals', topics: ['Widgets & Layouts', 'Navigation', 'Forms & Validation', 'Animations'] },
            { module: 'State Management', topics: ['Provider', 'Riverpod', 'Bloc Pattern', 'GetX'] },
            { module: 'Backend Integration', topics: ['REST APIs', 'Firebase', 'Local Storage', 'Push Notifications'] },
            { module: 'Publishing & Beyond', topics: ['Play Store Publishing', 'App Store Publishing', 'CI/CD for Apps', 'App Monetization'] }
        ],
        projects: [
            { name: 'E-commerce App', description: 'Complete shopping app with payments' },
            { name: 'Chat Application', description: 'Real-time messaging app' },
            { name: 'Fitness Tracker', description: 'Health and workout tracking app' }
        ],
        pricing: [
            { price: '₹55,000', plan: 'Standard', features: ['150+ Hours Training', 'Live Sessions', 'Placement Guarantee', '10+ App Projects', 'Resume Building'] },
            { price: '₹75,000', plan: 'Premium', features: ['150+ Hours Training', 'Live Sessions', 'Placement Guarantee', '10+ App Projects', 'Resume Building', '1:1 Mentorship', 'Startup Internship'], recommended: true }
        ],
        faqs: [
            { question: 'Do I need to know iOS/Android development?', answer: 'No, Flutter is a cross-platform framework. We teach everything from basics.' },
            { question: 'What is the salary range?', answer: 'Flutter developers start at ₹4-8 LPA and experienced developers earn ₹15+ LPA.' }
        ]
    },

    // Pro Degree Programs
    'marketing-digital-marketing': {
        id: 'marketing-digital-marketing',
        title: 'Marketing & Digital Marketing Pro Degree',
        category: 'Pro Degree Program',
        icon: '🎯',
        color: '#ff6b6b',
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
        stats: {
            duration: '12 Months',
            hours: '500+ Hours',
            students: '1000+',
            experts: '30+',
            interaction: 'Live & Mentor Sessions'
        },
        overview: [
            { question: 'What is the Pro Degree Program?', answer: 'A comprehensive 12-month program equivalent to a professional degree in Marketing. Covers traditional marketing, digital marketing, brand management, and marketing analytics.' },
            { question: 'Who is this for?', answer: 'Ideal for graduates looking to build a career in marketing, working professionals seeking career switch, or entrepreneurs wanting to master marketing.' },
            { question: 'What makes it professional?', answer: 'Industry-aligned curriculum designed with CMOs and marketing heads. Includes internship, live projects, and a capstone project that goes into your portfolio.' }
        ],
        curriculum: [
            { module: 'Marketing Fundamentals', topics: ['Marketing Principles', 'Consumer Behavior', 'Market Research', 'Brand Management'] },
            { module: 'Digital Marketing Mastery', topics: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Marketing'] },
            { module: 'Paid Media & Analytics', topics: ['Google Ads', 'Meta Ads', 'Programmatic Advertising', 'Marketing Analytics'] },
            { module: 'Strategy & Leadership', topics: ['Marketing Strategy', 'Campaign Planning', 'Budget Management', 'Team Leadership'] },
            { module: 'Capstone & Internship', topics: ['Industry Internship', 'Capstone Project', 'Portfolio Development', 'Career Preparation'] }
        ],
        projects: [
            { name: 'Brand Launch Strategy', description: 'Complete GTM strategy for a brand' },
            { name: 'Multi-channel Campaign', description: 'Plan and execute integrated campaign' },
            { name: 'Marketing Analytics Dashboard', description: 'Build ROI tracking system' }
        ],
        pricing: [
            { price: '₹1,50,000', plan: 'Pro Degree', features: ['500+ Hours Training', '12-Month Program', 'Industry Internship', 'Pro Certification', 'Placement Support', 'All Tool Certifications', 'Lifetime Access'], recommended: true }
        ],
        faqs: [
            { question: 'Is this a recognized degree?', answer: 'It\'s a professional certification with industry recognition. Our alumni work at top marketing agencies and brands.' },
            { question: 'What is the career outcome?', answer: 'Roles like Marketing Manager, Digital Marketing Lead, Brand Manager with packages of ₹8-20 LPA.' }
        ]
    },
    'hr-management': {
        id: 'hr-management',
        title: 'HR Management Pro Degree',
        category: 'Pro Degree Program',
        icon: '👔',
        color: '#a29bfe',
        gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
        stats: {
            duration: '12 Months',
            hours: '400+ Hours',
            students: '800+',
            experts: '25+',
            interaction: 'Live & Mentor Sessions'
        },
        overview: [
            { question: 'What is HR Management Pro Degree?', answer: 'A comprehensive program covering all aspects of Human Resource Management from talent acquisition to strategic HR leadership.' },
            { question: 'Career opportunities?', answer: 'Prepares you for roles like HR Manager, HR Business Partner, Talent Head, Learning & Development Manager.' },
            { question: 'What makes it different?', answer: 'Curriculum designed by CHROs, includes SHRM preparation, and features HR tech tool mastery.' }
        ],
        curriculum: [
            { module: 'Strategic HR', topics: ['HR Strategy', 'Organizational Design', 'Change Management', 'HR Analytics'] },
            { module: 'Talent Management', topics: ['Talent Acquisition', 'Performance Management', 'Succession Planning', 'Compensation & Benefits'] },
            { module: 'People Development', topics: ['L&D Strategy', 'Training Design', 'Leadership Development', 'Employee Engagement'] },
            { module: 'HR Technology', topics: ['HRIS Systems', 'HR Analytics Tools', 'AI in HR', 'Digital Transformation'] },
            { module: 'Capstone', topics: ['HR Consulting Project', 'SHRM Preparation', 'Portfolio', 'Career Services'] }
        ],
        projects: [
            { name: 'HR Transformation', description: 'Digital HR transformation for a company' },
            { name: 'Talent Strategy', description: 'Develop comprehensive talent strategy' }
        ],
        pricing: [
            { price: '₹1,25,000', plan: 'Pro Degree', features: ['400+ Hours Training', '12-Month Program', 'HR Internship', 'Pro Certification', 'SHRM Prep', 'Placement Support', 'Lifetime Access'], recommended: true }
        ],
        faqs: [
            { question: 'Will this help me become SHRM certified?', answer: 'Yes, our curriculum includes SHRM preparation and many alumni have successfully cleared SHRM exams.' }
        ]
    },
    'data-science-pro': {
        id: 'data-science-pro',
        title: 'Data Science Pro Degree',
        category: 'Pro Degree Program',
        icon: '📊',
        color: '#4facfe',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        stats: {
            duration: '12 Months',
            hours: '600+ Hours',
            students: '1500+',
            experts: '35+',
            interaction: 'Live & Mentor Sessions'
        },
        overview: [
            { question: 'What is Data Science Pro Degree?', answer: 'Advanced data science program covering statistics, machine learning, deep learning, and domain applications in 12 intensive months.' },
            { question: 'Tool and technology coverage?', answer: 'Python, R, SQL, Tableau, Power BI, TensorFlow, PyTorch, AWS, Azure ML, and more.' },
            { question: 'Career outcome?', answer: 'Prepare for Data Scientist, ML Engineer, Analytics Manager, and Data Architect roles.' }
        ],
        curriculum: [
            { module: 'Foundations', topics: ['Statistics', 'Python Programming', 'SQL & Databases', 'Data Wrangling'] },
            { module: 'Machine Learning', topics: ['Supervised Learning', 'Unsupervised Learning', 'Ensemble Methods', 'Model Deployment'] },
            { module: 'Deep Learning', topics: ['Neural Networks', 'CNNs & RNNs', 'NLP', 'Computer Vision'] },
            { module: 'Big Data & Cloud', topics: ['Spark', 'Hadoop', 'AWS/Azure ML', 'MLOps'] },
            { module: 'Specialization', topics: ['Domain Projects', 'Research Paper', 'Capstone', 'Industry Internship'] }
        ],
        projects: [
            { name: 'Predictive Analytics Platform', description: 'End-to-end ML pipeline' },
            { name: 'Computer Vision System', description: 'Image classification/detection system' },
            { name: 'NLP Application', description: 'Chatbot or text analytics system' }
        ],
        pricing: [
            { price: '₹2,00,000', plan: 'Pro Degree', features: ['600+ Hours Training', '12-Month Program', 'Industry Internship', 'Pro Certification', 'Placement Guarantee', 'AWS/Azure Certifications', 'Research Mentorship'], recommended: true }
        ],
        faqs: [
            { question: 'What is the placement record?', answer: '95%+ placement with average package of ₹12 LPA. Top performers get ₹25+ LPA.' }
        ]
    },
    'machine-learning-pro': {
        id: 'machine-learning-pro',
        title: 'Machine Learning Pro Degree',
        category: 'Pro Degree Program',
        icon: '🤖',
        color: '#667eea',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        stats: {
            duration: '12 Months',
            hours: '600+ Hours',
            students: '1200+',
            experts: '30+',
            interaction: 'Live & Mentor Sessions'
        },
        overview: [
            { question: 'How is this different from DS Pro?', answer: 'Deep focus on ML/AI algorithms, research methodologies, and cutting-edge techniques. Ideal for those wanting to specialize in ML/AI.' },
            { question: 'Research component?', answer: 'Includes research paper writing, collaboration with academia, and exposure to latest AI research.' },
            { question: 'Career paths?', answer: 'ML Engineer, AI Researcher, Deep Learning Engineer, NLP Specialist, Computer Vision Engineer.' }
        ],
        curriculum: [
            { module: 'ML Foundations', topics: ['Linear Algebra', 'Probability', 'Optimization', 'Classical ML Algorithms'] },
            { module: 'Deep Learning', topics: ['Neural Networks', 'CNNs', 'RNNs & Transformers', 'GANs'] },
            { module: 'Specialized AI', topics: ['NLP & LLMs', 'Computer Vision', 'Reinforcement Learning', 'Time Series'] },
            { module: 'ML Engineering', topics: ['MLOps', 'Model Serving', 'Cloud ML', 'Edge AI'] },
            { module: 'Research & Application', topics: ['Research Methodology', 'Paper Implementation', 'Industry Project', 'Thesis'] }
        ],
        projects: [
            { name: 'LLM Application', description: 'Build application using large language models' },
            { name: 'Autonomous System', description: 'RL-based autonomous agent' },
            { name: 'Research Implementation', description: 'Implement cutting-edge paper' }
        ],
        pricing: [
            { price: '₹2,25,000', plan: 'Pro Degree', features: ['600+ Hours Training', '12-Month Program', 'Research Internship', 'Pro Certification', 'Placement Guarantee', 'Paper Publication Support', 'Conference Participation'], recommended: true }
        ],
        faqs: [
            { question: 'Can I pursue PhD after this?', answer: 'Yes, our research component and paper publication support prepare you for PhD applications.' }
        ]
    },
    'flutter-pro': {
        id: 'flutter-pro',
        title: 'Flutter Development Pro Degree',
        category: 'Pro Degree Program',
        icon: '📲',
        color: '#00d2d3',
        gradient: 'linear-gradient(135deg, #00d2d3 0%, #54a0ff 100%)',
        stats: {
            duration: '12 Months',
            hours: '500+ Hours',
            students: '700+',
            experts: '20+',
            interaction: 'Live & Mentor Sessions'
        },
        overview: [
            { question: 'What is Flutter Pro Degree?', answer: 'Comprehensive mobile development degree covering Flutter, backend development, app architecture, and launching successful apps.' },
            { question: 'Beyond Flutter?', answer: 'Also covers backend with Node.js/Firebase, app architecture patterns, testing, and app store optimization.' },
            { question: 'Career outcome?', answer: 'Mobile App Developer, Flutter Lead, Tech Lead, Freelance App Developer, or launch your own app startup.' }
        ],
        curriculum: [
            { module: 'Flutter Mastery', topics: ['Advanced Widgets', 'Custom Animations', 'Platform Channels', 'Performance Optimization'] },
            { module: 'State & Architecture', topics: ['Clean Architecture', 'BLoC Pattern', 'Riverpod', 'Testing Strategies'] },
            { module: 'Backend Development', topics: ['Node.js', 'Firebase Advanced', 'GraphQL', 'Serverless'] },
            { module: 'Launch & Scale', topics: ['CI/CD', 'App Store Optimization', 'Analytics', 'Monetization'] },
            { module: 'Specialization', topics: ['AR/VR in Flutter', 'IoT Apps', 'Wearable Apps', 'Industry Project'] }
        ],
        projects: [
            { name: 'Fintech App', description: 'Secure financial application' },
            { name: 'Super App', description: 'Multi-feature platform app' },
            { name: 'Multiplayer Game', description: 'Real-time multiplayer mobile game' }
        ],
        pricing: [
            { price: '₹1,50,000', plan: 'Pro Degree', features: ['500+ Hours Training', '12-Month Program', 'App Launch Support', 'Pro Certification', 'Placement Support', 'Startup Mentorship', 'Lifetime Access'], recommended: true }
        ],
        faqs: [
            { question: 'Can I launch my own app?', answer: 'Absolutely! We support you in launching apps to stores and even assist with startup incubation.' }
        ]
    },
    'fullstack-pro': {
        id: 'fullstack-pro',
        title: 'Full-Stack Development Pro Degree',
        category: 'Pro Degree Program',
        icon: '🌐',
        color: '#11998e',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        stats: {
            duration: '12 Months',
            hours: '700+ Hours',
            students: '2000+',
            experts: '40+',
            interaction: 'Live & Mentor Sessions'
        },
        overview: [
            { question: 'What is Full-Stack Pro Degree?', answer: 'The most comprehensive web development program covering frontend, backend, DevOps, system design, and tech leadership.' },
            { question: 'Technology breadth?', answer: 'MERN, MEAN, Next.js, TypeScript, GraphQL, Docker, Kubernetes, AWS, system design, and microservices.' },
            { question: 'Career outcome?', answer: 'Full-Stack Developer, Tech Lead, Software Architect, Engineering Manager roles at top companies.' }
        ],
        curriculum: [
            { module: 'Frontend Excellence', topics: ['React/Angular Advanced', 'Next.js', 'TypeScript', 'Testing'] },
            { module: 'Backend Mastery', topics: ['Node.js Advanced', 'Python/Django', 'GraphQL', 'Microservices'] },
            { module: 'DevOps & Cloud', topics: ['Docker', 'Kubernetes', 'AWS/GCP', 'CI/CD Pipelines'] },
            { module: 'System Design', topics: ['Scalability', 'Database Design', 'Caching', 'Security'] },
            { module: 'Leadership', topics: ['Tech Leadership', 'Code Review', 'Team Management', 'Industry Project'] }
        ],
        projects: [
            { name: 'Scalable SaaS Platform', description: 'Multi-tenant SaaS application' },
            { name: 'Real-time System', description: 'High-concurrency real-time app' },
            { name: 'Open Source Contribution', description: 'Contribute to major OSS' }
        ],
        pricing: [
            { price: '₹2,00,000', plan: 'Pro Degree', features: ['700+ Hours Training', '12-Month Program', 'Industry Internship', 'Pro Certification', 'Placement Guarantee', 'AWS Certifications', 'Tech Lead Mentorship'], recommended: true }
        ],
        faqs: [
            { question: 'What companies hire from this program?', answer: 'Amazon, Google, Microsoft, Meta, Goldman Sachs, Flipkart, and 500+ startups.' },
            { question: 'Can experienced developers join?', answer: 'Yes! We have tracks for experienced developers looking to level up to architect/lead roles.' }
        ]
    }
}

// Helper to get program by slug
export const getProgram = (slug) => programsData[slug]

// Get all programs as array
export const getAllPrograms = () => Object.values(programsData)

// Alumni companies (shared across programs) - 45 logos
export const alumniCompanies = [
    '/logos/logo1.png', '/logos/logo2.png', '/logos/logo3.png', '/logos/logo4.png', '/logos/logo5.png',
    '/logos/logo6.png', '/logos/logo7.png', '/logos/logo8.png', '/logos/logo9.png', '/logos/logo10.png',
    '/logos/logo11.png', '/logos/logo12.png', '/logos/logo13.png', '/logos/logo14.png', '/logos/logo15.png',
    '/logos/logo16.png', '/logos/logo17.png', '/logos/logo18.png', '/logos/logo19.png', '/logos/logo20.png',
    '/logos/logo21.png', '/logos/logo22.png', '/logos/logo23.png', '/logos/logo24.png', '/logos/logo25.png',
    '/logos/logo26.png', '/logos/logo27.png', '/logos/logo28.png', '/logos/logo29.png', '/logos/logo30.png',
    '/logos/logo31.png', '/logos/logo32.png', '/logos/logo33.png', '/logos/logo34.png', '/logos/logo35.png',
    '/logos/logo36.png', '/logos/logo37.png', '/logos/logo38.png', '/logos/logo39.png', '/logos/logo40.png',
    '/logos/logo41.png', '/logos/logo42.png', '/logos/logo43.png', '/logos/logo44.png', '/logos/logo45.png'
]

