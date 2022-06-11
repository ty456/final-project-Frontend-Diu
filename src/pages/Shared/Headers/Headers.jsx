import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { getUserState } from "../../../store/actions";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { revokeAuthUser } from "../../../store/user/user.action";

const pages = [
  {
    label: "Home",
    slug: "/",
  },
  {
    label: "Doctors",
    slug: "/doctors",
  },

  {
    label: "Pharmacy",
    slug: "/pharmacy",
  },
  {
    label: "Blogs",
    slug: "/blogs",
  },
];

const settings2 = [
  {
    optionName: "Profile Dashboard",
    slug: "/profile-dashboard",
  },
  {
    optionName: "Doctors",
    slug: "/doctors",
  },
  {
    optionName: "Blogs",
    slug: "/blogs",
  },
];

const Headers = () => {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {
    profile: { firstName },
  } = useSelector(getUserState);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigationMenu = (slug) => {
    handleCloseNavMenu();
    history.push(slug);
    console.log(slug);
  };
  const handleLogout = async () => {
    await revokeAuthUser();
    history.push("/");
  };

  return (
    <AppBar position="static" style={{ background: "#FFFFFF" }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={logo} alt="" srcset="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              style={{ background: "#a6a4a4" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page?.label}
                  onClick={() => handleNavigationMenu(page?.slug)}
                >
                  <Typography textAlign="center">{page?.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={logo} alt="" srcset="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page?.label}
                onClick={() => handleNavigationMenu(page?.slug)}
                sx={{
                  m: 2,
                  color: "#4a4646",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {page?.label}
              </Button>
            ))}
          </Box>

          {/* ok */}
          {firstName ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <h6 className="mx-3 my-2 d-inline-block">
                  Hello!, {firstName}{" "}
                </h6>
                <hr />
                {settings2.map((setting, idx) => {
                  return (
                    <>
                      <Link
                        key={idx}
                        to={setting?.slug}
                        className="d-block px-5 py-2 my-1 mx-2 text-center text-decoration-none"
                      >
                        {setting.optionName}
                      </Link>
                    </>
                  );
                })}
                <hr />
                <div className="text-center">
                  <Button variant="outlined" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </Menu>
            </Box>
          ) : (
            <WithoutAuthWrapper>
              <Link to="/login" className="bg-primary text-white px-3 py-1 m-2">
                Login
              </Link>
              <Link
                to="/register"
                className="border border-primary text-primary px-3 py-1 m-2"
              >
                Register
              </Link>
            </WithoutAuthWrapper>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Headers;

const WithoutAuthWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;
