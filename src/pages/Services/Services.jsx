import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Services.css';
import { image1, image2, image3, image4 } from '../../utils/imports';
const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState('lifting');

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const serviceId = location.hash.substring(1); // Remove the # character
      setActiveService(serviceId);

      // Scroll to the service section
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Function to handle service tab click
  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
  };

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>خدماتنا</h1>
          <p>نقدم مجموعة متكاملة من الخدمات لنقل وتركيب الأثاث</p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="services-nav section">
        <div className="container">
          <div className="service-tabs">
            <button
              className={`service-tab ${activeService === 'lifting' ? 'active' : ''}`}
              onClick={() => handleServiceClick('lifting')}
            >
              رفع وإنزال الأثاث
            </button>
            <button
              className={`service-tab ${activeService === 'carpentry' ? 'active' : ''}`}
              onClick={() => handleServiceClick('carpentry')}
            >
              نجارين متخصصين
            </button>
            <button
              className={`service-tab ${activeService === 'ac' ? 'active' : ''}`}
              onClick={() => handleServiceClick('ac')}
            >
              فني تكييف
            </button>
            <button
              className={`service-tab ${activeService === 'packaging' ? 'active' : ''}`}
              onClick={() => handleServiceClick('packaging')}
            >
              تغليف الأثاث
            </button>
            <button
              className={`service-tab ${activeService === 'electrical' ? 'active' : ''}`}
              onClick={() => handleServiceClick('electrical')}
            >
              كهربائي
            </button>
            <button
              className={`service-tab ${activeService === 'transport' ? 'active' : ''}`}
              onClick={() => handleServiceClick('transport')}
            >
              سيارات مغلقة
            </button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details section">
        <div className="container">
          {/* Lifting Service */}
          <div
            id="lifting"
            className={`service-detail ${activeService === 'lifting' ? 'active' : ''}`}
          >
            <div className="service-header">
              <h2>خدمة رفع وإنزال الأثاث</h2>
            </div>
            <div className="service-content">
              <div className="service-image">
                <img src={image1} alt="رفع وإنزال الأثاث" />
              </div>
              <div className="service-info">
                <p>
                  تتخصص شركة أوناش المهندس في رفع وإنزال الأثاث من وإلى الأدوار العالية باستخدام أحدث الأوناش والمعدات، مما يضمن سلامة الأثاث وعدم تعرضه للخدش أو التلف.
                </p>

                <h3>مميزات الخدمة:</h3>
                <ul>
                  <li>أوناش حديثة بارتفاعات مختلفة تصل حتى الدور العشرين</li>
                  <li>فريق متخصص في تثبيت وتشغيل الأوناش</li>
                  <li>تأمين الأثاث أثناء عملية الرفع والإنزال</li>
                  <li>سرعة في التنفيذ مع الحفاظ على أمان المنقولات</li>
                  <li>خدمة متاحة على مدار 24 ساعة</li>
                </ul>

                <h3>الحالات المناسبة للخدمة:</h3>
                <ul>
                  <li>رفع الأثاث للأدوار العالية حيث لا يوجد مصعد أو المصعد ضيق</li>
                  <li>رفع قطع الأثاث الكبيرة كالثلاجات والمطابخ والأسرة</li>
                  <li>رفع الأثاث بسرعة دون الحاجة إلى تفكيكه</li>
                </ul>

                <div className="service-cta">
                  <p>للحصول على الخدمة أو الاستفسار عن الأسعار:</p>
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Carpentry Service */}
          <div
            id="carpentry"
            className={`service-detail ${activeService === 'carpentry' ? 'active' : ''}`}
          >
            <div className="service-header">
              <h2>خدمة نجارين متخصصين</h2>
            </div>
            <div className="service-content">
              <div className="service-image">
                <img src={image2} alt="نجارين متخصصين" />
              </div>
              <div className="service-info">
                <p>
                  نوفر فريق من النجارين المحترفين القادرين على فك وتركيب جميع أنواع الأثاث المنزلي، مثل غرف النوم والمطابخ وغرف الأطفال وغيرها.
                </p>

                <h3>مميزات الخدمة:</h3>
                <ul>
                  <li>نجارين ذوي خبرة لا تقل عن 10 سنوات</li>
                  <li>أدوات ومعدات نجارة حديثة</li>
                  <li>دقة وإتقان في الفك والتركيب</li>
                  <li>الاهتمام بأدق التفاصيل</li>
                  <li>ضمان على الخدمة</li>
                </ul>

                <h3>الخدمات المقدمة:</h3>
                <ul>
                  <li>فك وتركيب غرف النوم</li>
                  <li>فك وتركيب المطابخ</li>
                  <li>فك وتركيب الدواليب والمكتبات</li>
                  <li>فك وتركيب الأسرة وغرف الأطفال</li>
                  <li>إصلاح وصيانة الأثاث</li>
                </ul>

                <div className="service-cta">
                  <p>للحصول على الخدمة أو الاستفسار عن الأسعار:</p>
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>

          {/* AC Service */}
          <div
            id="ac"
            className={`service-detail ${activeService === 'ac' ? 'active' : ''}`}
          >
            <div className="service-header">
              <h2>خدمة فني تكييف</h2>
            </div>
            <div className="service-content">
              <div className="service-image">
                <img src={image3} alt="فني تكييف" />
              </div>
              <div className="service-info">
                <p>
                  يتوفر لدينا فنيين متخصصين في فك وتركيب وصيانة أجهزة التكييف بجميع أنواعها، سواء كانت شباك، سبليت، أو مركزي.
                </p>

                <h3>مميزات الخدمة:</h3>
                <ul>
                  <li>فنيين مدربين على أعلى مستوى</li>
                  <li>استخدام معدات حديثة</li>
                  <li>ضمان على خدمات الفك والتركيب</li>
                  <li>الالتزام بالمواعيد</li>
                  <li>خدمة ما بعد التركيب</li>
                </ul>

                <h3>الخدمات المقدمة:</h3>
                <ul>
                  <li>فك وتركيب مكيفات الشباك</li>
                  <li>فك وتركيب مكيفات السبليت</li>
                  <li>شحن غاز التكييف</li>
                  <li>صيانة وتنظيف المكيفات</li>
                  <li>استبدال قطع الغيار</li>
                </ul>

                <div className="service-cta">
                  <p>للحصول على الخدمة أو الاستفسار عن الأسعار:</p>
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging Service */}
          <div
            id="packaging"
            className={`service-detail ${activeService === 'packaging' ? 'active' : ''}`}
          >
            <div className="service-header">
              <h2>خدمة تغليف الأثاث</h2>
            </div>
            <div className="service-content">
              <div className="service-image">
                <img src={image4} alt="تغليف الأثاث" />
              </div>
              <div className="service-info">
                <p>
                  نقدم خدمة تغليف الأثاث باستخدام أجود أنواع مواد التغليف لحماية الأثاث من الخدوش والكسر أثناء عمليات النقل والرفع.
                </p>

                <h3>مميزات الخدمة:</h3>
                <ul>
                  <li>مواد تغليف عالية الجودة</li>
                  <li>تغليف متخصص لكل نوع من الأثاث</li>
                  <li>حماية كاملة للأثاث الزجاجي والقابل للكسر</li>
                  <li>ضمان عدم تعرض الأثاث للخدش أو التلف</li>
                  <li>سرعة في التنفيذ</li>
                </ul>

                <h3>أنواع التغليف:</h3>
                <ul>
                  <li>تغليف بالبلاستيك الفقاعي لحماية الأسطح</li>
                  <li>تغليف بالكرتون المقوى للقطع القابلة للكسر</li>
                  <li>تغليف خاص للأجهزة الكهربائية</li>
                  <li>تغليف خاص للتحف والأغراض الثمينة</li>
                  <li>تغليف للمفروشات والأقمشة</li>
                </ul>

                <div className="service-cta">
                  <p>للحصول على الخدمة أو الاستفسار عن الأسعار:</p>
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Electrical Service */}
          <div
            id="electrical"
            className={`service-detail ${activeService === 'electrical' ? 'active' : ''}`}
          >
            <div className="service-header">
              <h2>خدمة كهربائي</h2>
            </div>
            <div className="service-content">
              <div className="service-image">
                <img src={image1} alt="كهربائي" />
              </div>
              <div className="service-info">
                <p>
                  يتوفر لدينا فني كهرباء متخصص في تركيب وصيانة الأجهزة الكهربائية المنزلية وتوصيل الإضاءة وإصلاح المشكلات الكهربائية.
                </p>

                <h3>مميزات الخدمة:</h3>
                <ul>
                  <li>فنيين كهرباء ذوي خبرة عالية</li>
                  <li>أدوات ومعدات حديثة وآمنة</li>
                  <li>سرعة في الاستجابة وحل المشكلات</li>
                  <li>ضمان على جميع الأعمال الكهربائية</li>
                  <li>التزام بمعايير السلامة</li>
                </ul>

                <h3>الخدمات المقدمة:</h3>
                <ul>
                  <li>تركيب وصيانة الأجهزة الكهربائية</li>
                  <li>تركيب وصيانة وحدات الإضاءة</li>
                  <li>إصلاح الأعطال الكهربائية</li>
                  <li>تمديد وتجديد الشبكات الكهربائية</li>
                  <li>فحص وصيانة لوحات الكهرباء</li>
                </ul>

                <div className="service-cta">
                  <p>للحصول على الخدمة أو الاستفسار عن الأسعار:</p>
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Service */}
          <div
            id="transport"
            className={`service-detail ${activeService === 'transport' ? 'active' : ''}`}
          >
            <div className="service-header">
              <h2>خدمة سيارات مغلقة للنقل</h2>
            </div>
            <div className="service-content">
              <div className="service-image">
                <img src={image2} alt="سيارات مغلقة للنقل" />
              </div>
              <div className="service-info">
                <p>
                  نوفر سيارات مغلقة مجهزة لنقل الأثاث والمنقولات بأمان وحماية كاملة من العوامل الجوية والأتربة.
                </p>

                <h3>مميزات الخدمة:</h3>
                <ul>
                  <li>سيارات مغلقة ومجهزة خصيصاً لنقل الأثاث</li>
                  <li>أحجام مختلفة من السيارات لتناسب جميع الاحتياجات</li>
                  <li>سائقين محترفين ذوي خبرة</li>
                  <li>تأمين على المنقولات أثناء النقل</li>
                  <li>سرعة في التوصيل والالتزام بالمواعيد</li>
                </ul>

                <h3>أنواع الخدمات:</h3>
                <ul>
                  <li>نقل الأثاث المنزلي</li>
                  <li>نقل المكاتب والشركات</li>
                  <li>نقل الأجهزة الكهربائية</li>
                  <li>نقل البضائع والمعدات</li>
                  <li>خدمات النقل داخل وخارج المدينة</li>
                </ul>

                <div className="service-cta">
                  <p>للحصول على الخدمة أو الاستفسار عن الأسعار:</p>
                  <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="service-process-section section">
        <div className="container">
          <h2 className="section-title">كيف تتم الخدمة؟</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>1. الاتصال وطلب الخدمة</h3>
              <p>اتصل بنا أو أرسل طلبك عبر موقعنا لحجز الخدمة</p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <h3>2. معاينة وتقدير السعر</h3>
              <p>فريقنا سيقوم بمعاينة المكان وتقدير التكلفة النهائية</p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>3. تحديد الموعد</h3>
              <p>نتفق على موعد يناسبك لتنفيذ الخدمة</p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>4. تنفيذ الخدمة</h3>
              <p>نقوم بتنفيذ الخدمة بأعلى مستويات الجودة والاحترافية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>جاهزون لتقديم خدماتنا على مدار الساعة</h2>
            <p>اتصل بنا الآن واحصل على خدمة متميزة وعروض حصرية</p>
            <Link to="/contact" className="btn btn-primary">احجز الآن</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
