import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import moment from 'moment';

class SubmissionPage extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <Fragment>
      <section style={{minHeight:'66vh'}}>
      <div className="container">
      	<div className="row">
      	
      		<div className="col-xl-9 col-lg-12 col-md-12">
      			<div className="card mt-5">
      				<div className="card-header">
								<h3 className="card-title">Submit a Link</h3>
							</div>
							<div className="card-body">
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group">
											<label className="form-label">Business Name</label>
											<input type="text" name="name" class="form-control" placeholder="Local cafe"/>
										</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group">
											<label className="form-label">Address</label>
											<input type="text" name="address" class="form-control" placeholder="Local cafe"/>
										</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group">
											<label className="form-label">URL to Gift Card Purchase</label>
											<input type="url" name="address" class="form-control" placeholder="https://..."/>
										</div>
								</div>
							</div>
						</div>
      			</div>
      			<div className="col-xl-3 col-lg-12 col-md-12">

      	</div>
      		</div>
      	</div>
      </div>
      </section></Fragment>;
  }
}

export default SubmissionPage;