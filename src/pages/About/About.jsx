import './About.css';
import { image1, image2, image3, image4, testimonial } from '../../utils/imports';
const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>من نحن</h1>
          <p>تعرف على قصة أوناش المهندس وفريقنا المحترف</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src={image3} alt="أوناش المهندس" />
            </div>
            <div className="about-text">
              <h2>قصة نجاحنا</h2>
              <p>
                تأسست شركة أوناش المهندس في عام 2010 بهدف تقديم حلول متكاملة في مجال رفع وإنزال الأثاث المنزلي، حيث لاحظنا حاجة السوق إلى خدمات احترافية وآمنة في هذا المجال.
              </p>
              <p>
                بدأنا بفريق صغير وأونش واحد، واليوم نمتلك أسطول من الأوناش الحديثة وفريق متكامل من الفنيين المتخصصين في مختلف المجالات من نجارين وفنيي تكييف وكهربائيين، مما يمكننا من تقديم خدمة متكاملة لعملائنا.
              </p>
              <p>
                نفتخر بأننا ساهمنا في رفع وإنزال أثاث أكثر من 10,000 عميل خلال السنوات الماضية، وحصلنا على ثقة العملاء وإشادتهم بخدماتنا المتميزة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="vision-mission-section section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <h3>رؤيتنا</h3>
              <p>
                نسعى لأن نكون الشركة الرائدة في مجال خدمات رفع وإنزال الأثاث المنزلي في مصر، وأن نصل بخدماتنا إلى جميع المحافظات، متميزين بالجودة والاحترافية والأسعار المناسبة.
              </p>
            </div>
            <div className="vm-card">
              <h3>رسالتنا</h3>
              <p>
                تقديم خدمات رفع وإنزال الأثاث بأعلى معايير الجودة والأمان، مع توفير حلول متكاملة تشمل فك وتركيب وتغليف الأثاث، بما يضمن رضا العملاء وراحتهم.
              </p>
            </div>
            <div className="vm-card">
              <h3>قيمنا</h3>
              <ul>
                <li>الاحترافية في العمل</li>
                <li>الأمانة والمصداقية</li>
                <li>الالتزام بالمواعيد</li>
                <li>الجودة في الخدمة</li>
                <li>رضا العملاء</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section section">
        <div className="container">
          <h2 className="section-title">فريق العمل</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={testimonial} alt="أحمد محمد" />
              </div>
              <h3>أحمد محمد</h3>
              <p>المدير التنفيذي</p>
              <div className="member-desc">
                <p>خبرة أكثر من 15 عاماً في مجال رفع الأثاث</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={testimonial} alt="محمد علي" />
              </div>
              <h3>محمد علي</h3>
              <p>رئيس فريق الأوناش</p>
              <div className="member-desc">
                <p>متخصص في تشغيل الأوناش بخبرة 10 سنوات</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={testimonial} alt="علي حسن" />
              </div>
              <h3>علي حسن</h3>
              <p>رئيس النجارين</p>
              <div className="member-desc">
                <p>خبير في فك وتركيب مختلف أنواع الأثاث</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={testimonial} alt="سامي محمود" />
              </div>
              <h3>سامي محمود</h3>
              <p>فني تكييف</p>
              <div className="member-desc">
                <p>متخصص في فك وتركيب وصيانة أجهزة التكييف</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section section">
        <div className="container">
          <h2 className="section-title">خبراتنا</h2>
          <div className="experience-stats">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-text">سنوات من الخبرة</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-text">عملية نقل ناجحة</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-text">فنيين محترفين</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-text">أونش حديث</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section section">
        <div className="container">
          <h2 className="section-title">لماذا تختارنا؟</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>الالتزام بالمواعيد</h3>
              <p>نصل في الوقت المحدد ونلتزم بإنهاء العمل في الموعد المتفق عليه</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>أمان وضمان</h3>
              <p>نقدم ضمان على سلامة المنقولات ونستخدم أحدث وسائل التغليف والحماية</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>فريق محترف</h3>
              <p>فريق عمل مدرب على أعلى مستوى وذو خبرة طويلة في المجال</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>أسعار تنافسية</h3>
              <p>نقدم خدماتنا بأسعار مناسبة وتنافسية مع الحفاظ على جودة الخدمة</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>أحدث المعدات</h3>
              <p>نستخدم أحدث الأوناش والمعدات لضمان سرعة وسلامة العمل</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <h3>خدمة متكاملة</h3>
              <p>من الفك والتغليف إلى الرفع والتركيب، نقدم خدمة شاملة ومتكاملة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
