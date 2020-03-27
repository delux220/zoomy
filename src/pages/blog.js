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
  return (
    <Fragment>
      
    </Fragment>
  );
}
