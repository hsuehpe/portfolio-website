import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "National Cheng Kung University",
    location: "Tainan, Taiwan",
    description:
      "I studied computer science and information engineering. I also learned about web development and algorithms. I graduated with a bachelor's degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Front-End Developer",
    location: "Taipei, Taiwan",
    description:
      "And my first job worked at Asustor, ant its products are NAS, also known as network attached storage is a private storage device that can be placed at a home or office. Use a web browser to store important files, photos and videos in a NAS, which can then be accessed, stored and shared with other people.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2018",
  },
  {
    title: "Website Application Developer",
    location: "Taipei, Taiwan",
    description:
      "And my previous job were worked at KKBOX, as a Front-end Developer. and contributed to several web-based projects using Vue, including official websites, online music players, and web apps for smart TV, Chromecast, and Google Home.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Senior Front-End Developer",
    location: "Taipei, Taiwan",
    description:
      "I am currently working at 91APP, 91APP is an e-commerce company and my role is front-end engineer, my job is to develop the web applications, for example, I have built an CRM system for marketing solution with my talented teammates and the marketing solution of the CRM system is to do the personalized marketing, includes  push, sms and email marketing  and with data visualized which gives the insight to the customers.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Vuex",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
] as const;
