import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuthStore from "@/stores/useAuthStore";

const withAuth = (WrappedComponent: React.FC) => {
  const Wrapper: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isLoggedIn = sessionStorage.getItem("isLoggedIn");
      console.log("user", isLoggedIn)

      if (!isLoggedIn) {
        router.replace("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
