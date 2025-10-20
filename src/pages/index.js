import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import { useLocale } from "../context/LocaleContext";
import "../styles/home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const heroImage = "https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&w=1600&q=80";
const projectImages = {
  portfolio: "https://images.unsplash.com/photo-1523473827534-86c5ad4f3f02?auto=format&fit=crop&w=1800&q=80",
  interactive: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1800&q=80",
  automation: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1800&q=80",
  storytelling: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
};

const processImages = [
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1526318472351-c75fcf07015c?auto=format&fit=crop&w=1200&q=80"
];

const serviceImages = {
  frontend: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  backend: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  marketing: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80"
};

const categorySlides = [
  {
    id: "web-experiences",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "Web Experiences",
        description: "Immersive single-page journeys with motion-led storytelling."
      },
      zh: {
        title: "網站體驗",
        description: "以動態敘事打造沉浸式單頁旅程。"
      }
    }
  },
  {
    id: "brand-systems",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "Brand Systems",
        description: "Identity kits that stay consistent across print and digital."
      },
      zh: {
        title: "品牌系統",
        description: "兼顧印刷與數位的一致識別工具。"
      }
    }
  },
  {
    id: "content-labs",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "Content Labs",
        description: "Script, edit, and automate long-form storytelling."
      },
      zh: {
        title: "內容實驗室",
        description: "腳本、剪輯與自動化結合的長篇敘事。"
      }
    }
  },
  {
    id: "ai-collaboration",
    image: "https://images.unsplash.com/photo-1523473827534-86c5ad4f3f02?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "AI Collaboration",
        description: "Prompt-led concepting paired with human finishing."
      },
      zh: {
        title: "AI 共創",
        description: "Prompt 設計搭配人工後製的視覺概念。"
      }
    }
  },
  {
    id: "digital-products",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f77b?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "Digital Products",
        description: "Design systems and component libraries powering SaaS releases."
      },
      zh: {
        title: "數位產品",
        description: "支撐 SaaS 發布的設計系統與元件庫。"
      }
    }
  },
  {
    id: "motion-systems",
    image: "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "Motion Systems",
        description: "GSAP & WebGL animations aligned with brand tempo."
      },
      zh: {
        title: "動態系統",
        description: "以 GSAP、WebGL 打造符合品牌節奏的互動。"
      }
    }
  },
  {
    id: "sound-branding",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "Sound Branding",
        description: "Original soundscapes that reinforce product rituals."
      },
      zh: {
        title: "聲音識別",
        description: "以原創聲景強化產品使用儀式。"
      }
    }
  },
  {
    id: "docs-playbooks",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
    translations: {
      en: {
        title: "Docs & Playbooks",
        description: "Ops documentation that keeps cross-team launches aligned."
      },
      zh: {
        title: "文件作業",
        description: "協助跨部門上線的操作手冊與節奏表。"
      }
    }
  }
];

const campaignImage = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80";
const socialImage = "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=80";
const closingImage = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80";

const translations = {
  en: {
    hero: {
      label: "Full-stack engineer · Marketing content producer",
      titleLines: ["LAI", "ZHAO TING"],
      paragraphs: [
        "A full-stack developer who fuses engineering and storytelling to build smooth user journeys while amplifying a brand's voice.",
        "I balance development and design, constantly learning new tools and openly sharing build notes so every project becomes a repeatable playbook."
      ],
      primaryCta: { label: "View projects", to: "/work" },
      secondaryCta: { label: "Read learning notes", to: "/blog" },
      badge: "Fullstack Maker",
      caption: "Tech × Creative × Marketing",
      imageAlt: "Colourful product packaging arranged on a fabric backdrop"
    },
    about: {
      tag: "About",
      heading: "Switching between engineering, design, and marketing to keep ideas consistent from concept to launch.",
      paragraphs: [
        "I craft fast, brand-led interfaces with React, Vue, and Next.js, then connect Node.js, databases, and APIs to support reliable operations. Every build considers the narrative and user journey so digital experiences reinforce business goals.",
        "Beyond shipping features, I document project learnings—from marketing scripts and visual design to code optimisation—so teams can see how technical and creative decisions work together."
      ],
      timezone: "Taipei Time · GMT +8",
      contactLabel: "Email me"
    },
    projects: {
      tag: "Projects & Learning",
      heading: "Projects weaving engineering practice with marketing strategy.",
      statValue: "04",
      statCaption: "Cross-disciplinary case studies and sample copy, with more in progress.",
      items: [
        {
          index: "01",
          title: "Personal portfolio website",
          subtitle: "React + Tailwind full-stack deployment",
          image: projectImages.portfolio,
          alt: "Screens of a personal portfolio website",
          href: "/work",
          size: "tall"
        },
        {
          index: "02",
          title: "Interactive campaign page",
          subtitle: "Vue · GSAP motion experience",
          image: projectImages.interactive,
          alt: "Developer animating a marketing campaign interface",
          href: "/work",
          size: "wide"
        },
        {
          index: "03",
          title: "Automated reporting toolkit",
          subtitle: "Node.js + Google Sheets API",
          image: projectImages.automation,
          alt: "Analytics dashboard and code snippets",
          href: "/work",
          size: "square"
        },
        {
          index: "04",
          title: "Video scripting & editing",
          subtitle: "Brand storytelling video strategy",
          image: projectImages.storytelling,
          alt: "Storyboards and video editing timeline",
          href: "/blog",
          size: "wide"
        }
      ]
    },
    process: {
      tag: "Process",
      titleLines: ["Build.", "Measure.", "Share."],
      description:
        "From discovery to launch, I validate assumptions with prototypes, adjust momentum through analytics, and publish the behind-the-scenes notes so teams can keep iterating.",
      imageAlt: "Collage showing cross-disciplinary production"
    },
    services: {
      tag: "Skills & Services",
      heading: "Engineering, integration, and content strategy working side by side.",
      items: [
        {
          title: "Front-end development",
          subtitle: "React · Vue · Tailwind · Next.js",
          body: "Modular UI systems with thoughtful micro-interactions and responsive performance across devices.",
          cta: "See front-end work",
          href: "/work",
          image: serviceImages.frontend
        },
        {
          title: "Back-end & integrations",
          subtitle: "Node.js · Express · Databases · APIs",
          body: "Plan data flows, automate reports, and connect marketing stacks so teams operate with reliable pipelines.",
          cta: "Explore integration flow",
          href: "/work",
          image: serviceImages.backend
        },
        {
          title: "Content & marketing production",
          subtitle: "Scripts · Visuals · Social planning",
          body: "Pair brand copy with video and social cadence so launches keep momentum after shipping.",
          cta: "Browse marketing stories",
          href: "/blog",
          image: serviceImages.marketing
        }
      ]
    },
    campaign: {
      tag: "Creative ethos",
      headline: "Websites double as a portfolio and a learning log.",
      body:
        "Technology builds the structure and content completes the narrative. Visitors can trace each step—from ideation to optimisation—and brands earn trust through transparency.",
      credit: "Site purpose · 2025",
      cta: "Read more notes",
      imageAlt: "Collage of website strategy documents"
    },
    categories: {
      tag: "Categories",
      heading: "Quick dive into practice themes I explore the most.",
      ctaPrev: "Previous",
      ctaNext: "Next"
    },
    social: {
      imageAlt: "Preview of social posts and notebook",
      caption: "@laizh.dev",
      body: "Weekly updates on development experiments, marketing tests, and video production workflows.",
      cta: "Follow the updates"
    },
    closing: {
      title: "LAI ZHAO TING",
      headline: "Let’s turn ideas into experiences.",
      body: "Whether you need a site refresh, automation flow, or launch content, I’m happy to map the process and recommend the right technical stack.",
      button: "Start a collaboration",
      imageAlt: "Workspace with notebook and laptop"
    }
  },
  zh: {
    hero: {
      label: "全端工程師 · 行銷文宣製作人",
      titleLines: ["LAI", "ZHAO TING"],
      paragraphs: [
        "結合技術與創意的全端開發者，以程式邏輯打造流暢體驗，同時以行銷視覺與內容策略放大專案影響力。",
        "我在開發與設計之間找到平衡，樂於學習新工具並公開分享製作過程，讓每一次專案都成為可複製的成長紀錄。"
      ],
      primaryCta: { label: "查看作品", to: "/work" },
      secondaryCta: { label: "閱讀學習筆記", to: "/blog" },
      badge: "Fullstack Maker",
      caption: "Tech × Creative × Marketing",
      imageAlt: "色彩繽紛的品牌包裝陳列於布料背景"
    },
    about: {
      tag: "關於我",
      heading: "在技術、設計與行銷之間靈活切換，讓專案從概念到上線都保持一致。",
      paragraphs: [
        "我擅長以 React、Vue 與 Next.js 打造高速又具備品牌感的前端介面，並透過 Node.js、資料庫與 API 整合建立可靠的後端流程。每一次開發都會同步思考內容策略與使用者旅程，確保體驗能服務真正的商業目標。",
        "除了實作，也持續紀錄專案心得與技術筆記，分享從行銷腳本、視覺設計到程式最佳化的跨領域經驗。希望讓更多團隊看見技術與故事並進的可能性。"
      ],
      timezone: "台北時間 · GMT +8",
      contactLabel: "寫信聯絡"
    },
    projects: {
      tag: "Projects & Learning",
      heading: "技術實作與行銷策略交織的作品紀錄。",
      statValue: "04",
      statCaption: "跨領域專案與示範文案，持續擴充中。",
      items: [
        {
          index: "01",
          title: "個人作品集網站",
          subtitle: "React + Tailwind 全端部署",
          image: projectImages.portfolio,
          alt: "個人作品集網站畫面",
          href: "/work",
          size: "tall"
        },
        {
          index: "02",
          title: "互動式行銷活動頁面",
          subtitle: "Vue · GSAP 動畫體驗",
          image: projectImages.interactive,
          alt: "行銷活動頁面互動畫面",
          href: "/work",
          size: "wide"
        },
        {
          index: "03",
          title: "自動化報表工具",
          subtitle: "Node.js + Google Sheets API",
          image: projectImages.automation,
          alt: "報表儀表板與程式碼",
          href: "/work",
          size: "square"
        },
        {
          index: "04",
          title: "影片腳本與剪輯企劃",
          subtitle: "品牌故事影音策略",
          image: projectImages.storytelling,
          alt: "分鏡與剪輯畫面",
          href: "/blog",
          size: "wide"
        }
      ]
    },
    process: {
      tag: "Process",
      titleLines: ["Build.", "Measure.", "Share."],
      description:
        "從需求訪談、原型測試到內容上線，我以技術驗證假設、以數據調整節奏，再把經驗整理成可參考的製作筆記，陪伴團隊持續優化產品。",
      imageAlt: "跨領域製作流程拼貼"
    },
    services: {
      tag: "Skills & Services",
      heading: "以技術、整合與內容策略推動專案成果。",
      items: [
        {
          title: "前端開發",
          subtitle: "React・Vue・Tailwind・Next.js",
          body: "以模組化程式架構與互動細節打造流暢體驗，確保各裝置都能快速載入。",
          cta: "查看前端作品",
          href: "/work",
          image: serviceImages.frontend
        },
        {
          title: "後端與整合",
          subtitle: "Node.js・Express・資料庫・API",
          body: "規劃資料流程與 API 介接，將自動化報表、行銷活動與第三方服務串聯。",
          cta: "認識整合流程",
          href: "/work",
          image: serviceImages.backend
        },
        {
          title: "內容與行銷製作",
          subtitle: "腳本・視覺・社群策劃",
          body: "結合品牌文字、影音腳本與社群節奏，讓專案在上線後持續擴散。",
          cta: "瀏覽行銷案例",
          href: "/blog",
          image: serviceImages.marketing
        }
      ]
    },
    campaign: {
      tag: "創作理念",
      headline: "網站是作品展示，也是學習筆記。",
      body:
        "我以技術打造骨架，以內容完善敘事，讓訪客看見從想法、設計到實作的完整脈絡，也幫助品牌建立長期信任。",
      credit: "Site purpose · 2025",
      cta: "閱讀更多筆記",
      imageAlt: "網站策略與內容策劃拼貼"
    },
    categories: {
      tag: "分類探索",
      heading: "快速瀏覽我最常琢磨的製作主題。",
      ctaPrev: "上一則",
      ctaNext: "下一則"
    },
    social: {
      imageAlt: "社群筆記分享預覽",
      caption: "@laizh.dev",
      body: "每週分享開發實驗、行銷測試與影音製作流程，記錄跨領域製作心得。",
      cta: "追蹤最新筆記"
    },
    closing: {
      title: "LAI ZHAO TING",
      headline: "一起把想像變成體驗。",
      body: "無論是網站重構、流程自動化還是內容行銷專案，我樂於討論需求並分享適合的技術與製作方案。",
      button: "開始合作討論",
      imageAlt: "辦公桌與筆記工具"
    }
  }
};

const IndexPage = () => {
  useAnimateOnScroll();
  const { locale } = useLocale();
  const copy = translations[locale] ?? translations.en;

  const [currentTime, setCurrentTime] = React.useState(() => new Date());

  const localizedSlides = React.useMemo(
    () =>
      categorySlides.map((slide) => {
        const translation = slide.translations?.[locale] ?? slide.translations?.en;
        return {
          id: slide.id,
          image: slide.image,
          title: translation?.title ?? slide.id,
          description: translation?.description ?? "",
          alt: translation?.title ?? slide.id
        };
      }),
    [locale]
  );

  React.useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Taipei"
  }).format(currentTime);

  const [hours, minutes, seconds] = formattedTime.split(":");

  return (
    <Layout>
      <section className="hero hero--visual" data-animate="fade">
        <div className="container hero__layout">
          <div className="hero__text">
            <span className="hero__label">{copy.hero.label}</span>
            <h1>
              {copy.hero.titleLines[0]}
              <br />
              {copy.hero.titleLines[1]}
            </h1>
            {copy.hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="hero__actions">
              <Link className="button button--solid" to={copy.hero.primaryCta.to}>
                {copy.hero.primaryCta.label}
              </Link>
              <Link className="link-arrow" to={copy.hero.secondaryCta.to}>
                {copy.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__visual-frame">
              <img src={heroImage} alt={copy.hero.imageAlt} />
            </div>
            <div className="hero__visual-meta">
              <span>{copy.hero.badge}</span>
              <span>{copy.hero.caption}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="category-swiper" data-animate="fade" style={{ "--delay": "200ms" }}>
        <div className="container category-swiper__layout">
          <div className="category-swiper__intro">
            <span className="section-tag">{copy.categories.tag}</span>
            <h2>{copy.categories.heading}</h2>
          </div>
          <div className="category-swiper__controls" aria-hidden={localizedSlides.length <= 1}>
            <button
              type="button"
              className="category-swiper__control category-swiper__control--prev"
              aria-label={copy.categories.ctaPrev}
            >
              ←
            </button>
            <button
              type="button"
              className="category-swiper__control category-swiper__control--next"
              aria-label={copy.categories.ctaNext}
            >
              →
            </button>
          </div>
        </div>
        <div className="category-swiper__carousel">
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            navigation={{ prevEl: ".category-swiper__control--prev", nextEl: ".category-swiper__control--next" }}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 160, modifier: 1, slideShadows: false }}
            breakpoints={{
              0: { coverflowEffect: { depth: 120 } },
              768: { coverflowEffect: { depth: 160 } }
            }}
            className="category-swiper__swiper"
          >
            {localizedSlides.map((slide) => (
              <SwiperSlide className="category-card" key={slide.id}>
                <figure className="category-card__media">
                  <img src={slide.image} alt={slide.alt} loading="lazy" />
                  <span className="category-card__badge">{slide.title}</span>
                </figure>
                <div className="category-card__body">
                  <p>{slide.description}</p>
                  <Link className="link-arrow" to="/work">
                    {locale === "en" ? "See related work" : "查看相關作品"}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="studio-story" data-animate="fade" style={{ "--delay": "140ms" }}>
        <div className="container studio-story__layout">
          <div className="studio-story__copy">
            <span className="section-tag">{copy.about.tag}</span>
            <h2>{copy.about.heading}</h2>
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="studio-story__meta">
            <div className="studio-story__time">
              <span>{hours}</span>
              <span>{minutes}</span>
              <span>{seconds}</span>
            </div>
            <span className="studio-story__timezone">{copy.about.timezone}</span>
            <a className="link-arrow" href="mailto:hello@laizhaoting.com">
              {copy.about.contactLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio" data-animate="fade" style={{ "--delay": "200ms" }}>
        <div className="container">
          <div className="portfolio__header">
            <span className="section-tag">{copy.projects.tag}</span>
            <h2>{copy.projects.heading}</h2>
            <Link className="link-arrow" to="/work">
              {locale === "en" ? "View all projects" : "查看全部專案"}
            </Link>
          </div>
          <div className="portfolio__grid">
            <div className="portfolio__stat">
              <span className="portfolio__stat-number">{copy.projects.statValue}</span>
              <p>{copy.projects.statCaption}</p>
            </div>
            {copy.projects.items.map((project) => (
              <Link key={project.title} className={`portfolio__item portfolio__item--${project.size}`} to={project.href}>
                <div className="portfolio__image">
                  <img src={project.image} alt={project.alt} />
                </div>
                <div className="portfolio__meta">
                  <span className="portfolio__index">{project.index}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.subtitle}</span>
                  </div>
                  <span className="portfolio__link">{locale === "en" ? "View more" : "查看更多"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="collage" data-animate="fade" style={{ "--delay": "260ms" }}>
        <div className="container collage__layout">
          <div className="collage__copy">
            <span className="section-tag">{copy.process.tag}</span>
            <h2>
              {copy.process.titleLines[0]}
              <br />
              {copy.process.titleLines[1]}
              <br />
              {copy.process.titleLines[2]}
            </h2>
            <p>{copy.process.description}</p>
          </div>
          <div className="collage__stack">
            {processImages.map((src, index) => (
              <div key={src} className={`collage__item collage__item--${index}`}>
                <img src={src} alt={copy.process.imageAlt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" data-animate="fade" style={{ "--delay": "320ms" }}>
        <div className="container services__layout">
          <div className="services__intro">
            <span className="section-tag">{copy.services.tag}</span>
            <h2>{copy.services.heading}</h2>
          </div>
          <div className="services__list">
            {copy.services.items.map((service) => (
              <article key={service.title} className="service">
                <div className="service__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service__copy">
                  <header>
                    <h3>{service.title}</h3>
                    <h4>{service.subtitle}</h4>
                  </header>
                  <p>{service.body}</p>
                  <Link className="link-arrow" to={service.href}>
                    {service.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="campaign" data-animate="fade" style={{ "--delay": "380ms" }}>
        <div className="container campaign__layout">
          <div className="campaign__image">
            <img src={campaignImage} alt={copy.campaign.imageAlt} />
          </div>
          <div className="campaign__copy">
            <span className="section-tag">{copy.campaign.tag}</span>
            <h2>{copy.campaign.headline}</h2>
            <p>{copy.campaign.body}</p>
            <div className="campaign__credit">{copy.campaign.credit}</div>
            <Link className="button button--ghost" to="/blog">
              {copy.campaign.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="social" data-animate="fade" style={{ "--delay": "440ms" }}>
        <div className="container social__layout">
          <div className="social__feature">
            <img src={socialImage} alt={copy.social.imageAlt} />
          </div>
          <div className="social__copy">
            <span className="social__handle">{copy.social.caption}</span>
            <p>{copy.social.body}</p>
            <a className="link-arrow" href="https://www.instagram.com" target="_blank" rel="noreferrer">
              {copy.social.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="closing" data-animate="fade" style={{ "--delay": "500ms" }}>
        <div className="container closing__layout">
          <div className="closing__headline">
            <h2>{copy.closing.title}</h2>
            <p>{copy.closing.headline}</p>
          </div>
          <div className="closing__content">
            <div className="closing__visual">
              <img src={closingImage} alt={copy.closing.imageAlt} />
            </div>
            <div className="closing__cta">
              <p>{copy.closing.body}</p>
              <div className="closing__links">
                <a href="mailto:hello@laizhaoting.com">hello@laizhaoting.com</a>
                <a href="tel:+886912345678">+886 912 345 678</a>
              </div>
              <a className="button button--solid" href="mailto:hello@laizhaoting.com">
                {copy.closing.button}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>賴昭庭｜全端工程師與行銷文宣製作人</title>
    <meta
      name="description"
      content="結合 React、Node.js 與行銷內容策略的跨領域製作者，分享網站開發、行銷活動與影音企劃的製作筆記。"
    />
  </>
);
