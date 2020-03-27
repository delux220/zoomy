import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import moment from 'moment';

const indexQuery = graphql`
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
    posts: allDatoCmsListing(sort: { fields: [meta___createdAt], order: ASC }) {
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
      <SEO meta={seoMetaTags} />
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
        </Container>
      </section>
    </Fragment>
  );
}
