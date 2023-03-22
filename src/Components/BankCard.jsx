import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import MasterCard from "../Assets/Image/mastercard.png";
import { ClickAwayListener } from "@mui/base";
const BankCard = () => {
  return (
    <Box className="bg-secondWhite rounded-6 px-18 pt-10.5 pb-70 flex h-full flex-col">
      <div className="font-primary text-black font-semibold text-smd leading-21">
        Bank Account
      </div>
      <div className="mt-20 flex gap-15">
        <div className="w-272 bg-white rounded-4 px-14 py-7 flex items-center">
          <img src={MasterCard} alt="Master Card" className="w-57 h-57" />
          <div className="ml-15">
            <div className="font-primary text-black leading-19 text-base font-semibold">
              **** **** **** 5967
            </div>
            <div className="font-primary text-thirdGray leading-14 text-xs">
              Expires 09/27
            </div>
          </div>
        </div>
        <div className="w-272 bg-white rounded-4 px-14 py-7 flex items-center">
          <img src={MasterCard} alt="Master Card" className="w-57 h-57" />
          <div className="ml-15">
            <div className="font-primary text-black leading-19 text-base font-semibold">
              **** **** **** 5967
            </div>
            <div className="font-primary text-thirdGray leading-14 text-xs">
              Expires 09/27
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BankCard;
