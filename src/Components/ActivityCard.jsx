import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Peoples from "../Assets/Image/peoples.png";
import PeopleIcon from "../Assets/Image/people-icon.png";
const ActivityCard = () => {
  return (
    // <Box className="bg-secondWhite rounded-6 px-23 py-15 ml-28 w-500">
    //   <Box className="flex justify-between items-center">
    //     <div className="font-primary text-black font-semibold text-smd leading-21">
    //       Activities
    //     </div>
    //     <div className="flex items-center">
    //       <Box className="rounded-4 bg-darkGreen text-center py-8 w-80 align-center">
    //         <div className="font-primary text-white font-medium text-xs leading-14">
    //           View All
    //         </div>
    //       </Box>
    //     </div>
    //   </Box>
    //   <Box className="mt-35">
    //     <div className="flex items-center">
    //       <div className="w-34 h-34 rounded-full bg-lightPurple flex justify-center items-center">
    //         <img className="w-17 h-12" src={Peoples} alt="peoples" />
    //       </div>
    //       <div className="ml-23">
    //         <div className="text-thirdBlack font-primary font-medium text-sm leading-16">
    //           Leslie Alexander updated her&nbsp;
    //           <span className="font-primary font-semibold text-orange">
    //             Account Type
    //           </span>
    //         </div>
    //         <div className="text-thirdGray mt-4 font-primary font-medium text-xs leading-14">
    //           5 October 11:46 AM
    //         </div>
    //       </div>
    //     </div>
    //     {[0, 1, 2].map((data) => {
    //       return (
    //         <>
    //           <div className="flex items-center mt-27">
    //             <div className="w-34 h-34 rounded-full bg-lightPurple flex justify-center items-center">
    //               <img className="w-17 h-12" src={Peoples} alt="peoples" />
    //             </div>
    //             <div className="ml-23">
    //               <div className="text-thirdBlack font-primary font-medium text-sm leading-16">
    //                 John Smith removed Mark Fleix from&nbsp;
    //                 <span className="font-primary font-semibold text-orange">
    //                   Family member
    //                 </span>
    //               </div>
    //               <div className="text-thirdGray mt-4 font-primary font-medium text-xs leading-14">
    //                 5 October 10:01 AM
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex items-center mt-27">
    //             <div className="w-34 h-34 rounded-full bg-lightPurple flex justify-center items-center">
    //               <img className="w-17 h-12" src={Peoples} alt="peoples" />
    //             </div>
    //             <div className="ml-23">
    //               <div className="text-thirdBlack font-primary font-medium text-sm leading-16">
    //                 Leslie Alexander updated her&nbsp;
    //                 <span className="font-primary font-semibold text-orange">
    //                   Account Type
    //                 </span>
    //               </div>
    //               <div className="text-thirdGray mt-4 font-primary font-medium text-xs leading-14">
    //                 4 October 11:00 AM
    //               </div>
    //             </div>
    //           </div>
    //         </>
    //       );
    //     })}
    //   </Box>
    // </Box>

    <Box className="mt-35">
      <div className="flex items-center">
        <div className="w-34 h-34 rounded-full bg-lightPurple flex justify-center items-center">
          <img className="w-17 h-12" src={Peoples} alt="peoples" />
        </div>
        <div className="ml-23">
          <div className="text-thirdBlack font-primary font-medium text-sm leading-16">
            Leslie Alexander updated her&nbsp;
            <span className="font-primary font-semibold text-orange">
              Account Type
            </span>
          </div>
          <div className="text-thirdGray mt-4 font-primary font-medium text-xs leading-14">
            5 October 11:46 AM
          </div>
        </div>
      </div>
      {[0, 1, 2].map((data) => {
        return (
          <>
            <div className="flex items-center mt-27">
              <div className="w-34 h-34 rounded-full bg-lightPurple flex justify-center items-center">
                <img className="w-17 h-12" src={Peoples} alt="peoples" />
              </div>
              <div className="ml-23">
                <div className="text-thirdBlack font-primary font-medium text-sm leading-16">
                  John Smith removed Mark Fleix from&nbsp;
                  <span className="font-primary font-semibold text-orange">
                    Family member
                  </span>
                </div>
                <div className="text-thirdGray mt-4 font-primary font-medium text-xs leading-14">
                  5 October 10:01 AM
                </div>
              </div>
            </div>
            <div className="flex items-center mt-27">
              <div className="w-34 h-34 rounded-full bg-lightPurple flex justify-center items-center">
                <img className="w-17 h-12" src={Peoples} alt="peoples" />
              </div>
              <div className="ml-23">
                <div className="text-thirdBlack font-primary font-medium text-sm leading-16">
                  Leslie Alexander updated her&nbsp;
                  <span className="font-primary font-semibold text-orange">
                    Account Type
                  </span>
                </div>
                <div className="text-thirdGray mt-4 font-primary font-medium text-xs leading-14">
                  4 October 11:00 AM
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Box>
  );
};

export default ActivityCard;
