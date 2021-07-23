import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  card: {
    direction:"rtl"
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    position:"relative",
    boxShadow:"0px 0px 5px 2px gray",
  },
  paperInfo: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display:"flex",
    flexDirection:"column",
    boxShadow:"0px 0px 5px 2px gray",
    direction:"rtl",
    justifyContent:"space-between"
  },
  paperSkills: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display:"flex",
    boxShadow:"0px 0px 5px 2px gray",
    direction:"rtl",
    flexWrap:"wrap"
  },
  chip:{
    margin: theme.spacing(1),
    color:"white",
    backgroundColor:"#0077b6"
  },
  avatar:{
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginBottom:"10px",
    border:"10px solid white"
  },
  coverCard:{
      position:"absolute",
      top:0,
      left:0,
      height: "35%",
      width:"100%",
      background:"#0077b6",
      borderTopRightRadius:"4px",
      borderTopLeftRadius:"4px",
  }
}));

export default useStyle;
