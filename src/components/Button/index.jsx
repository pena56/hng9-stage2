import { Link } from "react-router-dom";
import "./style.css";

export default function Button({ label, id, url, subtext, useRouter }) {
  if (useRouter) {
    return (
      <Link id={id} to={url} className="button" title={subtext}>
        {label}
        <div className="btn_share-icon"></div>
      </Link>
    );
  }

  return (
    <a href={url} id={id} className="button" title={subtext}>
      {label}
      <div className="btn_share-icon"></div>
    </a>
  );
}
