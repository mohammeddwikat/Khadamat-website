import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  uniformColorBackground: {
    backgroundColor: "#0077b6",
    color: "white",
    
    margin: theme.spacing(2),
    '&:hover':{
        backgroundColor:"#015682"
    }
  },
}));

export default useStyle