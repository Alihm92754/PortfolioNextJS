import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const OneFitApp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Videographer & Video Editor
        <span className="text-textYellow tracking-wide">@1 Fit App</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      Nov 2024 - Dec 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Led video shoots, guided models, and organized the entire shooting process.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Created over 150 videos, contributing to high-quality, engaging content.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Edited scripted videos designed for ads and content creation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Collaborated with the team to ensure videos aligned with brand goals.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Optimized each video for platform specific formats and maximized viewer engagement.
        </li>
      </ul>
    </motion.div>
  );
};

export default OneFitApp;
