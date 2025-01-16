import profileImg from "../public/assets/images/image2.png";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { TbPointFilled } from "react-icons/tb";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="I" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hello, I’m Alaa Hammoud a passionate videographer and social media content creator. My 
journey in this field began in 2018, and over the years, I’ve honed my skills in videography 
and video editing.{" "} 
          </p>
          <p>
          In addition to my work behind the camera, I am an Arabic voiceover artist with a versatile 
and expressive voice, which I’ve utilized in numerous projects. Collaborating with celebrities 
and content creators across various platforms has been a highlight of my career, offering me 
invaluable experiences and insights.{" "}
          </p>
          <p>Beyond client work, I create my own content.{" "}
            <span className="text-textYellow">
            As a YouTuber with 72,000 subscribers and 
            over 15 million total video views,{" "}
            </span>
            I’ve built a strong presence and connected with a wide audience through engaging, high-quality content.
          </p>
          <h1 className="text-textYellow">Services I Provide:</h1>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-4">
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Video Production
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Video Editing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Social Media Content Creation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Video Advertising
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Motion Graphics Design
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Voiceover for Ads
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Content Strategy & Consulting
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
              <TbPointFilled />
              </span>
              Event Videography
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 xs:ml-3">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textYellow/5 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textYellow rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
