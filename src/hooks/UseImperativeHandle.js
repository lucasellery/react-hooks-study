import { forwardRef, useRef, useImperativeHandle } from "react";

export default function UseImperativeHandle() {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
  }

  return (
    <div>
      <Form ref={formRef} />
      <button
        style={{
          border: "none",
          padding: "10px 20px",
          borderRadius: "16px",
          background: "#494368",
          color: "#ffffff",
          textAlign: "center",
          cursor: "pointer",
          marginLeft: "10px"
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        submit: handleSubmit
      };
    },
    []
  );

  return <input ref={inputRef} />;
});
