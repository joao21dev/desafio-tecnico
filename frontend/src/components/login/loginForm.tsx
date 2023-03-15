import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import useAuthStore from "@/stores/useAuthStore";

const LoginForm = () => {
  const authStore = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authStore.login(email, password);
    } catch (error: any) {
      setError(error.response.data.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
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
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
