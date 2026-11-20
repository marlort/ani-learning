"use client";

import Image from "next/image";
import Slider from "react-infinite-logo-slider";

const BrandBanner = () => {
  const logos = [
    { src: "/svgs/AdobeAnimate.png", alt: "AdobeAnimate", width: 100 },
    { src: "/svgs/Blender.png", alt: "Blender", width: 100 },
    { src: "/svgs/Maya.png", alt: "Maya", width: 100 },
    { src: "/svgs/Pencil2D.png", alt: "Pencil2D", width: 100 },
    { src: "/svgs/Procreate.png", alt: "Procreate", width: 100 },
  ];

  return (
    <section className="w-full">
      <div className="w-full bg-linear-to-r from-sky-500 to-indigo-30 py-6 relative z-10">
          <span className="block text-black text-2xl font-semibold text-center mb-6">
            Trusted By
          </span>

          <Slider
            width="200px" // ความกว้างของแต่ละ slide
            duration={20} // ความเร็ว (เลขมาก = ช้า)
            pauseOnHover={false} // หยุดเมื่อ hover
            blurBorders={false} // เบลอขอบ
            toRight={false} // เลื่อนจากซ้ายไปขวา (false = ซ้าย→ขวา, true = ขวา→ซ้าย)
          >
            {logos.map((logo, index) => (
              <Slider.Slide key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={100}
                  className={`object-contain ${logo.alt === "Blender" ? "h-12 sm:h-16" : "h-8 sm:h-10"}`}
                />
              </Slider.Slide>
            ))}
          </Slider>
      </div>
    </section>
  );
};

export default BrandBanner;
