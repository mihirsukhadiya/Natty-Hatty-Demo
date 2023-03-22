import { Box, Typography } from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePicture from "../Assets/Image/profile-picture.png";

const Header = () => {
  return (
    <Box className="bg-thirdBlack h-60 flex items-center px-10">
      <Box className="flex items-center justify-between w-full">
        <Box className="flex items-center">
          <div className="font-secondary text-smd uppercase text-white leading-normal font-bold">
            logo
          </div>
          <div className="relative" style={{ marginLeft: "218px" }}>
            <div className="font-primary text-sm text-white leading-none font-normal hover:text-orange cursor-pointer">
              Menu 1
            </div>
            <div className="absolute h-160 w-164 bg-white shadow-6md rounded-6">
              <div className="py-11 px-15">
                <div className="font-primary text-sm">My Programs</div>
              </div>
              <div className="py-11 px-15">
                <div className="font-primary text-sm">New Programs</div>
              </div>
              <div className="py-11 px-15">
                <div className="font-primary text-sm">Program Invites</div>
              </div>
              <div className="py-11 px-15">
                <div className="font-primary text-sm">Program Requests</div>
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
      </Box>
    </Box>
  );
};

export default Header;
