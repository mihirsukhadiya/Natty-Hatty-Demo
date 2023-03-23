import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SampleProfile from "../Assets/Image/sample-dp.png";
import PeopleIcon from "../Assets/Image/people-icon.png";
const FamilyCard = () => {
  return (
    // <Box className="bg-secondWhite rounded-6 px-23 py-15 ml-28 w-500">
    //  <Box className="flex justify-between items-center">
    //     <div className="font-primary text-black font-semibold text-smd leading-21">
    //       Family
    //     </div>
    //     <div className="flex items-center">
    //       <SearchIcon className="w-17 h-17 mr-16" />
    //       <Box className="rounded-4 bg-darkGreen text-center py-8 w-80 align-center">
    //         <div className="font-primary text-white font-semibold text-xs leading-14">
    //           Add New
    //         </div>
    //       </Box>
    //     </div>
    //   </Box>
    //   <Box className="mt-15 w-full">
    //     <Box className="px-20 py-8 bg-orange rounded-6 flex items-center justify-between">
    //       <div className="flex items-center">
    //         <img
    //           src={SampleProfile}
    //           alt="ProfilePic"
    //           className="w-35 h-35 rounded-full mr-18"
    //         />
    //         <div className="font-primary text-white font-semibold text-base leading-19">
    //           John Smith
    //         </div>
    //       </div>
    //       <div className="flex items-center">
    //         <Box className="rounded-2 bg-white py-6 w-70">
    //           <div className="font-primary text-secondBlack text-center	font-semibold text-2xs leading-14">
    //             ADMIN
    //           </div>
    //         </Box>
    //         <Box className="rounded-2 bg-white py-2 w-23 flex justify-center items-center ml-5">
    //           <img
    //             src={PeopleIcon}
    //             alt="peopleIcon"
    //             style={{ width: "13px", height: "10px" }}
    //           />
    //         </Box>
    //       </div>
    //     </Box>
    //     {["John Smith", "Dianne Russell", "Lisa Smith", "Sean Michaletz"].map(
    //       (data, index) => {
    //         return (
    //           <Box
    //             key={index}
    //             className="px-20 mt-10 py-8 bg-lightPurple rounded-6 flex items-center justify-between"
    //           >
    //             <div className="flex items-center">
    //               <img
    //                 src={SampleProfile}
    //                 alt="ProfilePic"
    //                 className="w-35 h-35 rounded-full mr-18"
    //               />
    //               <div className="font-primary text-black font-semibold text-base leading-19">
    //                 {data}
    //               </div>
    //             </div>
    //             <div className="flex items-center">
    //               <Box className="rounded-2 bg-deepPurple py-6 w-70">
    //                 <div className="font-primary text-secondBlack text-center	font-semibold text-2xs leading-14">
    //                   MEMBER
    //                 </div>
    //               </Box>
    //             </div>
    //           </Box>
    //         );
    //       }
    //     )}
    //   </Box>
    // </Box>
    <Box className="bg-secondWhite rounded-6 px-11 py-18 xs:mt-35 md:mt-0">
      <Box className="flex justify-between items-center">
        <div className="font-primary lg:block hidden text-black font-semibold text-smd leading-21">
          Family
        </div>
        <div className="lg:hidden font-primary text-black font-semibold text-smd leading-21">
          My Family
        </div>
        <div className="flex items-center">
          <SearchIcon className="w-17 h-17 mr-16" />
          <Box className="rounded-4 bg-darkGreen text-center py-8 w-80 align-center">
            <div className="font-primary text-white font-semibold text-xs leading-14 cursor-pointer">
              Add New
            </div>
          </Box>
        </div>
      </Box>
      <Box className="mt-15 w-full">
        <Box className="px-20 py-8 bg-orange rounded-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={SampleProfile}
              alt="ProfilePic"
              className="w-35 h-35 rounded-full mr-18"
            />
            <div className="font-primary text-white font-semibold text-base leading-19">
              John Smith
            </div>
          </div>
          <div className="flex items-center">
            <Box className="rounded-2 bg-white py-6 w-70">
              <div className="font-primary text-secondBlack text-center	font-semibold text-2xs leading-14">
                ADMIN
              </div>
            </Box>
            <Box className="rounded-2 bg-white py-2 h-26 w-26 flex justify-center items-center ml-5">
              <img
                src={PeopleIcon}
                alt="peopleIcon"
                style={{ width: "13px", height: "10px" }}
              />
            </Box>
          </div>
        </Box>
        {["John Smith", "Dianne Russell", "Lisa Smith", "Sean Michaletz"].map(
          (data, index) => {
            return (
              <Box
                key={index}
                className="px-20 mt-10 py-8 bg-lightPurple rounded-6 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={SampleProfile}
                    alt="ProfilePic"
                    className="w-35 h-35 rounded-full mr-18"
                  />
                  <div className="font-primary text-black font-semibold text-base leading-19">
                    {data}
                  </div>
                </div>
                <div className="flex items-center">
                  <Box className="rounded-2 bg-deepPurple py-6 w-70">
                    <div className="font-primary text-secondBlack text-center	font-semibold text-2xs leading-14">
                      MEMBER
                    </div>
                  </Box>
                </div>
              </Box>
            );
          }
        )}
      </Box>
    </Box>
  );
};

export default FamilyCard;
