import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import MasterCard from "../Assets/Image/mastercard.png";
import { ClickAwayListener } from "@mui/base";
const BillingCard = () => {
  return (
    <Box className="bg-secondWhite md:mt-0 slg:mt-20 rounded-6 px-18 pt-10.5 pb-70 flex flex-col xs:h-auto md:h-full slg:h-auto">
      <div className="slg:block md:flex md:justify-between md:items-center">
        <div className="font-primary text-black font-semibold text-smd leading-21">
          Billing Address
        </div>
        <Box className="rounded-4 bg-thirdBlack text-center py-2.5 align-center w-100 slg:hidden md:block xs:hidden">
          <div className="font-primary text-white font-medium text-xs leading-19 cursor-pointer">
            Edit Details
          </div>
        </Box>
      </div>
      <div className="mt-30 flex items-center">
        <input
          className="w-20 h-20 border-none accent-orange"
          type="checkbox"
          checked={true}
        />
        <div className="ml-10 font-primary text-thirdBlack font-medium text-sm leading-16">
          Same as Home Address
        </div>
      </div>
      <div className="mt-20 grid grid-cols-2 gap-15">
        <div>
          <div>
            <div className="font-primary text-secondBlack font-medium text-xs leading-14">
              First Name:
            </div>
            <input
              className="w-full py-10 mt-2 pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value="John"
            />
          </div>
          <div className="mt-10">
            <div className="font-primary text-secondBlack font-medium text-xs leading-14">
              Address Line 1:
            </div>
            <input
              className="w-full py-10 mt-2 pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value="123 fredline street"
            />
          </div>
          <div className="mt-10">
            <div className="flex slg:flex-row md:flex-col gap-18">
              <div>
                <div className="font-primary text-secondBlack font-medium text-xs leading-14">
                  Country:
                </div>
                <input
                  className="w-full py-10 mt-2 pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-fifthGray"
                  type="text"
                  value="US"
                />
              </div>
              <div>
                <div className="font-primary text-secondBlack font-medium text-xs leading-14">
                  State/Province/Region:
                </div>
                <select
                  className="w-full py-10 mt-2 text-sixthGray pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
                  disabled={true}
                  value={"Select"}
                >
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="font-primary text-secondBlack font-medium text-xs leading-14">
              Last Name:
            </div>
            <input
              className="w-full py-10 mt-2 pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value="Smith"
            />
          </div>
          <div className="mt-10">
            <div className="font-primary text-secondBlack font-medium text-xs leading-14">
              Address Line 2:
            </div>
            <input
              className="w-full py-10 mt-2 pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value=""
            />
          </div>
          <div className="mt-10">
            <div className="flex gap-18  slg:flex-row md:flex-col ">
              <div>
                <div className="font-primary text-secondBlack font-medium text-xs leading-14">
                  City:
                </div>
                <input
                  className="w-full py-10 mt-2 pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
                  type="text"
                  placeholder="Enter city name"
                />
              </div>
              <div>
                <div className="font-primary text-secondBlack font-medium text-xs leading-14">
                  Zip Code:
                </div>
                <input
                  className="w-full py-10 mt-2 pl-13 border border-fifthGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
                  type="text"
                  placeholder="Enter zip code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-end items-center mt-41 slg:flex hidden">
        <Box className="rounded-4 bg-thirdBlack text-center py-2.5 align-center w-100">
          <div className="font-primary text-white font-medium text-xs leading-19 cursor-pointer">
            Edit Details
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default BillingCard;
