import { Link } from 'react-router-dom';
import './Offers.css';
import { image1, image2, image3, image4 } from '../../utils/imports';
const Offers = () => {
    return (
        <div className="offers-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>العروض الخاصة</h1>
                    <p>استمتع بعروضنا وخصوماتنا الحصرية</p>
                </div>
            </section>

            {/* Current Offers */}
            <section className="current-offers-section section">
                <div className="container">
                    <h2 className="section-title">العروض الحالية</h2>

                    <div className="offers-grid">
                        <div className="offer-card hot-deal">
                            <div className="offer-tag">عرض ساخن</div>
                            <div className="offer-header">
                                <h3>عرض الشقة الكاملة</h3>
                                <div className="offer-discount">
                                    <span className="discount-value">25%</span>
                                    <span className="discount-text">خصم</span>
                                </div>
                            </div>
                            <div className="offer-image">
                                <img src={image1} alt="عرض الشقة الكاملة" />
                            </div>
                            <div className="offer-details">
                                <p className="offer-description">
                                    خصم 25% على خدمات نقل وتركيب شقة كاملة تشمل (رفع الأثاث، فك وتركيب، تغليف، فني تكييف، كهربائي)
                                </p>
                                <div className="offer-price">
                                    <div className="old-price">5000 جنيه</div>
                                    <div className="new-price">3750 جنيه</div>
                                </div>
                                <p className="offer-validity">العرض ساري حتى 31/12/2025</p>
                                <div className="offer-features">
                                    <h4>يشمل العرض:</h4>
                                    <ul>
                                        <li>رفع وإنزال أثاث شقة كاملة</li>
                                        <li>فك وتركيب الأثاث</li>
                                        <li>تغليف كامل للأثاث</li>
                                        <li>فك وتركيب حتى 3 مكيفات</li>
                                        <li>خدمات كهربائية أساسية</li>
                                        <li>سيارة مغلقة للنقل</li>
                                    </ul>
                                </div>
                                <div className="offer-actions">
                                    <Link to="/contact" className="btn btn-primary">احجز العرض</Link>
                                    <a href="tel:+201234567890" className="btn btn-secondary">اتصل للاستفسار</a>
                                </div>
                            </div>
                        </div>

                        <div className="offer-card">
                            <div className="offer-header">
                                <h3>عرض المكيفات</h3>
                                <div className="offer-discount">
                                    <span className="discount-value">20%</span>
                                    <span className="discount-text">خصم</span>
                                </div>
                            </div>
                            <div className="offer-image">
                                <img src={image2} alt="عرض المكيفات" />
                            </div>
                            <div className="offer-details">
                                <p className="offer-description">
                                    خصم 20% على خدمات فك وتركيب وصيانة المكيفات مع شحن غاز مجاني
                                </p>
                                <div className="offer-price">
                                    <div className="old-price">1500 جنيه</div>
                                    <div className="new-price">1200 جنيه</div>
                                </div>
                                <p className="offer-validity">العرض ساري حتى 30/11/2025</p>
                                <div className="offer-features">
                                    <h4>يشمل العرض:</h4>
                                    <ul>
                                        <li>فك وتركيب 3 مكيفات سبليت</li>
                                        <li>شحن غاز مجاني</li>
                                        <li>تنظيف الفلاتر</li>
                                        <li>فحص شامل للمكيفات</li>
                                    </ul>
                                </div>
                                <div className="offer-actions">
                                    <Link to="/contact" className="btn btn-primary">احجز العرض</Link>
                                    <a href="tel:+201234567890" className="btn btn-secondary">اتصل للاستفسار</a>
                                </div>
                            </div>
                        </div>

                        <div className="offer-card">
                            <div className="offer-header">
                                <h3>عرض الطابق العالي</h3>
                                <div className="offer-discount">
                                    <span className="discount-value">15%</span>
                                    <span className="discount-text">خصم</span>
                                </div>
                            </div>
                            <div className="offer-image">
                                <img src={image3} alt="عرض الطابق العالي" />
                            </div>
                            <div className="offer-details">
                                <p className="offer-description">
                                    خصم 15% على خدمات رفع الأثاث للطوابق العالية (الدور السابع فما فوق)
                                </p>
                                <div className="offer-price">
                                    <div className="old-price">2000 جنيه</div>
                                    <div className="new-price">1700 جنيه</div>
                                </div>
                                <p className="offer-validity">العرض ساري حتى 15/11/2025</p>
                                <div className="offer-features">
                                    <h4>يشمل العرض:</h4>
                                    <ul>
                                        <li>رفع الأثاث للطوابق العالية</li>
                                        <li>فريق عمل متخصص</li>
                                        <li>تأمين كامل للأثاث</li>
                                        <li>أوناش حديثة وآمنة</li>
                                    </ul>
                                </div>
                                <div className="offer-actions">
                                    <Link to="/contact" className="btn btn-primary">احجز العرض</Link>
                                    <a href="tel:+201234567890" className="btn btn-secondary">اتصل للاستفسار</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limited Time Offers */}
            <section className="limited-offers-section section">
                <div className="container">
                    <h2 className="section-title">عروض لفترة محدودة</h2>

                    <div className="limited-offers-grid">
                        <div className="limited-offer-card">
                            <div className="limited-offer-content">
                                <div className="limited-offer-header">
                                    <h3>عرض نهاية الأسبوع</h3>
                                    <div className="limited-offer-timer">
                                        <i className="fas fa-clock"></i>
                                        <span>ينتهي خلال 3 أيام</span>
                                    </div>
                                </div>
                                <div className="limited-offer-details">
                                    <p>
                                        خصم 30% على جميع خدمات النقل والتركيب خلال عطلة نهاية الأسبوع (الجمعة والسبت فقط)
                                    </p>
                                    <div className="offer-code">
                                        <span>كود الخصم:</span>
                                        <strong>WEEKEND30</strong>
                                    </div>
                                </div>
                                <div className="limited-offer-action">
                                    <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                                </div>
                            </div>
                        </div>

                        <div className="limited-offer-card">
                            <div className="limited-offer-content">
                                <div className="limited-offer-header">
                                    <h3>عرض الحجز المسبق</h3>
                                    <div className="limited-offer-timer">
                                        <i className="fas fa-clock"></i>
                                        <span>ينتهي خلال أسبوع</span>
                                    </div>
                                </div>
                                <div className="limited-offer-details">
                                    <p>
                                        خصم 20% على جميع الخدمات عند الحجز المسبق قبل الموعد بأسبوع على الأقل
                                    </p>
                                    <div className="offer-code">
                                        <span>كود الخصم:</span>
                                        <strong>EARLY20</strong>
                                    </div>
                                </div>
                                <div className="limited-offer-action">
                                    <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasonal Offers */}
            <section className="seasonal-offers-section section">
                <div className="container">
                    <h2 className="section-title">عروض موسمية</h2>

                    <div className="seasonal-offers-grid">
                        <div className="seasonal-offer-card">
                            <div className="seasonal-offer-image">
                                <img src={image4} alt="عرض الصيف" />
                                <div className="seasonal-offer-label">عرض الصيف</div>
                            </div>
                            <div className="seasonal-offer-content">
                                <h3>خصم الصيف</h3>
                                <p>
                                    خصم 15% على خدمات تركيب وصيانة المكيفات خلال فصل الصيف
                                </p>
                                <p className="seasonal-validity">
                                    ساري من 1 يونيو حتى 31 أغسطس
                                </p>
                                <Link to="/contact" className="btn btn-secondary">احجز العرض</Link>
                            </div>
                        </div>

                        <div className="seasonal-offer-card">
                            <div className="seasonal-offer-image">
                                <img src={image1} alt="عرض الشتاء" />
                                <div className="seasonal-offer-label">عرض الشتاء</div>
                            </div>
                            <div className="seasonal-offer-content">
                                <h3>خصم الشتاء</h3>
                                <p>
                                    خصم 20% على خدمات النقل والتركيب خلال فصل الشتاء
                                </p>
                                <p className="seasonal-validity">
                                    ساري من 1 ديسمبر حتى 28 فبراير
                                </p>
                                <Link to="/contact" className="btn btn-secondary">احجز العرض</Link>
                            </div>
                        </div>

                        <div className="seasonal-offer-card">
                            <div className="seasonal-offer-image">
                                <img src={image2} alt="عرض العودة للمدارس" />
                                <div className="seasonal-offer-label">العودة للمدارس</div>
                            </div>
                            <div className="seasonal-offer-content">
                                <h3>خصم العودة للمدارس</h3>
                                <p>
                                    خصم 25% على نقل الأثاث للطلاب والأسر خلال موسم العودة للمدارس
                                </p>
                                <p className="seasonal-validity">
                                    ساري من 15 أغسطس حتى 30 سبتمبر
                                </p>
                                <Link to="/contact" className="btn btn-secondary">احجز العرض</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Categories */}
            <section className="special-categories-section section">
                <div className="container">
                    <h2 className="section-title">فئات خاصة</h2>

                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                            <div className="category-content">
                                <h3>الطلاب</h3>
                                <p>خصم 15% للطلاب على جميع الخدمات مع إبراز البطاقة الجامعية</p>
                                <Link to="/contact" className="btn btn-outline">استفد من العرض</Link>
                            </div>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="category-content">
                                <h3>العائلات</h3>
                                <p>خصم 10% للعائلات التي تنتقل لمنزل جديد مع خدمات إضافية مجانية</p>
                                <Link to="/contact" className="btn btn-outline">استفد من العرض</Link>
                            </div>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-building"></i>
                            </div>
                            <div className="category-content">
                                <h3>الشركات</h3>
                                <p>عروض خاصة للشركات والمكاتب مع خصومات على الكميات الكبيرة</p>
                                <Link to="/contact" className="btn btn-outline">استفد من العرض</Link>
                            </div>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-medal"></i>
                            </div>
                            <div className="category-content">
                                <h3>العملاء الدائمين</h3>
                                <p>برنامج ولاء للعملاء الدائمين مع خصومات متزايدة مع كل طلب</p>
                                <Link to="/contact" className="btn btn-outline">استفد من العرض</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="offers-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>لا تفوت الفرصة! احجز الآن واستفد من العروض</h2>
                        <p>تواصل مع فريقنا للحصول على العروض الخاصة والخصومات الحصرية</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                <i className="fab fa-whatsapp"></i> تواصل واتساب
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offers;
