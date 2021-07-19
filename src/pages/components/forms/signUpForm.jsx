import React from "react";
import clsx from "clsx";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { GeneralTextField, GeneralButton, DropDownListFilter } from "../../../components";
import {Link} from 'react-router-dom'
import EmailIcon from '@material-ui/icons/Email';
import useStyles from './formsStyle'
import axios from 'axios'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const SignUpForm = () => {
  const classes = useStyles();
  let [values, setValues] = React.useState({
    password: "",
    email: "",
    phoneNumber: "",
    location: "",
    profileType: "",
    firstName: "",
    lastName:""
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault()

    axios({
      method: 'post',
      url:'https://k.wadq.dev/signup',
      data:{
        email: values.email,
        password: values.password,
        location: values.location,
        profileType: "client",
        phonenumber: values.phoneNumber,
        username: values.firstName + values.lastName
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128
      }
      
     }
    ).then((response) => {
      alert(response)
    }, (err) => {
      console.log(err)
    });
  }

  return (
    <div className={classes.formContainer}>
    
      <form className={classes.formStyle}>
        <h1 className={clsx(classes.textCenter, classes.uniformColor)}>
          مرحبا بك في موقع خدمات
        </h1>
        <h5 className={clsx(classes.textCenter, classes.uniformColor)}>
          سجل في موقع خدمات واصبح واحداً من أفراد عائلته
        </h5>
        <div style={{display:"flex",flexWrap:"wrap", flexDirection:"row-reverse"}}>
          <div style={{display:"flex",flexWrap:"nowrap", flexDirection:"column"}}>
          <GeneralTextField
            data-cy={"firstName"}
            label={"الاسم الاول"}
            type={"text"}
            id={"firstName"}
            name={"firstName"}
            onChange={handleChange}
            icon={<AccountCircle className={classes.uniformColor} />}
          />
          <GeneralTextField
            data-cy={"lastName"}
            label={"الاسم الاخير"}
            type={"text"}
            id={"lastName"}
            name={"lastName"}
            onChange={handleChange}
            icon={<AccountCircle className={classes.uniformColor} />}
          />
          <DropDownListFilter/>
          <GeneralTextField
            data-cy={"phoneNumber"}
            label={"رقم الهاتف"}
            type={"number"}
            id={"phoneNumber"}
            name={"phoneNumber"}
            onChange={handleChange}
            icon={<PhoneInTalkIcon className={classes.uniformColor} />}
          />
          </div>
          <div style={{display:"flex",flexWrap:"wrap", flexDirection:"column"}}>
             
          <GeneralTextField
            data-cy={"email"}
            label={"البريد الالكتروني"}
            type={"email"}
            id={"email"}
            name={"email"}
            onChange={handleChange}
            icon={<EmailIcon className={classes.uniformColor} />}
          />
          
          <GeneralTextField
            data-cy={"password"}
            label={"كلمة المرور"}
            type={"password"}
            id={"password"}
            name={"password"}
            onChange={handleChange}
            icon={<VisibilityOff className={classes.uniformColor} />}
          />
           <GeneralTextField
            data-cy={"passwordConfirm"}
            label={"تأكيد كلمة المرور"}
            type={"password"}
            id={"passwordConfirm"}
            name={"passwordConfirm"}
            onChange={handleChange}
            icon={<VisibilityOff className={classes.uniformColor} />}
          />
          </div>          
        </div>
        <div className={clsx(classes.flexDisplay, classes.margin)}>
            <GeneralButton title={"انضم الينا"} onClick={submit}/>
            <br/>
            <Link to='/page/login' className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>هل تمتلك حسابا؟</Link>
        </div>
      </form>
    </div>
  )
}
 
export default SignUpForm