"use client";

import Link from "next/link";
import Logo from "./Logo";
import { motion } from "motion/react";
import { BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2
                 w-[90%] max-w-5xl rounded-2xl px-6 py-3
                 flex items-center justify-between
                 backdrop-blur-md bg-white/30 shadow-lg border border-white/20 z-50"
    >
      {/* ซ้าย: Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* กลาง: Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/lessons">Lessons</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/resources">Resources</Link>
        
      </div>


      {/* ขวา: About */}
      <div>
        <Button asChild size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
          <Link href="/about">
            <BookMarked size={18} />
            About
          </Link>
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
