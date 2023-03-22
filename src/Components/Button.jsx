import { Box, Typography } from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePicture from "../Assets/Image/profile-picture.png";

const Button = () => {
  return (
    <Box className="rounded-4 bg-thirdBlack text-center py-2.5 min-w-152 px-28">
      <div className="font-primary text-white font-semibold text-base leading-19">
        View Button
      </div>
    </Box>
  );
};

export default Button;
