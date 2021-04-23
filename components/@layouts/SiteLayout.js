import Header from "@components/Header";
import Onboarding from "@components/Onboarding";
import Menu from "@components/Menu";
import SEO from "@components/SEO";
import { useSession } from "next-auth/client";

const SiteLayout = ({ children }) => {
  const [session, loading] = useSession();

  return (
    <>
      <SEO />
      <Header />
      <div className="lg:flex min-h-screen">
        <Menu />
        <main className="_container-none lg:_container px-8 _panel-content pt-16 relative z-0">
          {children}
        </main>
      </div>

      {session && !loading && !session.user.username && <Onboarding />}
    </>
  );
};

export default SiteLayout;
