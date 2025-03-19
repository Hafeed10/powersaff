import React from "react";
import { ourMembersData } from "src/Data/staticData";
import MemberCard from "../../Shared/MidComponents/MemberCard/MemberCard";
import s from "./OurMembersSection.module.scss";
import SectionsMenu from "../../Home/Introduction/SectionsMenu/SectionsMenu";

const OurMembersSection = () => {
  return (
    <section className={s.ourMembersSection}>
        <div className="introductionContainer">
        <SectionsMenu />
        <div className="line" />
        <div />
      </div>
      <div className={s.header}>
        <h2 className={s.title}>Abdul Jabbar Ak</h2>
        <h3>Founder & Chairman</h3>
        <p className={s.description}>
          Powersaff, founded by Mr. Abdul Jabbar, has been in the industry for the past 5 years. 
          With over three decades of experience, our team has immense expertise in battery solutions. 
          We started in Manjeri, Malappuram, and later expanded to umaramputhur pallikunnu, now housing state-of-the-art 
          inverter manufacturing facilities. Our latest plant produces high-quality tubular and automotive 
          inverters. At Powersaff, we offer solar power solutions, including MPPT/PWM controllers, UPS systems, 
          and premium solar panels with grid inverters, making residential and commercial solar installations easier.
        </p>
      </div>

      <div className={s.membersContainer}>
        {ourMembersData.map((member) => (
          <MemberCard key={member.id} data={member} />
        ))}
      </div>
    </section>
  );
};

export default OurMembersSection;
