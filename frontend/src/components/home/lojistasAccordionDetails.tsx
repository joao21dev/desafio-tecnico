import { useStore } from "@/stores/useStore";
import { Box, Typography } from "@mui/material";
import React from "react";

const LojistasAccordionDetails = () => {
  const { store } = useStore();

  return (
    <React.Fragment>
      <Box mr={16}>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Nome:
          </Typography>
          <Typography variant="subtitle1">{store?.ownerName}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Email:
          </Typography>
          <Typography variant="subtitle1">{store?.ownerEmail}</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Telefone:
          </Typography>
          <Typography variant="subtitle1">{store?.ownerPhone}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Telefone 2:
          </Typography>
          <Typography variant="subtitle1">
            {store?.ownerSecondaryPhone}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default LojistasAccordionDetails;
