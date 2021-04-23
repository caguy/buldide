import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "@ui";
import { useLogin } from "./hooks";

export default function Login({ redirect }) {
  const { onLogin, isSent, error } = useLogin(redirect);

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
        <Form noValidate>
          <>
            {!isSent && (
              <>
                <div className="text-sm">
                  <p>
                    La connexion à l'application se fait par le biais de votre
                    adresse email. Elle ne sert qu'à la connexion et ne sera pas
                    visible par les autres membres.
                  </p>
                  <p>
                    <strong>Aucun mot de passe à retenir !</strong> Un lien
                    sécurisé vous sera envoyé à l'adresse indiquée.
                  </p>
                </div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  label="Votre email"
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
              </>
            )}
            <div aria-live="assertive">
              <>
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
                {isSent && (
                  <>
                    <p>
                      <strong className="text-lg">
                        Consultez votre boîte aux lettres !
                      </strong>
                    </p>
                    <p className="text-sm">
                      Un email contenant le lien de connexion à votre compte
                      vous a été envoyé à l'adresse{" "}
                      <strong>{formik.values.email}</strong>
                    </p>
                  </>
                )}
              </>
            </div>
          </>
        </Form>
      )}
    </Formik>
  );
}
