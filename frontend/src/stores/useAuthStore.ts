import create from "zustand";
import axios from "axios";

interface AuthState {
  success: boolean;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set) => ({
  success: false,
  login: async (email, password) => {
    try {
      await axios.post("http://localhost:3000/authentication/log-in", {
        email,
        password,
      });
      // Redirect to home page
      window.location.href = "/home";
      // Set isLoggedIn to true
      sessionStorage.setItem("isLoggedIn", "true");
    } catch (error: any) {
      console.error(error);
    }
  },

  logout: async () => {
    await axios.post("http://localhost:3000/authentication/log-out");
    window.location.href = "/login";
    sessionStorage.clear();
  },
  register: async (name, email, password) => {
    try {
      await axios.post("http://localhost:3000/authentication/register", {
        name,
        email,
        password,
      });
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useAuthStore;
