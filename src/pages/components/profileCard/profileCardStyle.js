import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({

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
  avatar:{
    width: "220px!important",
    height: "220px!important",
    marginBottom:"10px",
    border:"10px solid white",
    
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
  },
  alert:{
    margin:theme.spacing(1),
    '& .MuiAlert-message':{
      marginLeft:"5px",
      marginRight:"5px"
    }
  }
}));

export default useStyle;
