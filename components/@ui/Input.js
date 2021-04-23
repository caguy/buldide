import { useField } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="_field">
      <label htmlFor={props.id} className="_label">
        {label}
      </label>
      <input
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
}
