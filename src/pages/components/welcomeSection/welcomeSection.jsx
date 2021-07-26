import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./welcomeSectionStyle";
import {ColoredCover, SVGCurve} from '../'
 
const WelcomeSection = () => {
  const classes = useStyles();
  const Cover = () => <div className={classes.cover}></div>;

  return (
    
    <div  className={classes.main}>
      <Cover />
      <ColoredCover />
      <div className={classes.welcome}>
        <h1 className={classes.centralizeText}>مرحبا بك في خدمات</h1>
        <h2 className={classes.centralizeText}>
          الموقع الفلسطيني الأول لانجاز اعمالك من قبل محترفين محليين
        </h2>
      </div>

      <IconButton
        aria-label="details"
        // onClick={}
        // onMouseDown={}
      >
        <ExpandMoreIcon />
      </IconButton>
      <SVGCurve />
      
    </div>
  );
};

export default WelcomeSection