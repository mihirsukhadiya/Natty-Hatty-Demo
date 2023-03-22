import { Box, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePicture from "../Assets/Image/profile-picture.png";
import { ReactComponent as Menu } from "../Assets/Svg/menu.svg";

const Header = () => {
  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="left"
        className="categoryMenu"
        open={openCategoryDrawer}
        sx={{width: "100%"}}
        variant="persistent"
        onClose={() => setOpenCategoryDrawer(false)}
      >
        hyyyyyyyyyyyy
      </Drawer>
      <Box className="bg-thirdBlack h-60 flex items-center lg:px-40 px-20">
        {/* <Box className="flex items-center justify-between w-full">
        <Box className="flex items-center">
          <div className="font-secondary text-smd uppercase text-white leading-normal font-bold">
            logo
          </div>
          <div
            className="relative  text-white menuClass  hover:text-orange cursor-pointer"
            style={{ marginLeft: "218px" }}
          >
            <div className="font-primary text-sm leading-none font-normal">
              Menu 1
            </div>
            <div className="absolute top-0 w-164 subMenuClass">
              <div className="mt-8 w-164 bg-white shadow-6md rounded-6 tracking-normal">
                <div className="rounded-t-6 cursor-pointer">
                  <div className="font-primary rounded-t-6 text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                    My Programs
                  </div>
                </div>
                <div className="cursor-pointer">
                  <div className="font-primary text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                    New Programs
                  </div>
                </div>
                <div className="cursor-pointer">
                  <div className="font-primary text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                    Program Invites
                  </div>
                </div>
                <div className="rounded-b-6 cursor-pointer">
                  <div className="font-primary rounded-b-6 text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                    Program Requests
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="font-primary text-sm text-white leading-none font-normal"
            style={{ marginLeft: "103px" }}
          >
            Menu 2
          </div>
          <div
            className="font-primary text-sm text-white leading-none font-normal"
            style={{ marginLeft: "112px" }}
          >
            Menu 3
          </div>
        </Box>
        <Box className="flex items-center">
          <NotificationsNoneIcon
            height="22px"
            width="18px"
            sx={{ color: "#FFFFFF", marginRight: "35.67px" }}
          />
          <img
            src={ProfilePicture}
            alt="Profile Picture"
            style={{ width: "37px", height: "37px" }}
          />
        </Box>
      </Box> */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Menu
              width="24px"
              height="24px"
              fill="orange"
              onClick={() => {
                setOpenCategoryDrawer(true);
                document.body.style.overflow = null;
              }}
            />
            <div className="font-secondary ml-15 text-smd uppercase text-white leading-normal font-bold">
              logo
            </div>
          </div>
          <div className="flex items-center">
            <NotificationsNoneIcon
              height="32px"
              width="32px"
              sx={{ color: "#FFFFFF" }}
            />
            <img
              src={ProfilePicture}
              className="ml-24"
              alt="Profile Picture"
              style={{ width: "37px", height: "37px" }}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Header;
