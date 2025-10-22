import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.phone || !formData.service) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'يرجى ملء جميع الحقول المطلوبة'
      });
      return;
    }

    // Here would be the API call to submit the form
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً'
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>اتصل بنا</h1>
          <p>تواصل معنا للاستفسار وحجز الخدمات</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2 className="section-title">معلومات الاتصال</h2>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-details">
                    <h3>اتصل بنا</h3>
                    <p>متاحون على مدار الساعة طوال أيام الأسبوع</p>
                    <a href="tel:+201069391425" className="contact-link">01069391425</a>
                    <a href="tel:+201001170088" className="contact-link">01001170088</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="method-details">
                    <h3>واتساب</h3>
                    <p>تواصل معنا مباشرة عبر الواتساب</p>
                    <a href="https://wa.me/+201069391425" target="_blank" rel="noopener noreferrer" className="contact-link">01069391425</a>
                    <a href="https://wa.me/+201001170088" target="_blank" rel="noopener noreferrer" className="contact-link">01001170088</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-details">
                    <h3>البريد الإلكتروني</h3>
                    <p>راسلنا عبر البريد الإلكتروني</p>
                    <a href="mailto:info@elmohandscranes.com" className="contact-link">info@elmohandscranes.com</a>
                    <a href="mailto:support@elmohandscranes.com" className="contact-link">support@elmohandscranes.com</a>
                  </div>
                </div>
              </div>

              <div className="working-hours">
                <h3>ساعات العمل</h3>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span className="day">السبت - الخميس:</span>
                    <span className="time">9 صباحاً - 10 مساءً</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">الجمعة:</span>
                    <span className="time">2 ظهراً - 10 مساءً</span>
                  </div>
                </div>
                <p className="hours-note">* خدمة الطوارئ متاحة على مدار 24 ساعة</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2 className="form-title">احجز خدمة</h2>

              {formStatus.submitted && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">الاسم الكامل *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="أدخل رقم هاتفك"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">الخدمة المطلوبة *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>اختر الخدمة</option>
                    <option value="lifting">رفع وإنزال الأثاث</option>
                    <option value="carpentry">نجاريين متخصصين</option>
                    <option value="ac">فني تكييف</option>
                    <option value="packaging">تغليف الأثاث</option>
                    <option value="electrical">كهربائي</option>
                    <option value="transport">سيارات مغلقة للنقل</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">رسالتك</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="أخبرنا بالتفاصيل الإضافية للخدمة المطلوبة"
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">إرسال الطلب</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">موقعنا</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.72061501517!2d31.30880274663814!3d30.059558584577682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1614844784040!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="خريطة الموقع"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas-section section">
        <div className="container">
          <h2 className="section-title">مناطق الخدمة</h2>
          <div className="areas-content">
            <p className="areas-intro">
              نقدم خدماتنا في جميع أنحاء القاهرة الكبرى والمناطق المحيطة، بما في ذلك:
            </p>

            <div className="areas-grid">
              <div className="area-column">
                <h3>القاهرة</h3>
                <ul className="areas-list">
                  <li>المعادي</li>
                  <li>مدينة نصر</li>
                  <li>مصر الجديدة</li>
                  <li>وسط البلد</li>
                  <li>الزمالك</li>
                  <li>جاردن سيتي</li>
                </ul>
              </div>

              <div className="area-column">
                <h3>الجيزة</h3>
                <ul className="areas-list">
                  <li>الدقي</li>
                  <li>المهندسين</li>
                  <li>العجوزة</li>
                  <li>الهرم</li>
                  <li>فيصل</li>
                  <li>6 أكتوبر</li>
                </ul>
              </div>

              <div className="area-column">
                <h3>المناطق الجديدة</h3>
                <ul className="areas-list">
                  <li>التجمع الخامس</li>
                  <li>الشروق</li>
                  <li>العبور</li>
                  <li>الرحاب</li>
                  <li>مدينتي</li>
                  <li>العاصمة الإدارية</li>
                </ul>
              </div>
            </div>

            <p className="areas-note">
              * إذا كنت تقيم في منطقة غير مدرجة، يرجى الاتصال بنا للتأكد من تغطيتنا لمنطقتك.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section section">
        <div className="container">
          <h2 className="section-title">تابعنا على وسائل التواصل</h2>
          <div className="social-content">
            <p className="social-intro">
              تابعنا على وسائل التواصل الاجتماعي للاطلاع على آخر العروض والخدمات:
            </p>

            <div className="social-links-large">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <i className="fab fa-facebook-f"></i>
                <span>فيسبوك</span>
              </a>

              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <i className="fab fa-instagram"></i>
                <span>انستغرام</span>
              </a>

              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <i className="fab fa-youtube"></i>
                <span>يوتيوب</span>
              </a>

              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <i className="fab fa-twitter"></i>
                <span>تويتر</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
