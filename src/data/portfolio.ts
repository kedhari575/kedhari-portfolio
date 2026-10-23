export const profile = {
  name: 'Kedhari Manne',
  wordmark: 'KEDHARI.DEV',
  headline: 'Computer Science Student | Software Developer',
  tagline: 'Building Practical Applications',
  email: 'mannekedhari75@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kedharimanne2006/',
  resumeUrl: '/2Resume.docx',
  intro: [
    'I am a Computer Science and Engineering student interested in building practical software applications using Java, Python, React, and machine-learning technologies.',
    'I enjoy solving problems, strengthening my technical fundamentals, and turning ideas into working projects.',
  ],
  about: {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Andhra Loyola Institute of Engineering and Technology',
    interests: [
      'Software development',
      'Programming fundamentals',
      'Data Structures and Algorithms',
      'Web application development',
      'Machine-learning applications',
      'Practical project development',
    ],
    approach: [
      'I strengthen my understanding of programming concepts through practice and project development.',
      'I am interested in opportunities that allow me to learn from experienced engineers, contribute to development teams, and improve my software engineering skills.',
    ],
  },
};

export const skills = [
  {
    category: 'Programming',
    icon: 'Code2',
    items: ['Java', 'Python'],
  },
  {
    category: 'CS Fundamentals',
    icon: 'Brain',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem-solving'],
  },
  {
    category: 'Frontend Development',
    icon: 'Layout',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend Development',
    icon: 'Server',
    items: ['Flask'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: ['SQL', 'Database Fundamentals'],
  },
  {
    category: 'Machine Learning',
    icon: 'Cpu',
    items: ['Machine Learning', 'Random Forest'],
  },
];

export const projects = [
  {
    title: 'Emotion-Aware Crop Stress Detection and Adaptive Farming System',
    category: 'Machine Learning • Full-Stack',
    overview:
      'A machine-learning application designed to classify crop stress into Healthy, Mild Stress, and Severe Stress categories using plant-related features.',
    problem:
      'Farmers need timely, accurate insight into crop health to make informed decisions and prevent yield loss. This system analyzes plant-related data to detect stress levels early and suggest adaptive farming actions.',
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'Flask', 'React'],
    features: [
      'Crop stress classification (Healthy, Mild Stress, Severe Stress)',
      'Python-based ML pipeline with preprocessing and feature scaling',
      'Web dashboard concept using Flask and React',
      'Farmer-emotion indicators and alerts',
      'Adaptive farming suggestions based on stress detection',
    ],
    accuracy: '97.8%',
    accuracyDetail:
      'The Random Forest model achieved 97.8% test accuracy after preprocessing and feature scaling.',
    github: null,
    liveDemo: null,
  },
];

export const experiences = [
  {
    type: 'Internship Offer',
    title: 'Cybersecurity Internship Offer',
    organization: 'Supraja Technologies, Vijayawada',
    status: 'Offer received',
    description:
      'Selected for a cybersecurity internship opportunity; an offer letter was received from the organization.',
    isCompleted: false,
  },
  {
    type: 'Workshop',
    title: 'Five-Day Workshop & One-Day Hackathon',
    organization: 'Supraja Technologies',
    status: 'Participated',
    description:
      'Completed a five-day workshop and participated in a one-day hackathon conducted by Supraja Technologies.',
    isCompleted: true,
  },
  {
    type: 'Hackathon',
    title: 'Smart Tech Hackathon',
    organization: 'Academy of Tech Masters & ALIET',
    status: 'Participated',
    description:
      'Participated in the Smart Tech Hackathon organized by Academy of Tech Masters and ALIET.',
    isCompleted: true,
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Andhra Loyola Institute of Engineering and Technology',
    location: 'Vijayawada, India',
    duration: 'Ongoing — Expected 2028',
    detail: 'Currently pursuing',
    isPrimary: true,
  },
  {
    degree: 'Intermediate — MPC',
    institution: 'NRI Junior College, Guntur',
    location: 'Guntur, India',
    duration: '2022 – 2024',
    detail: '93%',
    isPrimary: false,
  },
  {
    degree: 'SSC (Secondary Education)',
    institution: 'Siddhartha English Medium High School, Bhattiprolu',
    location: 'Bhattiprolu, India',
    duration: '2017 – 2022',
    detail: '95%',
    isPrimary: false,
  },
];

export const certifications = [
  { title: 'AI Skills Passport', issuer: 'EY and Microsoft' },
  { title: 'Generative AI for Software Development', issuer: 'IBM' },
  { title: 'Certificate of Excellence', issuer: 'Supraja Technologies' },
  {
    title: 'Certificate of Participation — Five-Day Workshop & One-Day Hackathon',
    issuer: 'Supraja Technologies',
  },
  {
    title: 'Smart Tech Hackathon Participation',
    issuer: 'Academy of Tech Masters and ALIET',
  },
  { title: 'Google AI Essentials', issuer: 'Google' },
  { title: 'Google Prompting Essentials', issuer: 'Google' },
  {
    title: 'AI Fundamentals: Foundations for Understanding AI',
    issuer: 'IBM SkillsBuild',
  },
  {
    title: 'Getting Started with Cyber Security',
    issuer: 'IBM SkillsBuild',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
