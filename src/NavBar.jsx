import Logo from "./assets/logo.svg"

const inlineStyleList = {
textDecoration: 'none',
  fontSize: '50px',
    padding: '1em',
}

const reqCodeBtn = {
  textDecoration: 'none',
  border: '20px solid aqua',
  backgroundColor: 'aqua',
  borderRadius: '15px',
  color: 'aliceblue',
  fontWeight: '250',
  fontSize: '20px',
  textTransform: 'uppercase',
}
function Navbar() {
  return (
    
    <nav className="Navbar">
      <img src={Logo} alt="" />
      <ul style={inlineStyleList}>
        <li style={inlineStyleList}>
          <a style={inlineStyleList} href="/">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Resources
            <ul>
              <li><a href="">Help</a></li>
              <li><a href="">404</a></li>
            </ul>
          </a>
        </li>
        <a href="#" style={reqCodeBtn}>
          Request Code
        </a>
      </ul>
    </nav>
    
  );
}

export default Navbar;
