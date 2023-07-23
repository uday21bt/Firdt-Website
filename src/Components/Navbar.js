import { pageLinks } from '../constants'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
        <img src='{logo}' alt='logo'/>
        <button type='button' className='nav-toggle' id='nav-toggle'>
          <i className='fsa fa-bars'></i>

        </button>
        </div>
        </div> 
        <ul className='nav-links'>
          {pageLinks.map((link)=>{
            const {id, href, text}=link
            return(
              <li key={id}>
                <a href='{href}'>{text}</a> 

              </li>
            )
          })} 

        </ul>
    </nav>
  )
}

export default Navbar