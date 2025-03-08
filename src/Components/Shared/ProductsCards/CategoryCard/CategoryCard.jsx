import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./CategoryCard.module.scss";

const CategoryCard = ({ categoryData }) => {
  const { iconName, title } = categoryData;
  const categoryType = title.toLowerCase();
  const navigateTo = useNavigate();
  const { t } = useTranslation();

  // Use lowercase key directly for translation
  const categoryTitleTrans = t(`categoriesData.${categoryType}`, title);

  console.log("Translation Key:", `categoriesData.${categoryType}`);
  console.log("Translated Title:", categoryTitleTrans);

  function navigateToCategory() {
    navigateTo(`/category?type=${categoryType}`);
  }

  return (
    <Link
      className={s.card}
      title={categoryTitleTrans}
      onClick={navigateToCategory}
    >
      <SvgIcon name={iconName} />
      <span>{categoryTitleTrans}</span>
    </Link>
  );
};

export default CategoryCard;
