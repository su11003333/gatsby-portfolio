import * as React from "react";
import Layout from "../components/Layout";
import "../styles/home.css";

const tickerMessages = [
  "Lai Zhao Ting — Web · Graphic · Video · AI",
  "Portfolio & Journal 2025",
  "Designing stories across screens"
];

const studioStats = [
  { label: "完成專案", value: "40+" },
  { label: "合作品牌", value: "18" },
  { label: "影片時數", value: "120+" }
];

const mosaicProjects = [
  {
    id: "01",
    name: "HORIZON LAB",
    description: "以 React 與 WebGL 打造科技新創的互動式官網，串接 AI Demo 與客戶洽談流程。",
    meta: "Web Design · 2024",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "02",
    name: "METROCRAFT",
    description: "為城市策展活動設計視覺識別與海報系統，延伸至導視、社群模板與印刷品。",
    meta: "Graphic Design · 2024",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "03",
    name: "AURORA RELEASE",
    description: "結合實拍與生成式 AI 的產品發佈影片，規劃腳本、剪輯與 3D 合成加上動態字幕。",
    meta: "Video · AI · 2025",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1200&q=80"
  }
];

const manifestoCopy =
  "我是一名以網頁設計為核心的跨領域創作者，結合平面設計、影片製作與 AI 工具，協助品牌打造完整的數位敘事體驗。從概念到上線，我專注讓每個接觸點都對齊策略與美感。";

const coreServices = [
  {
    index: "01",
    title: "Web Design & Development",
    description: "規劃資訊架構、互動原型與視覺動態，並以 Webflow 或 React 實作，確保網站效能與 SEO。",
    deliverables: "IA · UI/UX · Front-end · SEO"
  },
  {
    index: "02",
    title: "Visual Identity & Print",
    description: "建立品牌語彙、標誌、色彩與排版系統，延伸至海報、包裝與線下活動物料。",
    deliverables: "Logo · Guideline · Packaging · Collateral"
  },
  {
    index: "03",
    title: "Video & AI Storytelling",
    description: "統籌腳本、分鏡與後製，整合實拍、動態圖像與生成式 AI，加速產出具有記憶點的影片。",
    deliverables: "Script · Edit · Motion · GenAI"
  }
];

const serviceGallery = [
  {
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    caption: "Web Flow"
  },
  {
    image: "https://images.unsplash.com/photo-1520174691701-bc555a3404ca?auto=format&fit=crop&w=600&q=80",
    caption: "Poster Set"
  },
  {
    image: "https://images.unsplash.com/photo-1523528283115-0f6c1cc1b0f5?auto=format&fit=crop&w=600&q=80",
    caption: "Studio Edit"
  },
  {
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=600&q=80",
    caption: "AI Frames"
  }
];

const releaseHighlight = {
  title: "以 AI 與動態設計協助茶飲品牌完成網站 × 影片整合",
  description:
    "More Nutrition 的年度改版中，我負責網站體驗設計、Webflow 上線與發佈影片。透過 AI 生成 storyboard 與字幕合成，大幅縮短製作時程。",
  meta: "Feature Project · 2025",
  image: "https://images.unsplash.com/photo-1567016376408-0226e4d0fc34?auto=format&fit=crop&w=1400&q=80",
  credits: "Web UX、Webflow、Video Edit、GenAI"
};

const journalEntries = [
  {
    title: "用 AI 加速網站設計迭代的 6 個流程",
    meta: "Journal · 6 min",
    url: "/journal/ai-web-design",
    summary: "分享我在資訊架構、版型探索與素材生成時整合 Notion AI、Midjourney 與 Figma 變體的方式。"
  },
  {
    title: "平面到網頁：如何延伸品牌識別",
    meta: "Journal · 5 min",
    url: "/journal/identity-to-web",
    summary: "解析 MetroCraft 專案中，從海報系統到響應式網站的視覺語彙轉換心得。"
  },
  {
    title: "影片製作流程的混合工作法",
    meta: "Journal · 4 min",
    url: "/journal/video-hybrid-workflow",
    summary: "記錄我如何結合實拍、After Effects 與生成式 AI，快速完成發佈影片與動態社群素材。"
  }
];

const closingGallery = [
  {
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80",
    title: "Portfolio Reel",
    caption: "Web · Graphic · Video"
  },
  {
    image: "https://images.unsplash.com/photo-1533757874894-efb4d7b0813d?auto=format&fit=crop&w=1000&q=80",
    title: "AI Moodboard",
    caption: "Exploration · Process"
  }
];

const IndexPage = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <section className="hero" id="studio">
        <div className="container hero__container">
          <div className="hero__info">
            <div className="hero__meta" data-animate="slide-left">
              <span className="hero__eyebrow">Lai Zhao Ting · Web / Graphic / Video / AI</span>
              <span>將多媒體敘事化為具體的品牌體驗</span>
            </div>
            <h1 className="hero__title" data-animate="slide-up" style={{ "--delay": "120ms" }}>
              <span>PORTFOLIO</span>
              <span>2025</span>
            </h1>
            <p className="hero__lead" data-animate="fade" style={{ "--delay": "220ms" }}>
              透過網頁設計、平面設計、影片製作與 AI 工具的整合，我協助品牌與團隊打造具辨識度的數位旅程，並用部落格持續記錄實驗與流程。
            </p>
            <div className="hero__actions" data-animate="slide-up" style={{ "--delay": "320ms" }}>
              <a className="button button--primary" href="mailto:hello@example.com">
                預約合作
              </a>
              <a className="button button--ghost" href="#work">
                查看作品
              </a>
            </div>
            <div className="hero__stats" data-animate="fade" style={{ "--delay": "380ms" }}>
              {studioStats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <span className="hero__stat-number">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__visual" data-animate="scale-up" style={{ "--delay": "260ms" }}>
            <figure className="hero__figure">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="個人作品集的設計場景"
                loading="lazy"
              />
              <figcaption>
                <span>Studio Desk</span>
                <span>Web · Motion · AI Workflow</span>
              </figcaption>
            </figure>
            <div className="hero__badge">Personal Studio</div>
          </div>
        </div>
        <div className="hero__ticker" aria-hidden="true">
          <div className="hero__ticker-track">
            {tickerMessages.map((message, index) => (
              <span key={`${message}-a-${index}`}>{message}</span>
            ))}
          </div>
          <div className="hero__ticker-track" aria-hidden="true">
            {tickerMessages.map((message, index) => (
              <span key={`${message}-b-${index}`}>{message}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase" id="work">
        <div className="container">
          <header className="showcase__header">
            <div className="section-label" data-animate="slide-right">
              Portfolio Log · Web / Graphic / Video
            </div>
            <div className="showcase__title" data-animate="slide-up" style={{ "--delay": "120ms" }}>
              <span className="showcase__ordinal">—25</span>
              <h2>Selected Projects</h2>
            </div>
            <p className="showcase__intro" data-animate="fade" style={{ "--delay": "220ms" }}>
              從互動式網站到視覺識別與影片企劃，這些專案展示了我如何把策略、設計與技術整合成完整的品牌故事。每個案例也在部落格中記錄了實作筆記。
            </p>
          </header>
          <div className="showcase__grid">
            {mosaicProjects.map((project, index) => (
              <article
                className="showcase__card"
                data-animate="scale-up"
                style={{ "--delay": `${160 + index * 80}ms` }}
                key={project.name}
              >
                <div className="showcase__meta">
                  <span>{project.id}</span>
                  <span>{project.meta}</span>
                </div>
                <div className="showcase__media">
                  <img src={project.image} alt={project.name} loading="lazy" />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="container manifesto__inner">
          <h2 data-animate="slide-up">Design. Craft. Iterate.</h2>
          <p data-animate="fade" style={{ "--delay": "140ms" }}>{manifestoCopy}</p>
        </div>
      </section>

      <section className="core-services" id="services">
        <div className="container">
          <header className="core-services__header">
            <span className="section-label" data-animate="slide-right">Services</span>
            <h2 data-animate="slide-up" style={{ "--delay": "100ms" }}>
              為網站、平面與影片打造一致的語言。
            </h2>
          </header>
          <div className="core-services__layout">
            <div className="core-services__list">
              {coreServices.map((service, index) => (
                <article
                  className="core-service"
                  data-animate="slide-up"
                  style={{ "--delay": `${120 + index * 80}ms` }}
                  key={service.title}
                >
                  <span className="core-service__index">{service.index}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="core-service__deliverables">{service.deliverables}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="core-services__gallery">
              {serviceGallery.map((item, idx) => (
                <figure
                  className="core-services__thumb"
                  data-animate="scale-up"
                  style={{ "--delay": `${200 + idx * 80}ms` }}
                  key={`${item.caption}-${idx}`}
                >
                  <img src={item.image} alt={item.caption} loading="lazy" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="container impact__inner">
          <p data-animate="slide-up">
            在每一個頁面與畫面中，我把策略、視覺與技術疊合，讓觀者願意停留更久並記住品牌。
          </p>
          <div className="impact__meta" data-animate="fade" style={{ "--delay": "160ms" }}>
            <span>Studio Motto</span>
            <span>Web · Graphic · Video · AI</span>
          </div>
        </div>
      </section>

      <section className="release" id="release">
        <div className="container release__grid">
          <div className="release__info">
            <span className="section-label" data-animate="slide-right">
              {releaseHighlight.meta}
            </span>
            <h2 data-animate="slide-up" style={{ "--delay": "100ms" }}>{releaseHighlight.title}</h2>
            <p data-animate="fade" style={{ "--delay": "180ms" }}>{releaseHighlight.description}</p>
            <span className="release__credits" data-animate="slide-up" style={{ "--delay": "240ms" }}>
              {releaseHighlight.credits}
            </span>
          </div>
          <figure className="release__media" data-animate="scale-up" style={{ "--delay": "160ms" }}>
            <img src={releaseHighlight.image} alt="More Nutrition 網站與影片專案" loading="lazy" />
            <figcaption>More Nutrition · 完整發佈流程</figcaption>
          </figure>
        </div>
      </section>

      <section className="journal" id="journal">
        <div className="container">
          <header className="journal__header">
            <span className="section-label" data-animate="slide-right">Blog</span>
            <h2 data-animate="slide-up" style={{ "--delay": "100ms" }}>紀錄每一次設計與實驗。</h2>
          </header>
          <div className="journal__list">
            {journalEntries.map((entry, index) => (
              <a
                className="journal__item"
                data-animate="slide-up"
                style={{ "--delay": `${120 + index * 80}ms` }}
                href={entry.url}
                key={entry.title}
              >
                <span className="journal__meta">{entry.meta}</span>
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
                <span className="journal__arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="container">
          <div className="closing__heading">
            <span className="closing__label" data-animate="slide-right">Lai Zhao Ting</span>
            <h2 data-animate="slide-up" style={{ "--delay": "100ms" }}>
              專注於網站、平面、影片與 AI 的整合創作者。
            </h2>
          </div>
          <div className="closing__gallery">
            {closingGallery.map((item, index) => (
              <figure
                className="closing__card"
                data-animate="scale-up"
                style={{ "--delay": `${120 + index * 100}ms` }}
                key={item.title}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>
                  <span>{item.title}</span>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="closing__cta">
            <p data-animate="fade" style={{ "--delay": "200ms" }}>
              如果你正在尋找能同時掌握網頁設計、平面設計、影片製作與 AI 工具的合作夥伴，歡迎寫信給我，也可以關注部落格的最新文章。
            </p>
            <div className="closing__actions" data-animate="slide-up" style={{ "--delay": "280ms" }}>
              <a className="button button--primary" href="mailto:hello@example.com">
                hello@example.com
              </a>
              <a className="button button--ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
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
    <title>Lai Zhao Ting — Web · Graphic · Video · AI</title>
    <meta
      name="description"
      content="Lai Zhao Ting 的個人作品與部落格，專注於網頁設計、平面設計、影片製作與 AI 工具整合。"
    />
  </>
);
