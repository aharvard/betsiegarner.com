import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({ title }) => {
  return (
    <div className="home-page-title">
      <h1>{title}</h1>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
};

const IndexPage = ({ data }) => {
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
      <IndexPageTemplate title={page.frontmatter.title} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        meta {
          metaTitle
          metaDescription
        }
        title
      }
    }
  }
`;
