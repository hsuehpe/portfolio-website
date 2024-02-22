"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, my name is Peter, I have been building front end applications for a few years, I used React, Tailwind, Next.js, and I have 8 years experience as a frontend developer.
        I Have good communication and coordination capabilities, can withstand the pressure of work, willing to accept challenging work. Enjoy bringing what I have learned into real-world applications.
        I've been always interested and creating something from scratch. My experience successfully helped me with organizing my thoughts logically, and I’ve been building a career as a front-end software engineer ever since.
      </p>
    </motion.section>
  );
}
