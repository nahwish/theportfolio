"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "../TabButton";
import SkillsData from "./SkillsData";


const AboutSection = () => {
  const [tab, setTab] = useState("education");

  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section
        id="about"
        className="text-white md:grid md:grid-cols-2 gap-4 pt-8 pb-0 "
      >
        <Image
          src="/image/about.jpg"
          width={400}
          height={400}
          className="py-10"
          alt="about"
        />
        <p className=" pt-8 pb-0 py-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          blanditiis assumenda voluptas dolore maiores nostrum accusamus,
          impedit quae voluptatem, pariatur doloribus officia. Porro ea corrupti
          illum, quasi ratione accusantium optio.
        </p>
      </section>
      <div className="flex flex-row  justify-center ">
        <TabButton
          selecTab={() => handleTabChange("education")}
          active={tab === "education"}
          name="education"
          setTab={false}
        >
          Educación
        </TabButton>
        <TabButton
          selecTab={() => handleTabChange("skills")}
          active={tab === "skills"}
          name="skills"
          setTab={setTab}
        >
          Skills
        </TabButton>
      </div>
      <div className="mt-8 flex  justify-center items-center ">
        <SkillsData tab={tab} />
      </div>
    </>
  );
};

export default AboutSection;
