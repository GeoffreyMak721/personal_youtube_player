import { Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import logo from "../images/logo.png";
import { SearchBar, SettingMenu } from "./";
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        position: "sticky",
        background: "#6e6e6e",
        top: 0,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack direction="row" alignItems="center" spacing={2}>
        <SearchBar user={user} />
        <SettingMenu user={user} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
