import "./style.css";

export default function TextInput({ id, label, placeholder, type }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type ? type : "text"} placeholder={placeholder} />
    </div>
  );
}
