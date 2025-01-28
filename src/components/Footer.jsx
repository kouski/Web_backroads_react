import { pageLinks, socialIcons } from "../data"


function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">

      {pageLinks.map(({id,href,text})=>{
        return(
          <li key={id}>
          <a href={href} className="footer-link">{text}</a>
        </li>
        )
      })}
        
      </ul>
      <ul className="footer-icons">

      {socialIcons.map(icons=>{
        return(
          <li key={icons.id}>
          <a href={icons.href} target="_blank" className="footer-icon"
            ><i className={icons.icon}></i
          ></a>
        </li>
        )
      })}

      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer