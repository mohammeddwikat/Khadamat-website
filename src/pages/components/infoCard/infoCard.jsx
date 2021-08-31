import useStyle from "./infoCardStyle";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {useState, useEffect} from 'react'

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
  const UserCard = () => {
    const [userInfo, setUserInfo] = useState({
      email:"loading",
      name:"loading",
      city: "loading",
      phonenumber:"loading",
      description:"loading"
    })

    useEffect(()=>{
      axios.get(
        'https://k.wadq.dev/userinfos/'+id
      ).then(res => {
        
        setUserInfo({
          ...res.data
        })
      })
    }, [])
  return(
    <div>
    <Paper className={classes.paperInfo}>
      <div>الاسم : {userInfo.name}</div>
      <br />
      <div>السكن : {userInfo.city}</div>
      <br />
      <div>رقم الهاتف : {userInfo.phonenumber}</div>
    </Paper>
     <Paper className={classes.paperInfo} style={{marginTop:"26px"}}>
      <div>
      {userInfo.description}
      </div>
   </Paper>
   </div>
   )
  };
  const C =
  JSON.parse(sessionStorage.getItem("userData")).id === id ? MyCard : UserCard;
  return <C />;
};

export default InfoCard;
