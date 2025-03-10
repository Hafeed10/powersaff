import { useTranslation } from "react-i18next";
import Image from '../../../Assets/Images/kk.jpg';
import s from "./AboutHeroSection.module.scss";

const AboutHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className={s.heroSection}>
      <section className={s.content}>
        <h2>{t("aboutPage.heroSection.heading")}</h2>

        <p>Electronics refers to the branch of science and technology that deals with the design,
          development, and application of devices and systems that use
          electrical circuits involving active components such as transistors,
          diodes, and integrated circuits. These devices control and process
          electrical signals to perform various functions, including
          communication, computation, automation, and entertainment.</p>
        <p>Consumer Electronics – Devices used in daily life, such as smartphones, televisions, laptops, and home appliances.
          Industrial Electronics – Equipment used in manufacturing and automation, such as robotics, sensors, and PLCs (Programmable Logic Controllers).
          Medical Electronics – Devices used in healthcare, including MRI machines, pacemakers, and diagnostic equipment.
          Communication Electronics – Systems like mobile phones, radio transmitters, and satellites used for transmitting data.
          Power Electronics – Components used to control and convert electrical power, such as inverters, transformers, and power supplies.</p>
      </section>

      <div className={s.imgHolder}>
        <img src={Image} alt={t("aboutPage.heroSection.imageAlt")} />
      </div>
    </section>
  );
};

export default AboutHeroSection;
