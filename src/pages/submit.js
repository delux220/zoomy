import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import moment from 'moment';
import ReCAPTCHA from 'react-google-recaptcha';

class SubmissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', address: '', link: '', captcha: false };
    this.handleChange = this.handleChange.bind(this);
    this.submitLink = this.submitLink.bind(this);
  }

  submitLink(e) {
    if (this.state.captcha == false) {
      e.preventDefault();
      return false;
    }
    return true;
  }

  handleChange(e) {
    var name = e.target.name;

    var value = e.target.value;
    var state = this.state;
    state[name] = value;
    this.setState(state);
  }

  render() {
    return (
      <Fragment>
        <section style={{ minHeight: '66vh' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-12">
              <form name="submission"  data-netlify="true" method="post" onSubmit={this.submitLink}>
                <div className="card mt-5">
                  <div className="card-header">
                    <h3 className="card-title">Submit a Link</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-label">Business Name *</label>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Local cafe"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-label">Address *</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="71st Ave..."
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-label">
                            URL to Gift Card Purchase *
                          </label>
                          <input
                            type="url"
                            name="address"
                            className="form-control"
                            placeholder="https://..."
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <ReCAPTCHA
                          type
                          sitekey="6LcbaeQUAAAAANQixHAeBPjcNQhYwqDSFHt8M3jK"
                          onChange={() => {
                            this.setState({ captcha: true });
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          className="btn btn-primary mt-5"
                          type="submit"
                        >
                          Submit Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-12">
                <div className="card mt-5">
                  <div className="card-header">
                    <h3 className="card-title">Your help is appreciated!</h3>
                  </div>
                  <div className="card-body">
                    <p className="text-muted">
                      If you are a business owner who offers gift cards, submit
                      your information on this page. Someone will verify and
                      publish it.
                    </p>
                    <p className="text-muted">
                      If you use Square like many businesses do,{' '}
                      <a
                        className="font-weight-bold text-primary"
                        href="https://squareup.com/help/us/en/article/6000-square-egift-cards"
                        target="_blank"
                      >
                        here is some information
                      </a>{' '}
                      on how to enable gift cards for your establishment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SubmissionPage;
