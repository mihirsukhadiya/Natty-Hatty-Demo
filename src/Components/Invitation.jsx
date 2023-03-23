import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SampleProfile from "../Assets/Image/sample-dp.png";
import PeopleIcon from "../Assets/Image/people-icon.png";
import { ReactComponent as Check } from "../Assets/Svg/check.svg";
import { ReactComponent as Close } from "../Assets/Svg/close.svg";
const Invitation = () => {
  const [toggle, setToggle] = useState("sent");
  return (
    <>
    <Box className="bg-secondWhite md:block hidden slg:mt-20 mt-0 rounded-6 px-23 py-15 w-full xs:h-auto md:h-full slg:h-auto">
      <Box className="flex justify-between items-center">
        <div className="font-primary text-black font-semibold text-smd leading-21">
          Invitations
        </div>
        <div className="flex items-center relative">
          {toggle == "sent" && (
            <Box className="relative rounded-full bg-darkGray py-8 w-185 align-center text-end pr-8">
              <div
                className="font-primary text-black font-semibold text-sm leading-14 cursor-pointer"
                onClick={() => setToggle("receive")}
              >
                Received (5)
              </div>
              <Box className="absolute top-0 rounded-full bg-orange py-8 w-80 align-center text-center">
                <div
                  className="font-primary text-white font-semibold text-sm leading-14 cursor-pointer"
                  onClick={() => setToggle("sent")}
                >
                  Sent (15)
                </div>
              </Box>
            </Box>
          )}
          {toggle == "receive" && (
            <Box className="relative rounded-full  bg-darkGray py-8 w-185 text-start pl-8">
              <div
                className="font-primary  text-black font-semibold text-sm leading-14 cursor-pointer"
                onClick={() => setToggle("sent")}
              >
                Sent (15)
              </div>
              <Box className="absolute top-0 right-0 rounded-full  bg-orange py-8 w-107 align-center text-center">
                <div
                  className="font-primary   text-white font-semibold text-sm leading-14 cursor-pointer"
                  onClick={() => setToggle("receive")}
                >
                  Received (5)
                </div>
              </Box>
            </Box>
          )}
        </div>
      </Box>
      {toggle == "sent" && (
        <Box className="mt-15 w-full">
          {[0, 1, 2, 3, 4].map((data, index) => {
            return (
              <Box
                key={index}
                className="px-20 mt-10 py-8 bg-lightPurple rounded-6 flex items-center"
              >
                <div className="text-thirdBlack font-primary font-semibold text-sm leading-16">
                  <span className="font-primary font-semibold text-orange">
                    You&nbsp;
                  </span>
                  have invited johnsmith@gmail.com to become family member.
                </div>
              </Box>
            );
          })}
        </Box>
      )}
      {toggle == "receive" && (
        <Box className="mt-15 w-full">
          {["John Smith", "Dianne Russell", "Lisa Smith", "Sean Michaletz"].map(
            (data, index) => {
              return (
                <Box
                  key={index}
                  className="px-20 mt-10 py-8 bg-lightPurple rounded-6 flex items-center justify-between"
                >
                  <div className="flex items-center w-full">
                    <img
                      src={SampleProfile}
                      alt="ProfilePic"
                      className="w-35 h-35 rounded-full mr-18"
                    />
                    <div
                      className="text-thirdBlack font-primary font-semibold text-sm leading-16"
                      style={{ width: "75%" }}
                    >
                      <span className="font-primary font-semibold text-orange">
                        {data}&nbsp;
                      </span>
                      have invited you to become his family member.
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Box className="rounded-4 bg-darkGreen text-center h-30 flex justify-center items-center cursor-pointer w-30 align-center">
                      <div className="font-primary text-white font-medium text-xs leading-14">
                        <Check />
                      </div>
                    </Box>
                    <Box className="rounded-4 ml-5 bg-red text-center h-30 flex justify-center items-center cursor-pointer w-30 align-center">
                      <div className="font-primary text-white font-medium text-xs leading-14">
                        <Close />
                      </div>
                    </Box>
                  </div>
                </Box>
              );
            }
          )}
        </Box>
      )}
    </Box>

    <div className="md:hidden block">
      <Box className="flex justify-between items-center">
        <div className="font-primary text-black font-semibold text-smd leading-21">
          Invitations
        </div>
        <div className="flex items-center relative">
          {toggle == "sent" && (
            <Box className="relative rounded-full bg-darkGray py-8 w-185 align-center text-end pr-8">
              <div
                className="font-primary text-black font-semibold text-sm leading-14 cursor-pointer"
                onClick={() => setToggle("receive")}
              >
                Received (5)
              </div>
              <Box className="absolute top-0 rounded-full bg-orange py-8 w-80 align-center text-center">
                <div
                  className="font-primary text-white font-semibold text-sm leading-14 cursor-pointer"
                  onClick={() => setToggle("sent")}
                >
                  Sent (15)
                </div>
              </Box>
            </Box>
          )}
          {toggle == "receive" && (
            <Box className="relative rounded-full  bg-darkGray py-8 w-185 text-start pl-8">
              <div
                className="font-primary  text-black font-semibold text-sm leading-14 cursor-pointer"
                onClick={() => setToggle("sent")}
              >
                Sent (15)
              </div>
              <Box className="absolute top-0 right-0 rounded-full  bg-orange py-8 w-107 align-center text-center">
                <div
                  className="font-primary   text-white font-semibold text-sm leading-14 cursor-pointer"
                  onClick={() => setToggle("receive")}
                >
                  Received (5)
                </div>
              </Box>
            </Box>
          )}
        </div>
      </Box>
      {toggle == "sent" && (
        <Box className="mt-15 w-full">
          {[0, 1, 2, 3, 4].map((data, index) => {
            return (
              <Box
                key={index}
                className="px-20 mt-10 py-8 bg-lightPurple rounded-6 flex items-center"
              >
                <div className="text-thirdBlack font-primary font-semibold text-sm leading-16">
                  <span className="font-primary font-semibold text-orange">
                    You&nbsp;
                  </span>
                  have invited johnsmith@gmail.com to become family member.
                </div>
              </Box>
            );
          })}
        </Box>
      )}
      {toggle == "receive" && (
        <Box className="mt-15 w-full">
          {["John Smith", "Dianne Russell", "Lisa Smith", "Sean Michaletz"].map(
            (data, index) => {
              return (
                <Box
                  key={index}
                  className="px-20 mt-10 py-8 bg-lightPurple rounded-6 flex items-center justify-between"
                >
                  <div className="flex items-center w-full">
                    <img
                      src={SampleProfile}
                      alt="ProfilePic"
                      className="w-35 h-35 rounded-full mr-18"
                    />
                    <div
                      className="text-thirdBlack font-primary font-semibold text-sm leading-16"
                      style={{ width: "75%" }}
                    >
                      <span className="font-primary font-semibold text-orange">
                        {data}&nbsp;
                      </span>
                      have invited you to become his family member.
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Box className="rounded-4 bg-darkGreen text-center h-30 flex justify-center items-center cursor-pointer w-30 align-center">
                      <div className="font-primary text-white font-medium text-xs leading-14">
                        <Check />
                      </div>
                    </Box>
                    <Box className="rounded-4 ml-5 bg-red text-center h-30 flex justify-center items-center cursor-pointer w-30 align-center">
                      <div className="font-primary text-white font-medium text-xs leading-14">
                        <Close fill="white" />
                      </div>
                    </Box>
                  </div>
                </Box>
              );
            }
          )}
        </Box>
      )}
    </div></>
  );
};

export default Invitation;
