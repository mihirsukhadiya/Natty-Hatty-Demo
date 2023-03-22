import { Box, Typography } from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePicture from "../Assets/Image/profile-picture.png";
import ToastMessage from "./ToastMessage";
import Button from "./Button";

const PageTitleBar = () => {
  return (
    <Box className="mt-25 px-40">
      <Box className="flex items-center justify-between w-full">
        <div className="font-primary text-28 text-black leading-loose font-medium">
          My Account
        </div>
        <ToastMessage />
        <Button
          text={"View Button"}
          radius={"4"}
          paddingY={"2.5"}
          minWidth={"152"}
          paddingX={"28"}
          textColor={"white"}
          boldNess={"semibold"}
          fontSize={"base"}
          lineHeight={"19"}
          background={"thirdBlack"}
        />
      </Box>
    </Box>
  );
};

export default PageTitleBar;
