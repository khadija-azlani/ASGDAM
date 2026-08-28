'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Languages, 
  BookOpen, 
  Heart, 
  HeartHandshake,
  Code2,
  Compass,
  Flame,
  Lightbulb,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState('ar');
  const getTextDirection = () => (currentLang === 'en' ? 'ltr' : 'rtl');

  return (
    <main 
      className="min-h-screen text-[#174A43] relative overflow-hidden font-sans pb-36 selection:bg-[#C65A3A] selection:text-white"
      style={{
        backgroundColor: '#F7F1E5',
        backgroundImage: `
          linear-gradient(30deg, rgba(23, 74, 67, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(23, 74, 67, 0.03) 87.5%, rgba(23, 74, 67, 0.03)),
          linear-gradient(150deg, rgba(23, 74, 67, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(23, 74, 67, 0.03) 87.5%, rgba(23, 74, 67, 0.03))
        `,
        backgroundSize: '60px 104px'
      }}
    >
      <div className="bg-[#174A43] text-[#F7F1E5] py-3 px-6 text-center text-xs font-mono tracking-widest uppercase border-b border-[#D4A84F]/30 flex items-center justify-center gap-3 shadow-md relative z-10">
        <Sparkles className="w-4 h-4 text-[#D4A84F] animate-spin" />
        <span>ASGDAM • Sanctuary of Wisdom & Knowledge</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4 relative z-10 flex flex-wrap items-center justify-between gap-4">
        <Link 
          href="/articles"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-[#174A43]/15 text-xs font-bold text-[#174A43] hover:bg-[#174A43] hover:text-white transition-all shadow-sm"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة إلى المكتبة / Back to Library</span>
        </Link>

        <div className="flex items-center bg-white/90 p-1.5 rounded-2xl border border-[#174A43]/15 shadow-sm gap-1">
          <Languages className="w-3.5 h-3.5 text-[#C65A3A] ml-2" />
          <button 
            onClick={() => setCurrentLang('ar')} 
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentLang === 'ar' ? 'bg-[#174A43] text-white shadow-sm' : 'text-[#174A43]/70 hover:bg-[#174A43]/10'}`}
          >
            العربية
          </button>
          <button 
            onClick={() => setCurrentLang('en')} 
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${currentLang === 'en' ? 'bg-[#174A43] text-white shadow-sm' : 'text-[#174A43]/70 hover:bg-[#174A43]/10'}`}
          >
            English
          </button>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8 relative z-10 text-center" dir={getTextDirection()}>
        <div className="bg-white/95 rounded-[2.5rem] border border-[#174A43]/15 p-8 sm:p-14 shadow-xl backdrop-blur-xl space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-[#174A43]/10 text-[#174A43] px-4 py-1.5 rounded-full text-xs font-mono font-bold">
            <Heart className="w-3.5 h-3.5 text-[#C65A3A] fill-current" />
            {currentLang === 'ar' ? 'قصتنا الهادئة • Our Aesthetic Story' : 'Our Aesthetic Story • قصتنا الهادئة'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#174A43] leading-tight">
            {currentLang === 'ar' ? 'مرحباً بك في عالم ASGDAM' : 'Welcome to the World of ASGDAM'}
          </h1>
          <p className="text-base sm:text-lg text-[#174A43]/80 font-serif max-w-2xl mx-auto leading-relaxed">
            {currentLang === 'ar' 
              ? 'ملاذ دافئ و هادئ لكل الأجيال والشرائح العمرية (الشباب، المراهقين، والكبار)، حيث تلتقي الحكمة النفسية بعمق الهوية المغربية الأصيلة.' 
              : 'A warm sanctuary for all ages (youth, teens, and elders) where psychological wisdom meets the depth of authentic Moroccan identity.'}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-4 relative z-10 space-y-8" dir={getTextDirection()}>
        
        <div className="bg-white/95 rounded-[2.5rem] border border-[#174A43]/15 p-8 sm:p-12 shadow-xl backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-3 text-[#174A43] font-serif font-bold text-xl sm:text-2xl border-b border-[#174A43]/10 pb-4">
            <BookOpen className="w-6 h-6 text-[#C65A3A]" />
            <h2>{currentLang === 'ar' ? 'من هي   ASGDAM؟' : 'What is ASGDAM?'}</h2>
          </div>
          <p className="text-sm sm:text-base text-[#174A43]/90 leading-loose font-serif">
            {currentLang === 'ar' 
              ? 'مساحة فكرية أُسست خصيصاً لكل باحث عن السكينة وعمق الأفكار. نطرح هنا تساؤلات حول كيفية إدراك الإنسان لذاته، وكيفية معايشة تفاصيل الحياة وتاريخها عبر لغات متعددة تخاطب العقل وتلامس الوجدان، لتكون المنصة رفيقاً دافئاً لكل الأجيال.'
              : 'An intellectual space established especially for every seeker of tranquility and deep thought. Here we explore how humans perceive themselves, navigating life and its history through multiple languages that address the mind and touch the soul.'}
          </p>
        </div>

        <div className="bg-white/95 rounded-[2.5rem] border border-[#174A43]/15 p-8 sm:p-12 shadow-xl backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-3 text-[#174A43] font-serif font-bold text-xl sm:text-2xl border-b border-[#174A43]/10 pb-4">
            <Compass className="w-6 h-6 text-[#C65A3A]" />
            <h2>{currentLang === 'ar' ? 'من وراء كواليس هذا المشروع؟' : 'Behind the Scenes'}</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="space-y-4 text-sm sm:text-base text-[#174A43]/90 leading-loose font-serif flex-1">
              <p>
                {currentLang === 'ar'
                  ? ' .(Khadija Z.)، مطورة واجهات أمامية وباحثة في مجال الذكاء الاصطناعي. انطلقت رحلة هذا المشروع بهدف التطبيق العملي فحسب، غير أن الشغف غلبني أثناء العمل، فوجدت نفسي مستمتعة بكل تفاصيله حتى أضحى أول مشروع متكامل أصممه وأبرمجه بكل حب.'
                  : 'I am Khadija Z., a Front-End Developer and AI Researcher. This project initially started as a simple practice exercise, but as I immersed myself in it, I truly enjoyed every detail until it became my first major project built with pure passion.'}
              </p>
              <p>
                {currentLang === 'ar'
                  ? 'نبعت الفكرة الأساسية من اقتراح مقدّم من إحدى صديقاتي المقربات، والتي نالت إعجابي الشديد. وقد صممت هذه المجلة لتكون مرآة تعكس هويتي كمغربية؛ فرغم أن جذوري ليست أمازيغية، إلا أن الثقافة الأمازيغية تظل مكوناً جوهرياً وأصيلاً من التراث المغربي، ولذلك حرصت على أن تكون حاضرة ببصمتها المميزة بكل فخر واعتزاز.'
                  : 'The core idea originated from a suggestion by a dear friend, which I deeply admired. I designed this magazine to reflect my identity as a Moroccan; and even though my roots are not Amazigh, Amazigh culture remains an essential and authentic pillar of Moroccan heritage, which is why I proudly gave it a prominent place here.'}
              </p>
            </div>

            <div className="bg-[#174A43] text-[#F7F1E5] p-6 rounded-3xl space-y-3 w-full sm:w-72 shadow-md">
              <div className="flex items-center gap-2 text-[#D4A84F] text-xs font-mono uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Creator Note</span>
              </div>
              <div className="text-xs space-y-2 opacity-90 font-serif">
                <p className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-[#D4A84F]" /> Khadija Z. (Front-End & AI)</p>
                <p className="flex items-center gap-2"><Heart className="w-3.5 h-3.5 text-[#C65A3A]" /> Built with pure passion</p>
                <p className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-[#D4A84F]" /> Proud Moroccan Identity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#174A43]/5 rounded-[2.5rem] border border-[#174A43]/15 p-8 sm:p-12 shadow-inner space-y-6">
          <div className="flex items-center gap-3 text-[#174A43] font-serif font-bold text-xl sm:text-2xl border-b border-[#174A43]/10 pb-4">
            <Flame className="w-6 h-6 text-[#C65A3A]" />
            <h3>{currentLang === 'ar' ? 'من مقولات خديجة التحفيزية' : 'Khadija’s Motivation'}</h3>
          </div>

          <div className="space-y-6 font-serif">
            <div className="bg-white/80 p-6 rounded-2xl border border-[#174A43]/10 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C65A3A] font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>فلسفة الاستمرار / Mindset</span>
              </div>
              <p className="text-base sm:text-lg text-[#174A43] font-medium">
                {currentLang === 'ar'
                  ? '«إذا تعثرت أو واجهتك عقبة، فلا تقف مكبلاً؛ فسلاحك الدائم هو التساؤل: "ما الخطوة التالية؟" .     .»'
                  : '“If you stumble or face an obstacle, never stay down; your ultimate weapon is to ask: What’s next?.”'}
              </p>
            </div>

            <p className="text-sm text-[#174A43]/80 italic leading-relaxed">
              {currentLang === 'ar'
                ? 'أتمنى من صميم قلبي أن يلقى هذا العمل استحسانكم وينال إعجابكم. كما يسعدني دائماً تواصلكم لمشاركة آرائكم ومقالاتكم، أو لتصحيح أي خطأ محتمل، خصوصاً فيما يتعلق بالنصوص الأمازيغية.'
                : 'I genuinely hope this work wins your heart and catches your attention. I am always delighted to welcome your thoughts, articles, or any corrections you might suggest, especially regarding Amazigh texts.'}
            </p>
          </div>
        </div>

        <div className="bg-[#174A43] text-[#F7F1E5] rounded-[2.5rem] p-8 sm:p-12 shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#D4A84F]/10 rounded-full blur-2xl"></div>
          
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            {currentLang === 'ar' ? 'تواصل معي عبر LinkedIn' : 'Connect on LinkedIn'}
          </h3>
          
          <p className="text-sm text-[#F7F1E5]/80 font-serif max-w-xl mx-auto leading-relaxed">
            {currentLang === 'ar'
              ? 'إن كنت ترغب في مشاركة مقالك الخاص، أو اقتراح تصحيح لغوي، أو تبادل الأفكار المهنية، فسيسعدني جداً التواصل معك!'
              : 'Whether you wish to share an article, suggest a correction, or exchange professional ideas, let’s connect!'}
          </p>

          <div>
            <a 
              href="https://www.linkedin.com/in/khadija-tech-26a488373/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A84F] text-[#174A43] rounded-2xl text-xs font-bold hover:bg-white transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{currentLang === 'ar' ? 'تواصل معي على LinkedIn' : 'Connect on LinkedIn'}</span>
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
