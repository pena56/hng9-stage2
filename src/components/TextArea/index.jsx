import { useState } from "react";
import "./style.css";

export default function TextArea({
  id,
  label,
  placeholder,
  setValue,
  errorMessage,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div
      className={`form_textarea ${errorMessage ? "form_textarea-error" : ""}`}
    >
      <label htmlFor={id}>{label}</label>
      <textarea
        value={inputValue}
        onChange={handleChange}
        id={id}
        rows="5"
        placeholder={placeholder}
      ></textarea>
      {errorMessage && <small>{errorMessage}</small>}
    </div>
  );
}
