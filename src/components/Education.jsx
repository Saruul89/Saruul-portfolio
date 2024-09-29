import { motion } from "framer-motion";
import EducationsData from "../../mock/Educations";

const Education = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      {EducationsData.map((education, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-stone-400">{education.year}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-4 font-semibold">
              {education.degree} - {education.title}
            </h3>
            <span className="mb-4 text-stone-300">{education.institution}</span>
            <p className="mb-4 text-stone-400">{education.researchTopic}</p>
            <p className="mb-4 text-stone-400">{education.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default Education;
