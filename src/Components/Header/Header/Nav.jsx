import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import s from "./Nav.module.scss";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const { loginInfo } = useSelector((state) => state.user);
  const navDirection = i18n.dir() === "ltr" ? "ltr" : "rtl";

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <nav className={s.nav} dir={navDirection}>
      <ul>
        {[
          { path: "/", label: "nav.home" },
          { path: "/contact", label: "nav.contact" },
          { path: "/about", label: "nav.about" },
          { path: "/product", label: "product" },
          {
            path: loginInfo.isSignIn ? "/profile" : "/signup",
            label: loginInfo.isSignIn ? "nav.profile" : "nav.signUp",
          },
        ].map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path} className={({ isActive }) => isActive ? s.active : ""}>
              {t(label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
