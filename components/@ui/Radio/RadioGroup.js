const RadioGroup = ({ name, label, children }) => {
  return (
    <>
      <div id={name} className="_label">
        {label}
      </div>
      <div role="group" aria-labelledby={name}>
        {children}
      </div>
    </>
  );
};

export default RadioGroup;
