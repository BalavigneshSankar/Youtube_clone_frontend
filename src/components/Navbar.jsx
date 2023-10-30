import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: "sticky",
        top: 0,
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        backgroundColor: "#000",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
