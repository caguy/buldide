import useComponent from "./useComponent";
import styles from "./Component.module.css";

const Component = (props) => {
  const { state } = useComponent();

  /* ... */

  return <div className={styles.myClass}>{/* ... */}</div>;
};

export default Component;
