import { Link } from 'react-router-dom';
import homeLogo from '../img/homeLogo.png'
import { FaUserCircle } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="w-100 d-flex align-items-center justify-content-between sticky-top sticky-bar bg-body-tertiary h-10">
            <div className='d-flex nav-div justify-content-center h-25'>
                <Link to="/">
                    <img src={homeLogo} className='homeLogo ' height={70} />
                </Link>
            </div>            
                    <h1>Hulix</h1>
            <div className='d-flex w-25 justify-content-around align-items-center'>
                <div >
                </div>
                <div>
                    <Link to="/search" className='btn btn-dark '>Search</Link>
                </div>
                <div>
                    <Link to="/Profile" className='text-decoration-none text-dark'>
                        <h1><FaUserCircle /></h1>
                    </Link>
                </div>
            </div>
        </nav>
    )
}