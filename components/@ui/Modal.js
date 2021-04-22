import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  if (typeof document === "undefined") return <></>;

  return ReactDOM.createPortal(
    <>
      <div className="fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 z-50">
        <div className="absolute top-0 bottom-0 left-0 right-0 opacity-80 bg-black " />
        <div
          className="bg-white z-50 m-2 rounded-lg max-w-2xl overflow-hidden"
          style={{ maxHeight: "95vh" }}
        >
          <div className="p-8 overflow-y-auto" style={{ maxHeight: "95vh" }}>
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
