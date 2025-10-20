import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import WorkDetail from "../components/WorkDetail";

const WorkTemplate = ({ data }) => {
  const work = data.worksJson;
  const orderedWorks = data.allWorksJson.nodes;
  const currentIndex = orderedWorks.findIndex((item) => item.slug === work.slug);
  const previous = currentIndex > 0 ? orderedWorks[currentIndex - 1] : null;
  const next = currentIndex < orderedWorks.length - 1 ? orderedWorks[currentIndex + 1] : null;

  return (
    <Layout>
      <WorkDetail work={work} previous={previous} next={next} />
    </Layout>
  );
};

export const query = graphql`
  query WorkTemplate($slug: String!) {
    worksJson(slug: { eq: $slug }) {
      slug
      year
      tools
      heroImage
      coverImage
      externalLink
      translations {
        en {
          title
          label
          summary
          role
          description
          tags
          highlights
        }
        zh {
          title
          label
          summary
          role
          description
          tags
          highlights
        }
      }
    }
    allWorksJson(sort: { fields: [year], order: DESC }) {
      nodes {
        slug
        year
        tools
        heroImage
        coverImage
        externalLink
        translations {
          en {
            title
            label
          }
          zh {
            title
            label
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const translations = data.worksJson.translations;
  const zh = translations?.zh;
  const en = translations?.en;
  const title = zh?.title ?? en?.title ?? "Project Detail";
  const description = zh?.summary ?? en?.summary ?? "Project overview";

  return (
    <>
      <title>{title} — Project Detail</title>
      <meta name="description" content={description} />
    </>
  );
};

export default WorkTemplate;
