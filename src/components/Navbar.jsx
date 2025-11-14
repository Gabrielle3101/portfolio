import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { FiHome, FiUser, FiTool, FiBriefcase, FiBook, FiFolder, FiMail } from 'react-icons/fi';

const LINKS = [
    { to: '/', label: 'Home', Icon: FiHome },
    { to: '/about', label: 'About', Icon: FiUser },
    { to: '/skills', label: 'Skills', Icon: FiTool },
    { to: '/experience', label: 'Experience', Icon: FiBriefcase },
    { to: '/education', label: 'Education', Icon: FiBook },
    { to: '/projects', label: 'Projects', Icon: FiFolder },
    { to: '/contact', label: 'Contact', Icon: FiMail }
];

export default function Navbar() {
    return (
        <nav className="nav-floating" aria-label="Primary">
            <div className="nav-inner">
                <div className="brand" aria-hidden="true">G</div>

                <ul>
                    {LINKS.map(({ to, label, Icon }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={to === '/'}
                                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                                aria-label={label}
                                title={label}
                            >
                                <span className="icon" aria-hidden="true"><Icon size={18} /></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="divider" aria-hidden="true" />

                <div className="toggle-wrap">
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    );
}
