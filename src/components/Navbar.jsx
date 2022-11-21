import { Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AppBar from "@mui/material/AppBar";

import logo from "../images/logo.png";
import { SearchBar, SettingMenu } from "./";
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#6e6e6e" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <Stack direction="row" alignItems="center" spacing={2}>
          <SearchBar user={user} />
          <SettingMenu user={user} />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
