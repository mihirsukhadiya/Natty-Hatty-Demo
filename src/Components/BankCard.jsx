import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import MasterCard from "../Assets/Image/mastercard.png";
import { ClickAwayListener } from "@mui/base";
const BankCard = () => {
  return (
    <>
      <Box className="bg-secondWhite rounded-6 px-18 pt-10.5 pb-70 hidden md:flex flex-col xs:h-auto md:h-full slg:h-auto">
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
      <div className="mt-20 flex flex-col gap-10 md:hidden">
        <div className="w-full bg-secondWhite rounded-4 px-14 py-7 flex items-center justify-between">
          <div className="flex items-center">
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
          <div>
            <Box className="rounded-4 bg-darkGreen text-center py-7 align-center w-66">
              <div className="font-primary text-white font-medium text-xs leading-19">
                Edit
              </div>
            </Box>
          </div>
        </div>
        <div className="w-full mt-10 bg-secondWhite rounded-4 px-14 py-7 flex items-center justify-between">
          <div className="flex items-center">
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
          <div>
            <Box className="rounded-4 bg-darkGreen text-center py-7 align-center w-66">
              <div className="font-primary text-white font-medium text-xs leading-19">
                Edit
              </div>
            </Box>
          </div>
        </div>
        <div className="w-full mt-10 bg-secondWhite rounded-4 px-14 py-7 flex items-center justify-between">
          <div className="flex items-center">
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
          <div>
            <Box className="rounded-4 bg-darkGreen text-center py-7 align-center w-66">
              <div className="font-primary text-white font-medium text-xs leading-19">
                Edit
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankCard;
