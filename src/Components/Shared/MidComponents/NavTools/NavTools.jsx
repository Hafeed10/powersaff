import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import IconWithCount from "../../NavTools/IconWithCount/IconWithCount";
import SearchProductsInput from "../../NavTools/SearchInput/SearchProductsInput";
import UserMenuIcon from "../../NavTools/UserMenuIcon/UserMenuIcon";
import s from "./NavTools.module.scss";

const NavTools = ({ showHeart = true, showCart = true, showUser = true }) => {
  const { t } = useTranslation();
  const { cartProducts, favoritesProducts } = useSelector(
    (state) => state.products
  );

  // Customer Service Data
  const customerService = {
    id: "1",
    title: "Customer Service",
    subtitle: "+91 9446180100",
  };

  return (
    <div className={s.navTools}>
      {/* Search Input */}
      <SearchProductsInput />

      {/* Tools Section */}
      <div className={s.tools}>
        {/* Favorites Icon */}
        <IconWithCount
          props={{
            visibility: showHeart,
            iconName: "heart",
            routePath: "/favorites",
            countLength: favoritesProducts.length,
            title: t("navTools.favorite"),
          }}
        />

        {/* Cart Icon */}
        <IconWithCount
          props={{
            visibility: showCart,
            iconName: "cart3",
            routePath: "/cart",
            countLength: cartProducts.length,
            title: t("navTools.cart"),
          }}
        />

        {/* User Profile Icon */}
        <UserMenuIcon visibility={showUser} />
      </div>

      <div className={s.customerService}>
        <span className={s.serviceTitle}>{customerService.title}</span>
        <span className={s.serviceNumber}>{customerService.subtitle}</span>
      </div>
    </div>
  );
};

export default NavTools;
