import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Ambitious MERN Stack Developer with a passion for building efficient, scalable, and user-centric web applications. Proficient in developing dynamic front-end interfaces with React and creating robust back-end solutions using Node.js, Express, and MongoDB. Dedicated to continuous learning and leveraging modern technologies to deliver responsive, secure, and high-performance applications. Eager to contribute to innovative projects and grow as part of a forward-thinking development team.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Todo Managment Website",
    image: project1,
    description:
      "A sleek and responsive Todo app built with React, Redux, and Tailwind CSS. Enables users to create, update, and delete tasks effortlessly while maintaining state with Redux.",
    technologies: ["React", "Redux", "Tailwind"],
    link:"https://todomanagment.netlify.app/"
  },
  {
    title: "DocManager",
    image: project2,
    description:
      "A user-friendly document management app built with React, Firebase, and Material-UI. Allows users to create, read, update, and delete documents with real-time data syncing and a modern, responsive design.",
    technologies: ["React", "CSS", "Firebase", "Material UI"],
    link:"https://docsapp-24.netlify.app/"
  },
  {
    title: "CineFinder",
    image: project3,
    description:
      "A movie search app that fetches movie details and posters using a public API. Built with React, it delivers a sleek and responsive user experience for exploring films effortlessly.",
    technologies: ["HTML", "CSS", "JS"],
    link:"https://cine-finder.netlify.app/"
  },
];

export const CONTACT = {
  address: "Thiruvilwamala, Thrissur, Kerala 680594 ",
  phoneNo: "+91 7012741974 ",
  email: "sajai.jun29@gmail.com",
};
