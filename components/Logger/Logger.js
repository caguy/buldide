import Input from "@ui/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useLogger from "./hooks/useLogger";

const Logger = () => {
  const { login, message } = useLogger();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={login}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(
          "Veuillez saisir votre nom d'utilisateur"
        ),
        password: Yup.string().required("Veuillez saisir votre mot de passe"),
      })}
    >
      {(formik) => (
        <Form method="POST" action="/api/v1/token" className="max-w-lg">
          {message && (
            <div className="_alert_error" aria-live="assertive">
              {message}
            </div>
          )}
          <Input
            type="text"
            id="username"
            name="username"
            label="Nom d'utilisateur ou email"
          />
          <Input
            type="password"
            id="password"
            name="password"
            label="Mot de passe"
          />
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="_button-primary mt-4"
          >
            Se connecter
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Logger;
