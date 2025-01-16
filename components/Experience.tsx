import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import OneFitApp from "./works/OneFitApp";


const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workOneFitApp, setWorkOneFitApp] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkOneFitApp(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkOneFitApp(false);
  };

  const handleOneFitApp = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkOneFitApp(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Professional Experience" titleNo="II" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-textYellow text-textYellow"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Freelancer
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textYellow text-textYellow"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            ODM
          </li>
          <li
            onClick={handleOneFitApp}
            className={`${
              workOneFitApp
                ? "border-l-textYellow text-textYellow"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            1 Fit App
          </li>
        </ul>
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workOneFitApp && <OneFitApp />}
      </div>
    </section>
  );
};

export default Experience;
