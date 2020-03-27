import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import { Button, Row, Col, Container } from 'react-bootstrap';
import moment from 'moment';
const Success = props => (
  <Fragment>
    <Container
      style={{
        minHeight: '66vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="card mt-5" style={{ maxWidth: '480px' }}>
        <div className="card-header">
          <h3 className="card-title">Thanks!</h3>
        </div>
        <div className="card-body">
          <p>
            We will review your submission shortly, and publish it if the
            information is complete.
          </p>
          <p>We will contact you if we need more information.</p>
          <p>We wish you as much ease as possible during this trying time.</p>

          <Link to={'/'} className="btn btn-primary mt-2">
            Go to Home
          </Link>
        </div>
      </div>
    </Container>
  </Fragment>
);

export default Success;
