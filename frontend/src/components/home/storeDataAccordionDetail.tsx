import { Box, Typography } from "@mui/material";
import React from "react";

const StoreDataAccordionDetails = () => {
  return (
    <React.Fragment>
      <Box mr={16}>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Nome:
          </Typography>
          <Typography variant="subtitle1">Exemplo de nome</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Email:
          </Typography>
          <Typography variant="subtitle1">exemplo@email.com</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Telefone:
          </Typography>
          <Typography variant="subtitle1">(00) 0000-0000</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Telefone 2:
          </Typography>
          <Typography variant="subtitle1">(00) 0000-0000</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default StoreDataAccordionDetails;
