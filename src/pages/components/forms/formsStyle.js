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
  formContainerSignUp: {
    marginTop:"10vh",
    boxShadow:"0px 0px 15px 5px #0077b6",
    borderRadius:"2%",
  },
 
  flexDisplay: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
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
  },
  rtlDirection: {
    direction: "rtl",
    marginRight: theme.spacing(0.5),
  },
  fromAddSkills: {
    display: "flex",
    marginLeft: theme.spacing(2),
  },
  newInputStyle: {
    "& .MuiInputBase-root": {
      width: "100%!important",
      paddingRight: "0px!important",
      
    },
  },
  newGridStyle: {
    width: "100%!important",
    margin:"0!important",
    "& .MuiInputBase-root": {
      width: "100%!important",
      paddingRight: "0px!important",
      '&.Mui-focused fieldset':{
        borderColor: "#0077b6",
      }
    },
  },
  fromAddSkillsFields: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
  },
  skills: {
    boxShadow: "none",
    border:'1px solid lightGrey',
    width: "100%",
    display: "flex",
    justifyContent:"flex-start",
    alignItems:'flex-center',
    flexWrap: "wrap",
    
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
  eData:{
    [theme.breakpoints.up('sm')]: {
      paddingRight: "10px",
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: "0",
    }
  },
  dropDown:{
    width:"100%",
    '& .MuiInputBase-root':{
      width:'100%'
    }
  },
  marginBottom:{
    marginBottom:theme.spacing(3)
  },
  hiddenDivAddProject:{
    display:"flex",
    justifyContent:'center',
    height:"100%" ,
    alignItems:"center",
  },
  filesNamesBox:{
    display:"flex",
    
  },
  skillFrom:{
    marginTop: theme.spacing(3),
    width:"100%",
    display:"flex",
    flexDirection:"row-reverse"
  },
  adminUniformColor:{
    color:"darkred"
  },
  adminInput:{
    "& .MuiInputLabel-shrink": {
        color: "darkred!important",
      },
      "& .MuiInput-underline": {
        "&:after": {
          borderBottomColor: "darkred!important",
        },
    }
}
 
}));

export default useStyles