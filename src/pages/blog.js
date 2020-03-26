import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import moment from 'moment';

const blogQuery = graphql`
  {
    page: datoCmsBlogPage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    posts: allDatoCmsListing(sort: { fields: [meta___createdAt], order: ASC }) {
      edges {
        node {
          id
          title
          slug
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

export default function Blog() {
  const data = useStaticQuery(blogQuery);
  const { title, seoMetaTags } = data.page;
  const { edges } = data.posts;
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <section>
        <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2">
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white mb-7">
                <h1 className="mb-1">
                  Find Zoom Things To Do While In Quarantine
                </h1>
                <p>
                  Yep, we are all going to be inside for a bit. Here are some
                  ways to stay connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sptb bg-white">
        <Container>
          <div className="section-title center-block text-center">
            <h1>Upcoming Zooms</h1>
            <p></p>
          </div>
          <Row>
            {_map(edges, post => (
              <Col md={4} className="mb-5">
                <Listing listing={post} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
