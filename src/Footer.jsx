import Logo from "./assets/logo.svg";

const main = {
  margin: "50px 50px",
};
const mainGrid = {
  display: "grid",
  gridTemplateRows: "1fr",
  gridTemplateColumns: "1fr 200px 200px 200px 200px 200px",
};
const logoStyle = {
  width: "50px",
  height: "50px",
};
const listStyle = {
  listStyle: "none",
  color: "#ffffff",
};
const listMenu = {
  listStyle: "none",
};
const listItem = {
  listStyle: "none",
  marginTop: "20px",
};
const listLink = {
  textDecoration: "none",
  color: "#a2a2a7",
};

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const disFlexStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const paddingStyle = {
  padding:'20px',
    border: "20px solid #2E2E33",
  borderRadius: "50%",
  color: "#62B7B3",
};
const coloringStyle = {
    color :"#a2a2a7",
    fonstSize:'1rem',
    letterSpacing:'1px',
}
const listFlex = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

function Footer() {
  return (
    <div style={main}>
      <div style={mainGrid}>
        <img src={Logo} alt="" style={logoStyle} />
        <br />
        <div style={listStyle}>
          <ul style={listMenu}>
            PRODUCTS
            <li style={listItem}>
              <a href="#" style={listLink}>
                Drag & Drop
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Visual Studio X
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Easy Content
              </a>
            </li>
          </ul>
        </div>

        <div style={listStyle}>
          <ul style={listMenu}>
            RESOURCES
            <li style={listItem}>
              <a href="#" style={listLink}>
                Industries & tools
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Use cases
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Blog
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Online events
              </a>
            </li>
          </ul>
        </div>

        <div style={listStyle}>
          <ul style={listMenu}>
            COMPANY
            <li style={listItem}>
              <a href="#" style={listLink}>
                Diversity & inclusion
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                About us
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Press
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Customer stories
              </a>
            </li>
          </ul>
        </div>

        <div style={listStyle}>
          <ul style={listMenu}>
            SUPPORT
            <li style={listItem}>
              <a href="#" style={listLink}>
                Documentation
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Tutorials & guides
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Webinars
              </a>
            </li>
            <br />
            <li style={listItem}>
              <a href="#" style={listLink}>
                Open-source
              </a>
            </li>
          </ul>
        </div>
      </div>

      

      <div style={footerStyle}>
        <div>
          <span style={coloringStyle}>&copy;.Eng.Samir. All rights reserved.</span>
        </div>

        <div style={listFlex}>
          <ul style={listMenu}>
            <li>
              <a href="#" style={listLink}>
                Terms
              </a>
            </li>
            <li >
              <a href="#" style={listLink}>
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>

        <div style={disFlexStyle}>
          <div style={paddingStyle}>X</div>
          <div style={paddingStyle}>G</div>
          <div style={paddingStyle}>f</div>
          <div style={paddingStyle}>I</div>
          <div style={paddingStyle}>L</div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
