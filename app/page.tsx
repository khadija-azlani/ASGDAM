'use client';

import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  User,
  Scroll,
  HeartPulse,
  Compass,
  Cpu,
  Award,
  HeartHandshake,
} from 'lucide-react';

export default function Home() {
  return (
    <main
      className="min-h-screen text-[#174A43] relative overflow-hidden font-sans selection:bg-[#C65A3A] selection:text-white"
      style={{
        backgroundColor: '#F7F1E5',
        backgroundImage: `
          linear-gradient(30deg, rgba(23, 74, 67, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(23, 74, 67, 0.05) 87.5%, rgba(23, 74, 67, 0.05)),
          linear-gradient(150deg, rgba(23, 74, 67, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(23, 74, 67, 0.05) 87.5%, rgba(23, 74, 67, 0.05)),
          linear-gradient(30deg, rgba(212, 168, 79, 0.07) 37%, transparent 37.5%, transparent 62.5%, rgba(212, 168, 79, 0.07) 62.5%),
          linear-gradient(150deg, rgba(212, 168, 79, 0.07) 37%, transparent 37.5%, transparent 62.5%, rgba(212, 168, 79, 0.07) 62.5%),
          linear-gradient(60deg, rgba(23, 74, 67, 0.04) 25%, transparent 25.5%, transparent 75%, rgba(23, 74, 67, 0.04) 75%, rgba(23, 74, 67, 0.04)),
          linear-gradient(120deg, rgba(23, 74, 67, 0.04) 25%, transparent 25.5%, transparent 75%, rgba(23, 74, 67, 0.04) 75%, rgba(23, 74, 67, 0.04))
        `,
        backgroundSize: '56px 97px',
        backgroundPosition:
          '0 0, 0 0, 28px 48px, 28px 48px, 0 0, 0 0',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-gradient-to-tr from-[#174A43]/15 via-[#D4A84F]/25 to-[#C98278]/20 blur-[200px] rounded-full pointer-events-none -z-10" />

      <div className="bg-[#174A43] text-[#F7F1E5] py-2.5 px-4 text-center text-[11px] font-mono tracking-widest uppercase border-b border-[#D4A84F]/30 flex items-center justify-center gap-3 shadow-sm relative z-10">
        <Sparkles className="w-3.5 h-3.5 text-[#D4A84F] animate-spin" />
        <span>ASGDAM • Digital Sanctuary of Wisdom and Knowledge</span>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-36 pb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/90 border border-[#174A43]/20 text-xs text-[#174A43] mb-8 shadow-md backdrop-blur-xl">
          <Award className="w-4 h-4 text-[#C65A3A]" />
          <span className="font-serif tracking-widest uppercase">
            The Art of Pure Thought • The Essence of Wisdom
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8 text-[#174A43] leading-[1.25]">
          عالم من الحكمة
          <br />
          <span className="text-[#C65A3A] italic">
            A Realm of Timeless Wisdom
          </span>
        </h1>

        <div className="space-y-4 max-w-2xl mx-auto mb-12 text-[#174A43]/80 text-sm sm:text-base font-light">
          <p dir="rtl">
            نافذة رقمية تجمع عراقة الفكر الإنساني بروح العصر الحديث، حيث تتقاطع
            العلوم والتاريخ والفلسفة وتجارب الحياة.
          </p>

          <p
            dir="ltr"
            className="text-xs sm:text-sm italic opacity-90"
          >
            A digital window blending the richness of human thought with the
            spirit of the modern age, where science, history, philosophy, and
            life intersect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mb-16">
          <Link
            href="/articles"
            className="px-8 py-4 rounded-2xl bg-[#C65A3A] text-white hover:bg-[#174A43] text-xs font-bold transition-all shadow-[0_10px_25px_rgba(198,90,58,0.3)] flex items-center justify-center gap-2.5 hover:scale-105"
          >
            <BookOpen className="w-4 h-4" />

            <div className="flex items-center gap-2">
              <span>Explore the Magazine</span>
              <span className="opacity-70">|</span>
              <span dir="rtl">تصفح المجلة</span>
            </div>
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 rounded-2xl bg-white border border-[#174A43]/25 text-[#174A43] hover:border-[#C65A3A] text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2.5 hover:scale-105"
          >
            <User className="w-4 h-4 text-[#C65A3A]" />

            <div className="flex items-center gap-2">
              <span>About the Magazine</span>
              <span className="opacity-70">|</span>
              <span dir="rtl">عن المجلة</span>
            </div>
          </Link>
        </div>

        <div className="inline-block p-5 sm:p-6 px-8 sm:px-10 rounded-[2rem] bg-white/90 border border-[#174A43]/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(23,74,67,0.1)]">
          <p className="text-xs font-serif text-[#D4A84F] tracking-[0.25em] uppercase font-bold text-center">
            مرآة المعرفة • Mirror of Knowledge
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#C65A3A] font-bold mb-2">
            A Glimpse into the Fields of Knowledge / ⵉⵎⵔⵔⴰ ⵏ ⵉⴳⵔⴰⵏ ⵏ ⵜⵓⵙⵙⵏⴰ
          </h2>

          <p className="text-xl sm:text-3xl font-serif text-[#174A43]">
            لمحةٌ من بين مساحات المعرفة المتنوعة التي تحتضنها المجلة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/90 border border-[#174A43]/15 shadow-xl backdrop-blur-2xl flex flex-col items-center text-center group hover:border-[#C65A3A] hover:-translate-y-2.5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C65A3A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-16 h-16 rounded-3xl bg-[#174A43]/10 flex items-center justify-center text-[#174A43] mb-6 group-hover:scale-110 group-hover:bg-[#C65A3A] group-hover:text-white transition-all shadow-sm">
              <HeartPulse className="w-7 h-7" />
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#174A43]">
              Health / الصحة
            </h3>
          </div>

          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/90 border border-[#174A43]/15 shadow-xl backdrop-blur-2xl flex flex-col items-center text-center group hover:border-[#D4A84F] hover:-translate-y-2.5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A84F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-16 h-16 rounded-3xl bg-[#174A43]/10 flex items-center justify-center text-[#174A43] mb-6 group-hover:scale-110 group-hover:bg-[#D4A84F] group-hover:text-white transition-all shadow-sm">
              <Compass className="w-7 h-7" />
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#174A43]">
              Philosophy &amp; Life / الفلسفة والحياة
            </h3>
          </div>

          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/90 border border-[#174A43]/15 shadow-xl backdrop-blur-2xl flex flex-col items-center text-center group hover:border-[#C98278] hover:-translate-y-2.5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C98278] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-16 h-16 rounded-3xl bg-[#174A43]/10 flex items-center justify-center text-[#174A43] mb-6 group-hover:scale-110 group-hover:bg-[#C98278] group-hover:text-white transition-all shadow-sm">
              <Cpu className="w-7 h-7" />
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#174A43]">
              Technology / التكنولوجيا
            </h3>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24 relative z-10">
        <div className="p-10 sm:p-16 rounded-[3rem] bg-white border border-[#174A43]/20 shadow-2xl text-center relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4A84F]/15 rounded-full blur-3xl pointer-events-none" />

          <HeartHandshake className="w-12 h-12 text-[#D4A84F] mx-auto mb-6 opacity-90" />

          <h4 className="text-xs uppercase tracking-[0.35em] text-[#C65A3A] font-bold mb-4">
            The Core Purpose / الغاية من المجلة
          </h4>

          <div
            className="space-y-4 text-sm sm:text-base text-[#174A43]/90 font-light leading-relaxed max-w-2xl mx-auto text-right"
            dir="rtl"
          >
            <p>
              هذه المجلة مساحة معرفية تهدف إلى مساعدة الشباب على فهم ذواتهم،
              واكتشاف العالم من حولهم، والتعرف إلى تاريخهم وثقافتهم، والتفكير
              بوعي في التحولات العلمية والتكنولوجية والفكرية التي تشكل عصرهم.
            </p>

            <p>
              في زمن تتسارع فيه التكنولوجيا وتتزايد فيه الضغوط الفكرية
              والاجتماعية، تسعى المجلة إلى تقديم محتوى هادئ وعميق يساعد القارئ
              على فهم الظواهر المعاصرة من خلال البحث والتحليل والمصادر الموثوقة.
            </p>
          </div>

          <div className="mt-6 text-xs text-[#174A43]/70 italic" dir="ltr">
            Helping the younger generation understand the world, explore
            knowledge, and navigate the challenges of the modern age.
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-28 relative z-10">
        <div className="p-10 sm:p-16 rounded-[3rem] bg-white border border-[#174A43]/20 shadow-2xl text-center relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4A84F]/15 rounded-full blur-3xl pointer-events-none" />

          <Scroll className="w-12 h-12 text-[#D4A84F] mx-auto mb-6 opacity-90" />

          <h4 className="text-xs uppercase tracking-[0.35em] text-[#C65A3A] font-bold mb-4">
            Wisdom of the Journey / حكمة الرحلة
          </h4>

          <blockquote className="text-lg sm:text-2xl font-serif text-[#174A43] italic max-w-xl mx-auto mb-6 leading-relaxed">
            “Knowledge is not merely what is memorized, but what transforms
            the soul and illuminates the path.”
          </blockquote>

          <span className="text-xs text-[#C98278] font-mono tracking-widest uppercase">
            ASGDAM Archives • 2026 Edition
          </span>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-32 relative z-10">
        <div className="bg-gradient-to-br from-[#174A43] via-[#1b564e] to-[#244B73] text-white p-8 sm:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-xl sm:text-3xl font-serif font-bold mb-8 text-[#D4A84F] text-center">
            الرسالة الترحيبية • Welcome Message
          </h3>

          <div className="space-y-8 max-w-3xl mx-auto mb-10 text-sm sm:text-base font-light leading-relaxed">
            <div
              dir="rtl"
              className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <span className="block text-xs text-[#D4A84F] font-bold uppercase mb-2">
                باللغة العربية
              </span>

              <p className="text-white/95">
              مرحبًا بكم في ASGDAM، مساحة رقمية صُممت لتكون نافذة هادئة على المعرفة والفكر. هنا نلتقي حول أفكار تستحق التأمل، ونتوقف عند ظواهر من حياتنا اليومية، ونكتشف جوانب من العلم والتاريخ والفلسفة والثقافة والتكنولوجيا. نؤمن بأن المعرفة لا تقتصر على جمع المعلومات، بل تبدأ حين تدفعنا إلى التساؤل والفهم والنظر إلى العالم بوعي أعمق. نتمنى أن تجدوا في هذه المجلة ما يثير فضولكم، ويضيف إلى أفكاركم، ويمنحكم لحظات من الاكتشاف والتأمل.
              </p>
             <p className="text-white/95">
             تعتمد المقالات المنشورة في ASGDAM على أبحاث ودراسات ومقالات ومصادر معرفية متنوعة، يتم الاطلاع عليها وتحليلها وإعادة صياغة محتواها بأسلوب واضح وميسر. وللحفاظ على الشفافية وإتاحة فرصة التعمق، نضع المصادر والمراجع المعتمدة في نهاية كل مقال، حتى يتمكن القارئ من العودة إلى المواد الأصلية واستكشافها بشكل أوسع.
              </p>

            </div>

            <div
              dir="ltr"
              className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <span className="block text-xs text-[#D4A84F] font-bold uppercase mb-2">
                In English
              </span>

              <p className="text-white/95 italic">

                Welcome to ASGDAM, a digital space created as a quiet window into knowledge, ideas, and human thought. Here, we explore questions worth reflecting on, contemporary phenomena, and subjects spanning science, history, philosophy, culture, and technology. We believe that knowledge is not simply about collecting information, but about developing a deeper understanding of ourselves and the world around us. We hope you find here ideas that spark your curiosity, broaden your perspective, and inspire you to keep exploring.
                 


              </p>
               <p className="text-white/95 italic">

                 The articles published on ASGDAM draw on a variety of research papers, studies, articles, and reliable knowledge sources. These materials are carefully reviewed, analyzed, and rewritten in a clear and accessible style. For transparency and further exploration, the sources and references used for each article are provided at the end, allowing readers to consult the original materials and explore the subject in greater depth.                 


              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 text-xs text-[#C98278] bg-white/15 py-3 px-8 rounded-full w-fit mx-auto backdrop-blur-md font-semibold border border-white/20 shadow-inner">
            <span className="text-white">Created with love by</span>

            <a
              href="https://www.linkedin.com/in/khadija-tech-26a488373/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A84F] underline hover:text-white transition-colors"
            >
              Khadija Z.
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
