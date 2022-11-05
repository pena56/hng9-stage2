import zuri from "../../assets/zuri.svg";
import i4g from "../../assets/I4G.svg";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <hr color="#eaecf0" />
      <div>
        <div className="zuri_icon">
          <img src={zuri} alt="" />
          <div></div>
        </div>
        <p>HNG Intership 9 Frontend Task</p>
        <img src={i4g} alt="" className="i4g_icon" />
      </div>
    </footer>
  );
}
