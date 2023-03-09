import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Image
        src="marca-lojistas.svg"
        width={408}
        height={26.37}
        alt="Caffeinne army lojistas"
      />
      <Typography
        color="#271718"
        fontSize="18px"
        fontWeight="bold"
        margin="91px 0 41px 0"
      >
        Acesse com seu e-mail e senha abaixo
      </Typography>
    </Box>
  );
};

export default LoginHeader;
