import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import {
  otherSectionsMenuItems,
} from "src/Data/staticData";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import OtherSections from "./OtherSections";
import s from "./SectionsMenu.module.scss";
import SectionsMenuButton from "./SectionsMenuButton";
import SectionsMenuCloseBtn from "./SectionsMenuCloseBtn/SectionsMenuCloseBtn";

const SectionsMenu = () => {
  const { t } = useTranslation();
  const { isSectionsMenuActive } = useSelector((state) => state.global);
  const activeClass = isSectionsMenuActive ? s.active : "";
  const { windowWidth } = useGetResizeWindow();

  return (
    <>
      <SectionsMenuButton />
      <aside className={`${s.sectionsMenuButton} ${activeClass}`}>
        {windowWidth <= SCREEN_SIZES.desktop && <SectionsMenuCloseBtn />}
        <h2>{t("sectionsMenu.title")}</h2>
        {/* Pass translated names */}
        <OtherSections
          data={otherSectionsMenuItems.map((item) => ({
            ...item,
            name: t(`sectionsMenuButton.otherSections.${item.name}`, item.name),
          }))}
        />
      </aside>
    </>
  );
};

export default SectionsMenu;
