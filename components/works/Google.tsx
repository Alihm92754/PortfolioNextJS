import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Video Editor
        <span className="text-textYellow tracking-wide">@One Digital Mena</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2023 - April 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
            Edited videos from raw footage to final product.
            Ensured each edit met the creative vision and technical standards.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Re-edited existing content to enhance visual appeal and engagement for social media platforms.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Refined video quality, pacing, and storytelling to improve overall viewer retention.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Contributed innovative ideas and concepts for various video projects, enhancing creativity and impact.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textYellow mt-1">
            <TiArrowForward size={24} />
          </span>
          Optimized video content for social media platforms, maximizing reach, engagement, and performance.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
