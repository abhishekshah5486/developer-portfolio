import './NavBar.css'
import profile from '../../Assets/Images/profile.png'
import { Link, Element } from 'react-scroll';
function NavBar(){
    return (
        <nav className='navbar'>
            <h1>curious.abhishek &lt;\&gt;</h1>
            <ul className='navbar-menu'>
                <li className='navbar-item'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='navbar-item'><a>About Me</a></li>
                <li className='navbar-item'><a>Services</a></li>
                <li className='navbar-item'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;