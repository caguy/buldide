import { LOGIN, LOGOUT } from "@context/actions";
import { useAppDispatch } from "@context/hooks";
import { fetchAPI } from "@context/thunks";
import { useState } from "react";
import { useRouter } from "next/router";

const useLogger = () => {
  const [message, setMessage] = useState(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const login = async (values) => {
    setMessage(null);
    const result = await dispatch(fetchAPI("post", "/token", { ...values }));

    if (result.success) {
      dispatch({ type: LOGIN, payload: result.data });
      router.push("/");
    } else {
      dispatch({ type: LOGOUT });
      setMessage(
        result.error.message || "Une erreur technique s'est produite."
      );
    }
  };

  return { login, message };
};

export default useLogger;
