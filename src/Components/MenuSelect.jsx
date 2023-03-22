import { Box, Typography } from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePicture from "../Assets/Image/profile-picture.png";
import ToastMessage from "./ToastMessage";
import Button from "./Button";
import { ReactComponent as Dots } from "../Assets/Svg/Dots.svg";

const MenuSelect = () => {
  return (
    <Box className="mt-25 lg:px-40 px-20">
      <div className="border-b-2 border-secondWhite pb-11 flex w-full justify-between">
        <div className="font-primary text-base text-orange leading-19 font-semibold relative">
          Profile
          <span className="absolute bottom-[-14px] rounded-full left-[-10px] w-70 h-5 bg-orange"></span>
        </div>
        <div className="font-primary text-base text-thirdWhite leading-19 relative">
          Wallet
        </div>
        <div className="font-primary text-base text-thirdWhite leading-19 relative">
          Activities
        </div>
        <div className="font-primary text-base text-thirdWhite leading-19 relative">
          Invitations
        </div>
      </div>
    </Box>
  );
};

export default MenuSelect;
