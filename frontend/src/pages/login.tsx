import React from "react";
import { Grid } from "@mui/material";
import LoginBackground from "@/components/login/loginBackground";
import LoginHeader from "@/components/login/loginHeader";
import LoginForm from "@/components/login/loginForm";
import LoginFooter from "@/components/login/loginFooter";

const login = () => {
  return (
    <Grid container>
      <Grid item xs={23} md={6}>
        <LoginBackground />
      </Grid>
      <Grid
        item
        xs={23}
        md={6}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </Grid>
    </Grid>
  );
};

export default login;
