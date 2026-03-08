import testimonial01 from "./assets/testimonial-01.jpg";
import testimonial02 from "./assets/testimonial-02.jpg";
import testimonial03 from "./assets/testimonial-03.jpg";
import testimonial04 from "./assets/testimonial-04.jpg";

const mainGrid = {
  display: "grid",
  gridTemplateColumns: "600px 600px",
  gridTemplateRows: "400px 400px",
  columnGap: "40px",
  margin: "5% 10%",
};

const centerlizing = {
  textAlign: "center",
  letterSpacing: "1px",
};
const imgtestimonial = {
  width: "80px",
  hight: "50px",
  borderRadius: "50%",
};
const coloringStyle = {
  color: "#62B28D",
  fontSize: "1.2rem",
};
const whiteStyle = {
  color: "#ffffff",
  fontSize: "1.2rem",
};
const grayStyle = {
  color: "#a2a2a7",
  fontSize: "1.8rem",
};

function Testimonial() {
  return (
    <div>
      <hr />
      <div style={mainGrid}>
        <div style={centerlizing}>
          <img src={testimonial01} alt="" style={imgtestimonial} />
          <p style={grayStyle}>
            “ This is a great app and the value is amazing. Since I purchased it
            I have been using it everyday! Highly recommend it. “
          </p>
          <span style={whiteStyle}>—Andy Croll, </span>
          <span style={coloringStyle}>Appy.com</span>
        </div>

        <div style={centerlizing}>
          `` <img src={testimonial02} alt="" style={imgtestimonial} />
          <p style={grayStyle}>
            “ This is a great app and the value is amazing. Since I purchased it
            I have been using it everyday! Highly recommend it. “
          </p>
          <span style={whiteStyle}>—Patricia Lepisov, </span>
          <span style={coloringStyle}>Nobi Bank</span>
        </div>

        <div style={centerlizing}>
          <img src={testimonial03} alt="" style={imgtestimonial} />
          <p style={grayStyle}>
            “ This is a great app and the value is amazing. Since I purchased it
            I have been using it everyday! Highly recommend it. “
          </p>
          <span style={whiteStyle}>—Zhenya Ritz, </span>
          <span style={coloringStyle}>Sync</span>
        </div>

        <div style={centerlizing}>
          <img src={testimonial04} alt="" style={imgtestimonial} />
          <p style={grayStyle}>
            “ This is a great app and the value is amazing. Since I purchased it
            I have been using it everyday! Highly recommend it. “
          </p>
          <span style={whiteStyle}>—Lisa Champ, </span>
          <span style={coloringStyle}>Appicu</span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Testimonial;
