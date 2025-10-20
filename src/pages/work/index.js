import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import { useLocale } from "../../context/LocaleContext";
import "../../styles/collection.css";

const heroContent = {
  en: {
    tag: "Works",
    heading: "Selected projects from the studio.",
    description: "A cross-section of web, identity, film, and AI-enabled workflows with detailed case notes.",
    arrow: "View project →"
  },
  zh: {
    tag: "Works",
    heading: "作品精選。",
    description: "涵蓋網頁設計、識別、影像與 AI 工作流程的案例筆記。",
    arrow: "查看專案 →"
  }
};

const WorkIndexPage = ({ data }) => {
  useAnimateOnScroll();
  const { locale } = useLocale();
  const sortedWorks = data.allWorksJson.nodes;
  const copy = heroContent[locale] ?? heroContent.en;
  const allKey = "__all__";
  const [activeTag, setActiveTag] = React.useState(allKey);

  React.useEffect(() => {
    setActiveTag(allKey);
  }, [locale]);

  const availableTags = React.useMemo(() => {
    const tagSet = new Set();
    sortedWorks.forEach((work) => {
      const translation = work.translations?.[locale] ?? work.translations?.en;
      translation?.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [sortedWorks, locale]);

  const filteredWorks = React.useMemo(() => {
    if (activeTag === allKey) {
      return sortedWorks;
    }
    return sortedWorks.filter((work) => {
      const translation = work.translations?.[locale] ?? work.translations?.en;
      return translation?.tags?.includes(activeTag);
    });
  }, [sortedWorks, activeTag, locale]);

  return (
    <Layout>
      <section className="collection-page">
        <div className="container">
          <div className="collection-hero" data-animate="slide-up">
            <span>{copy.tag}</span>
            <h1>{copy.heading}</h1>
            <p>{copy.description}</p>
          </div>
          {availableTags.length ? (
            <div className="collection-filters" data-animate="slide-up">
              <button
                type="button"
                onClick={() => setActiveTag(allKey)}
                className={`collection-filter${activeTag === allKey ? " collection-filter--active" : ""}`}
                aria-pressed={activeTag === allKey}
              >
                {locale === "en" ? "All projects" : "全部專案"}
              </button>
              {availableTags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`collection-filter${activeTag === tag ? " collection-filter--active" : ""}`}
                  aria-pressed={activeTag === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          ) : null}
          <div className="collection-grid">
            {filteredWorks.map((work, index) => (
              <Link
                to={`/work/${work.slug}`}
                key={`${work.slug}-${activeTag}`}
                className="collection-card"
                data-animate="slide-up"
                style={{ "--delay": `${120 + index * 80}ms` }}
              >
                {(() => {
                  const translation = work.translations?.[locale] ?? work.translations?.en;
                  const image = work.coverImage ?? work.heroImage;
                  return (
                    <>
                      {image ? (
                        <figure className="collection-card__media">
                          <img src={image} alt={translation?.title ?? work.slug} loading="lazy" />
                        </figure>
                      ) : null}
                      <div className="collection-card__copy">
                        <span className="collection-card__meta">{translation.label}</span>
                        <h2>{translation.title}</h2>
                        <p>{translation.summary}</p>
                        <span className="collection-card__arrow">{copy.arrow}</span>
                      </div>
                    </>
                  );
                })()}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkIndexPage;

export const Head = () => (
  <>
    <title>作品列表 — Lai Zhao Ting</title>
    <meta name="description" content="Lai Zhao Ting 的作品列表，收錄網頁設計、平面與影片製作的假資料示意專案。" />
  </>
);

export const query = graphql`
  {
    allWorksJson(sort: { fields: [year], order: DESC }) {
      nodes {
        slug
        coverImage
        heroImage
        year
        translations {
          en {
            label
            title
            summary
            tags
          }
          zh {
            label
            title
            summary
            tags
          }
        }
      }
    }
  }
`;
