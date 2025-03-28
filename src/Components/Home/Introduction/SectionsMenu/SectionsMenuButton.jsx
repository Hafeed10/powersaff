import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "src/Features/globalSlice";
import s from "./SectionsMenuButton.module.scss";
import { BsSave2Fill } from "react-icons/bs";
const SectionsMenuButton = () => {

  return (
 <div className={s.sectionsMenuButton}>
    <BsSave2Fill/>
 </div>
   
     
  );
};
export default SectionsMenuButton;


