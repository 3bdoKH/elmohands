import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const [selectedPricing, setSelectedPricing] = useState('standard');

  // Function to handle pricing tab click
  const handlePricingClick = (pricingType) => {
    setSelectedPricing(pricingType);
  };

  return (
    <div className="pricing-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>الأسعار</h1>
          <p>أسعار تنافسية مع أفضل جودة للخدمات</p>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="pricing-categories section">
        <div className="container">
          <div className="category-tabs">
            <button
              className={`category-tab ${selectedPricing === 'standard' ? 'active' : ''}`}
              onClick={() => handlePricingClick('standard')}
            >
              الخدمات الأساسية
            </button>
            <button
              className={`category-tab ${selectedPricing === 'packages' ? 'active' : ''}`}
              onClick={() => handlePricingClick('packages')}
            >
              الباقات المتكاملة
            </button>
            <button
              className={`category-tab ${selectedPricing === 'additional' ? 'active' : ''}`}
              onClick={() => handlePricingClick('additional')}
            >
              الخدمات الإضافية
            </button>
          </div>
        </div>
      </section>

      {/* Standard Pricing */}
      <section
        className={`pricing-tables section ${selectedPricing === 'standard' ? 'active' : ''}`}
        id="standard-pricing"
      >
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">أسعار الخدمات الأساسية</h2>
            <p className="section-description">
              الأسعار التقريبية للخدمات المنفردة، وقد تختلف حسب المسافة والدور والكمية
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>رفع وإنزال الأثاث</h3>
                <div className="pricing-icon">
                  <i className="fas fa-truck-loading"></i>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <span>رفع القطع الصغيرة</span>
                    <span className="price">٣٠٠-٥٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>رفع الأثاث للدور الخامس</span>
                    <span className="price">٥٠٠-٧٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>رفع الأثاث للدور العاشر</span>
                    <span className="price">١٠٠٠-١٢٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>رفع أجهزة كهربائية كبيرة</span>
                    <span className="price">٤٠٠-٦٠٠ جنيه</span>
                  </li>
                </ul>
                <div className="pricing-note">
                  * الأسعار تشمل الأونش والعمالة فقط
                </div>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>خدمات النجارة</h3>
                <div className="pricing-icon">
                  <i className="fas fa-tools"></i>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <span>فك وتركيب غرفة نوم</span>
                    <span className="price">٤٠٠-٦٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>فك وتركيب مطبخ</span>
                    <span className="price">٦٠٠-٨٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>فك وتركيب دولاب</span>
                    <span className="price">٣٠٠-٥٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>فك وتركيب سرير</span>
                    <span className="price">٢٠٠-٣٠٠ جنيه</span>
                  </li>
                </ul>
                <div className="pricing-note">
                  * الأسعار تختلف حسب حجم وتعقيد الأثاث
                </div>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>خدمات التكييف</h3>
                <div className="pricing-icon">
                  <i className="fas fa-wind"></i>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <span>فك وتركيب مكيف شباك</span>
                    <span className="price">٣٠٠-٤٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>فك وتركيب مكيف سبليت</span>
                    <span className="price">٦٠٠-٨٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>شحن غاز التكييف</span>
                    <span className="price">٣٠٠-٤٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>صيانة وتنظيف</span>
                    <span className="price">٢٠٠-٣٠٠ جنيه</span>
                  </li>
                </ul>
                <div className="pricing-note">
                  * الأسعار لا تشمل قطع الغيار
                </div>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>تغليف الأثاث</h3>
                <div className="pricing-icon">
                  <i className="fas fa-box"></i>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <span>تغليف غرفة نوم كاملة</span>
                    <span className="price">٤٠٠-٦٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>تغليف قطع الأثاث الكبيرة</span>
                    <span className="price">١٥٠-٢٥٠ جنيه/قطعة</span>
                  </li>
                  <li>
                    <span>تغليف الأجهزة الكهربائية</span>
                    <span className="price">١٠٠-٢٠٠ جنيه/جهاز</span>
                  </li>
                  <li>
                    <span>تغليف الأثاث الزجاجي</span>
                    <span className="price">٢٠٠-٣٠٠ جنيه/قطعة</span>
                  </li>
                </ul>
                <div className="pricing-note">
                  * الأسعار تشمل مواد التغليف والعمالة
                </div>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section
        className={`pricing-tables section ${selectedPricing === 'packages' ? 'active' : ''}`}
        id="packages-pricing"
      >
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">باقات الخدمات المتكاملة</h2>
            <p className="section-description">
              باقات متكاملة للخدمات مع خصومات خاصة
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card featured">
              <div className="pricing-header">
                <h3>باقة الشقة الصغيرة</h3>
                <div className="pricing-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="pricing-price">
                  <span className="price-value">١٨٠٠</span>
                  <span className="price-currency">جنيه</span>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check"></i>
                    <span>رفع أثاث شقة صغيرة (غرفتين)</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>فك وتركيب الأثاث</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>تغليف الأثاث الأساسي</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>فك وتركيب مكيف واحد</span>
                  </li>
                  <li>
                    <i className="fas fa-times"></i>
                    <span>نقل بسيارة مغلقة</span>
                  </li>
                </ul>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="pricing-card featured highlighted">
              <div className="pricing-tag">الأكثر طلباً</div>
              <div className="pricing-header">
                <h3>باقة الشقة المتوسطة</h3>
                <div className="pricing-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="pricing-price">
                  <span className="price-value">٢٨٠٠</span>
                  <span className="price-currency">جنيه</span>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check"></i>
                    <span>رفع أثاث شقة متوسطة (ثلاث غرف)</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>فك وتركيب الأثاث</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>تغليف الأثاث بالكامل</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>فك وتركيب مكيفين</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>نقل بسيارة مغلقة</span>
                  </li>
                </ul>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-header">
                <h3>باقة الشقة الكبيرة</h3>
                <div className="pricing-icon">
                  <i className="fas fa-city"></i>
                </div>
                <div className="pricing-price">
                  <span className="price-value">٣٨٠٠</span>
                  <span className="price-currency">جنيه</span>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check"></i>
                    <span>رفع أثاث شقة كبيرة (+4 غرف)</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>فك وتركيب الأثاث بالكامل</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>تغليف الأثاث بالكامل</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>فك وتركيب ٣ مكيفات</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>نقل بسيارة مغلقة</span>
                  </li>
                </ul>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section
        className={`pricing-tables section ${selectedPricing === 'additional' ? 'active' : ''}`}
        id="additional-pricing"
      >
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">الخدمات الإضافية</h2>
            <p className="section-description">
              خدمات متنوعة يمكن إضافتها حسب احتياجك
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>خدمات كهربائية</h3>
                <div className="pricing-icon">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <span>تركيب وحدات الإضاءة</span>
                    <span className="price">١٠٠-٢٠٠ جنيه/وحدة</span>
                  </li>
                  <li>
                    <span>فحص وإصلاح الأعطال</span>
                    <span className="price">٣٠٠-٥٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>تمديد أسلاك جديدة</span>
                    <span className="price">حسب المساحة</span>
                  </li>
                  <li>
                    <span>تركيب لوحات كهرباء</span>
                    <span className="price">٥٠٠-١٠٠٠ جنيه</span>
                  </li>
                </ul>
                <div className="pricing-note">
                  * الأسعار لا تشمل قطع الغيار والمواد
                </div>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>خدمات نقل بالسيارات</h3>
                <div className="pricing-icon">
                  <i className="fas fa-truck"></i>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <span>نقل أثاث شقة صغيرة</span>
                    <span className="price">٨٠٠-١٠٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>نقل أثاث شقة متوسطة</span>
                    <span className="price">١٢٠٠-١٥٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>نقل أثاث شقة كبيرة</span>
                    <span className="price">١٨٠٠-٢٢٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>نقل قطع فردية</span>
                    <span className="price">٤٠٠-٦٠٠ جنيه</span>
                  </li>
                </ul>
                <div className="pricing-note">
                  * الأسعار تختلف حسب المسافة والمنطقة
                </div>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>خدمات إضافية متنوعة</h3>
                <div className="pricing-icon">
                  <i className="fas fa-plus-circle"></i>
                </div>
              </div>
              <div className="pricing-content">
                <ul className="pricing-features">
                  <li>
                    <span>تنظيف المنزل بعد النقل</span>
                    <span className="price">٣٠٠-٦٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>تركيب ستائر</span>
                    <span className="price">٢٠٠-٤٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>تركيب تحف وديكورات</span>
                    <span className="price">٣٠٠-٥٠٠ جنيه</span>
                  </li>
                  <li>
                    <span>تخزين الأثاث</span>
                    <span className="price">حسب المدة والحجم</span>
                  </li>
                </ul>
                <div className="pricing-note">
                  * استشر فريقنا للحصول على التفاصيل
                </div>
                <div className="pricing-action">
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="pricing-notes section">
        <div className="container">
          <h2 className="section-title">ملاحظات هامة</h2>
          <div className="notes-grid">
            <div className="note-card">
              <div className="note-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="note-content">
                <h3>الأسعار تقريبية</h3>
                <p>جميع الأسعار المعروضة تقريبية وقد تختلف حسب الموقع والمسافة وحجم الأثاث والطابق وعوامل أخرى.</p>
              </div>
            </div>

            <div className="note-card">
              <div className="note-icon">
                <i className="fas fa-percent"></i>
              </div>
              <div className="note-content">
                <h3>الخصومات</h3>
                <p>نقدم خصومات خاصة للطلبات المتكررة، والطلبات الكبيرة، والعملاء الدائمين. اسأل فريقنا عن العروض المتاحة.</p>
              </div>
            </div>

            <div className="note-card">
              <div className="note-icon">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div className="note-content">
                <h3>عرض الأسعار المفصل</h3>
                <p>يمكنك طلب عرض سعر مفصل ودقيق لاحتياجاتك الخاصة عبر التواصل مع فريقنا.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pricing-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>لمزيد من التفاصيل والاستفسارات</h2>
            <p>فريقنا متاح للرد على استفساراتك وتقديم عرض سعر مناسب لاحتياجاتك</p>
            <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
