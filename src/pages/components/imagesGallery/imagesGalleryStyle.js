import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: "auto",
      height: "auto",
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    imageItem:{
      height:"10vh",
      width:"5vh",
      
    },
    
  }));

  export default useStyles