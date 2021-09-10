import "./Input.scss";

function Input({ onChange, disabled, placeholder, type, value }) {
  return (
    <input
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      value={value ? value : ""}
    ></input>
  );
}

export default Input;
