import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LoginHeaderProps {
  type: "login" | "register";
}

const LoginHeader = ({ type }: LoginHeaderProps) => {
  return (
    <Box textAlign="center">
      <Image
        src="marca-lojistas.svg"
        width={408}
        height={26.37}
        alt="Caffeinne army lojistas"
      />
      {type === "login" ? (
        <>
          {" "}
          <Typography
            color="#271718"
            fontSize="18px"
            fontWeight="bold"
            margin="91px 0 10px 0"
          >
            Acesse com seu e-mail e senha abaixo{" "}
          </Typography>
          <Typography color="#271718" fontSize="12px" margin="0 0 41px 0">
            Não possui uma conta? {" "}
            <Link style={{ textDecoration: "underline" }} href="/register">
              Clique aqui
            </Link>{" "}
            para se cadastrar.{" "}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            color="#271718"
            fontSize="18px"
            fontWeight="bold"
            margin="91px 0 10px 0"
          >
            Crie uma conta abaixo
          </Typography>
          <Typography color="#271718" fontSize="12px" margin="0 0 41px 0">
            Já possui uma conta?{" "}
            <Link style={{ textDecoration: "underline" }} href="/login">
              Clique aqui
            </Link>{" "}
            para entrar.{" "}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default LoginHeader;
