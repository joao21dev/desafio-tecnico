import { useStore } from "@/stores/useStore";
import { Box, Typography } from "@mui/material";
import React from "react";

const StoreDataAccordionDetails = () => {
const { store } = useStore();
  
  return (
    <React.Fragment>
      <Box mr={16}>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            CNPJ: {store?.cnpj}
          </Typography>
          <Typography variant="subtitle1">Exemplo de nome</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Nome Fantasia:
          </Typography>
          <Typography variant="subtitle1">{store?.fantasyName}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Razaão Social:
          </Typography>
          <Typography variant="subtitle1">{store?.socialName}</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            E-mail:
          </Typography>
          <Typography variant="subtitle1">{store?.storeEmail}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Telefone:
          </Typography>
          <Typography variant="subtitle1">{store?.storePhone}</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default StoreDataAccordionDetails;
