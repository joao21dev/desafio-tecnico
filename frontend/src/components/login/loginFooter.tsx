import { Typography } from "@mui/material";
import React from "react";

const LoginFooter = () => {
  return (
    <React.Fragment>
      {" "}
      <Typography
        color="#BFBFBF"
        fontSize="10px"
        marginTop="150px"
        width={308}
        textAlign="center"
        lineHeight="2"
      >
        © 2021 Caffeine Army. CNPJ: 27.403.527/0001-13 Endereço: Rua Rubens
        Guelli, 68, Itaigara, Salvador - BA, 41815-135 E-mail:
        <u>contato@caffeinearmy.com.br</u> | Telefone:
        <u>+55 11 91106-4910</u>
      </Typography>
    </React.Fragment>
  );
};

export default LoginFooter;
