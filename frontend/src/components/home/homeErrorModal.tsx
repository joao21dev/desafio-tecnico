import { Modal, Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const StoreNotFoundErrorModal: React.FC<Props> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          p: "16px",
        }}
      >
        <Typography variant="h6" color="error" align="center">
          Loja não encontrada
        </Typography>
        <Typography variant="body1" align="center">
          Desculpe, a loja que você procura não foi encontrada. Verifique se o
          CNPJ da loja está correto e tente novamente.
        </Typography>
      </Box>
    </Modal>
  );
};

export default StoreNotFoundErrorModal;
