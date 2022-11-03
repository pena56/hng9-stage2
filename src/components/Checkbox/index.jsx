import "./style.css";

export default function Checkbox({ id, label }) {
  return (
    <div className="form_checkbox">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
    </div>
  );
}
