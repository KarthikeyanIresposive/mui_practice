import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { Padding } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ecommerce
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Avatar sizes="small" sx={{
            marginLeft:"1rem"
          }}>
            <div style={{height:"30px"}}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                style={{width:"100%"}}
              />
            </div>
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
