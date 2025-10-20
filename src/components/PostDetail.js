import * as React from "react";
import { Link } from "gatsby";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import { useLocale } from "../context/LocaleContext";
import Markdown from "./Markdown";
import "../styles/detail.css";

const PostDetail = ({ post, previous, next }) => {
  useAnimateOnScroll();
  const { locale } = useLocale();

  if (!post) {
    return null;
  }

  const translation = post.translations?.[locale] ?? post.translations?.en ?? {};
  const dateLocale = locale === "zh" ? "zh-TW" : "en-US";

  const formattedDate = new Date(post.date).toLocaleString(dateLocale, {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });

  return (
    <section className="detail-page post-detail">
      <div className="container">
        <article className="post-detail__article">
          <header className="post-detail__header" data-animate="slide-up">
            <span className="post-detail__meta">{translation.meta}</span>
            <h1>{translation.title}</h1>
            <div className="post-detail__info">
              <span>{formattedDate}</span>
              <span>{translation.readingTime}</span>
            </div>
            {translation.tags?.length ? (
              <div className="detail-pill-group">
                {translation.tags.map((tag) => (
                  <span className="detail-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          {post.heroImage ? (
            <figure className="post-detail__figure" data-animate="scale-up">
              <img src={post.heroImage} alt={translation.title} loading="lazy" />
              <figcaption>{translation.title}</figcaption>
            </figure>
          ) : null}

          {translation.body ? (
            <div className="post-detail__body" data-animate="slide-up">
              <Markdown>{translation.body}</Markdown>
            </div>
          ) : null}
        </article>

        <div className="detail-navigation">
          <Link to="/blog">{locale === "en" ? "← Back to journal" : "← 返回筆記列表"}</Link>
          <div>
            {previous ? (
              <Link to={`/blog/${previous.slug}`}>
                {locale === "en" ? "Prev:" : "上一篇："}{" "}
                {(previous.translations?.[locale] ?? previous.translations?.en)?.title}
              </Link>
            ) : null}
            {next ? (
              <>
                {previous ? <span style={{ margin: "0 0.75rem" }}>·</span> : null}
                <Link to={`/blog/${next.slug}`}>
                  {locale === "en" ? "Next:" : "下一篇："}{" "}
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

export default PostDetail;
