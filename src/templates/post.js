import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostDetail from "../components/PostDetail";

const PostTemplate = ({ data }) => {
  const post = data.blogJson;
  const orderedPosts = data.allBlogJson.nodes;
  const currentIndex = orderedPosts.findIndex((item) => item.slug === post.slug);
  const previous = currentIndex > 0 ? orderedPosts[currentIndex - 1] : null;
  const next = currentIndex < orderedPosts.length - 1 ? orderedPosts[currentIndex + 1] : null;

  return (
    <Layout>
      <PostDetail post={post} previous={previous} next={next} />
    </Layout>
  );
};

export const query = graphql`
  query PostTemplate($slug: String!) {
    blogJson(slug: { eq: $slug }) {
      slug
      date
      heroImage
      translations {
        en {
          title
          meta
          excerpt
          body
          tags
          readingTime
        }
        zh {
          title
          meta
          excerpt
          body
          tags
          readingTime
        }
      }
    }
    allBlogJson(sort: { fields: [date], order: DESC }) {
      nodes {
        slug
        date
        heroImage
        translations {
          en {
            title
          }
          zh {
            title
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const translations = data.blogJson.translations;
  const zh = translations?.zh;
  const en = translations?.en;
  const title = zh?.title ?? en?.title ?? "Journal";
  const description = zh?.excerpt ?? en?.excerpt ?? "Article detail";

  return (
    <>
      <title>{title} — Journal</title>
      <meta name="description" content={description} />
    </>
  );
};

export default PostTemplate;
