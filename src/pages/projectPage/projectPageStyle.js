//checkButton

import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  projectPage: {
    marginTop: theme.spacing(9),
    padding:theme.spacing(5),
    direction:"rtl"
    
  },
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
 
}));

export default useStyle;
