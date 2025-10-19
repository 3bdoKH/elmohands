import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';
import { testimonial, video1 } from '../../utils/imports';
const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [submissionForm, setSubmissionForm] = useState({
    name: '',
    area: '',
    service: '',
    rating: '5',
    review: '',
    submitted: false
  });

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmissionForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the API call to submit the review
    setSubmissionForm(prev => ({
      ...prev,
      submitted: true
    }));
    // Reset form after submission (in real scenario this would be after successful API response)
    setTimeout(() => {
      setSubmissionForm({
        name: '',
        area: '',
        service: '',
        rating: '5',
        review: '',
        submitted: false
      });
    }, 3000);
  };

  return (
    <div className="testimonials-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>آراء العملاء</h1>
          <p>تجارب وشهادات عملائنا الكرام</p>
        </div>
      </section>

      {/* Testimonials Filters */}
      <section className="testimonials-filters section">
        <div className="container">
          <div className="filters-container">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              الكل
            </button>
            <button
              className={`filter-btn ${activeFilter === 'lifting' ? 'active' : ''}`}
              onClick={() => handleFilterClick('lifting')}
            >
              رفع وإنزال الأثاث
            </button>
            <button
              className={`filter-btn ${activeFilter === 'carpentry' ? 'active' : ''}`}
              onClick={() => handleFilterClick('carpentry')}
            >
              نجارين
            </button>
            <button
              className={`filter-btn ${activeFilter === 'ac' ? 'active' : ''}`}
              onClick={() => handleFilterClick('ac')}
            >
              تكييف
            </button>
            <button
              className={`filter-btn ${activeFilter === 'packaging' ? 'active' : ''}`}
              onClick={() => handleFilterClick('packaging')}
            >
              تغليف
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section section">
        <div className="container">
          <div className="testimonials-grid">
            {/* These would typically come from an API or database */}
            <div className={`testimonial-card ${activeFilter === 'all' || activeFilter === 'lifting' ? 'visible' : 'hidden'}`}>
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    <img src={testimonial} alt="أحمد محمد" />
                  </div>
                  <div className="client-details">
                    <h3>أحمد محمد</h3>
                    <span>المعادي</span>
                  </div>
                </div>
                <div className="testimonial-service">
                  <span className="service-tag">رفع وإنزال الأثاث</span>
                </div>
              </div>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-text">
                <p>
                  "تعاملت مع شركة أوناش المهندس لرفع أثاث منزلي إلى الدور العاشر وكانت الخدمة ممتازة. وصلوا في الوقت المحدد وقاموا بالعمل باحترافية عالية. أنصح بالتعامل معهم."
                </p>
              </div>
              <div className="testimonial-date">
                <span>10 سبتمبر 2025</span>
              </div>
            </div>

            <div className={`testimonial-card ${activeFilter === 'all' || activeFilter === 'carpentry' ? 'visible' : 'hidden'}`}>
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    <img src={testimonial} alt="سارة أحمد" />
                  </div>
                  <div className="client-details">
                    <h3>سارة أحمد</h3>
                    <span>مدينة نصر</span>
                  </div>
                </div>
                <div className="testimonial-service">
                  <span className="service-tag">نجارين</span>
                </div>
              </div>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="testimonial-text">
                <p>
                  "استعنت بهم لفك وتركيب غرفة نوم وغرفة أطفال. النجارين كانوا محترفين جداً وقاموا بالعمل بإتقان. سعيدة بالخدمة وسأتعامل معهم مجدداً."
                </p>
              </div>
              <div className="testimonial-date">
                <span>5 أغسطس 2025</span>
              </div>
            </div>

            <div className={`testimonial-card ${activeFilter === 'all' || activeFilter === 'ac' ? 'visible' : 'hidden'}`}>
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    <img src={testimonial} alt="محمد على" />
                  </div>
                  <div className="client-details">
                    <h3>محمد على</h3>
                    <span>المهندسين</span>
                  </div>
                </div>
                <div className="testimonial-service">
                  <span className="service-tag">تكييف</span>
                </div>
              </div>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="testimonial-text">
                <p>
                  "قاموا بتركيب 3 مكيفات سبليت في منزلي. الفني كان محترف جداً والعمل تم بدقة واحترافية. أسعار معقولة مقارنة بالسوق."
                </p>
              </div>
              <div className="testimonial-date">
                <span>15 يوليو 2025</span>
              </div>
            </div>

            <div className={`testimonial-card ${activeFilter === 'all' || activeFilter === 'packaging' ? 'visible' : 'hidden'}`}>
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    <img src={testimonial} alt="نورا محمد" />
                  </div>
                  <div className="client-details">
                    <h3>نورا محمد</h3>
                    <span>الزمالك</span>
                  </div>
                </div>
                <div className="testimonial-service">
                  <span className="service-tag">تغليف</span>
                </div>
              </div>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-text">
                <p>
                  "كنت قلقة جداً على الأثاث الزجاجي والتحف أثناء النقل، لكن فريق التغليف كان رائعاً. تم تغليف كل قطعة بعناية فائقة ولم يحدث أي كسر أو خدش. خدمة ممتازة."
                </p>
              </div>
              <div className="testimonial-date">
                <span>20 يونيو 2025</span>
              </div>
            </div>

            <div className={`testimonial-card ${activeFilter === 'all' || activeFilter === 'lifting' ? 'visible' : 'hidden'}`}>
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    <img src={testimonial} alt="محمود السيد" />
                  </div>
                  <div className="client-details">
                    <h3>محمود السيد</h3>
                    <span>التجمع الخامس</span>
                  </div>
                </div>
                <div className="testimonial-service">
                  <span className="service-tag">رفع وإنزال الأثاث</span>
                </div>
              </div>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-text">
                <p>
                  "خدمة متكاملة من الألف للياء. استخدمت خدماتهم لنقل أثاث شقة كاملة ورفعها للدور الثامن. الفريق كان محترف والسعر تنافسي جداً مقارنة بخدماتهم الممتازة."
                </p>
              </div>
              <div className="testimonial-date">
                <span>5 يونيو 2025</span>
              </div>
            </div>

            <div className={`testimonial-card ${activeFilter === 'all' || activeFilter === 'carpentry' ? 'visible' : 'hidden'}`}>
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    <img src={testimonial} alt="هدى إبراهيم" />
                  </div>
                  <div className="client-details">
                    <h3>هدى إبراهيم</h3>
                    <span>العبور</span>
                  </div>
                </div>
                <div className="testimonial-service">
                  <span className="service-tag">نجارين</span>
                </div>
              </div>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="testimonial-text">
                <p>
                  "النجارين عندهم محترفين وشغلهم دقيق جداً. قاموا بتركيب مطبخ كامل واستغرقوا وقت أقل من المتوقع مع الحفاظ على الجودة. أنصح بالتعامل معهم."
                </p>
              </div>
              <div className="testimonial-date">
                <span>15 مايو 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="video-testimonials-section section">
        <div className="container">
          <h2 className="section-title">فيديوهات العملاء</h2>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-container">
                <video controls>
                  <source src={video1} type="video/mp4" />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>
              <div className="video-info">
                <h3>تجربة العميل أحمد مع خدمة رفع الأثاث</h3>
                <span className="video-date">15 أبريل 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Review */}
      <section className="submit-review-section section">
        <div className="container">
          <div className="submit-review-container">
            <h2 className="section-title">شاركنا تجربتك</h2>
            <p className="section-subtitle">نرحب بآرائك وملاحظاتك حول خدماتنا</p>

            {submissionForm.submitted ? (
              <div className="submission-success">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>تم إرسال تقييمك بنجاح!</h3>
                <p>شكراً على مشاركتنا رأيك، نقدر ثقتك ودعمك لنا.</p>
              </div>
            ) : (
              <form className="review-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">الاسم *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={submissionForm.name}
                      onChange={handleInputChange}
                      required
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="area">المنطقة *</label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={submissionForm.area}
                      onChange={handleInputChange}
                      required
                      placeholder="المعادي، مدينة نصر، إلخ"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">الخدمة التي استخدمتها *</label>
                    <select
                      id="service"
                      name="service"
                      value={submissionForm.service}
                      onChange={handleInputChange}
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
                    <label htmlFor="rating">التقييم *</label>
                    <div className="rating-input">
                      <div className="rating-stars">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <label key={star}>
                            <input
                              type="radio"
                              name="rating"
                              value={star}
                              checked={submissionForm.rating === star.toString()}
                              onChange={handleInputChange}
                            />
                            <i className={`${parseInt(submissionForm.rating) >= star ? 'fas' : 'far'} fa-star`}></i>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="review">تجربتك مع الخدمة *</label>
                  <textarea
                    id="review"
                    name="review"
                    value={submissionForm.review}
                    onChange={handleInputChange}
                    required
                    placeholder="شاركنا تجربتك مع خدماتنا..."
                    rows="5"
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">إرسال التقييم</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>جرب خدماتنا الآن</h2>
            <p>انضم إلى آلاف العملاء الراضين واستفد من خدماتنا المميزة</p>
            <Link to="/contact" className="btn btn-primary">احجز خدمة</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
