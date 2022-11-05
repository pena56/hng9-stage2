import { useState } from "react";
import "./style.css";

export default function TextInput({
  id,
  label,
  placeholder,
  type,
  setValue,
  isRequired,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="form_input">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={handleChange}
        value={inputValue}
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder}
        required={isRequired ? true : false}
      />
    </div>
  );
}
