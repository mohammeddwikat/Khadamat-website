import useStyle from "./infoCardStyle";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { GeneralButton } from "../../../components";
import axios from "axios";

const InfoCard = (props) => {
  const classes = useStyle();
  const id = props.id

  const MyCard = () => (
    <Paper className={classes.paperInfo}>
      <div>الاسم : محمد دويكات</div>
      <br />
      <div>السكن : نابلس</div>
      <br />
      <div>
        نبذة: محب لتصميم الصورة وتعديلها باستعمال الفوتوشوب وايضا بناء خوارزميات
        باستخدام لغة البرمجة سي
      </div>
    </Paper>
  );
  const UserCard = () => (
    <Paper className={classes.paperInfo}>
      <div>Request form API</div>
      <br />
      <div>Request form API</div>
      <br />
      <div>Request form API</div>
    </Paper>
  );
  const C =
    JSON.parse(sessionStorage.getItem("userData")).id == id ? MyCard : UserCard;
  return <C />;
};

export default InfoCard;
