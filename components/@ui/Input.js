import { useField } from "formik";

const InputElt = (props) => {
  switch (props.type) {
    case "textarea":
      return <textarea rows="5" {...props} />;
    default:
      return <input {...props} />;
  }
};

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="_field">
      <label htmlFor={props.id} className="_label">
        {label}
      </label>
      <InputElt
        {...field}
        {...props}
        className={`_input ${
          meta.error && meta.touched
            ? "bg-error-light border-2 border-error hover:border-error focus:border-error"
            : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-error text-sm mt-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
