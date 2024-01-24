import {
  cdi,
  css,
  diplab,
  expressJS,
  figma,
  firebase,
  html,
  javascript,
  kaliLinux,
  monggoDB,
  npm,
  nodeJs,
  python,
  react,
  reactNative,
  tailwindcss,
  webDev,
  wfh,
  reiLogo,
  json,
  canva,
  pythonC,
  reactLogo,
  findSpot,
  git,
  plantastic,
  mathinik,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Front End Web Developer',
    icon: webDev,
  },
  {
    title: 'Python Developer',
    icon: python,
  },
  {
    title: 'React Native Developer',
    icon: reactNative,
  },
  {
    title: 'Knowledge with Kali Linux',
    icon: kaliLinux,
  },
]

const experiences = [
  {
    title: 'Started my Journey',
    company_name: 'Code Disruptors Inc.',
    icon: cdi,
    iconBg: '#234e6c',
    date: 'Dec 2017 - Aug 2019',
    points: [
      'Started programming journey with bootcamps.',
      'First Bootcamp: "Introduction to Programming" at Code Disruptors Inc., Laguna (Python) 2017.',
      'Diversified Learning: Simultaneously studied Javascript, HTML, and CSS in college.',
      'Further Bootcamps: Explored Android Development (KOTLIN) and React JS at Code Disruptors Inc.',
    ],
  },
  {
    title: 'Software Quality Assurance Tester',
    company_name: 'Code Disruptors Inc.',
    icon: cdi,
    iconBg: '#234e6c',
    date: 'Oct 2019 - Feb 2020',
    points: [
      'College part-time job: Started working at Code Disruptors Inc. during college.',
      'Position: Hired as a Software Quality Assurance Tester.',
      'Responsibilities: Primarily focused on testing Mobile and Web Applications.',
      'Project involvement: Contributed to testing the LUXEIN (Web) application, ensuring the execution of basic test cases from the development stage to production.',
    ],
  },
  {
    title: 'Web Developement Internship',
    company_name:
      'DIPLAB (Development Innovation & Policy Laboratory) University of the Philippines Los Baños',
    icon: diplab,
    iconBg: '#234e6c',
    date: 'Graduated from College 2022',
    points: [
      'Internship details: Completed a 500-hour internship at the University of the Philippines Los Baños before graduation.',
      'Collaboration with DIPLAB: Worked closely with DIPLAB for a web development project.',
      'Project objective: Recreated existing websites, specifically focusing on coding using HTML, CSS, and Javascript.',
      'UI/UX: Implemented UI/UX arrangements to enhance the overall user experience of the web development project.',
    ],
  },
  {
    title: 'Continuous Learning',
    company_name: '',
    icon: webDev,
    iconBg: '#234e6c',
    date: 'Sept 2023 - Present',
    points: [
      'Continuous learning: Engaged in Udemy courses, focusing on Penetration Testing (Kali Linux) and front-end web development.',
      'Backend exploration: Explored backend integration using Firebase and practiced using REST API with MySQL.',
      'Freelance engagement: Applied acquired skills through freelance projects for local clients.',
      'Diverse skill development: Cultivated a range of skills in web development and security through practical experiences.',
    ],
  },
]

const technologies = [
  { name: 'html', icon: html, iconBg: '#313131' },
  { name: 'css', icon: css, iconBg: '#313131' },
  { name: 'javascript', icon: javascript, iconBg: '#313131' },
  { name: 'monggoDB', icon: monggoDB, iconBg: '#313131' },
  { name: 'expressJS', icon: expressJS, iconBg: '#313131' },
  { name: 'react', icon: reactLogo, iconBg: '#313131' },
  { name: 'nodeJS', icon: nodeJs, iconBg: '#313131' },
  { name: 'firebase', icon: firebase, iconBg: '#313131' },
  { name: 'tailwindCSS', icon: tailwindcss, iconBg: '#313131' },
  { name: 'python', icon: pythonC, iconBg: '#313131' },
  { name: 'npm', icon: npm, iconBg: '#313131' },
  { name: 'figma', icon: figma, iconBg: '#313131' },
  { name: 'canva', icon: canva, iconBg: '#313131' },
  { name: 'kali linux', icon: kaliLinux, iconBg: '#313131' },
  { name: 'git', icon: git, iconBg: '#313131' },
]

const projects = [
  {
    name: 'FindSpot',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque ipsa recusandae, ipsum voluptatem nisi deserunt laudantium aliquam, cumque vero iusto magnam optio deleniti.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: findSpot,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'FindSpot',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque ipsa recusandae, ipsum voluptatem nisi deserunt laudantium aliquam, cumque vero iusto magnam optio deleniti.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: findSpot,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Plantastic',
    description:
      'Plantastic is a concise inventory system for plant vendors, allowing easy showcasing and management. Users explore diverse plants, with machine learning highlighting top-viewed products for optimized visibility.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'Custom CSS',
        color: 'blue-text-gradient',
      },
    ],
    image: plantastic,
    source_code_link: 'https://github.com/neilalden/plantastic',
  },
  {
    name: 'Mathinik',
    description:
      'Mathinik is an intuitive learning system designed for teachers to engage students through quizzes. Teachers can create questions, and the app allows easy monitoring of student grades. User-friendly platform facilitating interactive learning and efficient grade tracking.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'Custom CSS',
        color: 'blue-text-gradient',
      },
    ],
    image: mathinik,
    source_code_link: 'https://github.com/neilalden/mathinik',
  },
]

export { services, experiences, technologies, projects }
