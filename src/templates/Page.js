import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Row, Col, Container } from 'react-bootstrap';
import _map from 'lodash/map';
import { PageWrapper, PageInner, PageTitle } from '../components/Elements';
import { listingTypes } from '../types/propTypes';
import SEO from '../components/SEO';
import Listing from '../components/Listing';

const Page = ({ data }) => {
  const { title, image, slug, content } = data.page;
  return (
    <Fragment>
      <div className="bg-white border-bottom">
        <div className="container">
          <div className="page-header">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={'/'}>Home</Link>
              </li>

              <li className="breadcrumb-item active">
                <Link to={'/pages/' + slug}>{title}</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <section className="sptb" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <h3 className="font-weight-bold">{title}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card">
                <div className="card-body" style={{ position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <Img fluid={image.fluid} />
                    <div
                      className="d-flex position-absolute"
                      style={{
                        backgroundColor: 'rgba(0,0,0,.4)',
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <h2 className="text-light font-weight-bold">{title}</h2>
                    </div>
                  </div>

                  <div
                    className="mt-5"
                    style={{ fontSize: '15px', lineHeight: '34px' }}
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12"></div>
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    Know a place in that isn't listed?
                  </h3>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Do you know of a business in Queens that offers gift cards
                    that you would like to be listed?
                  </p>
                  <p className="text-muted">
                    You can submit your information, and we will post it!
                  </p>
                  <Link to={'/submit'} className="btn btn-primary mt-2">
                    Submit a Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export const projectQuery = graphql`
  query($slug: String!) {
    page: datoCmsPage(slug: { eq: $slug }) {
      id
      title
      content
      slug
      image {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;

Page.propTypes = listingTypes;

export default Page;
