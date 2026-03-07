import imgThumb from "./assets/videoThumb.jpg";

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
  margin: "50px 300px",
};
const mainGrid = {
  display: "grid",
  gridTemplateColumns: "400px 800px",
  gridTemplateRows: "1fr",
  columnGap: "35px",
};
const subGrid = {
  display: "grid",
  gridTemplateColumns: "400px 400px",
  gridTemplateRows: "300px 300px",
  columnGap: "35px",
};
const desc = {
  fontSize: "1rem",
  color: "#a2a2a7",
};
const vList = {
  background: "#36383831",
  padding: "10px 50px",
  color: "#d4d4d8",
  margin: "10px 5px 0px 30px",
  fontSize: "1.5rem",
};
const imgTh ={
    width:'350px',
    height:'200px',
}

function Ideas() {
  return (
    <div>
      <p style={Title}>Turn your ideas into reality in seconds</p>
      <p style={subTitle}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
      </p>
      <div style={mainGrid}>
        
          <div>
            <p style={vList}>🔘 Getting STarted</p>
            <p style={vList}>📃 Collection list</p>
            <p style={vList}>💼 Element Hierarchy</p>
            <p style={vList}>⚙️ styling Basics</p>
            <p style={vList}>⏹️ Image Field</p>
          </div>
        <div style={subGrid}>
          <div>
            <img src={imgThumb} alt="" style={imgTh}/>
            <p style={desc}>Using index pages</p>
          </div>
          <div>
            <img src={imgThumb} alt="" style={imgTh}/>
            <p style={desc}>Using index pages</p>
          </div>
          <div>
            <img src={imgThumb} alt="" style={imgTh}/>
            <p style={desc}>Using index pages</p>
          </div>
          <div>
            <img src={imgThumb} alt="" style={imgTh}/>
            <p style={desc}>Using index pages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ideas;
