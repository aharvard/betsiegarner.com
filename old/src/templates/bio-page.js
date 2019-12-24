import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

export const BioPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="bio-page">
      <h1>{title}</h1>
      <PageContent content={content} />
    </section>
  );
};

BioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const BioPage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <Helmet>
        <title>{page.frontmatter.meta.metaTitle}</title>
        <meta property="og:title" content={page.frontmatter.meta.metaTitle} />
        <meta
          name="description"
          content={page.frontmatter.meta.metaDescription}
        />
      </Helmet>
      <BioPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
    </Layout>
  );
};

BioPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BioPage;

export const bioPageQuery = graphql`
  query BioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta {
          metaTitle
          metaDescription
        }
      }
    }
  }
`;
