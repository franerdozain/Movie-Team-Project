import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import homeLogo from '../img/homeLogo.png';
import { FaUserCircle, FaDoorOpen, FaDoorClosed, FaIdCardAlt } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { clearUserFromLocalStorage } from '../localStorageManager';

export default function Navbar({ login }) {
    const navigate = useNavigate();

    const handleClick = () => {
        clearUserFromLocalStorage();
        navigate("/");
    }
    return (
        <nav className="w-100 d-flex align-items-center justify-content-between sticky-top sticky-bar bg-body-tertiary h-10 bg-dark mb-2">
            <div className="d-flex nav-div justify-content-center h-25">
                <Link to="/">
                    <img src={homeLogo} className="homeLogo" height={70} alt="Home" />
                </Link>
            </div>
            <div className="d-flex w-25 justify-content-around align-items-center">
                <div>
                    <Link to="/" className="btn btn-dark">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/search" className="btn btn-dark">
                        Search
                    </Link>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdownMenuButton">
                        <FaUserCircle />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {login ? (
                            <>
                                <Dropdown.Item href="#">
                                    <Link to="/Profile" className='text-decoration-none text-dark'>
                                        <FaIdCardAlt className="me-2" />
                                        Profile
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#" onClick={handleClick}>
                                        <FaDoorClosed className="me-2" />
                                        Logout
                                </Dropdown.Item>
                            </>
                        ) : (
                            <Dropdown.Item href="#">
                                <Link to="/Login" className='text-decoration-none text-dark'>
                                    <FaDoorOpen className="me-2" />
                                    Login
                                </Link>
                            </Dropdown.Item>
                        )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}