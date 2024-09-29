import pro from "../assets/pro.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={pro}
              alt="Munkhsaruul"
              className="rounded-3xl border border-stone-900"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Ganbat Munkhsaruul
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Economist
            </motion.span>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent"
            >
              Human Resources Manager
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tighter"
            >
              I lived and worked in Tokyo, Japan, for seven years. During my
              time there, I gained a deep understanding of Japanese culture,
              mindset, and the values that are important in the Japanese way of
              life. This experience allowed me to compare and better understand
              the culture, strengths, weaknesses, and core values of Mongolian
              people. While in Japan, I completed a Master's degree and founded
              a railway company that aimed to connect Japanese and Mongolian
              professionals. In December 2023, I returned to Mongolia, leaving
              the company to my brother, with the aspiration to focus on social
              development in my home country.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
