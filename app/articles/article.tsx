'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import {
  Sparkles,
  Heart,
  CheckCircle2,
  Globe,
  Clock,
  BookOpen,
  Cpu,
  Users,
  Lightbulb,
  Leaf,
  FlaskConical,
  Landmark,
  Palette,
  Quote,
  Compass,
  ChevronRight,
  ChevronLeft,
  X,
} from 'lucide-react';

const CATEGORIES = [
  {
    key: 'all',
    labelAr: 'جميع المقالات',
    labelEn: 'All Articles',
    icon: BookOpen,
  },
  {
    key: 'philosophy',
    labelAr: 'الفلسفة',
    labelEn: 'Philosophy',
    icon: Lightbulb,
  },
  {
    key: 'psychology',
    labelAr: 'علم النفس',
    labelEn: 'Psychology',
    icon: Compass,
  },
  {
    key: 'technology',
    labelAr: 'التكنولوجيا',
    labelEn: 'Technology',
    icon: Cpu,
  },
  {
    key: 'society',
    labelAr: 'المجتمع',
    labelEn: 'Society',
    icon: Users,
  },
  {
    key: 'moroccan_history',
    labelAr: 'التاريخ المغربي',
    labelEn: 'Moroccan History',
    icon: Landmark,
  },
  {
    key: 'world_history',
    labelAr: 'التاريخ العالمي',
    labelEn: 'World History',
    icon: Landmark,
  },
  {
    key: 'islamic_history',
    labelAr: 'التاريخ الإسلامي',
    labelEn: 'Islamic History',
    icon: Landmark,
  },
  {
    key: 'science',
    labelAr: 'العلوم',
    labelEn: 'Science',
    icon: FlaskConical,
  },
  {
    key: 'environment',
    labelAr: 'البيئة',
    labelEn: 'Environment',
    icon: Leaf,
  },
  {
    key: 'economy',
    labelAr: 'الاقتصاد',
    labelEn: 'Economy',
    icon: Globe,
  },
  {
    key: 'culture_art',
    labelAr: 'الثقافة والفن',
    labelEn: 'Culture & Art',
    icon: Palette,
  },
  {
    key: 'quotes',
    labelAr: 'أشهر المقولات',
    labelEn: 'Quotes',
    icon: Quote,
  },
];

const ALL_ARTICLES = [
  {
    id: '1',
    titleAr: 'لماذا نشعر بأننا متأخرون عن الآخرين؟',
    titleEn: 'Why Do We Feel Like We’re Falling Behind Everyone Else?',
    categoryAr: 'المجتمع',
    categoryEn: 'Society',
    categoryKey: 'society',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    date: 'August 24, 2026',
  },

  {
    id: '2',
    titleAr: 'هل أصبحنا نشعر بالذنب عندما نرتاح؟',
    titleEn: 'Has Rest Become Something We Feel Guilty About?',
    categoryAr: 'علم النفس',
    categoryEn: 'Psychology',
    categoryKey: 'psychology',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    date: 'August 24, 2026',
  },

  {
    id: '3',
    titleAr: 'لماذا نخاف من الفشل؟',
    titleEn: 'Why Are We Afraid of Failure?',
    categoryAr: 'علم النفس',
    categoryEn: 'Psychology',
    categoryKey: 'psychology',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    date: 'August 25, 2026',
  },

  {
    id: '4',
    titleAr: 'هل الذكاء الاصطناعي سيُساعدنا أم سيبدأ بالتفكير بدلًا منا؟',
    titleEn: 'Will Artificial Intelligence Help Us or Start Thinking for Us?',
    categoryAr: 'التكنولوجيا',
    categoryEn: 'Technology',
    categoryKey: 'technology',
    readTimeAr: '٧ دقائق قراءة',
    readTimeEn: '7 min read',
    date: 'August 25, 2026',
  },

  {
    id: '5',
    titleAr: 'هل الإنسان حر فعلًا؟',
    titleEn: 'Are Human Beings Truly Free?',
    categoryAr: 'الفلسفة',
    categoryEn: 'Philosophy',
    categoryKey: 'philosophy',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    date: 'August 25, 2026',
  },

  {
    id: '6',
    titleAr:
      'كيف استطاع المغرب أن يحافظ على هويته عبر قرون من التحولات؟',
    titleEn:
      'How Has Morocco Preserved Its Identity Through Centuries of Transformation?',
    categoryAr: 'التاريخ المغربي',
    categoryEn: 'Moroccan History',
    categoryKey: 'moroccan_history',
    readTimeAr: '٩ دقائق قراءة',
    readTimeEn: '9 min read',
    date: 'August 25, 2026',
  },

  {
    id: '7',
    titleAr:
      'اختراع الطباعة: كيف غيّرت آلة صغيرة مجرى تاريخ العالم؟',
    titleEn:
      'The Invention of Printing: How Did a Small Machine Change World History?',
    categoryAr: 'التاريخ العالمي',
    categoryEn: 'World History',
    categoryKey: 'world_history',
    readTimeAr: '٧ دقائق قراءة',
    readTimeEn: '7 min read',
    date: 'August 25, 2026',
  },

  {
    id: '8',
    titleAr:
      'محمد صلى الله عليه وسلم: سيرة رجل غيّر تاريخ الإنسانية',
    titleEn:
      'Muhammad: The Life of a Man Who Changed Human History',
    categoryAr: 'التاريخ الإسلامي',
    categoryEn: 'Islamic History',
    categoryKey: 'islamic_history',
    readTimeAr: '١٠ دقائق قراءة',
    readTimeEn: '10 min read',
    date: 'August 25, 2026',
  },

  {
    id: '9',
    titleAr: 'لماذا أصبح النوم آخر شيء نضحي به؟',
    titleEn:
      'Why Has Sleep Become the Last Thing We Sacrifice?',
    categoryAr: 'العلوم',
    categoryEn: 'Science',
    categoryKey: 'science',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    date: 'August 25, 2026',
  },

  {
    id: '10',
    titleAr: 'هل فعلًا نستطيع أن نعيش بلا بلاستيك؟',
    titleEn:
      'Can We Really Live Without Plastic?',
    categoryAr: 'البيئة',
    categoryEn: 'Environment',
    categoryKey: 'environment',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    date: 'August 25, 2026',
  },

  {
    id: '11',
    titleAr: 'هل تفقد الأموال المدخرة قيمتها مع مرور الوقت؟',
    titleEn:
      'Does Saved Money Lose Its Value Over Time?',
    categoryAr: 'الاقتصاد',
    categoryEn: 'Economy',
    categoryKey: 'economy',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    date: 'August 25, 2026',
  },

  {
    id: '12',
    titleAr:
      'لماذا نشعر بشيء مختلف عندما ننظر إلى اللوحات الطبيعية؟',
    titleEn:
      'Why Do We Feel Something Different When We Look at Landscape Paintings?',
    categoryAr: 'الثقافة والفن',
    categoryEn: 'Culture & Art',
    categoryKey: 'culture_art',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    date: 'August 25, 2026',
  },

  {
    id: '13',
    titleAr: 'أشهر المقولات المغربية وحكمها الخالدة',
    titleEn:
      'Famous Moroccan Quotes and Timeless Wisdom',
    categoryAr: 'أشهر المقولات',
    categoryEn: 'Quotes',
    categoryKey: 'quotes',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    date: 'August 25, 2026',
  },
];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [activeFilter, setActiveFilter] = useState<
    'all' | 'favorites' | 'read'
  >('all');

  const [favorites, setFavorites] = useState<string[]>([]);
  const [readArticles, setReadArticles] = useState<string[]>([]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'ASGDAM • مكتبة المقالات • Articles Library';

    let metaDescription = document.querySelector(
      "meta[name='description']"
    );

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      'content',
      'ASGDAM Digital Articles Library — analytical articles and studies covering philosophy, psychology, technology, history, science, society, culture, art, economy and the environment.'
    );

    const savedFavorites = localStorage.getItem('asgdam_favorites');
    const savedReads = localStorage.getItem('asgdam_read');

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedReads) {
      setReadArticles(JSON.parse(savedReads));
    }
  }, []);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;

      scrollContainerRef.current.scrollBy({
        left: direction === 'left'
          ? -scrollAmount
          : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const toggleFavorite = (
    id: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const updated = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];

    setFavorites(updated);

    localStorage.setItem(
      'asgdam_favorites',
      JSON.stringify(updated)
    );
  };

  const toggleRead = (
    id: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const updated = readArticles.includes(id)
      ? readArticles.filter((readId) => readId !== id)
      : [...readArticles, id];

    setReadArticles(updated);

    localStorage.setItem(
      'asgdam_read',
      JSON.stringify(updated)
    );
  };

  let displayedArticles = ALL_ARTICLES;

  if (activeFilter === 'favorites') {
    displayedArticles = ALL_ARTICLES.filter((article) =>
      favorites.includes(article.id)
    );
  } else if (activeFilter === 'read') {
    displayedArticles = ALL_ARTICLES.filter((article) =>
      readArticles.includes(article.id)
    );
  } else if (selectedCategory !== 'all') {
    displayedArticles = ALL_ARTICLES.filter(
      (article) =>
        article.categoryKey === selectedCategory
    );
  }

  return (
    <main
      className="min-h-screen text-[#174A43] relative overflow-hidden font-sans pb-36 selection:bg-[#C65A3A] selection:text-white"
      style={{
        backgroundColor: '#F7F1E5',
        backgroundImage: `
          linear-gradient(
            30deg,
            rgba(23, 74, 67, 0.03) 12%,
            transparent 12.5%,
            transparent 87%,
            rgba(23, 74, 67, 0.03) 87.5%,
            rgba(23, 74, 67, 0.03)
          ),
          linear-gradient(
            150deg,
            rgba(23, 74, 67, 0.03) 12%,
            transparent 12.5%,
            transparent 87%,
            rgba(23, 74, 67, 0.03) 87.5%,
            rgba(23, 74, 67, 0.03)
          )
        `,
        backgroundSize: '60px 104px',
      }}
    >
      <div className="bg-[#174A43] text-[#F7F1E5] py-3 px-6 text-center text-xs font-mono tracking-widest uppercase border-b border-[#D4A84F]/30 flex flex-col sm:flex-row items-center justify-center gap-3 shadow-md relative z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4A84F] animate-spin" />

          <span>
            ASGDAM • Sanctuary of Wisdom & Knowledge
          </span>
        </div>

        <span className="hidden sm:inline opacity-40">
          |
        </span>

        <span className="text-[#D4A84F] font-serif text-xs">
          الملاذ الرقمي للفكر والمعرفة
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 relative z-10 flex justify-end">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#174A43] bg-white/90 px-5 py-3 rounded-2xl border border-[#174A43]/15 backdrop-blur-xl shadow-xl">

          <button
            onClick={() =>
              setActiveFilter(
                activeFilter === 'favorites'
                  ? 'all'
                  : 'favorites'
              )
            }
            className={`flex items-center gap-2 font-medium px-3 py-1.5 rounded-xl transition-all ${
              activeFilter === 'favorites'
                ? 'bg-[#C65A3A] text-white shadow-md'
                : 'hover:bg-[#174A43]/5'
            }`}
          >
            <Heart
              className={`w-4 h-4 text-[#C65A3A] fill-current ${
                activeFilter === 'favorites'
                  ? 'text-white'
                  : ''
              }`}
            />

            <span>
              المفضلة / Favorites:
            </span>

            <strong>
              {favorites.length}
            </strong>
          </button>

          <span className="text-[#174A43]/20">
            |
          </span>

          <button
            onClick={() =>
              setActiveFilter(
                activeFilter === 'read'
                  ? 'all'
                  : 'read'
              )
            }
            className={`flex items-center gap-2 font-medium px-3 py-1.5 rounded-xl transition-all ${
              activeFilter === 'read'
                ? 'bg-[#174A43] text-[#D4A84F]'
                : 'hover:bg-[#174A43]/5'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-[#174A43]" />

            <span>
              قرأتها / You Read It:
            </span>

            <strong>
              {readArticles.length}
            </strong>
          </button>

          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              className="p-1 rounded-lg bg-[#174A43]/10 hover:bg-[#174A43]/20 text-[#174A43] ml-2"
              title="عرض الكل / Show All"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-14 text-center relative z-10">

        <div className="inline-block px-6 py-2 rounded-full bg-white/80 text-[#174A43] text-xs font-serif tracking-widest uppercase mb-4 border border-[#174A43]/15 shadow-sm backdrop-blur-md">
          Intellectual Archives • الأرشيف الفكري
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4 text-[#174A43]">
          مكتبة المقالات
          <br />

          <span className="text-[#C65A3A] italic text-2xl sm:text-3xl font-light">
            Articles & Studies Library
          </span>
        </h1>

        <p
          className="text-xs sm:text-sm text-[#174A43]/85 font-light max-w-2xl mx-auto leading-relaxed"
          dir="rtl"
        >
          مقالات وتحليلات ودراسات صيغت بعناية فائقة لتغذية الفكر الإنساني وتصفية الضوضاء الرقمية.
        </p>

        <p
          className="text-xs text-[#174A43]/65 italic mt-2 max-w-2xl mx-auto"
          dir="ltr"
        >
          Analytical articles and studies carefully crafted to nourish human thought and filter digital noise.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 relative z-10">

        <div className="relative flex items-center">

          <button
            onClick={() => scrollCategories('left')}
            className="absolute -left-2 sm:-left-4 z-20 bg-white/95 text-[#174A43] p-2 sm:p-2.5 rounded-full shadow-xl border border-[#174A43]/20 hover:bg-[#174A43] hover:text-white transition-all flex items-center justify-center backdrop-blur-md"
            title="التصنيفات السابقة / Previous Categories"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-3.5 p-4 bg-white/85 rounded-3xl border border-[#174A43]/15 backdrop-blur-2xl shadow-xl scrollbar-none w-full scroll-smooth px-8 sm:px-12"
          >
            {CATEGORIES.map((category) => {
              const Icon = category.icon;

              const isSelected =
                selectedCategory === category.key &&
                activeFilter === 'all';

              return (
                <button
                  key={category.key}
                  onClick={() => {
                    setSelectedCategory(category.key);
                    setActiveFilter('all');
                  }}
                  className={`whitespace-nowrap px-4 sm:px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2.5 shadow-sm group hover:-translate-y-0.5 shrink-0 ${
                    isSelected
                      ? 'bg-[#174A43] text-white shadow-xl scale-105 ring-2 ring-[#D4A84F]'
                      : 'bg-white/70 text-[#174A43] hover:bg-[#174A43]/10 border border-[#174A43]/10'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${
                      isSelected
                        ? 'text-[#D4A84F]'
                        : 'text-[#C65A3A]'
                    }`}
                  />

                  <div className="flex flex-col text-right">
                    <span>
                      {category.labelAr}
                    </span>

                    <span
                      className={`text-[10px] font-normal text-left ${
                        isSelected
                          ? 'text-white/80'
                          : 'text-[#174A43]/60'
                      }`}
                    >
                      {category.labelEn}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollCategories('right')}
            className="absolute -right-2 sm:-right-4 z-20 bg-white/95 text-[#174A43] p-2 sm:p-2.5 rounded-full shadow-xl border border-[#174A43]/20 hover:bg-[#174A43] hover:text-white transition-all flex items-center justify-center backdrop-blur-md"
            title="المزيد من التصنيفات / More Categories"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="text-center mt-3 text-[11px] text-[#174A43]/60 font-mono italic px-4">
          ← اسحب يميناً ويساراً أو استخدم الأزرار لاستعراض جميع المجالات / Swipe or use buttons to explore domains →
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {displayedArticles.length === 0 ? (
          <div className="text-center py-20 bg-white/60 rounded-3xl border border-[#174A43]/15 backdrop-blur-md">
            <p
              className="text-base font-serif text-[#174A43]"
              dir="rtl"
            >
              لا توجد مقالات في هذه القائمة حالياً.
            </p>

            <p className="text-xs text-[#174A43]/60 mt-1">
              No articles found in this section currently.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">

            {displayedArticles.map((article) => {
              const isFavorite =
                favorites.includes(article.id);

              const isRead =
                readArticles.includes(article.id);

              return (
                <div
                  key={article.id}
                  className="group bg-white/95 rounded-[3rem] border border-[#174A43]/15 overflow-hidden shadow-2xl hover:border-[#C65A3A] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-2xl relative"
                >

                  <div className="bg-[#174A43]/5 px-6 py-4 border-b border-[#174A43]/10 flex flex-wrap items-center justify-between gap-2 z-20">

                    <button
                      onClick={(e) =>
                        toggleRead(article.id, e)
                      }
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 shadow-sm ${
                        isRead
                          ? 'bg-[#174A43] text-[#D4A84F]'
                          : 'bg-white text-[#174A43]/70 hover:bg-[#174A43]/10 border border-[#174A43]/15'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${
                          isRead
                            ? 'text-[#D4A84F]'
                            : 'text-[#174A43]/40'
                        }`}
                      />

                      <span>
                        {isRead
                          ? 'قرأتها / You Read It'
                          : 'لم تقرأها / Not Read'}
                      </span>
                    </button>

                    <button
                      onClick={(e) =>
                        toggleFavorite(article.id, e)
                      }
                      className={`p-2 rounded-xl transition-all duration-300 shadow-md hover:scale-110 flex items-center gap-1.5 px-3.5 ${
                        isFavorite
                          ? 'bg-[#C65A3A] text-white shadow-[#C65A3A]/30'
                          : 'bg-white border border-[#174A43]/20 text-[#174A43] hover:text-[#C65A3A]'
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFavorite
                            ? 'fill-current'
                            : ''
                        }`}
                      />

                      <span className="text-[11px] font-bold">
                        المفضلة / Favorite
                      </span>
                    </button>
                  </div>

                  <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">

                    <div className="space-y-5">

                      <div className="flex items-center justify-between text-[11px] text-[#174A43]/60 font-mono">

                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#C65A3A]" />

                          {article.readTimeAr}
                          {' '}
                          ({article.readTimeEn})
                        </span>

                        <span>
                          {article.date}
                        </span>
                      </div>

                      <Link
                        href={`/articles/${article.id}`}
                        className="block space-y-3 group/title"
                      >

                        <h3
                          className="text-xl sm:text-2xl font-serif font-bold text-[#174A43] group-hover/title:text-[#C65A3A] transition-colors leading-snug"
                          dir="rtl"
                        >
                          {article.titleAr}
                        </h3>

                        <h4
                          className="text-sm font-sans font-medium text-[#174A43]/70 italic"
                          dir="ltr"
                        >
                          {article.titleEn}
                        </h4>

                      </Link>

                    </div>

                    <div className="pt-6 mt-8 border-t border-[#174A43]/10 flex items-center justify-between">

                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#174A43]/80 bg-[#174A43]/5 px-3.5 py-2 rounded-xl border border-[#174A43]/10">
                        <Globe className="w-3.5 h-3.5 text-[#D4A84F]" />

                        <span>
                          AR | EN | ZGH Available
                        </span>
                      </div>

                      <Link
                        href={`/articles/${article.id}`}
                        className="text-xs font-bold text-[#C65A3A] group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
                      >
                        <span>
                          Read Article
                        </span>

                        <span>/</span>

                        <span dir="rtl">
                          اقرأ المقال
                        </span>

                        <span>
                          →
                        </span>
                      </Link>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        )}
      </section>
    </main>
  );
}