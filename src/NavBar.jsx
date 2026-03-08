import Logo from "./assets/logo.svg";

const mainContainer = {
    margin: "100px 135px",
};
const logoStyle = {
  width: "50px",
  height: "50px",
};
const inlineStyleList = {
  display: "flex",
  justifyContent: "space-around",
  listStyle: "none",
  fontSize: "1.5em",
  padding: "0em 0em",
};

const reqCodeBtn = {
  textDecoration: "none",
  border: "20px solid aqua",
  backgroundColor: "aqua",
  borderRadius: "15px",
  color: "aliceblue",
  fontWeight: "250",
  fontSize: "20px",
  textTransform: "uppercase",
};
function Navbar() {
  return (
    <div style={mainContainer}>
      <nav>
        <ul style={inlineStyleList}>
          <img src={Logo} alt="" style={logoStyle} />
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <details>
              Resources
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a href="">Help</a>
                </li>
                <li>
                  <a href="">404</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#" style={reqCodeBtn}>
              Request Code
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
