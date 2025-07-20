"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const sectionLan = useTranslations("SectionName");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-start leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>

      <>
        <p className="mb-3">
          I’m Muhammad, a 19-year-old self-taught developer who started coding
          at 15 — with no laptop of my own, just curiosity and W3Schools. I
          began with HTML and CSS, moved on to JavaScript and React, and built
          my first project to help students access school books online. That
          moment made me realize how powerful code can be.
        </p>

        <p className="mb-3">
          Since then, I’ve built client websites (some were bad at first — let’s
          be honest 😅), created dashboards, and contributed to educational and
          NGO platforms. I work with real users, real deadlines, and real
          teamwork.
        </p>

        <p className="mb-3">
          My stack includes{" "}
          <span className="font-medium italic">
            React, React Native, and Next.js
          </span>
          . I also use{" "}
          <span className="font-medium italic">
            Supabase, Tailwind, JavaScript, and Firebase
          </span>
          . I love building clean interfaces and solving complex problems.
        </p>

        <p className="mb-3">
          Outside of work, I teach coding to students for free, try out new
          tools, and stay active with movies and workouts. Always learning.
          Always building.
        </p>
      </>
    </motion.section>
  );
}
