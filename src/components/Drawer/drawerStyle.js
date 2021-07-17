import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    root:{
      flexDirection:"flex-start",
      paddingRight:"0"
    },
    
    
}));

export default useStyles