import jamming from "../assets/jamming.jpg";
import flashcards from "../assets/flash-cards.jpg";
import myPortFolio from "../assets/my-portfolio.jpg";
import demoPortfolio from "../assets/demo-portfolio.jpg";

export const personalProjects = [
    {
        id: 1,
        name: "spotify-personal-playlist",
        description:
            "Jammming is a React web application that allows users to search the Spotify library, preview each track, create a custom playlist, save it to their Spotify account and view custom playlist after creation playlist. This project demonstrates how to integrate React components, state management, and API requests to create a functional and interactive web experience.",
        techStacks: ["React", "HTML", "CSS", "JavaScript"],
        image: jamming,
        github_url: "https://github.com/guntza10/spotify-personal-playlist",
        live_demo_url: "https://2morrowboyz-jammming.netlify.app",
    },
    {
        id: 2,
        name: "Flashcards Quiz App",
        description:
            "This project is a flashcard-style quiz app built with React, Redux, and Redux Toolkit. Users can create topics, quizzes within those topics, and flashcards for each quiz. The app also allows users to interact with quizzes by flipping flashcards to review content.",
        techStacks: ["React", "Redux", "HTML", "CSS", "JavaScript"],
        image: flashcards,
        github_url: "https://github.com/guntza10/flashcards",
        live_demo_url: "https://flashcards-by-2morrowboyz.netlify.app",
    },
    {
        id: 3,
        name: "my-portfolio",
        description:
            "For this project, you will build a personal portfolio site, a static website where you can share the projects that you build in this Path. Typically, a portfolio website will have a main page that features different projects that you’ve built and another page that contains contact information, in case someone wants to reach out to you. Occasionally, there are additional pages for each project, detailing the technology used.",
        techStacks: ["HTML", "CSS", "JavaScript"],
        image: myPortFolio,
        github_url: "https://github.com/guntza10/my-portfolio",
        live_demo_url: "https://guntza10.github.io/my-portfolio",
    },
    {
        id: 4,
        name: "demo-portfolio",
        description:
            "For this project, you will build a personal portfolio site, a static website where you can share the projects that you build in this Path. Typically, a portfolio website will have a main page that features different projects that you’ve built and another page that contains contact information, in case someone wants to reach out to you. Occasionally, there are additional pages for each project, detailing the technology used.",
        techStacks: ["HTML", "CSS", "JavaScript"],
        image: demoPortfolio,
        github_url: "https://github.com/guntza10/demo-portfolio",
        live_demo_url: "https://guntza10.github.io/demo-portfolio",
    },
];

export const navigationLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Contact", href: "#contact" },
];
