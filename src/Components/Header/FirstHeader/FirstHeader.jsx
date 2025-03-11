import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./FirstHeader.module.scss";
import LanguageSelector from "./LanguageSelector";

const FirstHeader = () => {
  const { t } = useTranslation();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customerService = {
    id: "1",
    title: "Customer Service",
    subtitle: "+91 9446180100",
  };

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.space} />

        <div className={s.headerContent}>
          <p className={s.discount}>
            <span>{t("firstHeader.saleMessage")}</span>
            <Link to="/products">{t("firstHeader.shopNow")}</Link>
          </p>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
