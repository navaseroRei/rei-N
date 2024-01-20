import { kaliLinux, python, reactNative, reiLogo, webDev } from '../assets'

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
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: kaliLinux,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: kaliLinux,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: kaliLinux,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: kaliLinux,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

export { services, experiences }
