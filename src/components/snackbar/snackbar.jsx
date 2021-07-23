import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyle from './snackbarStyle'
import {useState} from 'react'
import { connect, useDispatch, useSelector } from "react-redux";

const Alert = (props) => <MuiAlert  elevation={6} variant="filled" {...props} />

const SnackBar = (props) => {
    
    const classes = useStyle()
    const open = useSelector(state => state.SnackBarReducer.open);
    const status = useSelector(state => state.SnackBarReducer.status);
    const text = useSelector(state => state.SnackBarReducer.text);

    const dispatch = useDispatch();
    
    const handleClose = (reason) => {
        if (reason === 'clickaway') {
        return;
        }
    
        dispatch({type: "CLOSESNACK", open:false});
    };

   

    return (
      <Snackbar className={classes.alert} open={open} autoHideDuration={props.autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status}>
            {text}
        </Alert>
      </Snackbar>
    )

}

function mapStateToProps(state) {
    return {
      open: state.SnackBarReducer.open,
      status: state.SnackBarReducer.status,
      text: state.SnackBarReducer.text
    };
  }
  
  export default connect(mapStateToProps)(SnackBar);
