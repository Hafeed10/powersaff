import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./CategoryCard.module.scss";
import img from "../../../../Assets/admin/smartwatch.png";
import img1 from "../../../../Assets/admin/headphones.png";
import img2 from "../../../../Assets/admin/gamepad.png";
import img3 from "../../../../Assets/admin/accumulator.png";
import img4 from "../../../../Assets/admin/solar-inverter.png";

// Updated category images with all images included
const categoryImages = {
  phones: {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/256/2920/2920321.png",
    name: "Phone",
  },
  computers: {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
    name: "Computers",
  },
  smartwatch: {
    id: 3,
    image: img,
    name: "Smartwatch",
  },
  camera: {
    id: 4,
    image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
    name: "Camera",
  },
  headphones: {
    id: 5,
    image: img1,
    name: "Headphones",
  },
  gaming: {
    id: 6,
    image: img2,
    name: "Gaming",
  },
  battery: {
    id: 7,
    image: img3,
    name: "Battery",
  },
  inverter: {
    id: 8,
    image: img4,
    name: "Inverter",
  },
};

const CategoryCard = ({ categoryData }) => {
  const { title } = categoryData;
  const { t } = useTranslation();

  // Normalize category name for lookup
  const categoryType = title.toLowerCase().replace(/\s/g, "");

  // Get category image or fallback
  const categoryInfo = categoryImages[categoryType] || {};
  const categoryImage = categoryInfo.image || "https://via.placeholder.com/150";

  // Translate category title with a fallback
  const categoryTitleTrans = t(`categoriesData.${categoryType}`, {
    defaultValue: categoryInfo.name || title,
  });

  return (
    <Link to={`/category?type=${categoryType}`} className={s.card} title={categoryTitleTrans}>
      <img src={categoryImage} alt={categoryTitleTrans} className={s.iconImage} />
      <span>{categoryTitleTrans}</span>
    </Link>
  );
};

export default CategoryCard;
