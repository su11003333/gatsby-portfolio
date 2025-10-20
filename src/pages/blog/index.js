import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import { useLocale } from "../../context/LocaleContext";
import "../../styles/collection.css";

const heroContent = {
  en: {
    tag: "Journal",
    heading: "Field notes & process write-ups.",
    description: "Research logs covering web, marketing, video, and AI workflows."
  },
  zh: {
    tag: "Journal",
    heading: "製作筆記與流程紀錄。",
    description: "記錄網頁開發、行銷策略、影音製作與 AI 工具的研究心得。"
  }
};

const BlogIndexPage = ({ data }) => {
  useAnimateOnScroll();
  const { locale } = useLocale();
  const sortedPosts = data.allBlogJson.nodes;
  const copy = heroContent[locale] ?? heroContent.en;
  const allKey = "__all__";
  const [activeTag, setActiveTag] = React.useState(allKey);

  React.useEffect(() => {
    setActiveTag(allKey);
  }, [locale]);

  const availableTags = React.useMemo(() => {
    const tagSet = new Set();
    sortedPosts.forEach((post) => {
      const translation = post.translations?.[locale] ?? post.translations?.en;
      translation?.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [sortedPosts, locale]);

  const filteredPosts = React.useMemo(() => {
    if (activeTag === allKey) {
      return sortedPosts;
    }
    return sortedPosts.filter((post) => {
      const translation = post.translations?.[locale] ?? post.translations?.en;
      return translation?.tags?.includes(activeTag);
    });
  }, [sortedPosts, activeTag, locale]);

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
                {locale === "en" ? "All topics" : "全部主題"}
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
            {filteredPosts.map((post, index) => (
              <Link
                to={`/blog/${post.slug}`}
                key={`${post.slug}-${activeTag}`}
                className="collection-card"
                data-animate="slide-up"
                style={{ "--delay": `${120 + index * 80}ms` }}
              >
                {(() => {
                  const translation = post.translations?.[locale] ?? post.translations?.en;
                  const image = post.heroImage;
                  return (
                    <>
                      {image ? (
                        <figure className="collection-card__media">
                          <img src={image} alt={translation?.title ?? post.slug} loading="lazy" />
                        </figure>
                      ) : null}
                      <div className="collection-card__copy">
                        <span className="collection-card__meta">{translation.meta}</span>
                        <h2>{translation.title}</h2>
                        <p>{translation.excerpt}</p>
                        <span className="collection-card__arrow">
                          {locale === "en" ? "Read article →" : "閱讀文章 →"}
                        </span>
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

export default BlogIndexPage;

export const Head = () => (
  <>
    <title>部落格列表 — Lai Zhao Ting</title>
    <meta name="description" content="Lai Zhao Ting 的部落格列表，假資料示意各種網頁、平面、影片與 AI 相關文章。" />
  </>
);

export const query = graphql`
  {
    allBlogJson(sort: { fields: [date], order: DESC }) {
      nodes {
        slug
        date
        heroImage
        translations {
          en {
            meta
            title
            excerpt
            tags
            readingTime
          }
          zh {
            meta
            title
            excerpt
            tags
            readingTime
          }
        }
      }
    }
  }
`;
