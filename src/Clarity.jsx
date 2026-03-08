import musicImg from "./assets/music.svg";
import wifiImg from "./assets/wifi.svg";
import flikImg from "./assets/flik.svg";
import sharingImg from "./assets/sharing.svg";
import OKimg from "./assets/okRihght.svg";

const Title = {
  color: "#ffffff",
  textAlign: "center",
  fontSize: "4rem",
  fontWeight: "600",
};
const Headers = {
  color: "#ffffff",
  fontSize: "1.5rem",
};
const img = {
  width: "75px",
  hight: "75px",
};
const OKimgStyle = {
  position: "relative",
  width: "35px",
  hight: "35px",
  left: "250px",
};
const dflexStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "10px 70px",
};
const card1 = {
  margin: "15px 15px",
  background: "#71C9C1",
  padding: "15px",
};

const card2 = {
  margin: "15px 15px",
  background: "#AE91EC",
  padding: "15px",
};

const card3 = {
  margin: "15px 15px",
  background: "#7F94EB",
  padding: "15px",
};

const card4 = {
  margin: "15px 15px",
  background: "#E482AD",
  padding: "15px",
};

const mainGrid = {
  display: "grid",
  gridTemplateColumns: "600px 600px",
  gridTemplateRows: "200px",
  background: "#33393E",
  margin: "0px 80px",
  justifyContent:'center',
  alignItems:'center',
};
const megaTitle = {
  fontSize: "4rem",
  fontWeight: "600",
  color: "#ffffff",
  letterSpacing: "1px",
};
const inputCode = {
  background: "#2E2E33",
  padding: "12px 16px",
  width: "250px",
  letterSpacing: "1px",
};
const btnCode = {
  color: "#ffffff",
  font: "1rem inter,sans-serif",
  background: "#3ABAB4",
  padding: "12px 32px",
  textDecoration: "none",
  letterSpacing: "1px",
};


function Clarity() {
  return (
    <div>
      <p style={Title}>Put clarity at the center of your website</p>
      <div style={dflexStyle}>
        <div style={card1}>
          <div>
            <img style={img} src={musicImg} alt="" />
            <p style={Headers}>Simple Sharing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <img style={OKimgStyle} src={OKimg} alt="" />
          </div>
        </div>
        <div style={card2}>
          <div>
            <img style={img} src={wifiImg} alt="" />
            <p style={Headers}>Simple Sharing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <img style={OKimgStyle} src={OKimg} alt="" />
          </div>
        </div>
        <div style={card3}>
          <div>
            <img style={img} src={sharingImg} alt="" />
            <p style={Headers}>Simple Sharing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <img style={OKimgStyle} src={OKimg} alt="" />
          </div>
        </div>
        <div style={card4}>
          <div>
            <img style={img} src={flikImg} alt="" />
            <p style={Headers}>Simple Sharing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <img style={OKimgStyle} src={OKimg} alt="" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <div style={mainGrid}>
        <div>
          <p style={megaTitle}>Free until you're ready to launch</p>
        </div>
        <div>
          <input type="text" placeholder="Phone number" style={inputCode} />
          <a href="#" style={btnCode}>
            Request Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Clarity;
