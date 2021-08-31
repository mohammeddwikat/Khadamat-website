import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./statisticsCardsStyle";
import StatisticCard from "./statisticCard";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useEffect, useState } from "react";
import axios from "axios";

const StatisticsCards = (props) => {
  const classes = useStyles();
  const [statistics, setStatistics] = useState({
    userTypes: {
      free: 0,
      product: 0,
    },
    Projects: {
      completedProjects: 0,
      openProjects: 0,
      waitingProjects: 0,
      reviewingProjects: 0,
    },
    transCount: 0,
  });

  useEffect(() => {
    axios.get("https://k.wadq.dev/getAllStatics").then((res) => {
      setStatistics({
        ...res.data,
      });
    });
  });

  return (
    <div className={classes.root}>
      <StatisticCard
        title={"عدد المستقلين"}
        icon={<EmojiPeopleIcon />}
        count={statistics.userTypes.free}
      />
      <StatisticCard
        title={"عدد اصحاب المشاريع"}
        icon={<PeopleIcon />}
        count={statistics.userTypes.product}
      />
      <StatisticCard
        title={"عدد المشاريع الحالية"}
        icon={<WorkIcon />}
        count={
          statistics.Projects.openProjects +
          statistics.Projects.waitingProjects +
          statistics.Projects.reviewingProjects
        }
      />
      <StatisticCard
        title={"عدد المشاريع المنفذة"}
        icon={<AssignmentTurnedInIcon />}
        count={statistics.Projects.completedProjects}
      />
      <StatisticCard
        title={"عدد التحويلات المالية"}
        icon={<LocalAtmIcon />}
        count={statistics.transCount}
      />
    </div>
  );
};

export default StatisticsCards;
