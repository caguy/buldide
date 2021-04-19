import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "@ui";
import { useLogin } from "./hooks";

export default function Login() {
  const { onLogin, isSent, error } = useLogin();

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={onLogin}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Veuillez saisir une adresse email valide")
          .required("Veuillez saisir votre adresse email"),
      })}
    >
      {(formik) => (
        <Form className="max-w-lg" noValidate>
          {isSent ? (
            <>
              <p>
                <strong className="text-lg">
                  Consultez votre boîte aux lettres !
                </strong>
              </p>
              <p className="text-sm">
                Un email contenant le lien de connexion à votre compte vous a
                été envoyé à l'adresse <strong>{formik.values.email}</strong>
              </p>
            </>
          ) : (
            <>
              <div className="text-sm">
                <p>
                  La connexion à l'application se fait par le biais de votre
                  adresse email.
                </p>
                <p>
                  <strong>Aucun mot de passe à retenir !</strong> Un lien
                  sécurisé vous sera envoyé à l'adresse indiquée.
                </p>
              </div>
              <Input type="email" id="email" name="email" label="Votre email" />
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="_button-primary mt-4"
              >
                Connexion
              </button>
              {error && (
                <div className="_alert-error mt-8">
                  <p>
                    <strong>L'envoi de l'email de connexion a échoué.</strong>
                  </p>
                  <p>
                    Vérifiez votre connexion réseau, ou réessayez
                    ultérieurement.
                  </p>
                </div>
              )}
            </>
          )}
        </Form>
      )}
    </Formik>
  );
}
