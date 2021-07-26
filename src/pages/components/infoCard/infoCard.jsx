import useStyle from "./infoCardStyle";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const InfoCard = (props) => {
  const classes = useStyle();
  const id = parseInt(props.id)
  const user = JSON.parse(sessionStorage.getItem('userData'))
  const MyCard = () => (
    <div>
      <Paper className={classes.paperInfo}>
      <div>الاسم : {user.name}</div>
      <div>السكن : {user.location}</div>
      <div>رقم الهاتف : {user.phonenumber}</div>
      <div>البريد الالكتروني : {user.email}</div>
      
    </Paper>
      <Paper className={classes.paperInfo} style={{marginTop:"26px"}}>
        <div>
        نبذة: محب لتصميم الصورة وتعديلها باستعمال الفوتوشوب وايضا بناء خوارزميات
        باستخدام لغة البرمجة سي
        </div>
      </Paper>
    </div>
    
  );
  const UserCard = () => (
    <div>
    <Paper className={classes.paperInfo}>
      <div>Request form API</div>
      <br />
      <div>Request form API</div>
      <br />
      <div>Request form API</div>
    </Paper>
     <Paper className={classes.paperInfo} style={{marginTop:"26px"}}>
      <div>
      نبذة: محب لتصميم الصورة وتعديلها باستعمال الفوتوشوب وايضا بناء خوارزميات
      باستخدام لغة البرمجة سي
      </div>
   </Paper>
   </div>
  );
  const C =
    JSON.parse(sessionStorage.getItem("userData")).id === id ? MyCard : UserCard;
  return <C />;
};

export default InfoCard;
