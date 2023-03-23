import { Box } from "@mui/material";
import React from "react";

const ToastMessage = () => {
  return (
    <Box className="rounded-sm bg-lightGreen text-center py-8 min-w-374">
      <div className="font-primary text-darkGreen font-medium text-smd leading-21">
        Success Message Here
      </div>
    </Box>
  );
};

export default ToastMessage;
