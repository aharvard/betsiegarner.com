import React from "react";
import PropTypes from "prop-types";
import { CVPageTemplate } from "../../templates/cv-page";

const CVPagePreview = ({ entry }) => {
  function entries(e) {
    let eEntry = entry.getIn(["data", e, "entries"]);
    const eEntries = eEntry ? eEntry.toJS() : [];
    return eEntries;
  }

  function heading(h) {
    let hHeading = entry.getIn(["data", h, "heading"]);
    return hHeading;
  }

  return (
    <CVPageTemplate
      title={entry.getIn(["data", "title"])}
      contact={{ heading: heading("contact"), entries: entries("contact") }}
      employment={{
        heading: heading("employment"),
        entries: entries("employment")
      }}
      education={{
        heading: heading("education"),
        entries: entries("education")
      }}
      interests={{
        heading: heading("interests"),
        entries: entries("interests")
      }}
      publications={{
        heading: heading("publications"),
        entries: entries("publications")
      }}
      papersInProgress={{
        heading: heading("papersInProgress"),
        entries: entries("papersInProgress"),
        status: entry.getIn(["data", "papersInProgress", "status"])
      }}
      funding={{
        heading: heading("funding"),
        entries: entries("funding")
      }}
      awards={{
        heading: heading("awards"),
        entries: entries("awards")
      }}
      conferencePresentations={{
        heading: heading("conferencePresentations"),
        entries: entries("conferencePresentations")
      }}
      campusPresentations={{
        heading: heading("campusPresentations"),
        entries: entries("campusPresentations")
      }}
      teachingExperience={{
        heading: heading("teachingExperience"),
        entries: entries("teachingExperience")
      }}
      professionalDevelopment={{
        heading: heading("professionalDevelopment"),
        entries: entries("professionalDevelopment")
      }}
      affiliations={{
        heading: heading("affiliations"),
        entries: entries("affiliations")
      }}
      media={{
        heading: heading("media"),
        entries: entries("media")
      }}
      proService={{
        heading: heading("proService"),
        entries: entries("proService")
      }}
      universityService={{
        heading: heading("universityService"),
        entries: entries("universityService")
      }}
      departmentService={{
        heading: heading("departmentService"),
        entries: entries("departmentService")
      }}
      publicService={{
        heading: heading("publicService"),
        entries: entries("publicService")
      }}
      references={{
        heading: heading("references"),
        entries: entries("references")
      }}
    />
  );
};

CVPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default CVPagePreview;
