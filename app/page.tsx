"use client"

import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import BrandBanner from "@/components/BrandBanner";
import CourseSearch from "@/components/ArticleCategory";
import Contact from "@/components/Contact";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white pt-24 bg-linear-to-b from-blue-300 to-blue-100 relative">
      <Image
        src="/images/blueskywhite.png"
        alt="CloudsBg"
        width={1200}
        height={300}
        className="absolute top-0 w-full object-cover opacity-80"
      />
      
      <main>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BrandBanner />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CourseSearch />
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

        <Footer />
    </div>
  );
}
