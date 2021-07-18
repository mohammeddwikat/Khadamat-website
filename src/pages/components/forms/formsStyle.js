import { makeStyles } from "@material-ui/core/styles";

let useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(2),
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    margin:"0.9em",
    boxShadow:"0px 0px 15px 5px #0077b6",
    borderRadius:"2%",
  },
 
  flexDisplay: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
  },
 
  textCenter: {
    textAlign: "center",
  },
  uniformColor: {
    color: "#0077b6",
  },
  formStyle:{
    margin: theme.spacing(3),
    marginTop:"0"
  },
  linkStyle:{
    transition:"0.25s",
    '&:hover':{
      color:"#015682",
      transition:"0.25s"
    }
  },
  imageStyle:{
    borderRadius:"1%",
    borderTopRightRadius:"35%"
  }
 
}));

export default useStyles