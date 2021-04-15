import Input from "@ui/Input";
import { Formik, Form } from "formik";

const Logger = () => {
  const submitHandler = async (values) => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
    alert(JSON.stringify(values));
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={submitHandler}
    >
      {(formik) => (
        <Form method="POST" action="/api/v1/token" className="max-w-lg">
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
