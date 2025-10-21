import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>أوناش المهندس</h3>
                        <p>
                            متخصصون في رفع وإنزال الأثاث المنزلي مع أكثر من 10 سنوات خبرة في المجال. نقدم خدماتنا بأعلى معايير الجودة والاحترافية.
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1MLHP9KYc8/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://wa.me/201001170088" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section quick-links">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/services">الخدمات</Link></li>
                            <li><Link to="/faq">الأسئلة الشائعة</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section services">
                        <h3>خدماتنا</h3>
                        <ul>
                            <li><Link to="/services#lifting">رفع وإنزال الأثاث</Link></li>
                            <li><Link to="/services#carpentry">نجاريين متخصصين</Link></li>
                            <li><Link to="/services#ac">فني تكييف</Link></li>
                            <li><Link to="/services#packaging">تغليف الأثاث</Link></li>
                            <li><Link to="/services#electrical">كهربائي</Link></li>
                            <li><Link to="/services#transport">سيارات مغلقة للنقل</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3>اتصل بنا</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>العنوان: القاهرة، مصر</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>الهاتف: 01069391425</span>
                            </div>
                            <div className="contact-item">
                                <i className="fab fa-whatsapp"></i>
                                <span>واتساب: 01001170088</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>البريد الإلكتروني: info@elmohandscranes.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {currentYear} أوناش المهندس. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
