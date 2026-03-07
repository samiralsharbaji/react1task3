import img1 from "./assets/carouselitem01.jpg";
import img2 from "./assets/carouselitem04.jpg";
import img3 from "./assets/carouselitem05.jpg";

const Title = {
  color: "#ffffff",
  textAlign: "center",
  fontSize: "4rem",
  fontWeight: "600",
};
const subTitle = {
  fontSize: "1.5rem",
  color: "#a2a2a7",
  textAlign: "center",
  margin: "0px 300px",
};
const mainGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr",
  columnGap: "35px",
};
const img = {
  position:'relative',
  width: "500px",
  hieght: "400px",
  marginTop: "50px",
  display: "block",
  width: "100%",
  height: "auto",
};
const btnOverlay = {
   position: 'absolute',
       transform: 'translate(190%, -200%)',
       background:'#3ABAB4',
       padding:'20px',
       border:'none',  
       color: '#ffffff',
};
function Designs() {
  return (
    <div>
      <p style={Title}>From rough design files, to powerful products</p>
      <p style={subTitle}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
      </p>
      <div style={mainGrid}>
        <div>
          <img src={img1} alt="" style={img} />
          <button style={btnOverlay}>Learn More</button>
        </div>
        <div>
          <img src={img2} alt="" style={img} />
          <button style={btnOverlay}>Learn More</button>
        </div>
        <div>
          <img src={img3} alt="" style={img} />
          <button style={btnOverlay}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Designs;
