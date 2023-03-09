import { Button, TextField } from "@mui/material";
import React from "react";

const LoginForm = () => {
  return (
    <React.Fragment>
      <TextField
        label="Seu e-mail"
        variant="outlined"
        sx={{
          width: "408px",
          height: "48px",
          marginBottom: "40px",
        }}
      />
      <TextField
        label="Senha"
        variant="outlined"
        type="password"
        sx={{
          width: "408px",
          height: "48px",
          marginBottom: "40px",
        }}
      />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FB637E",
          width: "408px",
          height: "48px",
        }}
      >
        Entrar
      </Button>
    </React.Fragment>
  );
};

export default LoginForm;
