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
    'android-development': {
        id: 'android-development',
        title: 'Android Development',
        category: 'Computer Science & IT',
        icon: '📱',
        color: '#3ddc84',
        gradient: 'linear-gradient(135deg, #3ddc84 0%, #2fa866 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is Android Development?',
                answer: 'Android Development is the process of creating applications for devices running the Android operating system. It involves using programming languages like Java or Kotlin along with the Android SDK to build mobile apps.'
            },
            {
                question: 'Why learn Android Development?',
                answer: 'Android holds the largest market share in the mobile OS market. Learning Android development opens doors to millions of potential users and lucrative career opportunities in mobile app development.'
            },
            {
                question: 'Why Eduholic for Android Development?',
                answer: 'At Eduholic, we provide hands-on training covering the complete Android development lifecycle from basics to publishing on Play Store. Our expert mentors guide you through real-world projects.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['App-development overview', 'Introduction to Android OS', 'Environment setup', 'Android development tools overview', 'Apps & APK files', 'Android app component']
            },
            {
                module: 'Input Data',
                topics: ['Removing & avoid undesired input data', 'Building activities for results', 'Generic filtering search Activity', 'Creating search & array adapter', 'Setting up & filtering list view']
            },
            {
                module: 'Building Android Applications',
                topics: ['Building Activities', 'Building and using Services', 'Notifications', 'App widgets', 'App framework']
            },
            {
                module: 'Views & UI',
                topics: ['Views overview', 'Using views in app development', 'Designing UI with views', 'Designing buttons', 'Displaying web pages', 'Using the TimePicker & DatePicker', 'Relative, linear, frame layout for view positioning', 'Using table layout for view positioning']
            },
            {
                module: 'Layouts and Widgets',
                topics: ['Packages', 'Customizing and displaying lists with ListView', 'Displaying multiple lists', 'Using additional text views', 'Displaying a List of Images', 'Animating images using ImageSwitcher']
            },
            {
                module: 'Network Programming',
                topics: ['Using HTTP', 'XML & JSON web services', 'Creating a socket server & client', 'Bluetooth']
            },
            {
                module: 'Location-Based Data Services',
                topics: ['Obtaining Geographical Location', 'Using a Broadcast Receiver to Obtain Locations', 'Choosing the Best Location Provider to Use', 'Monitoring a Location']
            },
            {
                module: 'Accessing Hardware',
                topics: ['Camera', 'Flashlight', 'Hardware buttons']
            },
            {
                module: 'Data Management',
                topics: ['Saving and loading user preferences', 'Creating a preference screen', 'Saving Files to the data directory, cache directory, external storage', 'Attaching files to your project', 'Local databases', 'SQL databases']
            },
            {
                module: 'App Testing and Release',
                topics: ['Introduction', 'Unit Testing', 'Instrumented test', 'Inspect code', 'APK signing', 'Google play console signup']
            }
        ],
        projects: [
            { name: 'Online Shopping Application', description: 'Build a complete e-commerce mobile app with product listings and cart functionality' },
            { name: 'Text and Image Detector', description: 'Create an app using ML Kit for text and image detection' },
            { name: 'Weather Forecast Application', description: 'Build a weather app that fetches real-time weather data from APIs' },
            { name: 'Bluetooth Application', description: 'Develop an app for Bluetooth device pairing and data transfer' },
            { name: 'Chatting App', description: 'Create a real-time messaging application with user authentication' }
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
                answer: 'Basic understanding of programming concepts is helpful. We cover Java/Kotlin fundamentals in the initial modules.'
            },
            {
                question: 'What tools will I learn?',
                answer: 'You will learn Android Studio, Java/Kotlin, Firebase, REST APIs, and other industry-standard Android development tools.'
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
    'full-stack-web-development': {
        id: 'full-stack-web-development',
        title: 'Full Stack Web Development',
        category: 'Computer Science & IT',
        icon: '🌐',
        color: '#f97316',
        gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is Full Stack Web Development?',
                answer: 'Full Stack Web Development involves both frontend and backend development, enabling you to build complete web applications from start to finish including user interfaces, server-side logic, and databases.'
            },
            {
                question: 'Why learn Full Stack Development?',
                answer: 'Full Stack developers are highly valued in the industry for their versatility. They can handle complete projects independently and are among the highest-paid professionals in tech.'
            },
            {
                question: 'Why Eduholic for Full Stack Development?',
                answer: 'At Eduholic we provide comprehensive training covering HTML, CSS, JavaScript, Python, databases, and backend programming with real-world projects and expert mentorship.'
            }
        ],
        curriculum: [
            {
                module: 'Web Development Introduction',
                topics: ['What is website design?', 'Why are websites important?', 'Fundamental web principles & technology', 'Command Line Interface tools']
            },
            {
                module: 'Introduction to Python',
                topics: ['Python Basics', 'Python Data Structures', 'Python Programming Fundamentals']
            },
            {
                module: 'Website Design Principles',
                topics: ['Introduction to UX', 'Creating a website with good UX', 'Website design process']
            },
            {
                module: 'HTML5',
                topics: ['What is HTML 5?', 'Differences between HTML5 & HTML', 'Div & Span', 'Basics of HTML', 'HTML Tags', 'Metadata', 'Advanced HTML5 features']
            },
            {
                module: 'CSS',
                topics: ['What is a CSS?', 'Use of CSS in web design', 'Introduction to CSS3', 'Types of CSS', 'Images and animations', 'CSS grid & layout', 'CSS grid & flexbox']
            },
            {
                module: 'JavaScript',
                topics: ['Introduction to Javascript', 'Basics of coding', 'JavaScript data types', 'Flow control & Looping', 'Programming', 'Refactoring & Debugging']
            },
            {
                module: 'Object Oriented Programming',
                topics: ['Inheritance, Constructors and Destructor', 'Encapsulation', 'Polymorphism']
            },
            {
                module: 'jQuery',
                topics: ['Selector, Traversing', 'Events, Ajax, DOM']
            },
            {
                module: 'Database Management',
                topics: ['Introduction to database management', 'SQL', 'Data Modelling', 'PHP']
            },
            {
                module: 'Backend Programming',
                topics: ['Nodes introduction', 'Server - Side JavaScript', 'NPM', 'JavaScript Build Processes', 'Event Loop and Emitters', 'APIs', 'Creating the UI']
            },
            {
                module: 'SEO',
                topics: ['Understanding Search Engine Optimization (SEO)', 'Keyword research and tools for Keyword research', 'Creating Content for SEO', 'Link Building and BackLinks', 'Schema Mark-up For SEO']
            },
            {
                module: 'Classification',
                topics: ['kNN introduction', 'kNN practical', 'SVM introduction', 'SVM practical', 'Decision tree classifier and random forest classifier in python']
            }
        ],
        projects: [
            { name: 'EdTech Company Website Design', description: 'Design and develop a complete educational technology company website' },
            { name: 'E-commerce Website', description: 'Build a full-featured e-commerce website with cart and checkout' },
            { name: 'Entertainment Website', description: 'Create an entertainment portal with dynamic content' },
            { name: 'Multiple Mock Website Designs', description: 'Practice creating various website layouts and designs' },
            { name: 'Webpages', description: 'Build multiple responsive webpages with modern designs' }
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
                question: 'Is full-stack web development hard?',
                answer: 'Full-stack development requires learning multiple technologies, but with proper guidance and practice, anyone can master it. Our structured curriculum makes learning easy.'
            },
            {
                question: 'What technologies will I learn?',
                answer: 'You will learn HTML5, CSS3, JavaScript, Python, Node.js, SQL, MongoDB, and various frameworks and tools used in industry.'
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
    'hybrid-electric-vehicles': {
        id: 'hybrid-electric-vehicles',
        title: 'Hybrid & Electric Vehicles',
        category: 'Electronics & Communication',
        icon: '🚗',
        color: '#22c55e',
        gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is the Hybrid & Electric Vehicles course?',
                answer: 'This course covers the fundamentals and advanced concepts of electric and hybrid vehicles, including EV systems, batteries, motors, charging infrastructure, and vehicle design using CAD tools.'
            },
            {
                question: 'Why learn about Electric Vehicles?',
                answer: 'The automotive industry is rapidly transitioning to electric mobility. Understanding EV technology opens doors to exciting career opportunities in a growing sustainable transportation sector.'
            },
            {
                question: 'Why Eduholic for EV Training?',
                answer: 'At Eduholic, we provide comprehensive training covering EV fundamentals, battery technology, hybrid systems, and CAD modeling with hands-on projects and expert mentorship.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['History of Vehicles', 'Types of Engineering Drawing', 'Introduction to Sketching', 'Introduction to AutoCAD', 'Geometry Development']
            },
            {
                module: 'Introduction to Electric Vehicles',
                topics: ['Sustainable transportation', 'EV systems', 'EV advantages', 'EV transmission configuration', 'Utility of electric vehicles', 'Electric Vehicle market', 'Types of electric vehicle in use', 'Future of Electric vehicles']
            },
            {
                module: 'Electric Vehicle Modelling',
                topics: ['Consideration of rolling resistance, transmission efficiency', 'Consideration of vehicle mass', 'Aerodynamic consideration', 'General issues in design']
            },
            {
                module: 'Electric Vehicle Batteries',
                topics: ['Characteristics of batteries', 'Types of batteries', 'EV batteries']
            },
            {
                module: 'Introduction to Hybrid Vehicles',
                topics: ['Introduction', 'Advantages and Disadvantages of hybrid vehicles', 'Principle of energy hybridization']
            },
            {
                module: 'Hybrid-Electric Vehicles',
                topics: ['HEV fundamentals', 'Architectures of HEVs', 'Advantages and disadvantages', 'Automobile hybridization', 'Fuel cell hybrid electric vehicle', 'Battery charger topologies', 'Charging station infrastructures']
            },
            {
                module: 'Design of Hybrid Electric Vehicles',
                topics: ['Design Principles of HEVs I', 'Design Principles of HEVs II', 'Detailed analysis', 'EMS based on real time optimisation']
            },
            {
                module: 'Modelling of HEV using Inventor',
                topics: ['Introduction to CAD', 'Developing EV components', 'Constraints and drafting', 'Develop PHEV', 'Develop HEV']
            },
            {
                module: 'Energy Sources',
                topics: ['Renewable energy sources', 'Battery charger topologies', 'Charging stations', 'Infrastructure']
            }
        ],
        projects: [
            { name: 'Assembly Design', description: 'Design complete vehicle assembly using CAD tools' },
            { name: 'Vehicle Control Unit', description: 'Develop and understand vehicle control systems' },
            { name: 'Lifecycle Ownership Cost Analysis', description: 'Analyze total cost of ownership for electric vehicles' },
            { name: 'Analysis of Various Vehicles', description: 'Compare different EV and HEV configurations' },
            { name: 'EV Chargers', description: 'Design and understand EV charging infrastructure' }
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
                question: 'Do I need prior automotive knowledge?',
                answer: 'Basic understanding of engineering concepts is helpful but not mandatory. We cover fundamentals from the beginning.'
            },
            {
                question: 'What tools will I learn?',
                answer: 'You will learn AutoCAD, Autodesk Inventor, and various EV analysis tools used in the automotive industry.'
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
    'embedded-systems': {
        id: 'embedded-systems',
        title: 'Embedded Systems',
        category: 'Electronics & Communication',
        icon: '🔌',
        color: '#0ea5e9',
        gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What are Embedded Systems?',
                answer: 'Embedded systems are specialized computer systems designed to perform dedicated functions within larger mechanical or electrical systems. They are found in everyday devices from smartphones to automobiles.'
            },
            {
                question: 'Why learn Embedded Systems?',
                answer: 'Embedded systems are the backbone of IoT, automotive, consumer electronics, and industrial automation. Learning embedded programming opens doors to diverse career opportunities in hardware and software integration.'
            },
            {
                question: 'Why Eduholic for Embedded Systems?',
                answer: 'At Eduholic, we provide hands-on training with microcontrollers, Arduino, ARM processors, and real hardware interfacing with practical projects guided by industry experts.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['What are embedded systems?', 'Scope & Practical uses of embedded systems', 'History & evolution of embedded systems']
            },
            {
                module: 'Microcontroller',
                topics: ['What is a microcontroller?', 'ATMega 328p', 'Architecture and block']
            },
            {
                module: 'Introduction to Microcontroller Architecture',
                topics: ['Introduction on Architecture', 'Overview of 8051 Architecture', 'Functional block Diagram']
            },
            {
                module: 'Arduino',
                topics: ['What is Arduino?', 'Working of Arduino', 'Integration of sensors and actuators', 'DC Motors', 'Servo and Stepper Motors']
            },
            {
                module: 'Embedded Tools',
                topics: ['Programmer / Debugger', 'IDE', 'Programming Tool']
            },
            {
                module: 'Interfacing',
                topics: ['Embedded C', 'I/O functionalities', 'Interfacing LEDs and switches', 'Interfacing LCD with 8051', 'Interfacing keypad matrix with 8051']
            },
            {
                module: 'Communication',
                topics: ['I2C', 'SPI', 'I2C Programming']
            },
            {
                module: 'Peripheral Programming and Internal Architecture',
                topics: ['GPIO', 'Input', 'Output', 'ADC and PWM', 'EEPROM', 'UART, Serial Port and Serial plotter']
            },
            {
                module: 'Introduction to Advanced Controllers',
                topics: ['ARM Cortex', 'Programming with embedded C', 'LEDs and switches', 'LCD with ARM controller']
            }
        ],
        projects: [
            { name: 'Smart Home Automation', description: 'Build an automated smart home system using microcontrollers' },
            { name: 'Controlling Devices using IR Remote', description: 'Create an IR-based device control system' },
            { name: 'Wireless Metal Detector Robot', description: 'Build a robot that can detect metal objects wirelessly' },
            { name: 'Arduino Based Fire Alarm System', description: 'Develop a fire detection and alarm system using Arduino' },
            { name: 'Door Lock System', description: 'Create an electronic door lock security system' }
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
                question: 'Do I need prior electronics knowledge?',
                answer: 'Basic understanding of electronics is helpful but not mandatory. We cover fundamentals in the initial modules.'
            },
            {
                question: 'What hardware will I work with?',
                answer: 'You will work with Arduino, 8051 microcontroller, ARM Cortex, various sensors, and actuators for hands-on learning.'
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
    'finance': {
        id: 'finance',
        title: 'Finance',
        category: 'Management & Business',
        icon: '💰',
        color: '#059669',
        gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is Finance?',
                answer: 'Finance involves the management, creation, and study of money, banking, credit, investments, assets, and liabilities. It covers financial planning, treasury management, corporate finance, and risk management.'
            },
            {
                question: 'Why learn Finance?',
                answer: 'Finance skills are essential in every industry. Understanding financial concepts opens doors to careers in banking, corporate finance, investment management, and financial consulting.'
            },
            {
                question: 'Why Eduholic for Finance?',
                answer: 'At Eduholic, we provide comprehensive training covering treasury management, portfolio management, risk analysis, and supply chain finance with real-world case studies and expert mentorship.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction to Finance',
                topics: ['What is finance?', 'Types of finance', 'What is financial planning']
            },
            {
                module: 'Introduction to Treasury',
                topics: ['What is treasury?', 'Functions and roles of treasury', 'Treasury management in banks and corporations']
            },
            {
                module: 'Corporate Finance & Portfolio Management',
                topics: ['Basics of financing decisions', 'Capital structure & ratios', 'Credit assessment for financing decisions', 'What is a portfolio?', 'Why do corporations invest in other businesses?', 'Liquidity, credit, and market risk', 'Investment management', 'Formulation and application of investment policy']
            },
            {
                module: 'Financial Risk Management',
                topics: ['Introduction to financial risks', 'Currency, interest rates, and commodity risk', 'Price movement analysis', 'Risk mitigation techniques']
            },
            {
                module: 'Cash and Liquidity Management',
                topics: ['Liquidity management', 'Cash forecasting', 'Physical and notional cash pools', 'POBO/ROBO models', 'Clearing and settlement systems']
            },
            {
                module: 'Supply Chain Management',
                topics: ['Working capital management', 'Cash conversion cycle', 'Receipts and payables outstanding/indents and requisitions outstanding', 'Letter of credit, bank guarantee, discounting, factoring, and forfeiting', 'Legal terms, regulatory and compliances']
            }
        ],
        projects: [
            { name: 'Financial Derivatives Analysis', description: 'Analyze financial derivatives and their applications' },
            { name: 'Portfolio Evaluation', description: 'Evaluate and optimize investment portfolios' },
            { name: 'Capital Structure Analysis', description: 'Analyze corporate capital structures and financing decisions' },
            { name: 'Debt Analysis', description: 'Comprehensive debt analysis and management strategies' },
            { name: 'Mutual Funds Investment Analysis', description: 'Analyze mutual fund investments and performance' }
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
                question: 'Do I need prior finance knowledge?',
                answer: 'Basic understanding of mathematics and business concepts is helpful but we cover fundamentals from scratch.'
            },
            {
                question: 'What tools will I learn?',
                answer: 'You will learn Excel for financial modeling, financial statement analysis, and various finance-related software tools.'
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
    'stock-market': {
        id: 'stock-market',
        title: 'Stock Market & Cryptocurrency',
        category: 'Management & Business',
        icon: '📈',
        color: '#f59e0b',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        stats: {
            duration: '4 Months',
            hours: '100+ Hours',
            students: '2000+',
            experts: '15+',
            interaction: '1 on 1'
        },
        overview: [
            {
                question: 'What is the Stock Market & Cryptocurrency course?',
                answer: 'This course covers stock market fundamentals, trading strategies, derivatives, technical and fundamental analysis, portfolio management, and cryptocurrency investing.'
            },
            {
                question: 'Why learn Stock Market & Crypto?',
                answer: 'Financial markets offer tremendous opportunities for wealth creation. Understanding stocks and crypto opens doors to careers in trading, investment banking, and personal wealth management.'
            },
            {
                question: 'Why Eduholic for Stock Market Training?',
                answer: 'At Eduholic, we provide hands-on training with real market analysis, trading simulations, and expert guidance from experienced market professionals.'
            }
        ],
        curriculum: [
            {
                module: 'Introduction',
                topics: ['What are stocks?', 'What is the stock market?', 'Who is a stock marketer?', 'Estimating Manpower Gaps', 'Why do companies go public?']
            },
            {
                module: 'Trading',
                topics: ['Introduction to trading', 'Trading', 'Clearing', 'Settling']
            },
            {
                module: 'Derivatives Market',
                topics: ['What are derivatives?', 'How are derivatives classified?', 'Types of derivatives', 'What is the derivatives market?', 'Participants in derivatives']
            },
            {
                module: 'Market Analysis',
                topics: ['Fundamental analysis', 'Technical analysis', 'Stock market analysis', 'Gold market analysis', 'Candles, patterns & indicators']
            },
            {
                module: 'Portfolio Management',
                topics: ['What is a portfolio?', 'How do you build a good portfolio?', 'Risk tolerance', 'Rebalancing your portfolio']
            },
            {
                module: 'Cryptocurrency',
                topics: ['What is cryptocurrency?', 'Most popular cryptocurrency', 'Crypto-Mining', 'The long-term future of cryptocurrency', 'How to invest in cryptocurrency']
            }
        ],
        projects: [
            { name: 'Market Analysis', description: 'Conduct comprehensive stock market analysis' },
            { name: 'Case Studies', description: 'Analyze real-world market case studies and investment decisions' },
            { name: 'Growth Analysis', description: 'Perform growth analysis on stocks and market sectors' },
            { name: 'Candles, Patterns & Indicators', description: 'Master technical analysis using chart patterns and indicators' },
            { name: 'Mock Cryptocurrency Investments', description: 'Simulate cryptocurrency investment strategies' }
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
                question: 'Do I need prior trading experience?',
                answer: 'No prior experience is needed. We start from the basics and gradually move to advanced concepts.'
            },
            {
                question: 'Will I learn about cryptocurrency too?',
                answer: 'Yes, the course covers cryptocurrency fundamentals, popular coins, mining, and investment strategies.'
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
            { module: 'Basic Marketing', topics: ['Introduction to marketing', 'Why marketing is important', 'Production concept', 'Marketing mix'] },
            { module: 'Introduction to Digital Marketing', topics: ['What is digital marketing?', 'Digital marketing analytics', 'Connection between digital marketing and marketing', 'Using digital marketing to drive sales'] },
            { module: 'Content Marketing', topics: ['What is content marketing?', 'Content marketing as an effective part of a digital marketing strategy', 'Different types of content marketing', 'Content idea generation', 'Long-term content planning', 'Blogging and guest blogging'] },
            { module: 'Email Marketing', topics: ['What is email marketing?', 'Email newsletters', 'Building conversions through email', 'Customer retention and re-targeting', 'E-mail marketing ethics and principles'] },
            { module: 'Website Planning', topics: ['Creating basic HTML pages', 'Web graphics', 'Designing & planning web pages', 'Mobile web design', 'WordPress essentials'] },
            { module: 'Lead Generation', topics: ['What is lead generation?', 'What is the lead conversion process?', 'How do you convert a lead?', 'Contact management and segmentation strategies', 'Lead conversion metrics'] },
            { module: 'Strategic Marketing', topics: ['Building objectives and budget', 'Popular digital marketing plans', 'Building a digital marketing plan', 'Web-metrics/tracking digital marketing plan'] },
            { module: 'SEO & SEM', topics: ['Understanding Search Engine Optimization (SEO)', 'Keyword research and tools for Keyword research', 'Creating Content for SEO', 'Link Building and BackLinks', 'Schema Mark-up For SEO', 'Understanding Search engine marketing', 'Pay per click (PPC), its Importance, types, and benefits'] },
            { module: 'Social Media Advertising', topics: ['What is social media content?', 'Brand building on social media', 'Benefits of advertising on social media', 'Advertising on major social media platforms (Facebook, Instagram, LinkedIn, Twitter)'] },
            { module: 'Evolution of the Digital Market', topics: ['Creation of the internet', 'Evolution of web ads', 'Advent of social media', 'Evolution of traffic tracking analytics', 'Growth in web users since COVID-19 pandemic'] },
            { module: 'Digital Business vs Digital Marketing', topics: ['Differences between digital business and digital marketing'] }
        ],
        projects: [
            { name: 'Google Search Engine Marketing Analysis', description: 'Analyze and optimize Google search marketing campaigns' },
            { name: 'SEO/SEM Analysis', description: 'Comprehensive SEO and SEM audit for websites' },
            { name: 'ROI for Various Digital Marketing Analysis', description: 'Calculate and analyze ROI across different digital marketing channels' },
            { name: 'Email Marketing', description: 'Create and execute email marketing campaigns' },
            { name: 'Social Media Calendar', description: 'Develop a comprehensive social media content calendar' }
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
            { module: 'HR Planning', topics: ['Analyzing objectives', 'Inventory current human resources', 'Forecast the demand and the supply of employees', 'Estimating Manpower Gaps', 'Monitoring, Control & Feedback'] },
            { module: 'Recruitment & Selection', topics: ['What is the recruitment process?', 'Steps in the recruitment and selection process', 'Sources of recruitment', 'Methods of recruitment'] },
            { module: 'Training & Development', topics: ['What do you mean by training?', 'Need for training', 'What is the difference between training and development?', 'Methods of training & development', 'Succession Planning'] },
            { module: 'Compensation & Benefits', topics: ['Types of Pay', 'Total Rewards and Compensation', 'Employee Motivation & Incentives', 'Wage & Salary Policies'] },
            { module: 'Performance Appraisals', topics: ['Management by objectives', 'Performance appraisal overview', 'Performance appraisal process', 'Methods of performance appraisals', 'Potential benefits and problems of performance appraisals', 'Performance appraisals in non-traditional work settings', 'Alternatives to performance appraisals'] },
            { module: 'Employee Relations', topics: ['Conflict management', 'Workplace employee relations', 'Stages of employee life cycle', 'Hour and wage issues'] }
        ],
        projects: [
            { name: 'Employee Attrition and Retention in EdTech', description: 'Study employee attrition and retention strategies in an EdTech industry' },
            { name: 'Performance Appraisals in EdTech Organization', description: 'Design and implement performance appraisal systems' },
            { name: 'Study on Employees Welfare Scheme', description: 'Analyze and develop employee welfare programs' },
            { name: 'Study on Gender Equality at Workplace', description: 'Research gender equality practices in organizations' },
            { name: 'Drafting Organizational Policy', description: 'Create comprehensive organizational HR policies' }
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
    'flutter': {
        id: 'flutter',
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
            { module: 'Introduction', topics: ['Introduction to Flutter - The What\'s and The Why\'s', 'Applications', 'Challenges'] },
            { module: 'Introduction To Dart', topics: ['Reason why Dart holds the fort strong', 'Installing Visual Studio Code and the Dart Plugin', 'Installing Dart SDK', 'Writing the first Dart Program'] },
            { module: 'Setting up Flutter', topics: ['Downloading/Cloning the Flutter SDK', 'Installing Flutter Plugin within VS Code', 'Understanding the structure of a Flutter Project', 'Building a simple app from scratch'] },
            { module: 'Introducing Widget', topics: ['Widgets and their role in a Flutter app', 'The MaterialApp and Scaffold widget', 'AppBar', 'FloatingActionButton', 'More widgets - Text, Center and Padding', 'Hot Reload and Hot Restart', 'Recreating the Default Flutter App (UI Only)', 'Common Widget in Flutter'] },
            { module: 'Containers and Their Role', topics: ['Importing images from a network', 'Importing images as assets', 'Adding icons to widgets', 'Understanding Row and Column', 'ListView and ListTile', 'Building views using ListView.builder', 'Inkwell and its importance'] },
            { module: 'Stateless and Stateful Widgets', topics: ['Stateless vs. Stateful widgets', 'Defining a State', 'The set state method', 'Returning to the Default Flutter App'] },
            { module: 'Navigation', topics: ['Navigator and routes', 'Applying push', 'Using Material Page Route', 'Applying pop', 'Declaring parameter-less routes (pushNamed()) in MaterialApp widget'] },
            { module: 'Handling User Input', topics: ['Using TextField', 'Handling changes to a Text Field', 'Pass retrieved values using Navigator'] },
            { module: 'User Interface', topics: ['Applying ThemeData', 'The Basic Screen Layout', 'Applying Custom Font'] },
            { module: 'Asynchronous Functions', topics: ['The Future function', 'async and await'] },
            { module: 'Working with Remote Data', topics: ['The http package', 'Model Class and JSON parsing', 'Displaying Remote Data (NEWS API)'] },
            { module: 'Using 3rd Party Packages', topics: ['The url_launcher package', 'Adding on Tap to NEWS API'] },
            { module: 'Other Useful Widgets', topics: ['Grid View', 'The Hero Animation', 'Stack', 'Alert Dialog with buttons'] },
            { module: 'Advanced User Interface', topics: ['Applying ThemeData', 'The Basic Screen Layout', 'Applying Custom Font'] }
        ],
        projects: [
            { name: 'Instagram Clone', description: 'Build a complete Instagram-like social media application' },
            { name: 'E-Commerce App', description: 'Create a full-featured shopping application with cart and checkout' },
            { name: 'Spotify Clone', description: 'Develop a music streaming app similar to Spotify' },
            { name: 'Skype Clone', description: 'Build a video calling and messaging application' },
            { name: 'Netflix Clone', description: 'Create a video streaming application like Netflix' }
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
    '/logos/logo4.png', '/logos/logo24.png', '/logos/logo40.png', '/logos/logo1.png', '/logos/logo5.png',
    '/logos/logo29.png', '/logos/logo12.png', '/logos/logo8.png', '/logos/logo9.png', '/logos/logo41.png',
    '/logos/logo11.png', '/logos/logo7.png', '/logos/logo13.png', '/logos/logo44.png', '/logos/logo15.png',
    '/logos/logo16.png', '/logos/logo17.png', '/logos/logo42.png', '/logos/logo19.png', '/logos/logo20.png',
    '/logos/logo21.png', '/logos/logo43.png', '/logos/logo23.png', '/logos/logo2.png', '/logos/logo37.png',
    '/logos/logo26.png', '/logos/logo45.png', '/logos/logo39.png', '/logos/logo6.png', '/logos/logo30.png',
    '/logos/logo31.png', '/logos/logo32.png', '/logos/logo33.png', '/logos/logo34.png', '/logos/logo35.png',
    '/logos/logo36.png', '/logos/logo25.png', '/logos/logo38.png', '/logos/logo28.png', '/logos/logo3.png',
    '/logos/logo10.png', '/logos/logo18.png', '/logos/logo22.png', '/logos/logo14.png', '/logos/logo27.png'
]

