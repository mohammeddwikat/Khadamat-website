import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    textAlign:"right",
    marginTop: theme.spacing(2)
  },
  inline: {
    display: 'inline',
    textAlign:"right",
    
  },
  itemText:{
      textAlign:"right"
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const id = props.id
  return (
    <List className={classes.root}>
      <ListItem alignItems="center" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        className={classes.itemText}
          primary="الشغل كان ممتاز معه والتسليم كان بالوقت المطلوب"
          secondary={
            <React.Fragment >
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
              {"الشغل يلي اشتغله كان تصميم موقع ويب"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        className={classes.itemText}
          primary="الشغل كان ممتاز معه والتسليم كان بالوقت المطلوب"
          secondary={
            <React.Fragment >
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
              {"الشغل يلي اشتغله كان تصميم موقع ويب"}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
  );
}