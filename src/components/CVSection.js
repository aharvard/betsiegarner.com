import React from "react";
import PropTypes from "prop-types";

import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

const CVSection = ({ gridItems, sectionHeading, className }) => (
  <section className={"cv-section " + className}>
    <h2>{sectionHeading}</h2>
    {gridItems.map((item, index) => (
      <div className="entry" key={index}>
        {item.interest && <div className="interest">{item.interest}</div>}

        {item.year && <div className="year">{item.year}</div>}
        {item.semester && <div className="semester">{item.semester}</div>}

        {item.title && (
          <>
            <div className={item.quotes ? "title title--quotes" : "title"}>
              <div
                dangerouslySetInnerHTML={{
                  __html: (item.title = remark()
                    .use(recommended)
                    .use(remarkHtml)
                    .processSync(item.title)
                    .toString())
                }}
              />
              {item.subTitle && (
                <div className="sub-title">{item.subTitle}</div>
              )}
              {item.courses && (
                <ul className="courses">
                  {item.courses.map((courseItem, index) => (
                    <li className="course" key={index}>
                      {courseItem.course}
                    </li>
                  ))}
                </ul>
              )}
              {item.event && <div className="event">{item.event}</div>}
            </div>
          </>
        )}

        {item.organization && (
          <div className="organization">{item.organization}</div>
        )}

        {item.coAuthor && <div className="co-author">{item.coAuthor}</div>}
        {item.conference && <div className="conference">{item.conference}</div>}

        {item.institution && item.institutionLocation ? (
          <div className="institution">
            {item.institution}
            <div className="institution-location">
              {item.institutionLocation}
            </div>
          </div>
        ) : null}

        {item.institution && !item.institutionLocation ? (
          <div className="institution">{item.institution}</div>
        ) : null}

        {item.location && <div className="location">{item.location}</div>}

        {item.journal && (
          <div className="journal">
            <div className="journal-name">{item.journal}</div>
            <div className="journal-issue">{item.journalIssue}</div>
          </div>
        )}
        {item.award && <div className="award">{item.award}</div>}

        {item.status && (
          <div
            className="status"
            dangerouslySetInnerHTML={{
              __html: (item.status = remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(item.status)
                .toString())
            }}
          />
        )}

        {item.amount && <div className="amount">{item.amount}</div>}

        {item.address && (
          <div className="address">
            <span
              dangerouslySetInnerHTML={{
                __html: (item.address = remark()
                  .use(recommended)
                  .use(remarkHtml)
                  .processSync(item.address)
                  .toString())
              }}
            />
            {/* {item.address} */}
          </div>
        )}

        {item.email && (
          <div className="email">
            {item.name && <div className="name">{item.name}</div>}
            {item.email}
          </div>
        )}
      </div>
    ))}
  </section>
);

CVSection.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      amount: PropTypes.string,
      award: PropTypes.string,
      coAuthor: PropTypes.string,
      conference: PropTypes.string,
      courses: PropTypes.arrayOf(PropTypes.object),
      email: PropTypes.string,
      event: PropTypes.string,
      institution: PropTypes.string,
      interest: PropTypes.string,
      journal: PropTypes.string,
      journalIssue: PropTypes.string,
      location: PropTypes.string,
      name: PropTypes.string,
      organization: PropTypes.string,
      quotes: PropTypes.boolean,
      semester: PropTypes.string,
      status: PropTypes.string,
      subTitle: PropTypes.string,
      title: PropTypes.node,
      year: PropTypes.string
    })
  ),
  sectionHeading: PropTypes.string
};

export default CVSection;
