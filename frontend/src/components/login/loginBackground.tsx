import { Box } from "@mui/material";
import React from "react";

const LoginBackground = () => {
  return (
    <Box
      mb={{ xs: 40, md: 0 }}
      height={{ xs: 192, md: "100vh" }}
      sx={{
        backgroundImage: {
          xs: "url('./login-background-mob.png')",
          md: "url('./login-background.png')",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

export default LoginBackground;
