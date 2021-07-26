import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "./AppBarStyle";
import { connect, useDispatch } from "react-redux";
import { GeneralButton } from "../";
import { useHistory } from "react-router-dom";

function NavigationBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const anchor = "right";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch({ type: "TOGGLE", value: true, anchor });
  };
  const buttonStyle = {
    background: "white",
    color: "gray",
    
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>صفحتك الشخصية</MenuItem>
      <MenuItem onClick={handleMenuClose}>اعدادات حسابي</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuMobileNotLogged = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem >
        <GeneralButton
          newStyle={buttonStyle}
          title={"تسجيل الدخول"}
          onClick={() => history.push("/page/login")}
        />
      </MenuItem>
      <MenuItem>
        <GeneralButton
          newStyle={buttonStyle}
          title={"الانضمام الى خدمات"}
          onClick={() => history.push("/page/signUp")}
        />
      </MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    sessionStorage.getItem('userData') === null? menuMobileNotLogged :
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton aria-label="show new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>رسائل</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="show new notifications"
          color="inherit"
          aria-haspopup="true"
        >
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>إشعارات</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>صفحتك الشخصية</p>
      </MenuItem>
    </Menu>
  );
    
  const renderNotLogged = (
    <div className={classes.sectionDesktop}>
      <GeneralButton
        newStyle={buttonStyle}
        title={"تسجيل الدخول"}
        onClick={() => history.push("/page/login")}
      />
      <GeneralButton
        newStyle={buttonStyle}
        title={"الانضمام الى خدمات"}
        onClick={() => history.push("/page/signUp")}
      />
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.bar}>
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {sessionStorage.getItem("userData") === null ? (
            renderNotLogged
          ) : (
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                aria-label="show new notifications"
                color="inherit"
                onClick={handleProfileMenuOpen}
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show new mails"
                color="inherit"
                onClick={handleProfileMenuOpen}
              >
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
            </div>
          )}

          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="ابحث عن مشروع..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            خدمات
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    right: state.AppBarReducer.right,
    left: state.AppBarReducer.left,
    bottom: state.AppBarReducer.bottom,
    top: state.AppBarReducer.top,
  };
}

export default connect(mapStateToProps)(NavigationBar);
