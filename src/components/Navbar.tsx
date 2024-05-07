import { Box, Button, Divider, Drawer, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { navbar } from "../constant/constant";
import { useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

interface NavbarItem {
  path: string;
  name: string;
}

const Navbar: React.FC = () => {
  const matches = useMediaQuery("(max-width:375px)");
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className=" bg-[#111111]">
        <div className="flex justify-between items-center container mx-auto">
          <div
            className="w-[75px] h-[75px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/assets/logopng.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center gap-8">
            <ul className="hidden  lg:flex justify-center items-center gap-8">
              {navbar.map((element: NavbarItem, index) => (
                <li
                  key={index}
                  className={`text-[#a4a4a4] hover:text-white uppercase ${
                    location.pathname === element.path ? "blue_line" : ""
                  }  `}
                >
                  <Link to={element.path}>{element.name}</Link>
                </li>
              ))}
            </ul>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#292929",
                  color: "#a4a4a4",
                },
              }}
            >
              Sign Up
            </Button>
          </div>
          <div className="block lg:hidden" onClick={() => setOpen(true)}>
            <MenuIcon sx={{ color: "#a4a4a4" }} />
          </div>
        </div>
      </div>
      <Drawer open={open} onClose={handleClose} anchor="right">
        <Box
          sx={{
            width: matches ? "300px" : "350px",
            height: "100%",
            backgroundColor: "#111111",
          }}
        >
          <div className="text-end px-2 py-2" >
            <CloseIcon sx={{ color: "#fff" }} onClick={() => setOpen(false)} />
          </div>
          {navbar.map((element: NavbarItem, index) => (
            <div key={index} onClick={() => setOpen(false)}>
              <Link
                to={element.path}
                className={`text-[#a4a4a4] block py-4 px-2 hover:text-white uppercase ${
                  location.pathname === element.path
                    ? "responcive-navbar  "
                    : ""
                }`}
              >
                {element.name}
              </Link>
              {location.pathname === element.path ? (
                <Divider sx={{ mt: 1, backgroundColor: "#A4A4A4" }} />
              ) : (
                ""
              )}
            </div>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
