/**
 * Ahmed Elhag Portfolio - Multi-language Content Data Store
 */

const portfolioData = {
    en: {
        profile: {
            name: "Ahmed Elhag",
            title: "Mechatronics Engineering Student",
            avatar: "assets/images/ahmed.jpg",
            locationLabel: "LinkedIn",
            location: "linkedin.com/in/ahmed3lhag",
            linkedin: "https://linkedin.com/in/ahmed3lhag",
            emailLabel: "Email",
            email: "",
            socials: [
                { platform: "github", icon: "fab fa-github", link: "https://github.com/ahmed3lhag" },
                { platform: "linkedin", icon: "fab fa-linkedin", link: "https://linkedin.com/in/ahmed3lhag" },
                { platform: "twitter", icon: "fab fa-x-twitter", link: "https://x.com/ahmed3lhag" },
                { platform: "telegram", icon: "fab fa-telegram", link: "https://t.me/ahmed3lhag" }
            ]
        },
        nav: {
            about: "About",
            resume: "Resume",
            portfolio: "Portfolio",
            certificates: "Certificates"
        },
        about: {
            title: "About Me",
            description: [
                "I am a Mechatronics Engineering student at the beginning of my academic journey, driven by a curiosity for how mechanical systems and software interact. My current focus is on building a solid engineering foundation through my studies.",
                "Beyond the classroom, I am a self-driven tech enthusiast who loves exploring programming, AI trends, and automation. I enjoy experimenting with code and building digital tools to solve everyday challenges while continuously learning new skills."
            ],
            servicesTitle: "Interests & Focus",
            services: [
                {
                    title: "Mechatronics",
                    icon: "fas fa-microchip",
                    description: "Learning the integration of mechanical design and electronic control systems."
                },
                {
                    title: "Tech Enthusiast",
                    icon: "fas fa-code",
                    description: "Exploring programming, AI trends, and building functional digital tools."
                }
            ]
        },
        resume: {
            title: "Resume",
            experienceTitle: "Experience",
            educationTitle: "Education",
            skillsTitle: "Technical Stack",
            experience: [
                {
                    role: "CEO & Founder",
                    company: "Qiraya Platform",
                    period: "2025 - Present",
                    description: "Leading a premier Sudanese educational platform providing textbooks, past exams, and institutional data for all academic levels."
                },
                {
                    role: "IT Specialist",
                    company: "Astler Engineering",
                    period: "2025 - Present",
                    description: "Providing infrastructure support while applying engineering principles."
                }
            ],
            education: [
                {
                    institution: "University of Science and Technology",
                    degree: "Mechatronics Engineering",
                    period: "2026 - Present"
                },
                {
                    institution: "African Council for Private Education",
                    degree: "Sudanese High School Certificate",
                    period: "2025"
                }
            ],
            skills: [
                { name: "HTML5", icon: "devicon-html5-plain" },
                { name: "CSS3", icon: "devicon-css3-plain" },
                { name: "JavaScript", icon: "devicon-javascript-plain" },
                { name: "Python", icon: "devicon-python-plain" },
                { name: "PHP", icon: "devicon-php-plain" },
                { name: "WordPress", icon: "devicon-wordpress-plain" },
                { name: "Git", icon: "devicon-git-plain" },
                { name: "Linux", icon: "devicon-linux-plain" },
                { name: "Windows", icon: "devicon-windows8-original" }
            ]
        },
        portfolio: {
            title: "Portfolio",
            items: [
                {
                    title: "Qiraya Platform",
                    category: "Education",
                    link: "https://qiraya.sd",
                    icon: "fas fa-graduation-cap"
                },
                {
                    title: "Password Generator",
                    category: "Security Tool",
                    link: "projects/password-generator/index.html",
                    icon: "fas fa-key"
                },
                {
                    title: "QR Generator",
                    category: "Utility Tool",
                    link: "projects/qr-generator/index.html",
                    icon: "fas fa-qrcode"
                }
            ]
        },
        certificates: {
            title: "Certificates",
            items: [
                { title: "Google IT Support Professional", provider: "Coursera", year: "2024" },
                { title: "Web Design for Everybody", provider: "Coursera", year: "2024" },
                { title: "Python for Everybody", provider: "Coursera", year: "2024" },
                { title: "Microsoft 365 Fundamentals", provider: "Coursera", year: "2025" },
                { title: "Google AI", provider: "Coursera", year: "2026" }
            ]
        },
        footer: "© 2026 Ahmed Elhag"
    },
    ar: {
        profile: {
            name: "أحمد الحاج",
            title: "طالب هندسة ميكاترونكس",
            avatar: "assets/images/ahmed.jpg",
            locationLabel: "لينكد إن",
            location: "linkedin.com/in/ahmed3lhag",
            linkedin: "https://linkedin.com/in/ahmed3lhag",
            emailLabel: "البريد الإلكتروني",
            email: "",
            socials: [
                { platform: "github", icon: "fab fa-github", link: "https://github.com/ahmed3lhag" },
                { platform: "linkedin", icon: "fab fa-linkedin", link: "https://linkedin.com/in/ahmed3lhag" },
                { platform: "twitter", icon: "fab fa-x-twitter", link: "https://x.com/ahmed3lhag" },
                { platform: "telegram", icon: "fab fa-telegram", link: "https://t.me/ahmed3lhag" }
            ]
        },
        nav: {
            about: "عني",
            resume: "السيرة الذاتية",
            portfolio: "الأعمال",
            certificates: "الشهادات"
        },
        about: {
            title: "عني",
            description: [
                "أنا طالب في تخصص هندسة الميكاترونكس، أخطو خطواتي الأولى في فهم تداخل الأنظمة الميكانيكية مع البرمجيات. تركيزي الحالي منصب على التحصيل الأكاديمي وبناء أساس هندسي متين من خلال دراستي الجامعية.",
                "بجانب دراستي، أنا محب وشغوف بالتكنولوجيا، أهوى استكشاف عالم البرمجيات، والذكاء الاصطناعي، والحلول الرقمية الحديثة. أستمتع بالتجريب وبناء أدوات برمجية بسيطة تساعد في حل المشكلات اليومية وتنمي مهاراتي التقنية."
            ],
            servicesTitle: "الاهتمامات والتركيز",
            services: [
                {
                    title: "هندسة الميكاترونكس",
                    icon: "fas fa-microchip",
                    description: "دراسة تكامل التصميم الميكانيكي مع تكنولوجيا التحكم والحواسيب."
                },
                {
                    title: "شغف التكنولوجيا",
                    icon: "fas fa-code",
                    description: "تطوير البرمجيات، متابعة تقنيات AI، وبناء أدوات رقمية مفيدة."
                }
            ]
        },
        resume: {
            title: "السيرة الذاتية",
            experienceTitle: "الخبرة والنشاط",
            educationTitle: "التعليم",
            skillsTitle: "المهارات التقنية",
            experience: [
                {
                    role: "المؤسس والمدير التنفيذي",
                    company: "منصة قراية",
                    period: "2025 - الحاضر",
                    description: "منصة تعليمية سودانية رائدة توفر الكتب الدراسية، الامتحانات السابقة، ومعلومات المؤسسات التعليمية لتمكين الطلاب رقمياً."
                },
                {
                    role: "أخصائي تكنولوجيا معلومات",
                    company: "أستلر الهندسية",
                    period: "2025 - الحاضر",
                    description: "متابعة البنى التحتية التقنية مع تطبيق الفكر الهندسي المنظم."
                }
            ],
            education: [
                {
                    institution: "جامعة العلوم والتقانة",
                    degree: "هندسة الميكاترونكس",
                    period: "2026 - الحاضر"
                },
                {
                    institution: "المجلس الأفريقي للتعليم الخاص",
                    degree: "الشهادة الثانوية السودانية",
                    period: "2025"
                }
            ],
            skills: [
                { name: "HTML5", icon: "devicon-html5-plain" },
                { name: "CSS3", icon: "devicon-css3-plain" },
                { name: "JavaScript", icon: "devicon-javascript-plain" },
                { name: "Python", icon: "devicon-python-plain" },
                { name: "PHP", icon: "devicon-php-plain" },
                { name: "WordPress", icon: "devicon-wordpress-plain" },
                { name: "Git", icon: "devicon-git-plain" },
                { name: "Linux", icon: "devicon-linux-plain" },
                { name: "Windows", icon: "devicon-windows8-original" }
            ]
        },
        portfolio: {
            title: "معرض الأعمال",
            items: [
                {
                    title: "منصة قراية",
                    category: "عمل تعليمي",
                    link: "https://qiraya.sd",
                    icon: "fas fa-graduation-cap"
                },
                {
                    title: "مولد كلمات السر",
                    category: "أداة أمنية",
                    link: "projects/password-generator/index.html",
                    icon: "fas fa-key"
                },
                {
                    title: "محرك QR",
                    category: "أداة خدمية",
                    link: "projects/qr-generator/index.html",
                    icon: "fas fa-qrcode"
                }
            ]
        },
        certificates: {
            title: "الشهادات",
            items: [
                { title: "Google IT Support Professional", provider: "Coursera", year: "2024" },
                { title: "Web Design for Everybody", provider: "Coursera", year: "2024" },
                { title: "Python for Everybody", provider: "Coursera", year: "2024" },
                { title: "Microsoft 365 Fundamentals", provider: "Coursera", year: "2025" },
                { title: "Google AI", provider: "Coursera", year: "2026" }
            ]
        },
        footer: "© 2026 أحمد الحاج"
    }
};
