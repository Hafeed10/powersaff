import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CustomNumberInput from "../../Shared/MiniComponents/CustomNumberInput/CustomNumberInput";
import s from "./CartProduct.module.scss";
import RemoveCartProductBtn from "./RemoveCartProductBtn";

const CartProduct = ({ data }) => {
  if (!data) {
    console.error("⚠️ CartProduct received undefined data!");
    return null;
  }

  const { img, name, shortName, afterDiscount, quantity, id} = data;
  const priceAfterDiscount = parseFloat(afterDiscount.replaceAll(",", "")) || 0;
  const subTotal = (quantity * priceAfterDiscount).toFixed(2);
  const { t } = useTranslation();

  const translatedProductName = translateProduct({
    productName: shortName,
    translateMethod: t,
    translateKey: "shortName",
  });

  return (
    <tr className={s.productContainer}>
      <td className={s.product}>
        <div className={s.imgHolder}>
          <img src={img} alt={`${shortName} product`} />
          <RemoveCartProductBtn productId={id} />
        </div>
         <Link to={`/details?product=${name}`}>{translatedProductName}</Link>
      </td>

      <td className={s.price}>₹{afterDiscount}</td>

      <td>
        <CustomNumberInput product={data} quantity={quantity} />
      </td>

      <td>₹{subTotal}</td>
    </tr>
  );
};

export default CartProduct;

/**
 * Translates a product name based on its key.
 */
export function translateProduct({
  productName,
  translateMethod,
  translateKey,
  uppercase = false,
  dynamicData = {},
}) {
  if (!productName) {
    console.warn("⚠️ Missing product name for translation!");
    return "Unnamed Product";
  }

  const shortNameKey = productName.replace(/\s+/g, "").toLowerCase();
  const productTrans = `products.${shortNameKey}.${translateKey}`;

  console.log(`🔹 Translating "${productName}" with key: ${productTrans}`);

  const translateText = translateMethod(productTrans, dynamicData);

  if (!translateText || translateText === productTrans) {
    console.warn(`⚠️ No translation found for key: ${productTrans}`);
    return productName;
  }

  return uppercase ? translateText.toUpperCase() : translateText;
}

/**
 * Truncates text to prevent long descriptions from breaking UI.
 */
function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
