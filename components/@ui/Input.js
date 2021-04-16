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
          meta.error && meta.touched ? "border-error border-2" : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-error text-sm mt-2">{meta.error}</div>
      ) : null}
    </div>
  );
}
