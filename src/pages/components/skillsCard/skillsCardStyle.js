import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  paperSkills: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display: "flex",
    boxShadow: "0px 0px 5px 2px gray",
    direction: "rtl",
    flexWrap: "wrap",
  },
  chip:{
    margin: theme.spacing(1),
    color:"white",
    backgroundColor:"#0077b6"
  },
  nothingTitle: {
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
  },
  chipStyle:{
    margin:theme.spacing(1),
    flexDirection:"row-reverse!important",
    backgroundColor:"#0077bB",
    color:'white'
  },
 
}));

export default useStyle;
