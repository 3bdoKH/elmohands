import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../media/images/logo.jpg';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="أوناش المهندس" />
            <span>أوناش المهندس</span>
          </Link>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  من نحن
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                  الخدمات
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
                  الأسعار
                </NavLink>
              </li>
              <li>
                <NavLink to="/offers" onClick={() => setMenuOpen(false)}>
                  العروض
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" onClick={() => setMenuOpen(false)}>
                  آراء العملاء
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
                  الأسئلة الشائعة
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  اتصل بنا
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="contact-header">
          <Link to="/contact" className="btn btn-primary header-btn">
            احجز الآن
          </Link>
        </div>

        <div className="mobile-toggle" onClick={toggleMenu}>
          <span className={`burger ${menuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
