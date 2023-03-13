import LoginBackground from "@/components/login/loginBackground";
import LoginFooter from "@/components/login/loginFooter";
import LoginHeader from "@/components/login/loginHeader";
import RegisterForm from "@/components/register/registerForm";
import { Grid } from "@mui/material";
import React from "react";

const Register = () => {
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
        <LoginHeader type={'register'} />
        <RegisterForm />
        <LoginFooter />
      </Grid>
    </Grid>
  );
};

export default Register;
