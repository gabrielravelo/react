
import { Link, NavLink, useNavigate } from 'react-router';


export const Navbar = () => {
    
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes SPA
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={`nav-item nav-link ${ ({isActive}) => isActive ? 'active' : '' }`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={`nav-item nav-link ${ ({isActive}) => isActive ? 'active' : '' }`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={`nav-item nav-link ${ ({isActive}) => isActive ? 'active' : '' }`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Gabriel
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
