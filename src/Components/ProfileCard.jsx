import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfilePicture from "../Assets/Image/profile-picture.png";
import { ReactComponent as CameraIcon } from "../Assets/Svg/camera.svg";
import { ClickAwayListener } from "@mui/base";
const ProfileCard = () => {
  const [openUploadMenu, setOpenUploadMenu] = useState(false);
  return (
    // <Box className="bg-secondWhite rounded-6 px-18 py-10.5 flex items-center w-1313 h-full">
    //   <Box className="flex items-center">
    //     <Box
    //       className={`w-107 h-107 rounded-full cursor-pointer relative border-2 ${
    //         openUploadMenu ? "border-orange" : "border-secondWhite"
    //       }`}
    //       onClick={() => setOpenUploadMenu(true)}
    //     >
    //       <img
    //         src={ProfilePicture}
    //         alt="ProfilePic"
    //         className="rounded-full w-full h-full"
    //       />
    //       <div
    //         className={`absolute bg-white bottom-1 right-1 w-26 h-26 rounded-full border ${
    //           openUploadMenu ? "border-orange" : "border-lightGray"
    //         } flex justify-center items-center leading-26`}
    //       >
    //         <CameraIcon
    //           className="w-16 h-16"
    //           fill={openUploadMenu ? "#F8991F" : "#a2a2a2"}
    //         />
    //       </div>
    //       {openUploadMenu && (
    //         <ClickAwayListener onClickAway={() => setOpenUploadMenu(false)}>
    //           <div className="absolute top-[114px] left-[-8px] w-122">
    //             <div className="w-122 bg-white shadow-6md rounded-6 tracking-normal">
    //               <div className="rounded-t-6 cursor-pointer">
    //                 <div className="font-primary rounded-t-6 text-sm bg-orange leading-16 text-white font-semibold py-12 pl-16">
    //                   Upload New
    //                 </div>
    //               </div>
    //               <div className="cursor-pointer rounded-b-6">
    //                 <div className="font-primary rounded-b-6 text-sm leading-16 bg-thirdBlack text-white font-semibold py-12 pl-16">
    //                   Remove
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </ClickAwayListener>
    //       )}
    //     </Box>
    //     <Box className="flex flex-col ml-20">
    //       <div className="font-primary text-26 font-medium leading-30 text-black">
    //         John Smith
    //       </div>
    //       <div className="font-primary text-xs font-medium leading-14 text-gray">
    //         Main St. Farmington, CA 123
    //       </div>
    //     </Box>
    //   </Box>
    //   <Box
    //     sx={{
    //       background: "#E3E3E3",
    //       width: "2px",
    //       height: "146px",
    //       marginRight: "35px",
    //       marginLeft: "45px",
    //     }}
    //   ></Box>
    //   <Box className="flex">
    //     <Box>
    //       <Box className="flex items-center">
    //         <div className="font-normal text-sm leading-16 text-secondBlack">
    //           First Name:
    //         </div>
    //         <input
    //           className="w-245 py-9 ml-20 pl-13 border border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
    //           type="text"
    //           value="John"
    //         />
    //       </Box>
    //       <Box className="flex items-center mt-10">
    //         <div className="font-normal text-sm leading-16 text-secondBlack">
    //           Last Name:
    //         </div>
    //         <input
    //           className="w-245 py-9 ml-20 pl-13 border border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
    //           type="text"
    //           value="Smith"
    //         />
    //       </Box>
    //       <Box className="flex items-center mt-10">
    //         <div className="font-normal text-sm leading-16 text-secondBlack">
    //           Email:
    //         </div>
    //         <input
    //           className="w-245 py-9 ml-54 pl-13 border opacity-50 border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-fourthGray"
    //           type="text"
    //           value="johnsmith@yahoo.com"
    //         />
    //       </Box>
    //     </Box>
    //     <Box className="ml-25">
    //       <Box className="flex items-center">
    //         <div className="font-normal text-sm leading-16 text-secondBlack">
    //           Phone:
    //         </div>
    //         <input
    //           className="w-160 py-9 ml-80 pl-13 border border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
    //           type="text"
    //           value="+1 (324) 234-2342"
    //         />
    //       </Box>
    //       <Box className="flex items-center mt-10">
    //         <div className="font-normal text-sm leading-16 text-secondBlack">
    //           Graduation Year:
    //         </div>
    //         <input
    //           className="w-160 py-9 ml-20 pl-13 border border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
    //           type="text"
    //           value="1988"
    //         />
    //       </Box>
    //       <Box className="flex items-center mt-10">
    //         <div className="font-normal text-sm leading-16 text-secondBlack">
    //           Date of Birth:
    //         </div>
    //         <input
    //           className="w-160 py-9 ml-41 pl-13 border opacity-50 border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-fourthGray"
    //           type="text"
    //           value="08/03/1960"
    //         />
    //       </Box>
    //     </Box>
    //     <Box className="ml-90">
    //       <Box className="flex flex-col justify-center gap-10">
    //         <Box className="rounded-4 bg-darkGreen text-center py-2.5 min-w-152 align-center">
    //           <div className="font-primary text-white font-medium text-xs leading-19">
    //             Save Changes
    //           </div>
    //         </Box>
    //         <Box className="rounded-4 bg-thirdBlack text-center py-2.5 align-center min-w-152">
    //           <div className="font-primary text-white font-medium text-xs leading-19">
    //             Change Password
    //           </div>
    //         </Box>
    //         <Box className="rounded-4 bg-red text-center py-2.5 min-w-152 align-center">
    //           <div className="font-primary text-white font-medium text-xs leading-19">
    //             Leave Family
    //           </div>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
    <Box className="bg-secondWhite rounded-6 py-15 px-15">
      <Box className="flex items-center">
        <Box
          className={`w-86 h-86 rounded-full cursor-pointer relative border-2 ${
            openUploadMenu ? "border-orange" : "border-secondWhite"
          }`}
          onClick={() => setOpenUploadMenu(true)}
        >
          <img
            src={ProfilePicture}
            alt="ProfilePic"
            className="rounded-full w-full h-full"
          />
          <div
            className={`absolute bg-white bottom-1 right-1 w-26 h-26 rounded-full border ${
              openUploadMenu ? "border-orange" : "border-lightGray"
            } flex justify-center items-center leading-26`}
          >
            <CameraIcon
              className="w-16 h-16"
              fill={openUploadMenu ? "#F8991F" : "#a2a2a2"}
            />
          </div>
          {openUploadMenu && (
            <ClickAwayListener onClickAway={() => setOpenUploadMenu(false)}>
              <div className="absolute top-[114px] left-[-8px] w-122">
                <div className="w-122 bg-white shadow-6md rounded-6 tracking-normal">
                  <div className="rounded-t-6 cursor-pointer">
                    <div className="font-primary rounded-t-6 text-sm bg-orange leading-16 text-white font-semibold py-12 pl-16">
                      Upload New
                    </div>
                  </div>
                  <div className="cursor-pointer rounded-b-6">
                    <div className="font-primary rounded-b-6 text-sm leading-16 bg-thirdBlack text-white font-semibold py-12 pl-16">
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            </ClickAwayListener>
          )}
        </Box>
        <Box className="flex flex-col ml-20">
          <div className="font-primary text-26 font-medium leading-30 text-black">
            John Smith
          </div>
          <div className="font-primary text-xs font-medium leading-14 text-gray">
            Main St. Farmington, CA 123
          </div>
        </Box>
      </Box>
      <div className="grid grid-cols-2 gap-10 mt-27">
        <div>
          <Box className="flex  flex-col">
            <div className="font-normal text-sm leading-16 text-secondBlack">
              First Name:
            </div>
            <input
              className="border py-10 px-13 border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value="John"
            />
          </Box>
          <Box className="flex  flex-col mt-10">
            <div className="font-normal text-sm leading-16 text-secondBlack">
              Phone:
            </div>
            <input
              className="border py-10 px-13 border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value="+1 (324) 234-2342"
            />
          </Box>
        </div>
        <div>
          <Box className="flex  flex-col">
            <div className="font-normal text-sm leading-16 text-secondBlack">
              Last Name:
            </div>
            <input
              className=" border py-10 px-13 border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value="Smith"
            />
          </Box>
          <Box className="flex  flex-col mt-10">
            <div className="font-normal text-sm leading-16 text-secondBlack">
              Graduation Year:
            </div>
            <input
              className=" border py-10 px-13 border-thirdGray font-primary text-sm font-medium leading-16 rounded-4 bg-white"
              type="text"
              value="1988"
            />
          </Box>
        </div>
      </div>
      <div className="mt-23">
        <Box className="rounded-4 bg-thirdBlack text-center py-2.5 align-center w-144">
          <div className="font-primary text-white font-medium text-xs leading-19">
            Edit Details
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default ProfileCard;
