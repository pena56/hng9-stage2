import "./style.css";

export default function Button({ label, id, url, subtext }) {
  return (
    <a href={url} id={id} className="button" title={subtext}>
      {label}
      <div className="btn_share-icon"></div>
    </a>
  );
}
