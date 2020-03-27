import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';
import moment from 'moment';
const Success = props => (
  <Fragment>
    <Container>
      <div className="alert alert-success">
        <h3>Thanks!</h3>
        <p>We will review your submission.</p>
      </div>
    </Container>
  </Fragment>
);

export default Success;
