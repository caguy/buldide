import { useSession, signOut } from "next-auth/client";
import Link from "next/link";

export default function ConnexionButton() {
  const [session, loading] = useSession();

  if (session) {
    return (
      <button className="_button-primary" onClick={signOut}>
        Déconnexion
      </button>
    );
  } else {
    if (!loading && typeof window !== "undefined") {
      return (
        <Link href="/connexion">
          <button className="_button-primary ml-4">
            Connexion / inscription
          </button>
        </Link>
      );
    } else {
      return <></>;
    }
  }
}
