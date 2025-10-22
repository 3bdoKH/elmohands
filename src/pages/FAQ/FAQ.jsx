import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('general');
    const [openQuestions, setOpenQuestions] = useState({});

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const toggleQuestion = (questionId) => {
        setOpenQuestions(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    // FAQ data - in a real application this would come from an API or CMS
    const faqData = {
        general: [
            {
                id: 'general-1',
                question: 'ما هي مواعيد العمل؟',
                answer: 'نحن متاحون من السبت إلى الخميس من الساعة 9 صباحاً وحتى 10 مساءً. أما يوم الجمعة فمن الساعة 2 ظهراً حتى 10 مساءً. كما نوفر خدمة طوارئ على مدار 24 ساعة للحالات العاجلة.'
            },
            {
                id: 'general-2',
                question: 'ما هي المناطق التي تغطونها؟',
                answer: 'نقدم خدماتنا في جميع أنحاء القاهرة الكبرى بما في ذلك القاهرة والجيزة والتجمع الخامس والمناطق الجديدة مثل العبور والشروق ومدينتي وغيرها. يمكنك التواصل معنا للتأكد من تغطية منطقتك.'
            },
            {
                id: 'general-3',
                question: 'كيف يمكنني حجز خدمة؟',
                answer: 'يمكنك حجز الخدمة عن طريق الاتصال بنا على الأرقام الموضحة في موقعنا، أو عبر الواتساب، أو من خلال نموذج الاتصال في صفحة "اتصل بنا" على الموقع. سنقوم بالرد عليك في أقرب وقت ممكن لتأكيد الحجز وتحديد الموعد المناسب.'
            },
            {
                id: 'general-4',
                question: 'كم يستغرق وقت الاستجابة للطلبات؟',
                answer: 'نحن نسعى للاستجابة لجميع الطلبات في أقرب وقت ممكن. في المتوسط، نصل خلال ساعة واحدة للحالات العاجلة، وخلال 24 ساعة للطلبات العادية. يمكنك أيضاً حجز موعد مسبق للخدمة في الوقت الذي يناسبك.'
            },
            {
                id: 'general-5',
                question: 'هل تقدمون ضمان على الخدمات؟',
                answer: 'نعم، نقدم ضمان على جميع خدماتنا. نحن نضمن سلامة الأثاث والمنقولات أثناء عمليات الرفع والنقل والتركيب. في حالة حدوث أي ضرر بسبب خدماتنا، فنحن نتحمل المسؤولية الكاملة عن الإصلاح أو التعويض.'
            }
        ],
        services: [
            {
                id: 'services-1',
                question: 'ما هي أنواع الأوناش التي تستخدمونها؟',
                answer: 'نستخدم مجموعة متنوعة من الأوناش الحديثة بارتفاعات مختلفة تصل حتى الدور العشرين. لدينا أوناش هيدروليكية وكهربائية ويدوية لتناسب مختلف الاحتياجات والظروف. جميع أوناشنا خاضعة للصيانة الدورية لضمان الأمان والكفاءة.'
            },
            {
                id: 'services-2',
                question: 'هل يمكنكم رفع جميع أنواع الأثاث؟',
                answer: 'نعم، يمكننا رفع جميع أنواع الأثاث المنزلي مهما كان حجمه أو وزنه، بما في ذلك الغرف الكاملة، المطابخ، الأجهزة الكهربائية الكبيرة مثل الثلاجات والغسالات، التحف والقطع الفنية، وحتى خزائن الأسلحة والخزنات.'
            },
            {
                id: 'services-3',
                question: 'هل خدمات الفك والتركيب تشمل جميع أنواع الأثاث؟',
                answer: 'نعم، لدينا نجارين متخصصين قادرين على فك وتركيب جميع أنواع الأثاث المنزلي بما في ذلك غرف النوم، المطابخ، غرف الأطفال، المكتبات، الكراسي، الطاولات، وغيرها. كما نقوم بتركيب وفك المكيفات والستائر والديكورات.'
            },
            {
                id: 'services-4',
                question: 'ماذا يشمل تغليف الأثاث؟',
                answer: 'تشمل خدمة تغليف الأثاث استخدام مواد تغليف عالية الجودة مثل البلاستيك الفقاعي، الكرتون المقوى، البطانيات الخاصة، والأشرطة الآمنة. يتم تغليف كل قطعة بما يناسبها لضمان حمايتها من الخدوش، الكسر، الغبار، والعوامل الجوية أثناء عمليات النقل والرفع.'
            },
            {
                id: 'services-5',
                question: 'هل تقدمون خدمات النقل خارج القاهرة؟',
                answer: 'نعم، نقدم خدمات النقل إلى المحافظات الأخرى مثل الإسكندرية، الغردقة، شرم الشيخ، والساحل الشمالي. يرجى التواصل معنا مقدماً لمعرفة التفاصيل والأسعار الخاصة بالنقل خارج القاهرة الكبرى.'
            }
        ],
        pricing: [
            {
                id: 'pricing-1',
                question: 'كيف يتم تحديد أسعار الخدمات؟',
                answer: 'يتم تحديد الأسعار بناءً على عدة عوامل منها: نوع الخدمة المطلوبة، كمية وحجم الأثاث، الطابق، المسافة، الوقت المطلوب للتنفيذ، وما إذا كانت هناك حاجة لخدمات إضافية. يمكنك الاطلاع على قائمة الأسعار التقريبية في صفحة "الأسعار" أو التواصل معنا للحصول على عرض سعر مفصل.'
            },
            {
                id: 'pricing-2',
                question: 'هل هناك رسوم إضافية غير معلنة؟',
                answer: 'لا، نحن نلتزم بالشفافية الكاملة في التعامل. جميع التكاليف يتم تحديدها وإبلاغك بها قبل بدء العمل. في حالة ظهور أي متطلبات إضافية أثناء العمل، سنناقشها معك ونحصل على موافقتك قبل تنفيذها أو إضافة أي تكاليف.'
            },
            {
                id: 'pricing-3',
                question: 'هل تقدمون خصومات للكميات الكبيرة؟',
                answer: 'نعم، نقدم خصومات خاصة للطلبات الكبيرة مثل نقل شقة كاملة أو مكتب أو شركة. كما نقدم خصومات للعملاء الدائمين والطلبات المتكررة. يمكنك الاستفسار عن العروض والخصومات المتاحة عند التواصل معنا.'
            },
            {
                id: 'pricing-4',
                question: 'ما هي طرق الدفع المتاحة؟',
                answer: 'نقبل الدفع نقداً بعد الانتهاء من الخدمة مباشرة. كما نوفر إمكانية الدفع عبر التحويل البنكي، وبعض تطبيقات الدفع الإلكتروني. يمكن مناقشة طريقة الدفع المناسبة لك عند حجز الخدمة.'
            },
            {
                id: 'pricing-5',
                question: 'هل مطلوب دفعة مقدمة؟',
                answer: 'عادة ما نطلب دفعة مقدمة بنسبة 30% من إجمالي قيمة الخدمة للحجز، خاصة في الطلبات الكبيرة أو الخدمات التي تتطلب إعداداً مسبقاً. ويتم سداد المبلغ المتبقي بعد الانتهاء من الخدمة والتأكد من رضاك عن العمل.'
            }
        ],
        safety: [
            {
                id: 'safety-1',
                question: 'ما هي إجراءات السلامة التي تتبعونها؟',
                answer: 'نتبع إجراءات سلامة صارمة تشمل: استخدام معدات حديثة خاضعة للصيانة الدورية، توفير معدات الحماية الشخصية للعاملين، اتباع أساليب الرفع والنقل الآمنة، تدريب العاملين على إجراءات السلامة، وتأمين منطقة العمل لحماية المارة والممتلكات.'
            },
            {
                id: 'safety-2',
                question: 'هل لديكم تأمين على الخدمات؟',
                answer: 'نعم، لدينا تأمين شامل يغطي جميع خدماتنا والأضرار التي قد تحدث للأثاث أو الممتلكات أثناء عملنا. هذا يعطي عملائنا راحة البال والثقة الكاملة في خدماتنا.'
            },
            {
                id: 'safety-3',
                question: 'كيف تتعاملون مع الأثاث القيم والتحف؟',
                answer: 'نولي اهتماماً خاصاً للأثاث القيم والتحف والقطع الفنية. نستخدم مواد تغليف متخصصة وطرق تعامل خاصة لهذه القطع، ويقوم بالتعامل معها فنيون ذوو خبرة في هذا المجال لضمان سلامتها.'
            },
            {
                id: 'safety-4',
                question: 'ماذا يحدث في حالة تلف أو كسر شيء أثناء العمل؟',
                answer: 'في الحالات النادرة التي قد يحدث فيها تلف أو كسر بسبب خطأ من فريقنا، نتحمل المسؤولية الكاملة عن الإصلاح أو التعويض. يتم تقييم الضرر فوراً وتحديد الإجراء المناسب بالتنسيق معك.'
            }
        ]
    };

    return (
        <div className="faq-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>الأسئلة الشائعة</h1>
                    <p>الإجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="faq-content-section section">
                <div className="container">
                    <div className="faq-container">
                        {/* FAQ Categories */}
                        <div className="faq-categories">
                            <button
                                className={`category-btn ${activeCategory === 'general' ? 'active' : ''}`}
                                onClick={() => handleCategoryClick('general')}
                            >
                                <i className="fas fa-info-circle"></i>
                                <span>معلومات عامة</span>
                            </button>

                            <button
                                className={`category-btn ${activeCategory === 'services' ? 'active' : ''}`}
                                onClick={() => handleCategoryClick('services')}
                            >
                                <i className="fas fa-truck-loading"></i>
                                <span>الخدمات</span>
                            </button>

                            <button
                                className={`category-btn ${activeCategory === 'pricing' ? 'active' : ''}`}
                                onClick={() => handleCategoryClick('pricing')}
                            >
                                <i className="fas fa-tag"></i>
                                <span>الأسعار</span>
                            </button>

                            <button
                                className={`category-btn ${activeCategory === 'safety' ? 'active' : ''}`}
                                onClick={() => handleCategoryClick('safety')}
                            >
                                <i className="fas fa-shield-alt"></i>
                                <span>الأمان والضمان</span>
                            </button>
                        </div>

                        {/* FAQ Questions */}
                        <div className="faq-questions">
                            <div className={`faq-category ${activeCategory === 'general' ? 'active' : ''}`}>
                                <h2>معلومات عامة</h2>
                                <div className="faq-list">
                                    {faqData.general.map(item => (
                                        <div
                                            key={item.id}
                                            className={`faq-item ${openQuestions[item.id] ? 'active' : ''}`}
                                        >
                                            <div
                                                className="faq-question"
                                                onClick={() => toggleQuestion(item.id)}
                                            >
                                                <h3>{item.question}</h3>
                                                <div className="faq-toggle">
                                                    <i className={`fas ${openQuestions[item.id] ? 'fa-minus' : 'fa-plus'}`}></i>
                                                </div>
                                            </div>
                                            <div className="faq-answer">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`faq-category ${activeCategory === 'services' ? 'active' : ''}`}>
                                <h2>الخدمات</h2>
                                <div className="faq-list">
                                    {faqData.services.map(item => (
                                        <div
                                            key={item.id}
                                            className={`faq-item ${openQuestions[item.id] ? 'active' : ''}`}
                                        >
                                            <div
                                                className="faq-question"
                                                onClick={() => toggleQuestion(item.id)}
                                            >
                                                <h3>{item.question}</h3>
                                                <div className="faq-toggle">
                                                    <i className={`fas ${openQuestions[item.id] ? 'fa-minus' : 'fa-plus'}`}></i>
                                                </div>
                                            </div>
                                            <div className="faq-answer">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`faq-category ${activeCategory === 'pricing' ? 'active' : ''}`}>
                                <h2>الأسعار</h2>
                                <div className="faq-list">
                                    {faqData.pricing.map(item => (
                                        <div
                                            key={item.id}
                                            className={`faq-item ${openQuestions[item.id] ? 'active' : ''}`}
                                        >
                                            <div
                                                className="faq-question"
                                                onClick={() => toggleQuestion(item.id)}
                                            >
                                                <h3>{item.question}</h3>
                                                <div className="faq-toggle">
                                                    <i className={`fas ${openQuestions[item.id] ? 'fa-minus' : 'fa-plus'}`}></i>
                                                </div>
                                            </div>
                                            <div className="faq-answer">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`faq-category ${activeCategory === 'safety' ? 'active' : ''}`}>
                                <h2>الأمان والضمان</h2>
                                <div className="faq-list">
                                    {faqData.safety.map(item => (
                                        <div
                                            key={item.id}
                                            className={`faq-item ${openQuestions[item.id] ? 'active' : ''}`}
                                        >
                                            <div
                                                className="faq-question"
                                                onClick={() => toggleQuestion(item.id)}
                                            >
                                                <h3>{item.question}</h3>
                                                <div className="faq-toggle">
                                                    <i className={`fas ${openQuestions[item.id] ? 'fa-minus' : 'fa-plus'}`}></i>
                                                </div>
                                            </div>
                                            <div className="faq-answer">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Not Found Question */}
            <section className="not-found-question-section section">
                <div className="container">
                    <div className="not-found-content">
                        <h2>لم تجد إجابة لسؤالك؟</h2>
                        <p>لا تتردد في التواصل معنا مباشرة للإجابة على جميع استفساراتك</p>
                        <div className="not-found-actions">
                            <Link to="/contact" className="btn btn-primary">اتصل بنا</Link>
                            <a href="https://wa.me/+201001170088" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <i className="fab fa-whatsapp"></i> واتساب
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Questions */}
            <section className="common-questions-section section">
                <div className="container">
                    <h2 className="section-title">أسئلة شائعة أخرى</h2>
                    <div className="common-questions-grid">
                        <div className="common-question-card">
                            <h3>هل خدماتكم متاحة في المناطق الجديدة؟</h3>
                            <p>نعم، نغطي جميع المناطق الجديدة مثل التجمع الخامس والرحاب ومدينتي والشروق والعبور والعاصمة الإدارية الجديدة.</p>
                        </div>

                        <div className="common-question-card">
                            <h3>هل يمكنني الحجز في نفس اليوم؟</h3>
                            <p>نعم، نوفر خدمة الحجز السريع للحالات العاجلة. يمكنك الاتصال بنا وسنحاول توفير الخدمة في أقرب وقت ممكن.</p>
                        </div>

                        <div className="common-question-card">
                            <h3>هل يمكنكم رفع أثاث في الشوارع الضيقة؟</h3>
                            <p>نعم، لدينا أوناش خاصة للشوارع والمناطق الضيقة حيث يصعب استخدام الأوناش الكبيرة.</p>
                        </div>

                        <div className="common-question-card">
                            <h3>هل تقدمون خدمة تخزين الأثاث؟</h3>
                            <p>نعم، نوفر خدمة تخزين الأثاث في مستودعات آمنة ومجهزة للحفاظ على الأثاث لفترات قصيرة أو طويلة.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="faq-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>جاهزون للإجابة على جميع استفساراتك</h2>
                        <p>فريقنا متاح على مدار الساعة للرد على جميع أسئلتك واستفساراتك</p>
                        <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
