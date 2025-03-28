import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "src/Features/globalSlice";
import s from "./AccountMenuIcon.module.scss";
import { BsSave2Fill } from "react-icons/bs";

const AccountMenuIcon = () => {
  const dispatch = useDispatch();

   return (
  <div className={s.profileSectionsButton}>
     <BsSave2Fill/>
  </div>
    
      
   );
};
export default AccountMenuIcon;


