import * as React from "react";
import { Link } from "gatsby";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import { useLocale } from "../context/LocaleContext";
import Markdown from "./Markdown";
import "../styles/detail.css";

const WorkDetail = ({ work, previous, next }) => {
  useAnimateOnScroll();
  const { locale } = useLocale();

  if (!work) {
    return null;
  }

  const translation = work.translations?.[locale] ?? work.translations?.en ?? {};

  return (
    <section className="detail-page">
      <div className="container">
        <div className="detail-hero">
          <div className="detail-hero__info" data-animate="slide-up">
            <span className="detail-hero__label">{translation.label}</span>
            <h1 className="detail-hero__title">{translation.title}</h1>
            <p className="detail-hero__summary">{translation.summary}</p>
            <div className="detail-pill-group">
              <span className="detail-pill">{work.year}</span>
              <span className="detail-pill">{translation.role}</span>
              {work.tools?.slice(0, 3).map((tool) => (
                <span className="detail-pill" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
            {work.externalLink ? (
              <a className="button button--ghost" href={work.externalLink} target="_blank" rel="noreferrer">
                {locale === "en" ? "View live project" : "觀看線上作品"}
              </a>
            ) : null}
          </div>
          <figure data-animate="scale-up">
            <img src={work.heroImage} alt={translation.title} loading="lazy" />
            <figcaption>{translation.title}</figcaption>
          </figure>
        </div>

        {translation.description ? (
          <div className="detail-body" data-animate="slide-up">
            <Markdown>{translation.description}</Markdown>
          </div>
        ) : null}

        {translation.highlights?.length ? (
          <div className="detail-highlights" data-animate="slide-up" style={{ "--delay": "160ms" }}>
            <h3>{locale === "en" ? "Highlights" : "專案亮點"}</h3>
            <ul>
              {translation.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="detail-navigation">
          <Link to="/work">{locale === "en" ? "← Back to works" : "← 返回作品列表"}</Link>
          <div>
            {previous ? (
              <Link to={`/work/${previous.slug}`}>
                {locale === "en" ? "Prev:" : "上一個："}{" "}
                {(previous.translations?.[locale] ?? previous.translations?.en)?.title}
              </Link>
            ) : null}
            {next ? (
              <>
                {previous ? <span style={{ margin: "0 0.75rem" }}>·</span> : null}
                <Link to={`/work/${next.slug}`}>
                  {locale === "en" ? "Next:" : "下一個："}{" "}
                  {(next.translations?.[locale] ?? next.translations?.en)?.title}
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetail;
