export const navItems = [
  {
    label: "Home",
    href: "#",
    key: "home",
  },
  {
    label: "About",
    href: "#about",
    key: "about",
  },
  {
    label: "Projects",
    href: "#projects",
    key: "projects",
  },
  {
    label: "Skills",
    href: "#skills",
    key: "skils",
  },
];

export const projects = [
  {
    key: "1",
    name: "Techcemart",
    description:
      "Techcemart is a platform where you can buy and sell any tech products. It is a full stack e-commerce application built using NextJS",
    image: "/images/projects/techcemart.png",
    tech_stack: ["NextJS, Supabase, TypeScript, Prisma, Stripe"],
    github: "https://github.com/K1chel/Techcemart",
    demo: "https://techcemart.com",
    modalContent: (
      <>
        <p>
          Techcemart is a full-stack e-commerce platform designed to facilitate
          the buying and selling of tech products.
        </p>
        <p>
          It leverages the power of NextJS for server-side rendering, Supabase
          for backend services, TypeScript for static typing, Prisma as an ORM,
          and Stripe for payment processing.
        </p>
        <p>
          The application provides a user-friendly interface and secure payment
          options, making online shopping a breeze.
        </p>
      </>
    ),
  },
  {
    key: "2",
    name: "Expanser",
    description:
      "Expanser is a budget tracker application built using NextJS. It allows you to track your expenses and income easily and efficiently",
    image: "/images/projects/expanse_tracker.png",
    tech_stack: ["NextJS, Convex, TypeScript"],
    github: "https://github.com/K1chel/expanser",
    demo: "https://expanse-tracker-app-v1.vercel.app/",
    modalContent: (
      <>
        <p>
          Expanser is a budget tracking application that helps users manage
          their finances effectively.
        </p>
        <p>
          Built with NextJS and Convex, it provides a user-friendly interface
          for tracking income and expenses.
        </p>
        <p>
          TypeScript is used to ensure type safety and improve developer
          productivity.
        </p>
      </>
    ),
  },
  {
    key: "3",
    name: "MERN | Real time chat",
    description:
      "Real time chat application using MERN stack. This is a simple chat application where you can chat with your friends in real time.",
    image: "/images/projects/chat_app.png",
    tech_stack: ["MongoDB, Express, React, NodeJS, Socket.io"],
    github: "https://github.com/K1chel/MERN-CHAT-APP-V1",
    demo: "https://mern-chat-app-v1.onrender.com/",
    modalContent: (
      <>
        <p>
          This is a real-time chat application built using the MERN stack
          (MongoDB, Express, React, NodeJS) and Socket.io for real-time
          communication.
        </p>
        <p>
          It provides a simple and intuitive interface for users to chat with
          their friends in real time.
        </p>
        <p>
          The application supports multiple chat rooms and private messaging,
          ensuring a versatile chat experience.
        </p>
      </>
    ),
  },
  {
    key: "4",
    name: "Bubble Bash | Landing",
    description:
      "Landing page for Bubble Bash. Reacreating the landing page of Bubble Bash using NextJS",
    image: "/images/projects/bubble_bash.png",
    tech_stack: ["NextJS, React, TailwindCSS"],
    github: "https://github.com/K1chel/landing-page",
    demo: "https://landing-page-kohl-psi-14.vercel.app/",
    modalContent: (
      <>
        <p>
          This project is a recreation of the Bubble Bash landing page using
          NextJS and TailwindCSS.
        </p>
        <p>
          It showcases the ability to create visually appealing and responsive
          web pages using modern web technologies.
        </p>
        <p>
          The landing page is fully responsive and optimized for performance,
          ensuring a smooth user experience across all devices.
        </p>
      </>
    ),
  },
];

export const skills = [
  {
    key: "1",
    label: "JavaScript",
    image: "/images/skills/javascript.png",
  },
  {
    key: "2",
    label: "NodeJS",
    image: "/images/skills/nodejs.png",
  },
  {
    key: "3",
    label: "HTML",
    image: "/images/skills/html.png",
  },
  {
    key: "4",
    label: "CSS",
    image: "/images/skills/css.png",
  },
  {
    key: "5",
    label: "React",
    image: "/images/skills/react.png",
  },
  {
    key: "6",
    label: "NextJS",
    image: "/images/skills/nextjs.png",
  },
  {
    key: "7",
    label: "MongoDB",
    image: "/images/skills/mongodb.png",
  },
  {
    key: "8",
    label: "TypeScript",
    image: "/images/skills/typescript.png",
  },
  {
    key: "9",
    label: "TailwindCSS",
    image: "/images/skills/tailwind.png",
  },
  {
    key: "10",
    label: "Git",
    image: "/images/skills/git.png",
  },
  {
    key: "11",
    label: "Stripe",
    image: "/images/skills/stripe.svg",
  },
  {
    key: "11",
    label: "PostgreSQL",
    image: "/images/skills/postgre.png",
  },
  {
    key: "12",
    label: "ExpressJS",
    image: "/images/skills/express.png",
  },
];
