import React from "react";
import { ourMembersData } from "src/Data/staticData";
import MemberCard from "../../Shared/MidComponents/MemberCard/MemberCard";
import s from "./OurMembersSection.module.scss";

const OurMembersSection = () => {
  return (
    <section className={s.ourMembersSection}>
      {/* Members Section */}
      <div className={s.membersContainer}>
        {ourMembersData.map((member) => (
          <MemberCard key={member.id} data={member} />
        ))}
      </div>
      {/* Header First for Better Alignment */}
      <div className={s.header}>
        <h2 className={s.title}>Abdul Jabbar Ak</h2>
        <h3>Founder & Chairman</h3>
        <p className={s.description}>
          Electronics refers to the branch of science and technology that deals with the design,
          development, and application of devices and systems that use electrical circuits involving
          active components such as transistors, diodes, and integrated circuits. These devices control
          and process electrical signals to perform various functions, including communication, computation,
          automation, and entertainment.
        </p>
      </div>
    </section>
  );
};

export default OurMembersSection;
