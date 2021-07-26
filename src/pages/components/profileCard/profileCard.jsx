import useStyle from "./profileCardStyle";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { GeneralButton } from "../../../components";
import { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect, useDispatch } from "react-redux";

const ProfileCard = (props) => {
  const classes = useStyle();
  const inputFile = useRef(null);
  const [image, setImage] = useState("");
  const id = parseInt(props.id);
  const Cover = () => <div className={classes.coverCard} />;
  const dispatch = useDispatch();

  const handleClick = (statusSnack, textSnack) => {
    dispatch({
      type: "OPENSNACK",
      status: statusSnack,
      text: textSnack,
    });
  };

  const imageHandle = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
    let data = new FormData();
    data.append("image", event.target.files[0]);
    data.append("id", JSON.parse(sessionStorage.getItem("userData")).id);

    axios({
      method: "POST",
      url: "https://K.wadq.dev/uploadProfilePic",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(
      (response) => {
        handleClick("success", "تم تحديث الصورة بنجاح !");
      },
      (error) => {
        handleClick("error", "فشل تحديث الصورة حاول مرة اخرى !");
      }
    );
  };

  useEffect(() => {
    setImage(`https://K.wadq.dev/getProfilePic/${id}`);
  }, []);

  const MyCard = () => (
    <div>
      <Paper className={classes.paper}>
        <Cover></Cover>
        <Avatar className={classes.avatar} alt="Mohammad Dwikat" src={image} />
        <h2 style={{ marginBottom: "0" }}>
          {JSON.parse(sessionStorage.getItem("userData")).name}
        </h2>
        <h3>{JSON.parse(sessionStorage.getItem("userData")).location}</h3>
        <GeneralButton
          onClick={() => inputFile.current.click()}
          title={"تغيير الصورة الشخصية"}
        />
        <input
          multiple={false}
          onChange={imageHandle}
          name="image"
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
        />
      </Paper>
    </div>
  );
  const UserCard = () => (
    <Paper className={classes.paper}>
      <Cover></Cover>
      <Avatar className={classes.avatar} alt="Mohammad Dwikat" src={image} />
      <h2 style={{ marginBottom: "0" }}>request from API</h2>
      <h3>request from API</h3>
      <GeneralButton onClick={() => alert("asd")} title={"ارسال رسالة"} />
    </Paper>
  );
  const C =
    JSON.parse(sessionStorage.getItem("userData")).id === id 
      ? MyCard
      : UserCard;
  return <C />;
};

function mapStateToProps(state) {
  return {
    open: state.ProfileCardReducer.open,
    status: state.ProfileCardReducer.status,
    text: state.ProfileCardReducer.text,
  };
}

export default connect(mapStateToProps)(ProfileCard);
