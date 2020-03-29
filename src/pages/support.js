import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';

import { SEO, useSEO } from "gatsby-plugin-seo";
import moment from 'moment';

var indexQuery = graphql`
  {
    page: datoCmsDonationPage {
      title
      content
      paypalLink
      favorites {
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
      coverImage {
        fixed(height: 300, width:300,  imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFixed
        }
      }
    }
  }
`;

export default function SupportUs() {
  const data = useStaticQuery(indexQuery);
  const { title, content, paypalLink, coverImage, favorites } = data.page;

  return (
    <Fragment>
     <SEO
        title="Cards for QNS"
        description="Purchase gift cards for Queens businesses to support them amidst the NYC shudown."
        pagePath="/"
        />
      <section className="pt-5 mt-5">
        
            <div className="container">
            <Row>
            <Col md={1} lg={2}></Col>
            <Col md={10} lg={8}>
            <div className="card">
            <div className="card-body">
            <Img  fixed={coverImage.fixed} alt="img" style={{width:'220px', height:'220px', borderRadius:'20%', margin:'auto', display:'block'}}/>
              <div className="text-center text-white mb-7">
                <h3 className="pt-5 mt-5 mb-5 font-weight-bold text-dark">{title}</h3>

                </div>
                <div className="text-muted" dangerouslySetInnerHTML={{__html: content}}></div>
                <div className="text-center">
                <Link to={'/submit'} className="btn btn-primary my-3 mr-2" target="_blank"><i className="fa fa-link mr-2"/> Submit a Link</Link>
                <a href={paypalLink} className="btn btn-primary my-3" target="_blank"><i className="fa fa-arrow-right mr-2"/> Make a donation</a>

                </div>
                </div>
                </div>
              </Col>
              </Row>

                </div>
      </section>
      <section className="sptb bg-white">
        <Container>
          <div className="section-title center-block text-center">
            <h4 className="font-weight-bold">Bagel's Favorite Businesses</h4>
            <p className="text-muted">Here are a few of Bagel's and my personal favorite local establishments. Show them some love!</p>
          </div>
          <Row>
            {_map(favorites, post => (
                  <Col md={4} className="mb-5">
                    <Listing listing={post} key={post.id} />
                  </Col>
                ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}
