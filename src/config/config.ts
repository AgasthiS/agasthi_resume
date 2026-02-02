// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Agasthithayaagaran Saravnen',
    title: 'Student',
    image: getAsset('images/profile.png.png'), // Customize or replace with your profile image
    description:
      'Write a short bio here describing your background and focus. Keep it to 2–4 sentences.\n' +
      '\n' +
      'Mention your institution or company, areas of interest, and what you teach or build.\n' +
      '\n' +
      'Summarize your education or certifications briefly and highlight your practical work.\n' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Add a concise personal tagline here.',
    location: 'Bengaluru, India',
  },

  seo: {
    title: 'Agasthithayaagaran Saravanen – Undergraduate Student',
    description: "I’m a student interested in economics, data analysis, and problem-solving, with a strong foundation in math and research. I also have hands-on experience through projects and internships in areas like digital marketing and client outreach.",
  },

  animatedText: ['Student', 'Economics', 'Entrepreneurship', 'Data Analyst'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/

  education: [
    {
      institution: 'Christ (Deemed to be University)',
      degree: 'BSc Economics with Data Science',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Programming Fundamentals, Advanced Excel'],
    },
    {
      institution: 'Corvuss American Academy',
      degree: 'High School Diploma',
      year: '2023–2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Economics, Business Management'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Python with AI',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Python Programming Fundamentals', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Introduction to Artificial Intelligence with Python', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
  
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Client Outreach',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Flekt',
      time: '(Dec 2025 – Present)',
      desp: ['Identified and approached potential clients through calls, emails, and social media platforms to generate leads'],
    },
    {
      title: 'Digital Marketing Intern',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Sanko-A-Textile',
      time: '(Jul 2023 – Aug 2023)',
      desp: ['Assisted in planning and executing digital marketing campaigns for textile products across social media platforms', 'Created basic promotional creatives and captions highlighting fabric quality, designs, and collections'],
    },
  ],

  research: [
    {
      title: 'Analyzing Inflation and GDP Dynamics in Emerging Economies',
      authors: 'Agasthithayaagaran Saravanen',
      conferences: 'International Journal of Economic Analysis, Springer',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Gupta S, Mehta A. Analyzing inflation and GDP dynamics in emerging economies. Int J Econ Anal. 2024. https://doi.org/10.1000/ijea.2024.015',
      },
      abstract:
        'This study examines the relationship between inflation and GDP growth in emerging economies using time-series data. The findings highlight significant volatility patterns and policy implications for sustainable economic growth.',
    },
  ],


  contact: {
    email: 'agasthithayaagaran@gmail.com',
    linkedin: 'www.linkedin.com/in/agasthithayaagaran-saravanen-074a7735b',
    github: 'https://github.com/AgasthiS',
  },
};

export default siteConfig;