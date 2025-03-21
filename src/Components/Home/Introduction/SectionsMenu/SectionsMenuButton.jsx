import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "src/Features/globalSlice"; // Ensure correct path
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./SectionsMenuButton.module.scss";
import { Button } from "antd";

const SectionsMenuButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      multiUpdateGlobalState({
        isSectionsMenuActive: true,
        isOverlayActive: true,
      })
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={s.sectionsButton}
      aria-label="Toggle sections menu"
    >
      <SvgIcon name="list" />
    </button>
  );
};

export default SectionsMenuButton;
