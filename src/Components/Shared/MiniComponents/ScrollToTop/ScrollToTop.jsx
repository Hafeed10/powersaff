import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SCROLL_REQUIRED } from "src/Data/globalVariables";
import { scrollToTopToolTipLeftPos } from "src/Functions/componentsFunctions";
import { scrollToTop } from "src/Functions/helper";
import useEventListener from "src/Hooks/Helper/useEventListener";
import { RiWhatsappFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
import s from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const scrollTopButtonRef = useRef();
  const whatsappButtonRef = useRef(); // Reference for WhatsApp button
  const { t, i18n } = useTranslation();
  const leftToolTipPos = scrollToTopToolTipLeftPos(i18n.language);

  function handleScrollTopVisibility() {
    const classListMethod = window.scrollY < SCROLL_REQUIRED ? "add" : "remove";

    // Hide/Show both buttons based on scroll position
    scrollTopButtonRef.current?.classList[classListMethod](s.hide);
    whatsappButtonRef.current?.classList[classListMethod](s.hide);
  }

  useEventListener(window, "scroll", handleScrollTopVisibility, []);

  return (
    <div className={s.fixedButtons}>
      {/* WhatsApp Button (Hidden by default, appears on scroll) */}
      <a
        ref={whatsappButtonRef}
        href="https://wa.me/919446180100"
        target="_blank"
        rel="noopener noreferrer"
        className={`${s.whatsappButton} ${s.hide}`} // Apply the hide class
        aria-label="Chat on WhatsApp"
      >
        <RiWhatsappFill />
      </a>

      {/* Scroll to Top Button */}
      <button
        ref={scrollTopButtonRef}
        type="button"
        className={`${s.scrollTopButton} ${s.hide}`} // Apply the hide class
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
