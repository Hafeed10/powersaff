import { useTranslation } from "react-i18next";
import { translateProduct } from "../../../../Cart/CartProducts/CartProduct";
import RateStars from "../../../MidComponents/RateStars/RateStars";
import ProductColors from "../../../MiniComponents/ProductColors/ProductColors";
import s from "./ProductCardInfo.module.scss";

const ProductCardInfo = ({ product, showColors, navigateToProductDetails }) => {
  if (!product) {
    console.error("Product is undefined!");
    return null;
  }

  console.log("Product Object:", product);
  console.log("Short Name Before Translation:", product?.shortName);

  const {
    shortName = "Unnamed Product",
    price = 0,
    discount = 0,
    afterDiscount = 0,
    rate = 0,
    votes = 0,
    colors = [],
  } = product;

  const { t } = useTranslation();

  console.log("Translate Product Function:", typeof translateProduct);

  const translatedProductName =
    shortName && typeof translateProduct === "function"
      ? translateProduct({
        productName: shortName,
        translateMethod: t,
        translateKey: "shortName",
      }) || shortName
      : shortName;

  console.log("Translated Product Name:", translatedProductName);

  return (
    <section className={s.productInfo}>
      <strong className={s.productName}>
        <a href="#" onClick={() => navigateToProductDetails()}>
          {translatedProductName}
        </a>
      </strong>
      <div className={s.price}>
        <span>₹</span>
      </div>
      
      <div className={s.rateContainer}>
        <RateStars rate={rate} />
        <span className={s.numOfVotes}>({votes})</span>
      </div>

      {showColors && (
        <div className={s.colors}>
          <ProductColors colors={colors} />
        </div>
      )}
    </section>
  );
};

export default ProductCardInfo;


