import { Box } from "@mui/material";
import React from "react";
import ToastMessage from "./ToastMessage";
import { ReactComponent as Dots } from "../Assets/Svg/Dots.svg";

const PageTitleBar = () => {
  return (
    <Box className="mt-25 md:hidden lg:block xs:block lg:px-40 px-20">
      <Box className="lg:flex hidden items-center justify-between w-full">
        <div className="font-primary text-28 text-black leading-loose font-medium">
          My Account
        </div>
        <ToastMessage />
        <Box className="rounded-4 bg-thirdBlack text-center py-2.5 min-w-152 px-28">
          <div className="font-primary text-white font-semibold text-base leading-19 cursor-pointer">
            View Button
          </div>
        </Box>
      </Box>
      <div className="lg:hidden flex items-center justify-between">
        <div className="font-primary text-22 text-black leading-loose font-medium">
          My Account
        </div>
        <div>
          <Dots />
        </div>
      </div>
    </Box>
  );
};

export default PageTitleBar;
