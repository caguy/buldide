import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input, Modal } from "@ui";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { updateUsername } from "@services";

const Onboarding = () => {
  const [session] = useSession();
  const router = useRouter();

  async function submitHandler(values, actions) {
    actions.setStatus({ error: false });

    const { data, error } = await updateUsername(
      session.user.email,
      values.username
    );

    if (error) {
      if (data.code === 409) {
        actions.setFieldError(
          "username",
          "Un autre membre a déjà choisi ce nom d'utilisateur."
        );
        return;
      }
      if (data.code === 422) {
        for (let field in data.details) {
          actions.setFieldError(field, data.details[field]);
        }
        return;
      }

      actions.setStatus({
        error: true,
        message:
          data.message ||
          "Une erreur technique est survenue. Réessayez ultérieurement.",
      });
      return;
    }

    actions.setStatus("SUBMITTED");
    router.reload();
  }

  return (
    <Modal>
      <h1 className="mt-1">Bienvenue sur Buldidé</h1>
      <p>
        Avant de démarrer, vous devez choisir un nom d'utilisateur. Il sera
        visible par les autres membres de Buldidé.
      </p>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={submitHandler}
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
              disabled={formik.isSubmitting || formik.status === "SUBMITTED"}
            />
            <div className="flex justify-between items-end mt-4">
              <div className="flex items-center">
                <button
                  type="submit"
                  disabled={
                    formik.isSubmitting || formik.status === "SUBMITTED"
                  }
                  className="_button-primary"
                >
                  Valider
                </button>
                {formik.isSubmitting && <div className="_spinner ml-4" />}
              </div>
              <a className="text-xs" href="/" onClick={() => signOut()}>
                Annuler
              </a>
            </div>
            <div aria-live="assertive">
              {formik.status?.error && (
                <div className="_alert-error mt-8">{formik.status.message}</div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default Onboarding;
