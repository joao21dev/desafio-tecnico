import React from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HomeSearchInput = () => {
  return (
    <Box display="flex">
      <TextField
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: 576,
          borderRadius: 4,
          backgroundColor: "#fff",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#FB637E", ml: 1 }} />
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FB637E",
          color: "#fff",
          fontSize: 14,
          fontWeight: "bold",
          marginLeft: 2,
          width: "calc(100% - 576px)",
          textTransform: "none",
        }}
      >
        Buscar Loja
      </Button>
    </Box>
  );
};

export default HomeSearchInput;
