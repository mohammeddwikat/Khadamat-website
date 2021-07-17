import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect, useDispatch, useSelector } from 'react-redux';
import useStyles from './drawerStyle'
import Button from "@material-ui/core/Button";
import React from "react";
import { createTheme, ThemeProvider  } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';


function Drawer() {
  const classes = useStyles();
  const anchor = "right"
  
  const dispatch = useDispatch();
  const state = useSelector(state => state.DrawerReducer)
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch({type: "TOGGLE", value: open, anchor})
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['البريد الالكتروني', 'البريد الوارد', 'ارسل ايميل', 'المسودات'].map((text, index) => (
          <ListItem   button key={text} className={classes.root} >
            <ListItemText   disableTypography primary={<Typography type="body2" style={{float:"right", marginRight:"0.3em" }}>{text}</Typography>}   />
            <ListItemIcon >{index % 2 === 0 ? <InboxIcon style={{paddingLeft:"0"}}/> : <MailIcon style={{paddingLeft:"0"}}/>}</ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['جميع الرسائل', 'سلة المهملات', 'السبام'].map((text, index) => (
          
          <ListItem button key={text} className={classes.root}>
            <ListItemText   disableTypography primary={<Typography type="body2" style={{float:"right", marginRight:"0.3em" }}>{text}</Typography>}   />
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{paddingLeft:"0"}}/> : <MailIcon style={{paddingLeft:"0"}}/>}</ListItemIcon>
          </ListItem>
          
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
        </SwipeableDrawer>
    </div>
  );
}


function mapStateToProps(state) {
    return {
        top: state.DrawerReducer.top,
        left: state.DrawerReducer.left,
        bottom: state.DrawerReducer.bottom,
        right: state.DrawerReducer.right
    };
  }
  
  export default connect(mapStateToProps)(Drawer);