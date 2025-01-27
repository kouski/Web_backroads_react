import logo from "../images/logo.svg";
import { headerIcons, pageLinks } from "../data";

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map(({id,href,text}) => {
            return(
            
            <li key={id}>
              <a href={href} className="nav-link">
                
                {text}
              </a>
            </li>);
          })}

        </ul>

        <ul className="nav-icons">
        
        {headerIcons.map(icons=>{
        return(
          <li key={icons.id}>
          <a href={icons.href} target="_blank" className="nav-icon"
            ><i className={icons.icon}></i
          ></a>
        </li>
        )
      })}
          
        </ul>
      </div>
    </nav>
  );
}

export default Header;
