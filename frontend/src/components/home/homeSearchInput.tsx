import React, { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStore } from "@/stores/useStore";

const HomeSearchInput = () => {
  const { cnpjValue, setCnpjValue, getStoreByCnpj, errorMessage } = useStore();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnpjValue(event.target.value);
  };

  const handleSearchStore = async () => {
      await getStoreByCnpj(cnpjValue);
  };

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
        value={cnpjValue}
        onChange={handleSearch}
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
        onClick={handleSearchStore}
      >
        Buscar Loja
      </Button>
    </Box>
  );
};

export default HomeSearchInput;
