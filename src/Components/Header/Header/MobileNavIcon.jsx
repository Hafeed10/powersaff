import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./MobileNavIcon.module.scss";

const MobileNavIcon = () => {
  const dispatch = useDispatch();
  
  // Customer Service Data
  const customerService = {
    id: "1",
    title: "Customer Service",
    subtitle: "+91 9446180100",
  };

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

      {/* Customer Service Section */}
      <div className={s.customerService}>
        <span className={s.serviceTitle}>{customerService.title}</span>
        <span className={s.serviceNumber}>{customerService.subtitle}</span>
      </div>
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
