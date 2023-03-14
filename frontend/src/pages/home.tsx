import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Header from "@/components/header/header";
import HomeSearchInput from "@/components/home/homeSearchInput";
import Image from "next/image";
import HomeHeader from "@/components/home/homeHeader";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
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
                mt="82px"
                sx={{ fontWeight: "bold", fontSize: "24px", color: "#271718" }}
              >
                INFORMAÇÕES ADICIONAIS
              </Typography>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  height: "184px",
                  border: "1px solid #E2E2E2",
                  borderRadius: "16px",
                  padding: "40px",
                  boxSizing: "border-box",
                  mt: "40px",
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
                mt="78px"
                sx={{ fontWeight: "bold", fontSize: "24px", color: "#271718" }}
              >
                DADOS CADASTRAIS
              </Typography>

              <HomeAccordion
                label="LOJISTAS"
                data={<LojistasAccordionDetails />}
              />
              <HomeAccordion
                label="DADOS DA LOJA"
                data={<StoreDataAccordionDetails />}
              />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
