import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSubTotal } from "src/Functions/helper";
import s from "./CartInfoMenu.module.scss";

const CartInfoMenu = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = getSubTotal(cartProducts);
  const { t } = useTranslation();
  const cartInfo = "cartPage.cartInfoMenu";
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={s.menu} role="region" aria-labelledby="cart-summary">
      <b>{t(`${cartInfo}.cartTotal`)}</b>

      <div className={s.content}>
        <div className={s.item}>
          <span>{t(`${cartInfo}.subTotal`)}:</span>
          {/* <span aria-label={`Subtotal ${subTotal}`}>₹{subTotal}</span> */}
          <div className={s.price}>
            <span> ₹Whatsapp Contact Me</span>
          </div>
        </div>

        <div className={s.item}>
          <span>{t(`${cartInfo}.shipping`)}:</span>
          {/* <span aria-label={t(`${cartInfo}.free`)}>{t(`${cartInfo}.free`)}</span> */}
          <div className={s.price}>
            <span> ₹Whatsapp Contact Me</span>
          </div>
        </div>

        <div className={s.item}>
          <span>{t(`${cartInfo}.total`)}:</span>
          {/* <span aria-label={`Total ${subTotal}`}>₹{subTotal}</span> */}
          <div className={s.price}>
            <span> ₹Whatsapp Contact Me</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={s.whatsappButton}
        onClick={() => handleWhatsAppShare(cartProducts, t)}
      >
        {t("Share On Company WhatsApp")}
      </button>
    </div>
  );
};

export default CartInfoMenu;

// Handle WhatsApp Share Button Click
function handleWhatsAppShare(cartProducts, t) {
  if (cartProducts.length === 0) {
    alert(t("toastAlert.cartEmpty"));
    return;
  }

  let message = `🛒 *${t("cartPage.cartInfoMenu.cartTotal")}*\n\n`;

  cartProducts.forEach((product, index) => {
    message += `${index + 1}. *${product.name}*\n`;
    message += `   - 💰 Price: ₹${product.price}\n`;
    message += `   - 🔢 Quantity: ${product.quantity}\n`;
    message += `   - 🏷️ Total: ₹${product.price * product.quantity}\n`;

    // Add product image URL if available
    if (product.imageUrl) {
      message += `   - 🖼️ Image: ${product.imageUrl}\n`;
    }

    message += `\n`;
  });

  message += `🔹 *${t("cartPage.cartInfoMenu.total")}:* ₹${getSubTotal(cartProducts)}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/9446180100?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}
