import './NavBar.css'
import profile from '../../Assets/Images/profile.png'
function NavBar(){
    return (
        <nav className='navbar'>
            <h1>curious.abhishek &lt;\&gt;</h1>
            <ul className='navbar-menu'>
                <li className='navbar-item'><a>Home</a></li>
                <li className='navbar-item'><a>About Me</a></li>
                <li className='navbar-item'><a>Services</a></li>
                <li className='navbar-item'><a>Projects</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;