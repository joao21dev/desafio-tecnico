import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "@/components/header/header";
import HomeSearchInput from "@/components/home/homeSearchInput";
import Image from "next/image";
import HomeHeader from "@/components/home/homeHeader";
import HomeAccordion from "@/components/home/homeAccordion";
import LojistasAccordionDetails from "@/components/home/lojistasAccordionDetails";
import StoreDataAccordionDetails from "@/components/home/storeDataAccordionDetail";
import withAuth from "@/hoc/withAuth";
import { useStore } from "@/stores/useStore";

const Home = () => {
  const { store } = useStore();

  console.log(store);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#F8F8F8"
      >
        <Box
          sx={{
            width: "844px",
            height: "100%",
            marginTop: "64px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HomeSearchInput />
          <Box
            maxWidth={{ xs: "100%", sm: "auto" }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "24px",
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="/nova-loja"
              sx={{
                backgroundColor: "#FB637E",
                width: { xs: "100%", sm: "auto" },
                mb: { xs: "16px", sm: "0" },
                mx: { xs: "16px", sm: "0" },
                "&:hover": {
                  backgroundColor: "#FB637E",
                },
              }}
            >
              Adicionar Nova Loja
            </Button>
          </Box>
          <Box
            sx={{
              borderBottom: "2px solid #E2E2E2",
              height: "40px",
            }}
          />
          {store && (
            <>
              <HomeHeader />

              <Typography
                textAlign="center"
                mt={{ xs: "48px", md: "82px" }}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#271718",
                }}
              >
                INFORMAÇÕES ADICIONAIS
              </Typography>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  minHeight: "184px",
                  padding: "40px",
                  mt: { xs: "24px", md: "40px" },
                  mx: "auto",
                  maxWidth: { xs: "100%", md: "720px" },
                }}
              >
                <Typography
                  textAlign="left"
                  lineHeight={2}
                  sx={{ fontSize: "14px", color: "#271718" }}
                >
                  {store?.description}
                </Typography>
              </Box>

              <Typography
                textAlign="center"
                mt={{ xs: "48px", md: "78px" }}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#271718",
                }}
              >
                DADOS CADASTRAIS
              </Typography>

              <Box
                sx={{
                  mt: { xs: "24px", md: "40px" },
                  mx: { xs: "16px", md: "0" },
                  maxWidth: { xs: "100%", md: "720px" },
                  marginLeft: { md: "auto" },
                  marginRight: { md: "auto" },
                }}
              >
                <HomeAccordion
                  label="LOJISTAS"
                  data={<LojistasAccordionDetails />}
                />
                <HomeAccordion
                  label="DADOS DA LOJA"
                  data={<StoreDataAccordionDetails />}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default withAuth(Home);
