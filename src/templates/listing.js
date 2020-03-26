import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { PageWrapper, PageInner, PageTitle } from '../components/Elements';
import { listingTypes } from '../types/propTypes';
import SEO from '../components/SEO';

const Listing = ({ data }) => {
  const { seoMetaTags, title, contentNode, link, image, slug } = data.listing;

  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <div className="bg-white border-bottom">
        <div className="container">
          <div className="page-header">
            <h4 className="page-title">Listing Details</h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={'/blog'}>Listings</Link>
              </li>

              <li className="breadcrumb-item active">Listing Details</li>
            </ol>
          </div>
        </div>
      </div>
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="card overflow-hidden">
                <div className="ribbon ribbon-top-right text-danger">
                  <span className="bg-warning">featured</span>
                </div>
                <div className="card-body">
                  <div className="item-det mb-4">
                    <Link to={`/listings/${slug}`} className="text-dark">
                      <h3 className="">{title}</h3>
                    </Link>
                  </div>
                  <div className="product-slider pb-3 ">
                    <div
                      id="carousel"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="arrow-ribbon2 bg-primary">$539</div>
                      <div
                        style={{
                          height: '640px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          overflow: 'hidden',
                        }}
                      >
                        <Img
                          fluid={image.fluid}
                          style={{ display: 'block', width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card">
                <div className="card-body"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Description</h3>
                </div>
                <div className="card-body">
                  <div
                    className="body-section"
                    dangerouslySetInnerHTML={{
                      __html: contentNode.internal.content,
                    }}
                  ></div>
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
    listing: datoCmsListing(slug: { eq: $slug }) {
      title
      slug
      contentNode {
        internal {
          content
        }
      }
      image {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      content
    }
  }
`;

Listing.propTypes = listingTypes;

export default Listing;
