import { useState } from "react";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./DropDownMenu.module.scss";

const DropDownMenu = ({ nameMenu, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeClass = isMenuOpen ? s.active : "";
  const ariaLabel = isMenuOpen ? "Close submenu" : "Open submenu";

  const dropDownMenuAttributes = {
    className: s.dropDownMenu,
    onClick: handleToggleMenu,
    onFocus: openMenu,
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": isMenuOpen,
    "aria-label": ariaLabel,
  };

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  
};

export default DropDownMenu;
