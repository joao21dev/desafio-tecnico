import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import useAuthStore from "@/stores/useAuthStore";

const RegisterForm = () => {
  const authStore = useAuthStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authStore.register(name, email, password);
    } catch (error: any) {
      setError(error.response.data.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister}>
      <TextField
        label="Seu nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Seu e-mail"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Senha"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <div style={{ color: "red", marginBottom: "16px" }}>{error}</div>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        style={{ backgroundColor: "#FB637E" }}
      >
        Registrar
      </Button>
    </form>
  );
};

export default RegisterForm;
