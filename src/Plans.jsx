import OK from "./assets/carveOK.svg";

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
  gridTemplateColumns: "350px 300px 300px 300px",
  gridTemplateRows: "1fr",
  columnGap: "40px",
  margin: "0px 150px",
};
const subGrid = {
  display: "grid",
  gridTemplateColumns: "300px 300px 300px",
  gridTemplateRows: "500px",
  columnGap: "20px",
};
const OKimgStyle = {
  position: "relative",
  top: "50px",
  left: "300px",
};
const vList = {
  padding: "10px 50px",
  color: "#d4d4d8",
  margin: "10px 5px 0px 30px",
  fontSize: "1rem",
};
const header = {
  fontSize: "1.2rem",
  color: "#ffffff",
  fontWeight: "bold",
  textAlign: "center",
};
const card = {
  background: "#2E2E33",
  marginTop: "50px",
  padding: "25px",
};
const cardActive = {
  background: "#2E2E33",
  marginTop: "50px",
  padding: "25px",
  border: "5px solid #62B7B3",
};
const cardPlan = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
};
const planType = {
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: "1.8rem",
};
const disStyle = {
  padding: "16px 25px",
  background: "#36474B",
  color: "#75CEC5",
  borderRadius: "15px",
};
const grayStyle = {
  color: "#a2a2a7",
  fontSize: "1.5rem",
};

const price = {
  color: "#ffffff",
  fontSize: "2rem",
};

const btnGoPremiumActive = {
  padding: "0.5rem 2rem",
  borderRadius: "0.25rem",
  borderWidth: "1px",
  background: "#62B7B3",
  fontSize: "1rem",
  fontSize: "1.2rem",
};
const btnGoPremium = {
  padding: "0.5rem 2rem",
  borderRadius: "0.25rem",
  borderWidth: "1px",
  background: "#3F3F44",
  color: "#62B7B3",
  fontSize: "1.2rem",
};
function Plans() {
  return (
    <div>
      <p style={Title}>Start building for free, then add a plan to go live</p>
      <p style={subTitle}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit laborum — semper quis lectus nulla.
      </p>
      <div style={mainGrid}>
        <div>
          <img src={OK} alt="" style={OKimgStyle} />
          <div>
            <p style={header}>All plans include:</p>
            <p style={vList}> ✅ Unlimited domains</p>
            <p style={vList}> ✅ Unlimited web pages</p>
            <p style={vList}> ✅ Conversion analytics</p>
            <p style={vList}> ✅ A/B testing</p>
            <p style={vList}> ✅ Exclusive channels</p>
            <p style={vList}> ✅ Free resources</p>
            <p style={vList}> ✅ Landing page builder</p>
            <p style={vList}> ✅ Smart forms and reports</p>
          </div>
        </div>

        <div style={subGrid}>
          <div style={cardActive}>
            <div style={cardPlan}>
              <p style={planType}>Yearly</p>
              <p style={disStyle}>-40%</p>
            </div>
            <span style={grayStyle}>$</span>
            <span style={price}>27</span>
            <span style={grayStyle}>/billed yearly</span>
            <p style={grayStyle}>
              — Lorem ipsum dolor amet sit consect adipiscing.
            </p>
            <br />
            <br />
            <br />
            <a href="#0" style={btnGoPremiumActive}>
              Go Premium
            </a>
          </div>

          <div style={card}>
            <div style={cardPlan}>
              <p style={planType}>Monthly</p>
              {/* <p style={disStyle}>-40%</p> */}
            </div>
            <span style={grayStyle}>$</span>
            <span style={price}>27</span>
            <span style={grayStyle}>/billed yearly</span>
            <p style={grayStyle}>
              — Lorem ipsum dolor amet sit consect adipiscing.
            </p>
            <br />
            <br />
            <br />
            <a href="#0" style={btnGoPremium}>
              Go Premium
            </a>
          </div>

          <div style={card}>
            <div style={cardPlan}>
              <p style={planType}>Lifetime</p>
              {/* <p style={disStyle}>-40%</p> */}
            </div>
            <span style={grayStyle}>$</span>
            <span style={price}>27</span>
            <span style={grayStyle}>/billed yearly</span>
            <p style={grayStyle}>
              — Lorem ipsum dolor amet sit consect adipiscing.
            </p>
            <br />
            <br />
            <br />
            <a href="#0" style={btnGoPremium}>
              Go Premium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
