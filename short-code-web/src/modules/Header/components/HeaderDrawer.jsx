/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function HeaderDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        className="header-drawer"
        anchor={"top"}
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        <div className="header-mobile">
          <div className="header-pages-ref-mobile">
            <a className="ref-mobile" href="#">
              Features
            </a>
            <a className="ref-mobile" href="#">
              Pricing
            </a>
            <a className="ref-mobile" href="#">
              Resources
            </a>
          </div>
          <hr />
          <div className="header-btns-mobile">
            <Button className="login-mobile" variant="text">
              Login
            </Button>
            <Button className="signup-mobile" variant="text">
              Sign Up
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
