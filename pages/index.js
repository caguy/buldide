import { useSession } from "next-auth/client";
import SEO from "@components/SEO";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "@ui";
import axios from "axios";

const HomePage = () => {
  const [session] = useSession();

  return (
    <>
      <SEO title="Accueil" />
      <h1>Bonjour{session?.user?.username && ` ${session.user.username}`}</h1>
      {!session && <p>Vous n'êtes pas connecté</p>}
      {session && <p>Connecté en tant que {session.user.email}</p>}
      {!session?.user?.username && (
        <Formik
          initialValues={{ username: "" }}
          onSubmit={(values) =>
            axios.post("/api/users", {
              email: session.user.email,
              username: values.username,
            })
          }
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .min(4, "4 caractères minimum")
              .required("Veuillez saisir votre nom d'utilisateur"),
          })}
        >
          {(formik) => (
            <Form noValidate>
              <Input
                type="text"
                id="username"
                name="username"
                label="Choisissez votre nom d'utilisateur"
              />
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="_button-primary"
                >
                  Connexion
                </button>
                {formik.isSubmitting && <div className="_spinner ml-4" />}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default HomePage;
