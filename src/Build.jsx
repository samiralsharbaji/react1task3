import mockupImage02 from "./assets/mockupImage02.jpg"
import mockupImage03 from "./assets/mockupImage03.jpg"
import mockupImage04 from "./assets/mockupImage04.jpg"

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
  gridTemplateColumns: "400px 400px 400px",
  gridTemplateRows: "1fr",
  columnGap: "100px",
  margin:'0px 150px',
};
const FlexNum = {
 display: "flex",
  alignItems: "center",
  margin:'50px 17%',
};
const Centerizing ={
    
}
const NumStyle = {
  padding: "20px",
  background: "#2A3B3D",
  color: "#75CEC5",
  fontSize: "2rem",
};
const dotsStyle = {
  color: "#2A3B3D",
  background:
    "linear-gradient(311deg, rgba(42, 59, 61, 1) 16%, rgba(117, 206, 197, 1) 40%, rgba(42, 59, 61, 1) 87%)",
};
const imgMockup={
    width:'290px',
    hight:'620px',
}
function Build() {
  return (
    <div>
      <p style={Title}>Build and style every element to perfection</p>
      <p style={subTitle}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
      </p>
      
        <div style={FlexNum}>
          <div style={Centerizing}>
            <span style={NumStyle}> 1 </span>
            <span style={dotsStyle}>
              ______________________________________________________________
            </span>
          </div>
          <div style={Centerizing}>
            <span style={NumStyle}> 2 </span>
            <span style={dotsStyle}>
              ______________________________________________________________
            </span>
          </div>
          <div style={Centerizing}>
            <span style={NumStyle}> 3 </span>
          </div>
        </div>
        <div style={mainGrid}>
<div><img src={mockupImage02} alt="" style={imgMockup}/></div>
<div><img src={mockupImage03} alt="" style={imgMockup}/></div>
<div><img src={mockupImage04} alt="" style={imgMockup}/></div>


      </div>
    </div>
  );
}
export default Build;
