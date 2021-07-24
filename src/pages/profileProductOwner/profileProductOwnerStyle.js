import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
    productOwner:{
        marginTop: theme.spacing(9),
    },
    rtlDirection:{
        direction:"rtl",
        margin:theme.spacing(2)
    }
  
}));

export default useStyle;
