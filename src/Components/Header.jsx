import { Box, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePicture from "../Assets/Image/profile-picture.png";
import { ReactComponent as Menu } from "../Assets/Svg/menu.svg";
import { ReactComponent as Close } from "../Assets/Svg/close.svg";
import { ReactComponent as CameraIcon } from "../Assets/Svg/camera.svg";
import { ReactComponent as Menu1 } from "../Assets/Svg/menu-1.svg";
import { ReactComponent as Arrow } from "../Assets/Svg/arrow.svg";
import Logout from "../Assets/Image/logout.png";
import Profit from "../Assets/Image/profit.png";
import Team from "../Assets/Image/team.png";

import { ClickAwayListener } from "@mui/base";

const Header = () => {
  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(false);
  const [openUploadMenu, setOpenUploadMenu] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(false);
  return (
    <>
      <Drawer
        anchor="left"
        className="categoryMenu bg-thirdBlack"
        open={openCategoryDrawer}
        sx={{ width: "100%" }}
        variant="persistent"
        onClose={() => setOpenCategoryDrawer(false)}
      >
        <div className="bg-thirdBlack w-full h-full py-24 px-20">
          <div className="flex justify-between items-center">
            <div className="font-primary text-smd leading-24 text-white font-bold uppercase">
              logo
            </div>
            <div
              className="w-35 h-35 bg-fourthWhite p-10 rounded-4"
              onClick={() => setOpenCategoryDrawer(false)}
            >
              <Close width="14px" height="14px" fill="#818181" />
            </div>
          </div>
          <Box className="flex items-center mt-30">
            <Box
              className={`w-86 h-86 rounded-full cursor-pointer relative border-2 ${
                openUploadMenu ? "border-orange" : "border-thirdBlack"
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
                    <div className="w-122 rounded-6 tracking-normal">
                      <div className="rounded-t-6 cursor-pointer">
                        <div className="font-primary rounded-t-6 text-sm bg-orange leading-16 text-white font-semibold py-12 pl-16">
                          Upload New
                        </div>
                      </div>
                      <div className="cursor-pointer rounded-b-6">
                        <div className="font-primary rounded-b-6 text-sm leading-16 bg-secondBlack text-white font-semibold py-12 pl-16">
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                </ClickAwayListener>
              )}
            </Box>
            <Box className="flex flex-col ml-20">
              <div className="font-primary text-26 font-medium leading-30 text-white">
                John Smith
              </div>
              <div className="font-primary text-xs font-medium leading-14 text-white">
                Main St. Farmington, CA 123
              </div>
            </Box>
          </Box>
          <div className="mt-57">
            <div
              className="flex justify-between items-center"
              onClick={() => setOpenMenu1(!openMenu1)}
            >
              <div className="flex items-center">
                <Menu1
                  width="20px"
                  height="20px"
                  fill={openMenu1 ? "orange" : "white"}
                />
                <div
                  className={`font-primary ml-13 text-base leading-19 ${
                    openMenu1 ? "text-orange" : "text-white"
                  } font-bold uppercase`}
                >
                  Menu 1
                </div>
              </div>
              <Arrow
                style={{ transform: `${openMenu1 ? "rotate(180deg)" : ""}` }}
                fill="white"
              />
            </div>
            {openMenu1 && (
              <div className="mt-20 ml-20">
                <div className="font-primary ml-13 text-base leading-19 text-white font-base">
                  Sub Menu 1
                </div>
                <div className="font-primary mt-15 ml-13 text-base leading-19 text-white font-base">
                  Sub Menu 2
                </div>
                <div className="font-primary mt-15 ml-13 text-base leading-19 text-white font-base">
                  Sub Menu 3
                </div>
              </div>
            )}

            <div className="flex items-center relative mt-30">
              <img className="w-20 h-20" src={Profit} alt="Profit" />
              <div
                className={`font-primary ml-13 text-base leading-19 text-white font-base`}
              >
                Menu 2
              </div>
            </div>
            <div className="flex items-center relative mt-30">
              <img className="w-20 h-20" src={Team} alt="Profit" />
              <div
                className={`font-primary ml-13 text-base leading-19 text-white font-base`}
              >
                Menu 3
              </div>
            </div>
            <div className="flex items-center relative mt-30">
              <img className="w-20 h-20" src={Logout} alt="Profit" />
              <div
                className={`font-primary ml-13 text-base leading-19 text-white font-base`}
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      <Box className="bg-thirdBlack h-60 flex items-center slg:px-40 px-20">
        <Box className="slg:flex hidden items-center justify-between w-full">
          <Box className="flex items-center">
            <div className="font-secondary text-smd uppercase text-white leading-normal font-bold">
              logo
            </div>
            <div
              className="relative  text-white menuClass  hover:text-orange cursor-pointer"
              style={{ marginLeft: "218px" }}
            >
              <div className="font-primary text-sm leading-none font-normal">
                Menu 1
              </div>
              <div className="absolute top-0 w-164 subMenuClass">
                <div className="mt-30 w-164 bg-white shadow-6md rounded-6 tracking-normal">
                  <div className="rounded-t-6 cursor-pointer">
                    <div className="font-primary rounded-t-6 text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                      My Programs
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div className="font-primary text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                      New Programs
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div className="font-primary text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                      Program Invites
                    </div>
                  </div>
                  <div className="rounded-b-6 cursor-pointer">
                    <div className="font-primary rounded-b-6 text-sm leading-16 text-thirdBlack font-medium hover:font-semibold hover:bg-orange hover:text-white py-11 px-15">
                      Program Requests
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="font-primary text-sm text-white leading-none font-normal"
              style={{ marginLeft: "103px" }}
            >
              Menu 2
            </div>
            <div
              className="font-primary text-sm text-white leading-none font-normal"
              style={{ marginLeft: "112px" }}
            >
              Menu 3
            </div>
          </Box>
          <Box className="flex items-center">
            <NotificationsNoneIcon
              height="22px"
              width="18px"
              sx={{ color: "#FFFFFF", marginRight: "35.67px" }}
            />
            <img
              src={ProfilePicture}
              alt="Profile Picture"
              style={{ width: "37px", height: "37px" }}
            />
          </Box>
        </Box>
        <div className="slg:hidden flex items-center justify-between w-full">
          <div className="flex items-center">
            <Menu
              width="24px"
              height="24px"
              fill="orange"
              onClick={() => {
                setOpenCategoryDrawer(true);
                document.body.style.overflow = null;
              }}
            />
            <div className="font-secondary ml-15 text-smd uppercase text-white leading-normal font-bold">
              logo
            </div>
          </div>
          <div className="flex items-center">
            <NotificationsNoneIcon
              height="32px"
              width="32px"
              sx={{ color: "#FFFFFF" }}
            />
            <img
              src={ProfilePicture}
              className="ml-24"
              alt="Profile Picture"
              style={{ width: "37px", height: "37px" }}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Header;
