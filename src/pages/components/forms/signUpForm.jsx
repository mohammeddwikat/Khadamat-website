import { useEffect, useState } from "react";
import clsx from "clsx";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  GeneralTextField,
  GeneralButton,
  DropDownListFilter,
} from "../../../components";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./formsStyle";
import axios from "axios";
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';


const SignUpForm = () => {
  const classes = useStyles();
  const history = useHistory();
  let [values, setValues] = useState({
    password: "",
    email: "",
    phoneNumber: "",
    location: "",
    profileType: "",
    firstName: "",
    lastName: "",
    type: "",
  });
  const cities = [
    { title: "نابلس" },
    { title: "رام الله" },
    { title: "سلفيت" },
    { title: "اريحا" },
    { title: "جنين" },
    { title: "القدس" },
    { title: "طول كرم" },
    { title: "غزة" },
  ];
  const userTypes = [
    { title: "صاحب مشروع", value:"P" },
    { title: "صاحب مهنة ومهارة", value:"F" },
   
  ];

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("location", values.location);
    formData.append("profileType", values.type);
    formData.append("phonenumber", values.phoneNumber);
    formData.append("username", values.firstName + " " + values.lastName);
    axios.post("https://k.wadq.dev/signup", formData).then(
      (res) => {
        history.push("/page/login");
      },
      (err) => {
        alert(err);
      }
    );
  };
  useEffect(() => {
    if (sessionStorage.getItem("userData") != undefined) {
      history.push(
        "/profile/" + JSON.parse(sessionStorage.getItem("userData")).id
      );
    }
  }, []);

  return (
    <div className={classes.formContainerSignUp} style={{ marginTop: "70px" }}>
      <form className={classes.formStyle}>
        <h1 className={clsx(classes.textCenter, classes.uniformColor)}>
          مرحبا بك في موقع خدمات
        </h1>
        <h5 className={clsx(classes.textCenter, classes.uniformColor)}>
          سجل في موقع خدمات واصبح واحداً من أفراد عائلته
        </h5>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "column",
            }}
          >
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
            <DropDownListFilter
              id={"location"}
              freeSolo={false}
              dataCy={"location"}
              idField={"locationField"}
              titles={cities}
              label={"المدينة السكنية"}
              onChange={(event, option) => setValues({...values, location: option != null ? option.title: ""})}
              iconField={<HomeIcon className={classes.uniformColor}/>}
            />
            <DropDownListFilter
              freeSolo={false}
              id={"typeUser"}
              dataCy={"typeUser"}
              idField={"typeUserField"}
              titles={userTypes}
              label={"نوع الحساب"}
              onChange={(event, option) => setValues({...values, profileType : (option != null ? option.value : "")})}
              iconField={<PeopleAltIcon className={classes.uniformColor}/>}

            />

          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
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
              data-cy={"phoneNumber"}
              label={"رقم الهاتف"}
              type={"number"}
              id={"phoneNumber"}
              name={"phoneNumber"}
              onChange={handleChange}
              icon={<PhoneInTalkIcon className={classes.uniformColor} />}
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
          <GeneralButton title={"انضم الينا"} onClick={submit} />
          <br />
          <Link
            to="/page/login"
            className={clsx(
              classes.textCenter,
              classes.uniformColor,
              classes.linkStyle
            )}
          >
            هل تمتلك حسابا؟
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
