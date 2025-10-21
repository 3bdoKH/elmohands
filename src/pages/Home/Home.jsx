import { Link } from 'react-router-dom';
import './Home.css';
import { image1, image2, image3, image4, logo } from '../../utils/imports';
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>أوناش المهندس لرفع وإنزال الأثاث</h1>
            <p>خدمات رفع وإنزال الأثاث المنزلي بأحدث المعدات وفريق محترف من النجارين والفنيين المتخصصين</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
              <Link to="/services" className="btn btn-secondary">خدماتنا</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={logo} alt="أوناش رفع الأثاث" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">لماذا تختار أوناش المهندس؟</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-truck-moving"></i>
              </div>
              <h3>سرعة الوصول</h3>
              <p>نصل إليك في أقل من ساعة في جميع أنحاء المدينة</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>فريق محترف</h3>
              <p>طاقم فني مدرب على أعلى مستوى لضمان سلامة منقولاتك</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>ضمان الحماية</h3>
              <p>نقدم ضمان على تغليف وحماية الأثاث أثناء النقل</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>أسعار تنافسية</h3>
              <p>خدمات عالية الجودة بأسعار مناسبة وعروض دائمة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">خدماتنا</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={image2} alt="رفع وإنزال الأثاث" />
              <h3>رفع وإنزال الأثاث</h3>
              <p>خدمة رفع وإنزال الأثاث من وإلى الأدوار العالية باستخدام أحدث الأوناش والمعدات</p>
              <Link to="/services#lifting" className="btn btn-primary">المزيد</Link>
            </div>
            <div className="service-card">
              <img src={image3} alt="نجاريين متخصصين" />
              <h3>نجاريين متخصصين</h3>
              <p>نجارين محترفين لفك وتركيب الأثاث والمطابخ والغرف بمهارة واحترافية</p>
              <Link to="/services#carpentry" className="btn btn-primary">المزيد</Link>
            </div>
            <div className="service-card">
              <img src={image4} alt="تغليف الأثاث" />
              <h3>تغليف الأثاث</h3>
              <p>خدمة تغليف الأثاث بمواد عالية الجودة لحمايتها من الخدش والكسر أثناء النقل</p>
              <Link to="/services#packaging" className="btn btn-primary">المزيد</Link>
            </div>
          </div>
          <div className="services-more text-center">
            <Link to="/services" className="btn btn-secondary">جميع الخدمات</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>احصل على خصم 10% على الخدمات الآن</h2>
            <p>عرض لفترة محدودة على جميع خدمات رفع وإنزال الأثاث ونقل العفش</p>
            <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">آراء العملاء</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">
                "تعاملت مع أوناش المهندس في نقل أثاث منزلي وكانت الخدمة ممتازة. وصلوا في الوقت المحدد وقاموا برفع الأثاث بسرعة واحترافية."
              </p>
              <div className="testimonial-author">
                <h4>أحمد محمد</h4>
                <span>القاهرة</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">
                "فريق محترف وأسعار معقولة. قاموا بتغليف وحماية الأثاث بشكل جيد جداً ولم يحدث أي خدش أو تلف أثناء النقل."
              </p>
              <div className="testimonial-author">
                <h4>سارة أحمد</h4>
                <span>الجيزة</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="testimonial-text">
                "استعنت بهم لتركيب مطبخ في الدور العاشر، كانت الخدمة سريعة والعمال على قدر عالٍ من الاحتراف والخبرة."
              </p>
              <div className="testimonial-author">
                <h4>محمد علي</h4>
                <span>المعادي</span>
              </div>
            </div>
          </div>
          <div className="testimonials-more text-center">
            <Link to="/testimonials" className="btn btn-secondary">جميع الآراء</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-home">
              <h2>اتصل بنا</h2>
              <p>نحن متاحون على مدار الساعة طوال أيام الأسبوع</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>الهاتف</h4>
                    <p><a href="tel:+201069391425">01069391425</a></p>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fab fa-whatsapp"></i>
                  <div>
                    <h4>واتساب</h4>
                    <p><a href="https://wa.me/201001170088" target="_blank" rel="noopener noreferrer">01001170088</a></p>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>البريد الإلكتروني</h4>
                    <p><a href="mailto:info@elmohandscranes.com">info@elmohandscranes.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-home">
              <h3>احجز الآن</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="الاسم" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="رقم الهاتف" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="" disabled selected>اختر الخدمة</option>
                    <option value="lifting">رفع وإنزال الأثاث</option>
                    <option value="carpentry">نجاريين متخصصين</option>
                    <option value="ac">فني تكييف</option>
                    <option value="packaging">تغليف الأثاث</option>
                    <option value="electrical">كهربائي</option>
                    <option value="transport">سيارات مغلقة للنقل</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="تفاصيل الطلب" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">إرسال الطلب</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
