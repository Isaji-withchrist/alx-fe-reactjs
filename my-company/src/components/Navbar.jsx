import { Link } from "react-router-dom";
function Navbar() {
    return(
    <nav
        style={{
            backgroundColor: '#007BFF',
            padding: '1rem',
            display: 'flex',
            gap: '1rem',
        }}
        >
            <Link style={{color:'white', textDecoration:'none'}} to="/">Home</Link>
            <Link style={{color:'white', textDecoration:'none'}} to="/about">About</Link>
            <Link style={{color:'white', textDecoration:'none'}} to="/services">Services</Link>
            <Link style={{color:'white', textDecoration:'none'}} to="/contact">Contact</Link>
        </nav>
    )
    
}
export default Navbar;