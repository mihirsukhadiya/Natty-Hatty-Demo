import { Box } from "@mui/material";
import React from "react";

const MenuSelect = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <Box className="mt-25 lg:px-40 px-20">
      <div className="border-b-2 border-secondWhite pb-11 flex w-full justify-between">
        <div
          className={`font-primary text-base ${
            selectedMenu == "profile" ? "text-orange" : "text-thirdWhite"
          } leading-19 ${
            selectedMenu == "profile" && "font-semibold"
          } relative`}
          onClick={() => setSelectedMenu("profile")}
        >
          Profile
          {selectedMenu == "profile" && (
            <span className="absolute bottom-[-14px] rounded-full left-[-10px] w-70 h-5 bg-orange"></span>
          )}
        </div>
        <div
          className={`font-primary text-base ${
            selectedMenu == "wallet" ? "text-orange" : "text-thirdWhite"
          } leading-19 ${selectedMenu == "wallet" && "font-semibold"} relative`}
          onClick={() => setSelectedMenu("wallet")}
        >
          Wallet
          {selectedMenu == "wallet" && (
            <span className="absolute bottom-[-14px] rounded-full left-[-10px] w-70 h-5 bg-orange"></span>
          )}
        </div>
        <div
          className={`font-primary text-base ${
            selectedMenu == "activities" ? "text-orange" : "text-thirdWhite"
          } leading-19 ${
            selectedMenu == "activities" && "font-semibold"
          } relative`}
          onClick={() => setSelectedMenu("activities")}
        >
          Activities{" "}
          {selectedMenu == "activities" && (
            <span className="absolute bottom-[-14px] rounded-full left-[-10px] w-90 h-5 bg-orange"></span>
          )}
        </div>
        <div
          className={`font-primary text-base ${
            selectedMenu == "invitation" ? "text-orange" : "text-thirdWhite"
          } leading-19 ${
            selectedMenu == "invitation" && "font-semibold"
          } relative`}
          onClick={() => setSelectedMenu("invitation")}
        >
          Invitations{" "}
          {selectedMenu == "invitation" && (
            <span className="absolute bottom-[-14px] rounded-full left-[-10px] w-100 h-5 bg-orange"></span>
          )}
        </div>
      </div>
    </Box>
  );
};

export default MenuSelect;
