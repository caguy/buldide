import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const usePrivatePage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push(`/connexion?redirect=${router.pathname}`);
    }
  }, [session, loading]);
};

export default usePrivatePage;
