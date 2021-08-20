import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { connect, useDispatch, useSelector } from "react-redux";
import useStyles from "./drawerStyle";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { useEffect, useState } from "react";

function Drawer(props) {
  const classes = useStyles();
  const anchor = "right";
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const state = useSelector((state) => state.DrawerReducer);

  const [image, setImage] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("userData") != null) {
      setId(JSON.parse(sessionStorage.getItem("userData")).id);
      setImage(
        "https://K.wadq.dev/getProfilePic/" +
          JSON.parse(sessionStorage.getItem("userData")).id
      );
    }
  }, []);

  const drawerItems = (names, links, icons = []) =>
    names.map((name, index) => (
      <ListItem button key={name} className={classes.root}>
        <ListItemText
          onClick={() => {
            if (name === "تسجيل خروج") {
              sessionStorage.removeItem("accessToken");
              sessionStorage.removeItem("userData");
              const startPageIndex = history.length - 1;
              history.go(startPageIndex);
              history.push("/");
            } else {
              history.push(links[index]);
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
      style={props.adminStyle}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sessionStorage.getItem("userData") === null ? null : <Divider />}
        {sessionStorage.getItem("userData") === null
          ? drawerItems(
              ["صفحة البداية", "تسجيل الدخول", "الانضمام الى خدمات"],
              ["/", "/page/login", "/page/signUp"]
            )
          : JSON.parse(sessionStorage.getItem("userData")).profileType === "F"
          ? drawerItems(
              [
                "صفحتي الشخصية",
                "صفحة الرئيسية",
                "اضافة مهارات",
                "مشاركة عمل",
                "معرض أعمالي",
                "طلباتي",
                "تسجيل خروج",
              ],
              [
                `/profile/${id}`,
                "/",
                `/freeLancer/addSkills/${id}`,
                `/addWork/freelancer/${id}`,
                `/worksGallery/freelancer/${id}`,
                "/page/signUp",
                "/",
              ]
            )
          : JSON.parse(sessionStorage.getItem("userData")).profileType === "P"
          ? drawerItems(
              [
                "صفحتي الشخصية",
                "صفحة الرئيسية",
                "اضافة مشاريع",
                "مشاريعي",
                "العروض",
                "تسجيل خروج",
              ],
              [
                "/productOwner/" +
                  JSON.parse(sessionStorage.getItem("userData")).id,
                "/",
                "/addProject/productOwner/" +
                  JSON.parse(sessionStorage.getItem("userData")).id,
                "/page/login",
                "/page/signUp",
                "/",
              ]
            )
          : JSON.parse(sessionStorage.getItem("userData")).profileType === "A"
          ? drawerItems(
              [
                "مستخدمي خدمات",
                "المشاريع",
                "ابلاغات",
                "المهارات",
                "التحويلات المالية",
                "احصائيات خدمات",
                
                "تسجيل خروج",
              ],
              [
                "/khadamat/adminPanel/users/" + id.toString(),
                "/khadamat/adminPanel/projects/" + id.toString(),
                "/khadamat/adminPanel/reports/"+id.toString(),
                "/khadamat/adminPanel/skills/"+id.toString(),
                "/khadamat/adminPanel/transactions/"+id.toString(),
                "/khadamat/adminPanel/statistics/"+id.toString(), 
                "/",
              ]
            )
          : drawerItems(
              ["صفحة البداية", "تسجيل الدخول", "الانضمام الى خدمات"],
              ["/", "/page/login", "/page/signUp"]
            )}
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
        {sessionStorage.getItem("userData") != null ? (
          <div style={props.adminStyle} className={classes.headerDrawer}>
            <Avatar
              alt={JSON.parse(sessionStorage.getItem("userData")).name}
              src={image}
              className={classes.headerAvatar}
            />
            <div>{JSON.parse(sessionStorage.getItem("userData")).name}</div>
            <div>{JSON.parse(sessionStorage.getItem("userData")).email}</div>
            <Divider />
          </div>
        ) : null}
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
