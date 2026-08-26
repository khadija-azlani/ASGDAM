'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F7F1E5]/95 backdrop-blur-xl border-b border-[#174A43]/15 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-24 flex items-center justify-between">
        
        {/* اسم المجلة والشعار */}
        <Link href="/" className="flex items-center gap-4 group">
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

        {/* الروابط للشاشات الكبيرة */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-wide text-[#174A43]">
          <Link href="/" className="hover:text-[#C65A3A] transition-colors py-2 border-b-2 border-transparent hover:border-[#C65A3A]">
            Home / ⴰⵙⵏⴰ
          </Link>

          <Link href="/articles" className="hover:text-[#C65A3A] transition-colors py-2 border-b-2 border-transparent hover:border-[#C65A3A]">
            Articles / ⵉⴳⵔⴰⵏ
          </Link>

          <Link href="/about" className="hover:text-[#C65A3A] transition-colors py-2 border-b-2 border-transparent hover:border-[#C65A3A]">
            About / ⵖⴼ ⵏⴻⵖ
          </Link>
        </nav>

        {/* التوقيع في الجهة اليمنى */}
        <div className="hidden lg:flex items-center">
          <span className="text-[11px] font-serif text-[#C98278] italic tracking-wider border-r border-[#174A43]/20 pr-6 font-medium">
            Khadija Z. Edition
          </span>
        </div>

        {/* زر القائمة للهواتف */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#174A43] hover:text-[#C65A3A] p-2.5 rounded-xl bg-[#174A43]/5 border border-[#174A43]/15 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* القائمة المنسدلة للهواتف */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#F7F1E5] border-b border-[#174A43]/20 backdrop-blur-2xl py-6 px-8 shadow-xl flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-[#174A43] hover:text-[#C65A3A] transition-colors py-2 border-b border-[#174A43]/10"
          >
            Home / ⴰⵙⵏⴰ
          </Link>
          <Link 
            href="/articles" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-[#174A43] hover:text-[#C65A3A] transition-colors py-2 border-b border-[#174A43]/10"
          >
            Articles / ⵉⴳⵔⴰⵏ
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-[#174A43] hover:text-[#C65A3A] transition-colors py-2"
          >
            About / ⵖⴼ ⵏⴻⵖ
          </Link>
          
          <div className="pt-4 border-t border-[#174A43]/10 text-center">
            <span className="text-[11px] font-serif text-[#C98278] italic tracking-wider font-medium">
              Khadija Z. Edition
            </span>
          </div>
        </div>
      )}
    </header>
  );
}