import { makeStyles } from '@material-ui/core/styles';


let useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection:'row-reverse',
      justifyContent:"center",
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(35),
        height: theme.spacing(40),
      },
    },
    paper:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"darkred",
        '& .MuiSvgIcon-root':{
            width:"35%",
            height:"35%"
        }
        
    },
   
    count:{
        fontSize:"4em",
    }
  }));

  export default useStyles