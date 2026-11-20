import React from "react";
import { Button } from "@/components/ui/button";

// 1. สร้าง Component สายฟ้าแยกออกมา เพื่อให้นำไปหมุนหรือปรับขนาดได้ง่ายๆ
// เราใช้ SVG วาดเองเพื่อให้ได้สไตล์ Pop Art (เส้นขอบดำหนา, สีเหลือง)
const ThunderIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      fill="#FDE047" // สีเหลือง (Yellow-300)
      stroke="black" // ขอบสีดำ
      strokeWidth="1" // ความหนาขอบ
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Contact = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#FBFCE9]">
      {/* --- ส่วนตกแต่งพื้นหลัง (Background Decorations) --- */}

      {/* มุมบนซ้าย */}
      <div className="absolute -top-10 -left-10 pointer-events-none">
        <ThunderIcon className="w-32 h-32 md:w-48 md:h-48 transform -rotate-12" />
      </div>

      {/* มุมบนกลาง (กลับหัว) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <ThunderIcon className="w-24 h-24 md:w-32 md:h-32 transform rotate-180" />
      </div>

      {/* มุมบนขวา */}
      <div className="absolute top-10 -right-10 pointer-events-none">
        <ThunderIcon className="w-28 h-28 md:w-40 md:h-40 transform rotate-45" />
      </div>

      {/* มุมล่างซ้าย */}
      <div className="absolute -bottom-10 left-10 pointer-events-none">
        <ThunderIcon className="w-24 h-24 md:w-36 md:h-36 transform -rotate-45" />
      </div>

      {/* มุมล่างขวา */}
      <div className="absolute bottom-0 -right-5 pointer-events-none">
        <ThunderIcon className="w-40 h-40 md:w-56 md:h-56 transform -rotate-12" />
      </div>

      {/* --- ส่วนเนื้อหา (Content) --- */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-sans">
          Contact Me
        </h2>

        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Stay up to date with the latest news announcements and articles
        </p>

        {/* Form Input */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-lg border border-gray-300 bg-[#FDFDF5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            required
          />
          <Button type="submit" className="w-full sm:w-auto rounded-lg shadow-lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
