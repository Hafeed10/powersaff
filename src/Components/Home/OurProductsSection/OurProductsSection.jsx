import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productCardCustomizations } from "src/Data/staticData";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import ExploreProducts from "../ProductPoster/ExploreProducts";
import s from "./OurProductsSection.module.scss";
import img from "../../../Assets/offer/gaming-laptop.avif";
import img2 from "../../../Assets/offer/accessories.avif";
import img3 from "../../../Assets/offer/crockery_xip8-2p.avif";
import img1 from "../../../Assets/offer/Untitled-1.avif";

const OurProductsSection = () => {
  const { t } = useTranslation();
  const ourProducts = "sectionTitles.ourProducts";

  return (
    <section className={s.ourProductsSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName={t(`${ourProducts}.title`)}
          sectionName={t(`${ourProducts}.exploreProducts`)}
        />
      </div>
      
      <div className={s.imageContainer}>
        <img src={img} alt="Gaming Laptop Offer" loading="lazy" />
      </div>

      <ExploreProducts
        numOfProducts={6}
        customization={productCardCustomizations.ourProducts}
      />

      <Link to="/products" className={s.viewProductsBtn}>
        {t("buttons.viewAllProducts")}
      </Link>

      <div className={s.max}>
        <img src={img2} alt="Accessories Offer" loading="lazy" />
        <img src={img3} alt="Crockery Collection" loading="lazy" />
      </div>
      <div className={s.max}>
        <img src={img} alt="Accessories Offer" loading="lazy" />
        <img src={img1} alt="Crockery Collection" loading="lazy" />
      </div>
    </section>
  );
};

export default OurProductsSection;
