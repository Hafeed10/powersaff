import React from "react";
import { ourMembersData } from "src/Data/staticData";
import MemberCard from "../../Shared/MidComponents/MemberCard/MemberCard";
import s from "./OurMembersSection.module.scss";

const OurMembersSection = () => {
  return (
    <section className={s.ourMembersSection}>
      <div className={s.header}>
        <h2 className={s.title}>Abdul Jabbar Ak</h2>
        <h3>Founder & Chairman</h3>
        <p className={s.description}>
          powersaff batteries, whose foundations have been laid by Mr. Abdul Jabbar, has been in the
          industry for the past 5 years. With more than 3+ decades of experience, our team has an
          immense wealth of knowledge and expertise when it comes to batteries for your needs. We
          began our operations in Manjeri of the Malappuram district and later on expanded our base
          to Palakkad which now boasts with all the latest developments in the field. Our latest plant
          has the capacity to manufacture high quality and excellent batteries in Tubular as well as
          Automotive series. We, at powersaff, provide all sorts of paraphernalia related to solar power s
          ystems, including solar power controllers and chargers like MPPT and PWM. We also provide all
          that is required for an offline UPS along with all its addons. Apart from these products, we
          also manufacture and offer a wide range of top-quality solar panels along with their grid inverters.
          Installing solar power systems in residences and commercial premises has never been easier. With powersaff
          you will get these and other sustainability products like solar water heaters, water purifiers and so
          much more. Being a pioneer in the battery manufacturing industry, our team has strong technical expertise
          and a proven track record for producing high quality batteries for all your domestic as well as commercial needs.
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
