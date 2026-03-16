export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    image: string;
    verificationLink: string;
    description: string;
    category: "certificate" | "achievement" | "participation";
    featured?: boolean;
}

const getDriveThumbnail = (link: string) => {
    const fileId = link.match(/id=([^&]+)/)?.[1];
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` : "";
};

const rawCertificates = [
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "May 2025",
        description: "Mastered cloud service models (IaaS, PaaS, SaaS) and deployment strategies via NPTEL.",
        link: "https://drive.google.com/open?id=1oJBWX-DT-hEBpMq8zVGIW57v2Y5VYEC9",
        featured: true
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Coursera/Google",
        date: "Sep 2024",
        description: "In-depth study of OSI layers, TCP/IP, and network protocols in Google's professional program.",
        link: "https://drive.google.com/open?id=1-rUIdYruJc4B7lE-vNvqWIj8MLtW4vFX",
        featured: true
    },
    {
        title: "Packet Switching Networks and Algorithms",
        issuer: "Coursera/UoC",
        date: "Nov 2024",
        description: "Advanced exploration of switching logic, congestion control, and routing algorithms.",
        link: "https://drive.google.com/open?id=1q0ixbtTYdZdWzYWgSrA1qiBQXMdZPuNQ",
        featured: true
    },
    {
        title: "MongoDB Proof of Completion",
        issuer: "MongoDB",
        date: "Jun 2025",
        description: "Validated hands-on expertise in NoSQL schema design, aggregation pipelines, and indexing.",
        link: "https://drive.google.com/open?id=1QfWEuZ1pj2uix9iFPI0uJh4PebRlZUpx",
        featured: true
    },
    {
        title: "ChatGPT-4 Prompt Engineering",
        issuer: "Infosys",
        date: "Aug 2025",
        description: "Optimizing AI interactions using advanced prompt patterns for production-ready solutions.",
        link: "https://drive.google.com/open?id=1YAaNROYTJf1OPkLKxuLA16h_cAFS1Liz",
        featured: true
    },
    {
        title: "Data Structures and Algorithm",
        issuer: "iamneo",
        date: "Dec 2024",
        description: "Rigorous training in fundamental data structures and algorithmic complexity analysis.",
        link: "https://drive.google.com/open?id=1b4SJ_75HGR4zU9gVzoJzQTZVj6sqP6B1",
        featured: true
    },
    {
        title: "Computational Theory: Language Principle & Finite Automata Theory",
        issuer: "Infosys",
        date: "Aug 2025",
        description: "Explored formal languages, grammar rules, and state machine transitions.",
        link: "https://drive.google.com/open?id=1wqj8yRTdEMRLh1nl1gUGrZb3UCGNox2W"
    },
    {
        title: "Free Code Certificate",
        issuer: "freeCodeCamp",
        date: "Dec 2023",
        description: "Demonstrated proficiency in building responsive web layouts and basic interactivity.",
        link: "https://drive.google.com/open?id=10ntez5DIU5kBJpX6-ejy23_t-pAHEneC"
    },
    {
        title: "Devtown Certificate (27 Feb 2024)",
        issuer: "Devtown",
        date: "Feb 2024",
        description: "Comprehensive front-end development training covering React and modern web tools.",
        link: "https://drive.google.com/open?id=1XugmM4oBuwqTpf2JboMxH6nWFp9rAOh6"
    },
    {
        title: "Devtown Certificate",
        issuer: "Devtown",
        date: "2024",
        description: "Full stack engineering intensive focused on MERN stack and production deployment.",
        link: "https://drive.google.com/open?id=1VMibzj97IzLyStXYTklSkzJkbUudsXpT"
    },
    {
        title: "Devtown Certificate (16 Feb 2024)",
        issuer: "Devtown",
        date: "Feb 2024",
        description: "Completed advanced JavaScript workshops and competitive programming rounds.",
        link: "https://drive.google.com/open?id=14qhweATakR-pAY-iy76SUd2mfiaChM4X"
    },
    {
        title: "SQL Certificate",
        issuer: "MyGreatLearning",
        date: "2024",
        description: "In-depth SQL training from MyGreatLearning, covering queries and table management.",
        link: "https://drive.google.com/open?id=1spABH3hifF_82DERI7ltEs91fRXotJ7m"
    },
    {
        title: "Devtown Bootcamp Deep Web",
        issuer: "Devtown",
        date: "2024",
        description: "Specialized bootcamp on web technologies and deep-dive into backend architecture.",
        link: "https://drive.google.com/open?id=18SiAprbBpEu7c6d-cwjrHJb2S6CzAwbt"
    },
    {
        title: "Adobe India Hackathon - Participation",
        issuer: "Adobe",
        date: "2024",
        description: "Finalist in the Adobe India Hackathon, contributing to innovative software solutions.",
        link: "https://drive.google.com/open?id=1IpGWmJbWCPf-xCUzqRVKwkZ--qRUZAjG"
    },
    {
        title: "Master Generative AI & Generative AI tools",
        issuer: "Udemy",
        date: "Aug 2025",
        description: "Mastered the use of Generative AI tools and their integration into modern workflows.",
        link: "https://drive.google.com/open?id=1aLyZjaf7H1Lk8qQS_3xjXAi6GVyoCGDS"
    },
    {
        title: "CSE101 E-certificate",
        issuer: "iamneo",
        date: "2024",
        description: "Certified proficiency in Computer Science fundamentals and introductory programming.",
        link: "https://drive.google.com/open?id=1RdCV27t78DO8HEnp7Sb7m_kvxfqOASud"
    },
    {
        title: "Java Programming E-certificate",
        issuer: "iamneo",
        date: "2024",
        description: "Demonstrated advanced knowledge and application of Java programming language.",
        link: "https://drive.google.com/open?id=1NtElumvCl5UGOqZ6vGpvfq0U5D2LlqF3"
    },
    {
        title: "Build Generative AI Apps & Solutions with No-Code Tools",
        issuer: "Udemy",
        date: "Aug 2025",
        description: "Successfully built AI-powered applications using various no-code platforms.",
        link: "https://drive.google.com/open?id=1pRe8lHfmBl-LcF8hQeKn1P64ukmY6OU9"
    },
    {
        title: "ChatGPT Made Easy: AI Essentials for Beginners",
        issuer: "Udemy",
        date: "Aug 2025",
        description: "Comprehensive guide to AI essentials and maximizing the potential of ChatGPT.",
        link: "https://drive.google.com/open?id=1Z52tpWK033ZMX4o3c89ok89xxp-lj8vn"
    },
    {
        title: "C Programming Language",
        issuer: "CipherSchools",
        date: "May 2024",
        description: "Expertise in C programming from CipherSchools, focusing on core programming concepts.",
        link: "https://drive.google.com/open?id=1uXYuLHQg703J759NlgbUbOp-s43uDANs"
    },
    {
        title: "Mastering in C: Basic to Beyond",
        issuer: "CSE PATHSHALA",
        date: "Feb 2024",
        description: "Advanced certification in C from CSE PATHSHALA, covering basic to advanced topics.",
        link: "https://drive.google.com/open?id=11s7Mb7z-S6G2HEfl2uIc4AqTY1nGQNn7"
    },
    {
        title: "PMP Basics",
        issuer: "Project Management Institute",
        date: "2024",
        description: "Foundational knowledge in project management processes and best practices.",
        link: "https://drive.google.com/open?id=1YnCeBGhoXLwhOze5N9gk-PXyp8VfimEi"
    },
    {
        title: "BinaryBlitz Web Hackathon",
        issuer: "Coding Ninjas",
        date: "2024",
        description: "Finalist at BinaryBlitz National Hackathon, recognized for technical innovation.",
        link: "https://drive.google.com/open?id=1gq1r0eee-bUC4INiAUgNWj2eUu8rzAlc"
    },
    {
        title: "Object Oriented Programming",
        issuer: "iamneo",
        date: "2024",
        description: "In-depth understanding of OOP principles like inheritance, polymorphism, and encapsulation.",
        link: "https://drive.google.com/open?id=1dQ-Mcy3PQsl2vd4tg2uU1ZG0LEccHi6u"
    },
    {
        title: "Master Generative AI & Generative AI tools (Infosys)",
        issuer: "Infosys",
        date: "Aug 2025",
        description: "Certified expertise in Generative AI tools and enterprise application development.",
        link: "https://drive.google.com/open?id=1axvxE-TELemEyyIRRJSaGVaFM3Qcl1CM"
    },
    {
        title: "Microlearning Course in Machine Learning",
        issuer: "Board Infinity",
        date: "Jan 2024",
        description: "Certified proficiency in fundamental machine learning concepts and algorithms.",
        link: "https://drive.google.com/open?id=1rNgGTzAvWqmpkL8-F-fQ9ez5wio2vul8"
    },
    {
        title: "TIME WARP Participation",
        issuer: "Pragyan, NIT Trichy",
        date: "2024",
        description: "Ranked Top 25 in TimeWrap International Hackathon at NIT Trichy.",
        link: "https://drive.google.com/open?id=1wc9XAz1Whf8rOgogmLISmLA8nEElPIao"
    }
];

export const certificates: Certificate[] = rawCertificates.map((cert, index) => {
    let category: "certificate" | "achievement" | "participation" = "certificate";

    if (cert.title.match(/Hackathon|Contest|Event|Trophy/i)) {
        category = "achievement";
    } else if (cert.title.match(/Participation|Bootcamp|Workshop/i)) {
        category = "participation";
    }

    return {
        id: `cert-${index}`,
        title: cert.title,
        description: cert.description || "Professional certification validating technical competencies.",
        issuer: cert.issuer,
        date: cert.date,
        image: getDriveThumbnail(cert.link),
        verificationLink: cert.link,
        category,
        featured: cert.featured || false
    };
});
