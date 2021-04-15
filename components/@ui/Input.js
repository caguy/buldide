import { useField } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="_field">
      <label htmlFor={props.id} className="_label">
        {label}
      </label>
      <input {...field} {...props} className="_input" />
      {meta.touched && meta.error ? (
        <div className="_field-error">{meta.error}</div>
      ) : null}
    </div>
  );
}
