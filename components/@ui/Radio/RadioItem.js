import { Field, useField } from "formik";
import styles from "./Radio.module.css";

const RadioItem = ({ name, value, children, ...props }) => {
  const [field] = useField({ name, value, ...props });

  let checked = field.value === value;

  return (
    <label className={styles.radioItem}>
      <Field
        type="radio"
        name={name}
        value={value}
        className="absolute w-0 h-0 opacity-0"
        {...props}
      />
      <span
        className={`${styles.radioCheck} ${checked ? styles.checked : ""}`}
      />
      {children}
    </label>
  );
};

export default RadioItem;
