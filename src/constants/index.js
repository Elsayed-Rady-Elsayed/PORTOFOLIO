import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I am a Front-End Developer specializing in React.js, with expertise in building responsive, user-friendly web applications. I combine tools like Redux, Tailwind CSS, and Framer Motion to create dynamic, visually engaging interfaces. Passionate about clean code and seamless user experiences, I thrive on solving UI challenges and integrating APIs for robust, scalable solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, php. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Trainee React Web Development",
    company: "DEPI.",
    description: `Learning about developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with team to define project requirements and timelines.`,
    technologies: [
      "Html",
      "Css",
      "Bootstrap",
      "Javascript",
      "React.js",
      "Jwt",
      "Node.js",
      "mongoDB",
    ],
  },
  {
    year: "2023 - 2023",
    role: "Frontend Development Using Angular",
    company: "ITI",
    description: `Designing and developing user interfaces for web applications using Angular and Typescript and also html css and some frameworks with final project.`,
    technologies: ["HTML", "CSS", "Angular", "TypeScript", "Api", "Es6"],
  },
  {
    year: "2023 - 2023",
    role: "Front End Development",
    company: "UDACITY",
    description: `Developing and maintaining web applications using JavaScript, and Node.js. Designed and implemented RESTful APIs for data communication.Creating projects to deliver high-quality software products on schedule.`,
    technologies: [
      "Html",
      "Css",
      "Javascript",
      "Node.js",
      "Restful Api",
      "Agile",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://dazzling-boba-18634c.netlify.app/",
    repo: "https://github.com/Elsayed-Rady-Elsayed/STAND_REACTJS",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication and payment gateway.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Stripe",
      "Emailjs",
      "Framer-Motion",
      "React-Slick",
      "React-Toast",
      "Tailwind",
      "Rest Api",
    ],
  },
  {
    title: "Task Management App",
    image: project2,
    repo: "https://github.com/Elsayed-Rady-Elsayed/REACT_VITE_TODOAPP",
    link: "https://elsayed-rady-elsayed.github.io/REACT_VITE_TODOAPP/",
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "Recoil",
      "Vite",
      "Firebase Auth",
      "Firebase storage",
      "Angular",
      "Firebase",
      "Rest Api",
    ],
  },
  {
    title: "Coffee Store With Dashboard",
    image: project3,
    description:
      "Coffee store website with stripe payment gateway and also admin dashboard to handle the website",
    repo: "https://github.com/Elsayed-Rady-Elsayed/coffe_zone",
    link: "https://coffe-zone.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Context Api",
      "TypeScript",
      "I18n",
      "Tailwind",
      "Framer-Motion",
      "Json-server",
      "Rest Api",
      "Light-Dark-Mode",
    ],
  },
  {
    title: "Real Time Chat App",
    image: project4,
    repo: "https://github.com/Elsayed-Rady-Elsayed/REACT-CHAT-APP",
    link: "https://lively-jelly-c801d8.netlify.app/",
    description:
      "A Real time chat app to message with friends and send photos to them and add them with storing this chats and data in firebase",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Vite",
      "Firebase",
      "Zustand",
      "Tailwind",
      "emoji-picker-react",
      "react-toastify",
      "Real Time",
    ],
  },
  {
    title: "OREBI Online Store",
    image: project5,
    repo: "https://github.com/Elsayed-Rady-Elsayed/REACTJS_ECOMMERCE",
    link: "https://66f5fb0d778c4d85aceb3ebc--lovely-pika-99ecbc.netlify.app/",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Framer-Motion",
      "React Redux",
      "Tailwind",
      "React-Slick",
    ],
  },
  {
    title: "Quran Player",
    image: project6,
    repo: "https://github.com/Elsayed-Rady-Elsayed/REACT_QURAN_PLAYER",
    link: "https://elsayed-rady-elsayed.github.io/REACT_QURAN_PLAYER/",
    description:
      "A quran website to show the quran text and also to listen to quran and contain localization and dark and light mode",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "I18n",
      "Axios",
      "Redux",
      "Rest Api",
      "Light-Dark-Mode",
      "Audio Handling",
    ],
  },
  {
    title: "Comfort",
    image: project7,
    repo: "https://github.com/Elsayed-Rady-Elsayed/comfort",
    link: "https://luxury-sunshine-a2ecc4.netlify.app/",
    description:
      "A furniture ecommerce with clear design and filtering for products and cart for user and also wishlist",
    technologies: ["HTML", "CSS", "Js", "Bootstrap", "Auth Vaildation"],
  },
  {
    title: "Webizer",
    image: project8,
    repo: "https://github.com/Elsayed-Rady-Elsayed/webiBazaar",
    link: "https://elsayed-rady-elsayed.github.io/webiBazaar/",
    description:
      "A furniture ecommerce with clear design and filtering for products and cart for user and also wishlist",
    technologies: [
      "HTML",
      "CSS",
      "Js",
      "Bootstrap",
      "Auth",
      "Json-Server",
      "Restful Api",
      "Filtering items",
    ],
  },
  {
    title: "Courses Management",
    image: project9,
    repo: "https://github.com/Elsayed-Rady-Elsayed/NODEJS-COURSES-PROJECT",
    link: "https://github.com/Elsayed-Rady-Elsayed/NODEJS-COURSES-PROJECT",
    description:
      "Courses backend with validator and jwt auth and courses management and pages with limit",
    technologies: [
      "Node",
      "Express",
      "Cors",
      "Dotenv",
      "express-validator",
      "Jsend",
      "Jsonwebtoken",
      "Jwt",
      "Mongoose",
      "Multer",
      "Validator",
    ],
  },
];

export const CONTACT = {
  address: "Elsafyna Toukh, Benha City, ElQalupia ",
  phoneNo: "+20 1013 631 377 ",
  email: "sayedrady61@gmail.com",
};
