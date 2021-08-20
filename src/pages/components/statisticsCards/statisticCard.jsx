import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './statisticsCardsStyle'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const StatisticCard = (props) => {

    const classes = useStyles()

    return(
        
        <Paper className={classes.paper} elevation={3} >
            <h2>
               {props.title}
            </h2>
            {
                props.icon
            }
            <div className={classes.count}>
                {props.count}
            </div>
        </Paper>
        
    )
}

export default StatisticCard