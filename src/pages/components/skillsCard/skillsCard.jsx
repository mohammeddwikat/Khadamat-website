import useStyle from "./skillsCardStyle";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { useEffect, useState } from "react";
import axios from "axios";
import { METHODS } from "http";

const SkillsCard = (props) => {
  const classes = useStyle();
  const id = parseInt(props.id);
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [test] = useState("لا يوجود مهارات قم باضافتها");
  const [chips, setChips] = useState({
    listChips: [],
  });

  useEffect(() => {
    const skills = JSON.parse(user.skills).skills;
    setChips({ listChips: skills });
  }, []);

  const MyCard = () => (
    <Paper className={classes.paperSkills}>
      {chips.listChips.length === 0 ? (
        <h4 className={classes.nothingTitle}>{test}</h4>
      ) : (
        chips.listChips.map((chip, index) => (
          <Chip
            key={index}
            className={classes.chipStyle}
            label={chip}
          />
        ))
      )}
    </Paper>
  );
  const UserCard = () => {

    const [skills, setSkills] = useState({
      userSkills: ['loading', 'loading','loading','loading']
    })


    useEffect(()=>{
      axios.get(
        'https://k.wadq.dev/userinfos/'+id
      ).then(res => {
        
       JSON.stringify(res.data.skills)
        axios(
          {
            method:"POST",
            url :'https://k.wadq.dev/getSkillsAsNames',
            data: {
              skills: (res.data.skills)
            }
          }
        ).then(res =>{
          setSkills({...res.data})
          console.log(res.data.userSkills)
        }, err => console.log("baaaaaaaaaaaaaaaaaad"))
      })

     

    }, [])

    return(
      <Paper className={classes.paperSkills}>
        {skills.userSkills.map(
          (skill) => (
            <Chip className={classes.chip} label={skill} />
          )
        )}
      </Paper>
    )
  };
  const C =
    JSON.parse(sessionStorage.getItem("userData")).id === id ? MyCard : UserCard;
  return <C />;
};

export default SkillsCard;
