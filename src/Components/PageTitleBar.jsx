import { Box, Typography } from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePicture from "../Assets/Image/profile-picture.png";
import ToastMessage from "./ToastMessage";
import Button from "./Button";

const PageTitleBar = () => {
  return (
    <Box className="mt-25 px-10">
      <Box className="flex items-center justify-between w-full">
        <div className="font-primary text-28 text-black leading-loose font-medium">
          My Account
        </div>
        <ToastMessage />
        <Button />
      </Box>
    </Box>
  );
};

export default PageTitleBar;
