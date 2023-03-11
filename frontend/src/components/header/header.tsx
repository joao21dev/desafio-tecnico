import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <Box
      bgcolor="#fff"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height={72}
      padding="0 120px"
    >
      <Image
        src="marca-lojistas.svg"
        alt="Caffeinne army lojistas"
        width={247}
        height={15.62}
        style={{ marginLeft: 120 }}
      />
      <Box display="flex" alignItems="flex-end" mb="-8px">
        {" "}
        <Button
          sx={{
            borderRadius: "8px 8px 0px 0px",
            height: 64,
            minWidth: 112,
            marginRight: 8,
            backgroundColor: "#F8F8F8",
            "&:hover": {
              backgroundColor: "#F8F8F8",
            },
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              width={24}
              height={24}
              src="icone-lojas.svg"
              alt="icone lojas"
            />
            <Typography mt={1} fontSize={16} color="#FB637E">
              LOJAS
            </Typography>
          </Box>
        </Button>
        <Button
          sx={{
            height: 64,
            minWidth: 112,
            backgroundColor: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#F8F8F8",
            },
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              width={24}
              height={24}
              src="icone-sair.svg"
              alt="icone sair"
            />{" "}
            <Typography mt={1} fontSize={16} color="#271718">
              SAIR
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
