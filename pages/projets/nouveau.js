import Link from "next/link";
import { Formik, Form } from "formik";
import SEO from "@components/SEO";
import { usePrivatePage } from "@helpers";
import { Input, RadioGroup, RadioItem } from "@ui";

const ProjetPage = () => {
  usePrivatePage();

  return (
    <>
      <SEO title="Nouveau projet" />

      <div className="mt-6">
        <Link href="/projets">
          <a className="inline-block mb-2 text-sm">{"← Mes projets"}</a>
        </Link>
        <h1 className="mt-0">Nouveau projet</h1>
      </div>
      <div className="max-w-lg">
        <Formik
          initialValues={{ name: "", visibility: "public", description: "" }}
        >
          {(formik) => (
            <Form>
              <Input
                type="text"
                id="name"
                name="name"
                label="Nom du projet"
                disabled={formik.isSubmitting}
              />
              <RadioGroup id="visibility" label="Visibilité">
                <RadioItem
                  name="visibility"
                  value="public"
                  disabled={formik.isSubmitting}
                >
                  Public
                </RadioItem>
                <RadioItem
                  name="visibility"
                  value="private"
                  disabled={formik.isSubmitting}
                >
                  Privé
                </RadioItem>
              </RadioGroup>
              <Input
                type="textarea"
                id="description"
                name="description"
                label="Description"
                disabled={formik.isSubmitting}
              />
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="_button-primary"
                >
                  Créer le projet
                </button>
                {formik.isSubmitting && <div className="_spinner ml-4" />}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ProjetPage;
