import useStyle from "./skillsCardStyle";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { GeneralButton } from "../../../components";
import axios from "axios";
import Chip from "@material-ui/core/Chip";

const SkillsCard = (props) => {
  const classes = useStyle();
  const id = props.id;

  const MyCard = () => (
    <Paper className={classes.paperSkills}>
      {[
        "فوتوشوب",
        "برمجة ويب",
        "تدريس برمجة الحاسوب",
        "مونتاج",
        "عمل اعلانات",
      ].map((skill) => (
        <Chip key={skill} className={classes.chip} label={skill} />
      ))}
    </Paper>
  );
  const UserCard = () => (
    <Paper className={classes.paperSkills}>
      {[
        "From API",
        "From API",
        "From API",
        "From API",
        "From API",
      ].map((skill) => (
        <Chip className={classes.chip} label={skill} />
      ))}
    </Paper>
  );
  const C =
    JSON.parse(sessionStorage.getItem("userData")).id == id ? MyCard : UserCard;
  return <C />;
};

export default SkillsCard;
