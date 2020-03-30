import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import { listingTypes } from '../types/propTypes';
import moment from 'moment';

const Paged = ({ data, pageContext }) => {
  const { title, seoMetaTags, heroTagline, heroTitle, heroImage } = data.page;
  const { edges } = data.posts;

  var pages = [];
  for (var i = 1; i <= pageContext.totalPages; i++) {
    var page = { css: '', p: i };
    if (i == pageContext.page) {
      page.css = 'active';
    }
    pages.push(page);
  }
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <section></section>
      <section className="sptb bg-white">
        <Container>
          <div className="section-title center-block text-center">
            <h1>Queens Local Businesses</h1>
            <p></p>
          </div>
          <Row>
            {_map(edges, post => (
              <Col md={4} className="mb-5">
                <Listing listing={post} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col sm={12}>
              <ul className="pagination ">
                <li className="page-item page-prev">
                  <Link
                    className="page-link"
                    to={`/${pageContext.prev}`}
                    tabindex="-1"
                  >
                    Prev
                  </Link>
                </li>
                {_map(pages, page => (
                  <li className={`page-item ${page.css}`}>
                    <Link className="page-link" to={`/${page.p}`}>
                      {page.p}
                    </Link>
                  </li>
                ))}

                <li className="page-item page-next">
                  <Link className="page-link" to={`/${pageContext.next}`}>
                    Next
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export const pagedQuery = graphql`
  query pagedQuerys($skip: Int) {
    page: datoCmsBlogPage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroTitle
      heroTagline
      heroImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    posts: allDatoCmsListing(
      limit: 6
      skip: $skip
      sort: { fields: [meta___createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          title
          address
          phone
          slug
          link
          content
          image {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;

Paged.propTypes = listingTypes;

export default Paged;
