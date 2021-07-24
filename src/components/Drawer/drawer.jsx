import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { connect, useDispatch, useSelector } from "react-redux";
import useStyles from "./drawerStyle";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";

function Drawer() {
  const classes = useStyles();
  const anchor = "right";
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.DrawerReducer);
  const drawerItems = (names, links, icons = []) =>
    names.map((name, index) => (
      <ListItem button key={name} className={classes.root}>
        <ListItemText
          onClick={() => {
            if(name === 'تسجيل خروج'){
              sessionStorage.removeItem("accessToken");
              sessionStorage.removeItem("userData");
              const startPageIndex = history.length - 1
              history.go(startPageIndex)
              history.push("/")
            }else{
              history.push(links[index])
            }
            
          }}
          disableTypography
          primary={
            <Typography
              type="body2"
              style={{ float: "right", marginRight: "0.3em" }}
            >
              {name}
            </Typography>
          }
        />
        <ListItemIcon>
          <InboxIcon className={classes.iconStyle} />
        </ListItemIcon>
      </ListItem>
    ));
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch({ type: "TOGGLE", value: open, anchor });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sessionStorage.getItem("userData") == undefined
          ? drawerItems(
              ["صفحة البداية", "تسجيل الدخول", "الانضمام الى خدمات"],
              ["/", "/page/login", "/page/signUp"]
            )
          : drawerItems(
              ["صفحتي الشخصية", "صفحة الرئيسية", "اضافة مهارات", "مشاريعي", "طلباتي","تسجيل خروج"],
              [
                "/profile/" + JSON.parse(sessionStorage.getItem("userData")).id,
                "/",
                "/freeLancer/addSkills/"+JSON.parse(sessionStorage.getItem("userData")).id,
                "/page/login",
                "/page/signUp",
                "/"
              ]
            )
            }
        <Divider />
        
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
    right: state.DrawerReducer.right,
  };
}

export default connect(mapStateToProps)(Drawer);
