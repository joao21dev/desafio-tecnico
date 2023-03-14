import { useStore } from "@/stores/useStore";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HomeHeader = () => {
  const { store } = useStore();
  return (
    <Box
      mt="32px"
      sx={{
        height: "80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#E2E2E2",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/icone_loja_roxo.svg"
          alt="Ícone da loja"
          width="46"
          height="46"
        />
      </Box>
      <Box
        sx={{
          pl: "33px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          mr={1}
          sx={{ fontWeight: "bold", fontSize: "24px", color: "#271718" }}
        >
          {store?.fantasyName}
        </Typography>
        <Typography
          fontWeight="bold"
          sx={{ fontSize: "24px", color: "#BFBFBF" }}
        >
          {" "}
          - {store?.socialName}
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeHeader;
