import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import testimonials from "../../contents/TestimonialsSlider";

export default function TestimonialsSlider() {
  const baseX = useMotionValue(0);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const duration = 30; // Adjust speed as needed

  const startAnimation = () => {
    // Calculate the width needed for one set of testimonials
    // Using a large negative value to ensure smooth infinite loop
    const distance = -(testimonials.length * 356); // 350px card + 6px gap

    animationRef.current = animate(baseX, distance, {
      ease: "linear",
      duration,
      repeat: Infinity,
      repeatType: "loop",
      onRepeat: () => {
        // Reset to 0 instantly when loop completes for seamless transition
        baseX.set(0);
      },
    });
  };

  const pauseAnimation = () => {
    if (animationRef.current) {
      animationRef.current.pause();
      setIsPaused(true);
    }
  };

  const resumeAnimation = () => {
    if (animationRef.current && isPaused) {
      animationRef.current.play();
      setIsPaused(false);
    }
  };

  useEffect(() => {
    startAnimation();
    return () => animationRef.current?.stop();
  }, []);

  const x = useTransform(baseX, (v) => `${v}px`);

  // Triple the testimonials array for seamless infinite loop
  const infiniteTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="relative w-full pb-40 pt-10 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 pointer-events-none z-10" />

      <motion.div className="flex gap-6" style={{ x }}>
        {infiniteTestimonials.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            onMouseEnter={pauseAnimation}
            onMouseLeave={resumeAnimation}
            className="min-w-[300px] cursor-pointer max-w-[350px] bg-white p-5 shadow-md rounded-2xl flex-shrink-0 border border-transparent hover:border-sky-400 hover:shadow-[0_0_20px_3px_rgba(56,189,248,0.5)] transition-all duration-300"
          >
            <p className="text-gray-600 italic mb-3 text-sm sm:text-base">
              "{item.quote}"
            </p>

            <div className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-13 h-13 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-semibold text-base sm:text-lg">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
