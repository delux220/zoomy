import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';

import { SEO, useSEO } from 'gatsby-plugin-seo';
import moment from 'moment';

var indexQuery = graphql`
  {
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
      sort: { fields: [meta___createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          title
          address
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

export default function Index() {
  const data = useStaticQuery(indexQuery);
  const { title, seoMetaTags, heroTagline, heroTitle, heroImage } = data.page;
  const { edges } = data.posts;
  return (
    <Fragment>
      <SEO
        title="Cards for QNS"
        description="Purchase gift cards for Queens businesses to support them amidst the NYC shudown."
        pagePath="/"
      />
      <section>
        <div
          className="banner-1 cover-image sptb-2 sptb-tab bg-background2"
          style={{
            backgroundImage: `url('${heroImage.fluid.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: '-20%',
            height: '63vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white mb-7">
                <h1 className="mb-5 font-weight-bold">{heroTitle}</h1>
                <p>{heroTagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sptb bg-white">
        <Container>
          <div className="section-title center-block text-center">
            <h1>Local Businesses</h1>
            <p></p>
          </div>
          <Row>
            {_map(edges, post => (
              <Col md={4} className="mb-5">
                <Listing listing={post} />
              </Col>
            ))}
          </Row>
          <Row className="my-5">
            <Col sm={12}>
              <Link
                to={'/2'}
                className="btn btn-outline-primary py-5 font-weight-bold btn-block"
              >
                <i className="fa fa-arrow-right mr-2" />
                Find More Businesses
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
