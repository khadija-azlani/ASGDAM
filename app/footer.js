'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F7F1E5] border-t border-[#174A43]/10 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* الجزء العلوي: الفلسفة، الروابط، والتواصل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* العمود الأول: الشعار والفلسفة نفس الـ Navbar */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-4 group mb-6">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#174A43]/20 via-[#D4A84F]/25 to-transparent border border-[#174A43]/30 flex items-center justify-center text-[#174A43] font-serif font-bold text-lg group-hover:scale-105 transition-all shadow-sm">
                ⵣ
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-wider text-[#174A43] group-hover:text-[#C65A3A] transition-colors">
                  ASGDAM
                </span>
                <span className="text-[10px] text-[#D4A84F] tracking-[0.25em] uppercase font-mono font-semibold">
                  ⵜⴰⵎⵔⴰⵜ ⵏ ⵜⵓⵙⵙⵏⵉⵡⵉⵏ
                </span>
              </div>
            </Link>
            <p className="text-[#174A43]/70 text-xs leading-relaxed max-w-[260px]" dir="ltr">
              A mirror of ideas and a continuous journey of searching for beauty and wisdom. Created with love and passion.
            </p>
          </div>

          {/* العمود الثاني: الروابط السريعة (Quick Links / ⵉⴳⵔⴰⵏ ⵉⵣⵣⴰⵔⵏ) */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[#C65A3A] font-serif font-bold text-xs uppercase tracking-wider mb-1">
              Quick Links / ⵉⴳⵔⴰⵏ ⵉⵣⵣⴰⵔⵏ
            </h4>
            <Link href="/" className="text-[#174A43]/80 hover:text-[#C65A3A] text-xs transition-colors">Home / ⴰⵙⵏⴰ</Link>
            <Link href="/articles" className="text-[#174A43]/80 hover:text-[#C65A3A] text-xs transition-colors">Articles / ⵉⴳⵔⴰⵏ</Link>
            <Link href="/about" className="text-[#174A43]/80 hover:text-[#C65A3A] text-xs transition-colors">About / ⵖⴼ ⵏⴻⵖ</Link>
          </div>

          {/* العمود الثالث: التواصل (Connect / ⵎⵙⴰⵡⴰⴹ) مع الاسم كرابط مباشر للينكدين */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[#C65A3A] font-serif font-bold text-xs uppercase tracking-wider mb-1">
              Connect / ⵎⵙⴰⵡⴰⴹ
            </h4>
            <p className="text-[#174A43]/70 text-xs">
              Created with passion by
            </p>
            <a 
              href="https://www.linkedin.com/in/khadija-tech-26a488373/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-serif font-bold text-[#174A43] hover:text-[#C65A3A] transition-colors w-fit underline decoration-[#C65A3A]/40 hover:decoration-[#C65A3A]"
            >
              Khadija Z.
            </a>
          </div>

        </div>

        {/* الجزء السفلي: الحقوق محفوظة لسنة 2026 في الأسفل تماماً */}
        <div className="border-t border-[#174A43]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#D4A84F] text-lg font-serif">
            ⵣ ✦ ⵣ
          </div>
          
          <div className="text-xs text-[#174A43]/80 font-medium text-center md:text-right">
            © 2026 All rights reserved by ASGDAM
          </div>
          
          <div className="text-[10px] text-[#174A43]/50 font-mono tracking-widest uppercase">
            English / Amazigh
          </div>
        </div>

      </div>
    </footer>
  );
}