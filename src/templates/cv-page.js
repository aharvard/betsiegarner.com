import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import CVSection from "../components/CVSection";
import Layout from "../components/Layout";

export const CVPageTemplate = ({
  title,
  contact,
  academicAppointments,
  education,
  interests,
  publications,
  papersInProgress,
  funding,
  awards,
  conferencePresentations,
  campusPresentations,
  teachingExperience,
  professionalDevelopment,
  affiliations,
  media,
  proService,
  universityService,
  departmentService,
  publicService,
  references
}) => (
  <div className="cv-page">
    <h1>{title}</h1>
    <CVSection
      className="cv-section--contact"
      gridItems={contact.entries}
      sectionHeading={contact.heading}
    />
    <CVSection
      className="cv-section--academic-appointments"
      gridItems={academicAppointments.entries}
      sectionHeading={academicAppointments.heading}
    />
    <CVSection
      className="cv-section--education"
      gridItems={education.entries}
      sectionHeading={education.heading}
    />
    <CVSection
      className="cv-section--interests"
      gridItems={interests.entries}
      sectionHeading={interests.heading}
    />
    <CVSection
      className="cv-section--publications"
      gridItems={publications.entries}
      sectionHeading={publications.heading}
    />
    <CVSection
      className="cv-section--papers-in-progress"
      gridItems={papersInProgress.entries}
      sectionHeading={papersInProgress.heading}
      status={papersInProgress.status}
    />
    <CVSection
      className="cv-section--funding"
      gridItems={funding.entries}
      sectionHeading={funding.heading}
    />
    <CVSection
      className="cv-section--awards"
      gridItems={awards.entries}
      sectionHeading={awards.heading}
    />
    <CVSection
      className="cv-section--conference-presentations"
      gridItems={conferencePresentations.entries}
      sectionHeading={conferencePresentations.heading}
    />
    <CVSection
      className="cv-section--campus-presentations"
      gridItems={campusPresentations.entries}
      sectionHeading={campusPresentations.heading}
    />
    <CVSection
      className="cv-section--teaching-experience"
      gridItems={teachingExperience.entries}
      sectionHeading={teachingExperience.heading}
    />
    <CVSection
      className="cv-section--professional-development"
      gridItems={professionalDevelopment.entries}
      sectionHeading={professionalDevelopment.heading}
    />
    <CVSection
      className="cv-section--affiliations"
      gridItems={affiliations.entries}
      sectionHeading={affiliations.heading}
    />
    <CVSection
      className="cv-section--media"
      gridItems={media.entries}
      sectionHeading={media.heading}
    />
    <CVSection
      className="cv-section--pro-service"
      gridItems={proService.entries}
      sectionHeading={proService.heading}
    />
    <CVSection
      className="cv-section--university-service"
      gridItems={universityService.entries}
      sectionHeading={universityService.heading}
    />
    <CVSection
      className="cv-section--department-service"
      gridItems={departmentService.entries}
      sectionHeading={departmentService.heading}
    />
    <CVSection
      className="cv-section--public-service"
      gridItems={publicService.entries}
      sectionHeading={publicService.heading}
    />
    <CVSection
      className="cv-section--references"
      gridItems={references.entries}
      sectionHeading={references.heading}
    />
  </div>
);

CVPageTemplate.propTypes = {
  title: PropTypes.string,
  contact: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  academicAppointments: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  education: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  interests: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  publications: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  papersInProgress: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string,
    status: PropTypes.string
  }),
  funding: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  awards: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  conferencePresentations: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  campusPresentations: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  teachingExperience: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  professionalDevelopment: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  affiliations: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  media: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  proService: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  universityService: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  departmentService: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  publicService: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  }),
  references: PropTypes.shape({
    entries: PropTypes.array,
    heading: PropTypes.string
  })
};

const CVPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.meta.metaTitle}</title>
        <meta property="og:title" content={frontmatter.meta.metaTitle} />
        <meta name="description" content={frontmatter.meta.metaDescription} />
      </Helmet>
      <CVPageTemplate
        title={frontmatter.title}
        contact={frontmatter.contact}
        academicAppointments={frontmatter.academicAppointments}
        education={frontmatter.education}
        interests={frontmatter.interests}
        publications={frontmatter.publications}
        papersInProgress={frontmatter.papersInProgress}
        funding={frontmatter.funding}
        awards={frontmatter.awards}
        conferencePresentations={frontmatter.conferencePresentations}
        campusPresentations={frontmatter.campusPresentations}
        teachingExperience={frontmatter.teachingExperience}
        professionalDevelopment={frontmatter.professionalDevelopment}
        affiliations={frontmatter.affiliations}
        media={frontmatter.media}
        proService={frontmatter.proService}
        universityService={frontmatter.universityService}
        departmentService={frontmatter.departmentService}
        publicService={frontmatter.publicService}
        references={frontmatter.references}
      />
    </Layout>
  );
};

CVPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default CVPage;

export const cvPageQuery = graphql`
  query CVPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        meta {
          metaTitle
          metaDescription
        }
        title
        contact {
          entries {
            address
            email
          }
          heading
        }
        academicAppointments {
          entries {
            title
            year
            institution
            institutionLocation
          }
          heading
        }
        education {
          entries {
            title
            year
            institution
            institutionLocation
          }
          heading
        }
        interests {
          entries {
            interest
          }
          heading
        }
        publications {
          entries {
            title
            quotes
            year
            journal
            journalIssue
            award
            coAuthor
          }
          heading
        }
        papersInProgress {
          entries {
            title
            quotes
            year
            status
          }
          heading
        }
        funding {
          entries {
            title
            year
            institution
            amount
          }
          heading
        }
        awards {
          entries {
            title
            year
          }
          heading
        }
        conferencePresentations {
          entries {
            title
            quotes
            year
            conference
            location
          }
          heading
        }
        campusPresentations {
          entries {
            title
            quotes
            year
            event
            institution
            institutionLocation
          }
          heading
        }
        teachingExperience {
          entries {
            title
            semester
            courses {
              course
            }
            institution
            institutionLocation
          }
          heading
        }
        professionalDevelopment {
          entries {
            title
            subTitle
            year
            institution
            institutionLocation
          }
          heading
        }
        affiliations {
          entries {
            title
            organization
          }
          heading
        }
        media {
          entries {
            title
            quotes
            year
            organization
          }
          heading
        }
        proService {
          entries {
            title
            year
          }
          heading
        }
        universityService {
          entries {
            title
            year
          }
          heading
        }
        departmentService {
          entries {
            title
            year
          }
          heading
        }
        publicService {
          entries {
            title
            year
            location
          }
          heading
        }
        references {
          entries {
            name
            email
          }
          heading
        }
      }
    }
  }
`;
