import firstproject from '../public/assets/images/firstproject.png';
import secondproject from '../public/assets/images/secondproject.png';
import thirdproject from '../public/assets/images/thirdproject.jpg';
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import { YouTubeEmbed } from "react-social-media-embed";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
        <SectionTitle title="Portfolio Highlights" titleNo="III" />
        {/* ============ project One Start here ================ */}
        <div className="flex flex-col xl:flex-row gap-6 mb-24 mt-20">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div className="flex justify-center">
              {/* Extra small screens (xs) */}
              <div className="block xs:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={320} height={180} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Small screens (sm) */}
              <div className="hidden xs:block sm:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={350} height={200} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Medium screens (md) */}
              <div className="hidden sm:block mdl:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={400} height={225} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Medium large screens (mdl) */}
              <div className="hidden mdl:block lg:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={800} height={485} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Large screens (lg) */}
              <div className="hidden lg:block xl:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={1030} height={580} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Extra-large screens (xl) */}
              <div className="hidden xl:block">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={640} height={360} style={{ borderRadius: "16px" }} />
              </div>
              <div className="absolute w-full h-full rounded-lg top-0 left-0 pointer-events-none"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textYellow text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">KindyMan On Abu Dhabi TV</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Video Editor for the Film of the Week segment, featuring <span className="text-textYellow">Mohammad Alkindy (aka KindyMan) on Abu Dhabi TV.</span> Edited content for two seasons and over 27 episodes of the series.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>adobe premiere pro</li>
              <li>Adobe After Effects</li>
              <li>Adobe Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textYellow duration-300"
                href="https://www.youtube.com/watch?v=rvHecDCY_2g"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div> 
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6 mb-24">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div className="flex justify-center">
              {/* Extra small screens (xs) */}
              <div className="block xs:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={320} height={180} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Small screens (sm) */}
              <div className="hidden xs:block sm:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={350} height={200} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Medium screens (md) */}
              <div className="hidden sm:block mdl:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={400} height={225} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Medium large screens (mdl) */}
              <div className="hidden mdl:block lg:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={800} height={485} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Large screens (lg) */}
              <div className="hidden lg:block xl:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={1030} height={580} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Extra-large screens (xl) */}
              <div className="hidden xl:block">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={640} height={360} style={{ borderRadius: "16px" }} />
              </div>
              <div className="absolute w-full h-full rounded-lg top-0 left-0 pointer-events-none"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textYellow text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">FlyWithHaifa – Travel Journey Videos & Ads</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            Here are some of the travel journey videos and ads I created for <span className="text-textYellow">FlyWithHaifa,</span> capturing her adventures and experiences as she explores the world.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>adobe premiere pro</li>
              <li>Adobe After Effects</li>
              <li>Adobe Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textYellow duration-300"
                href="https://www.youtube.com/watch?v=rvHecDCY_2g"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div className="flex justify-center">
              {/* Extra small screens (xs) */}
              <div className="block xs:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={320} height={180} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Small screens (sm) */}
              <div className="hidden xs:block sm:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={350} height={200} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Medium screens (md) */}
              <div className="hidden sm:block mdl:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={400} height={225} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Medium large screens (mdl) */}
              <div className="hidden mdl:block lg:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={800} height={485} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Large screens (lg) */}
              <div className="hidden lg:block xl:hidden">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={1030} height={580} style={{ borderRadius: "16px" }} />
              </div>
        
              {/* Extra-large screens (xl) */}
              <div className="hidden xl:block">
                <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={640} height={360} style={{ borderRadius: "16px" }} />
              </div>
              <div className="absolute w-full h-full rounded-lg top-0 left-0 pointer-events-none"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textYellow text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Get ready to Summer with Al Kabayel</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              I worked on a video for{" "}
              <span className="text-textYellow">Taghred Tayeb</span>, where I edited the video in order to make it suitable for advertising for{" "} 
              <span className="text-textYellow">alkabayel barsha</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>adobe premiere pro</li>
              <li>Adobe After Effects</li>
              <li>Adobe Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textYellow duration-300"
                href="https://www.youtube.com/watch?v=rvHecDCY_2g"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
    </section>
  );
};

export default Projects;
