import "./style.css";

export default function TextArea({ id, label, placeholder }) {
  return (
    <div className="form_textarea">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} rows="5" placeholder={placeholder}></textarea>
    </div>
  );
}
