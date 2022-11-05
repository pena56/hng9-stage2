import { useState } from "react";
import "./style.css";

export default function Checkbox({ id, label, setValue, isRequired }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setValue(!isChecked);
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="form_checkbox">
      <input
        type="checkbox"
        value={isChecked}
        onChange={handleChange}
        id={id}
        required={isRequired ? true : false}
      />
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
    </div>
  );
}
