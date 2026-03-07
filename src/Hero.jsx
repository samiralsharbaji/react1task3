import hero from "./assets/hero.jpg";
import mobile from './assets/iPhoneMockup.png';

const mainContainer={
    margin: "0px 135px",

}
const mainGrid = {
  display: "grid",
  gridTemplateColumns: "700px 500px",
  gridTemplateRows: "1fr",
  columnGap: '200px', 
};
const megaTitle = {
  fontSize: '6rem',
  color: '#ffffff',
  letterSpacing:'1px',
};
const subMegaTitle = {
  color: '#a2a2a7',
  fontSize: '1.5rem',
  letterSpacing:'1px',
};
const inputCode = {
  background: "#2E2E33",
  margin: "0px 8px 0px 0px",
  padding: "12px 16px",
  width:'250px',
  letterSpacing:'1px',
};
const btnCode = {
  color: "#ffffff",
  font: "1rem inter,sans-serif",
  background: "#3ABAB4",
  padding: "12px 32px",
  textDecoration: 'none',
  letterSpacing:'1px',
};
const heroIMG = {
  width:'290px',
  height:'524px',
}
const points={
  color:'#a2a2a7',
  fontSize:'1.5em',
}
const daysStyle = {
  textAlign:'center',
  background:'#a2a2a734',
  margin:'25px',
  width:'500px',
  height:'177px',
}

const graycardTitle = {
  color: "#ffffff",
  fontSize: "2rem",
  fontWeight:'bolder',
};
const grayCardSubTitle = {
  fontSize: "1.5rem",
  color: "#a2a2a7",
};
const cards = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
function Hero() {
  return (
    <div style={mainContainer}>
    <div style={mainGrid}>
      <div>
        <h1 style={megaTitle}>Your website, reimagined</h1>
        <p style={subMegaTitle}>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div>
          <input type="text" placeholder="Phone number" style={inputCode} />
          <a href="#" style={btnCode}>Request Code</a>
        </div>
      </div>
      <img src={hero} alt="" style={heroIMG}/>
      
      <div>
        <p style={points}>✅ Lorem ipsum is placeholder text commonly.</p>
        <p style={points}>✅ Excepteur sint occaecat cupidatat.</p>
        <p style={points}>✅ Lorem ipsum is placeholder text commonly.</p>
      </div>
      </div>
      <br />
      <div style={cards}>
        <div style={daysStyle}>
          <p style={graycardTitle}>2.4M</p>
          <p style={grayCardSubTitle}>Days turn around</p>
        </div>

        <div style={daysStyle}>
          <p style={graycardTitle}>2.4M</p>
          <p style={grayCardSubTitle}>Days turn around</p>
        </div>
        <div style={daysStyle}>
          <p style={graycardTitle}>2.4M</p>
          <p style={grayCardSubTitle}>Days turn around</p>
        </div>
        <div style={daysStyle}>
          <p style={graycardTitle}>2.4M</p>
          <p style={grayCardSubTitle}>Days turn around</p>
        </div>
      </div>
      <br />
      <hr />
    
    </div>
  );
}

export default Hero;
