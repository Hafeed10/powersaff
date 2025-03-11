import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./MobileNavIcon.module.scss";

const MobileNavIcon = () => {
  const dispatch = useDispatch();
  

  return (
    <div className={s.mobileNavContainer}>
      {/* Burger Menu Button */}
      <button
        type="button"
        className={s.mobileNav}
        onClick={() => openMobileNav(dispatch)}
        aria-label="Toggle navigation menu"
      >
        <SvgIcon name="burgerMenu" />
      </button>
    </div>
  );
};
export default MobileNavIcon;

function openMobileNav(dispatch) {
  const payload = {
    isMobileMenuActive: true,
    isOverlayActive: true,
  };
  dispatch(multiUpdateGlobalState(payload));
}
