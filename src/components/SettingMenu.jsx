import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../firebase/firebase";
import { Divider } from "@mui/material";

const settings = ["", "Déconnexion"];

function SettingMenu({ user }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={user?.displayName || user?.email || "Menu"}>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, border: "1px solid #fee53b" }}
        >
          <Avatar src={user?.photoURL} />
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
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Mon profile</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            handleCloseUserMenu();
          }}
        >
          <Typography textAlign="center">Déconnexion</Typography>
        </MenuItem>
        {user?.email && (
          <>
            <Divider />

            <MenuItem>
              <Typography textAlign="center" color={"textSecondary"}>
                {user?.email}
              </Typography>
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
}
export default SettingMenu;
