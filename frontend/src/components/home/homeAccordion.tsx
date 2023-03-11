import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import React from "react";

export interface IHomeAccordionProps {
  label: string;
  data: React.ReactNode;
}

const HomeAccordion = ({ label, data }: IHomeAccordionProps) => {
  return (
    <Accordion
      sx={{
        boxShadow: "0px 8px 16px -8px rgba(0, 0, 0, 0.08)",
        marginBottom: "16px",
      }}
    >
      <AccordionSummary
        expandIcon={<GridExpandMoreIcon sx={{ color: "#FB637E" }} />}
        aria-controls="lojistas-content"
        id="lojistas-header"
        sx={{
          bgcolor: "#FFFFFF",
          height: "70px",
          display: "flex",
          alignItems: "center",
          px: "40px",
          marginTop: "40px",
          typography: {
            fontWeight: "bold",
            fontSize: "20px",
            color: "#271718",
            fontFamily: "Arial, sans-serif",
          },
        }}
      >
        {label}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex",
          px: "40px",
        }}
      >
        {data}
      </AccordionDetails>
    </Accordion>
  );
};

export default HomeAccordion;
