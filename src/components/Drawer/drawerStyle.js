import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
      background:'#0077b6',
      color:"white",
      height:"100%",
    },
    iconStyle:{
      color:"white",
      paddingLeft: "0" 
    },
    fullList: {
      width: '90vw',
    },
    root:{
      paddingRight:"0",
    },
    headerDrawer:{
      height:"25vh",
      display:'flex',
      flexDirection:'column',
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: "#0077b6",
      color:"white"
    },
    headerAvatar:{
      width: "100px!important",
      height: "100px!important",
      marginBottom:"3px",
      
    },
   
}));

export default useStyles