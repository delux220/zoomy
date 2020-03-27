import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Row, Col, Container } from 'react-bootstrap';
import _map from 'lodash/map';
import { PageWrapper, PageInner, PageTitle } from '../components/Elements';
import { listingTypes } from '../types/propTypes';
import SEO from '../components/SEO';
import Listing from '../components/Listing';

const Neighborhood = ({ data }) => {
  const { name, slug, listings } = data.neighborhood;

  return (
    <Fragment>
      <div className="bg-white border-bottom">
        <div className="container">
          <div className="page-header">
            
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={'/'}>Neighborhoods</Link>
              </li>

              <li className="breadcrumb-item active">{name}</li>
            </ol>
          </div>
        </div>
      </div>
      <section className="sptb" style={{ minHeight: '100vh' }}>
        <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h3 className="font-weight-bold">{name}</h3>
          </div>
        </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12"></div>
          </div>
          <div className="row">
            {_map(listings, post => (
              <Col md={4} className="mb-5">
                <Listing listing={post} />
              </Col>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export const projectQuery = graphql`
  query($slug: String!) {
    neighborhood: datoCmsNeighborhood(slug: { eq: $slug }) {
      name
      slug
      listings {
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
`;

Neighborhood.propTypes = listingTypes;

export default Neighborhood;
