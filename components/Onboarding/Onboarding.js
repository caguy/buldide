import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input, Modal } from "@ui";
import axios from "axios";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Onboarding = () => {
  const [session] = useSession();
  const router = useRouter();

  return (
    <Modal>
      <h1>Bienvenue sur Buldidé</h1>
      <p>
        Avant de démarrer, vous devez choisir un nom d'utilisateur. Ce nom sera
        visible par les autres membres de Buldidé.
      </p>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={async (values) => {
          await axios.post("/api/users", {
            email: session.user.email,
            username: values.username,
          });
          router.reload();
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(4, "4 caractères minimum")
            .max(30, "30 caractères maximum")
            .required("Veuillez choisir votre nom d'utilisateur"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <Input
              type="text"
              id="username"
              name="username"
              label="Votre nom d'utilisateur"
            />
            <div className="flex items-center mt-4">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="_button-primary"
              >
                Valider
              </button>
              {formik.isSubmitting && <div className="_spinner ml-4" />}
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default Onboarding;
