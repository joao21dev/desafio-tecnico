import React from "react";
import { Box, Typography, Button, Icon, Grid } from "@mui/material";
import Image from "next/image";
import useAuthStore from "@/stores/useAuthStore";
import { ExitToApp, Storefront } from "@mui/icons-material";

const Header = () => {
  const authStore = useAuthStore();

  const handleLogout = () => {
    authStore.logout();
  };

  return (
    <Box bgcolor="#fff" py={2}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        flexWrap="nowrap"
        px={2}
      >
        <Grid item ml={{ md: "10%" }}>
          <Image
            src="marca-lojistas.svg"
            alt="Caffeinne army lojistas"
            width={247}
            height={15.62}
          />
        </Grid>
        <Grid mr={{ md: "10%" }} item>
          <Box display="flex" alignItems="flex-end">
            <Box
              sx={{
                cursor: "pointer",
                height: 64,
                minWidth: { xs: 60, md: 112 },
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Storefront sx={{ fontSize: 24, color: "#FB637E" }} />
                <Typography mt={1} fontSize={16} color="#FB637E">
                  LOJAS
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                height: 64,
                minWidth: { xs: 60, md: 112 },
              }}
              onClick={handleLogout}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Icon>
                  <ExitToApp sx={{ fontSize: 24, color: "#271718" }} />
                </Icon>
                <Typography mt={1} fontSize={16} color="#271718">
                  SAIR
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
