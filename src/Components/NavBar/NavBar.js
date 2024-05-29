import './NavBar.css'
function NavBar(){
    return (
        <nav>
            <ul className='nav'>
                <li className='nav-item'><a>Home</a></li>
                <li className='nav-item'><a>About Me</a></li>
                <li className='nav-item'><a>Services</a></li>
                <li className='nav-item'><a>Projects</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;