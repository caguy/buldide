import { useState } from "react";
import { signIn } from "next-auth/client";

export default function useLogin() {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = async (values) => {
    setError(null);
    try {
      const { ok } = await signIn("email", {
        email: values.email,
        redirect: false,
        callbackUrl: "/",
      });
      if (!ok) throw new Error();
      setIsSent(true);
      setError(null);
    } catch (err) {
      setIsSent(false);
      setError(
        "Nous n'avons pas réussi à vous envoyer un email de connexion. Vérifiez votre connexion réseau, ou réessayez ultérieurement."
      );
    }
  };

  return { onLogin, isSent, error };
}
