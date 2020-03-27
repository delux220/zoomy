import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
import Listing from '../components/Listing';
import { Button, Row, Col, Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import moment from 'moment';
import serialize from 'form-serialize';

import ReCAPTCHA from 'react-google-recaptcha';

class SubmissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: '',
      link: '',
      captcha: false,
      message: '',
      disabled: false,
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLink = this.submitLink.bind(this);
  }

  submitLink(e) {
    e.preventDefault();
    if (this.state.captcha == false) {
      this.setState({ error: 'Please confirm that you are not a robot!' });
      return false;
    }

    this.setState({ disabled: true }, function() {
      var form = e.target;
      var data = serialize(form);
      console.log(data);
      fetch(e.action, {
        method: 'post',
        body: data,
      }).then(
        function() {
          this.setState({ message: 'Thank you!' }, function() {
            setTimeout(
              function() {
                this.setState({
                  name: '',
                  address: '',
                  link: '',
                  disabled: false,
                });
              }.bind(this),
              3000
            );
          });
        }.bind(this)
      );
    });
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
                <form
                  action="/pages/success"
                  name="submission"
                  data-netlify="true"
                  method="post"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="submission" />
                  <input type="hidden" name="bot-field" />
                  <div className="card mt-5">
                    <div className="card-header">
                      <h3 className="card-title">Submit a Link</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-label">
                              Business Name *
                            </label>
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
                          <div className="form-group">
                            <label className="form-label">
                              Your E-mail Address *
                            </label>
                            <small className="d-block text-muted mb-3">
                              We will reach out to you if any further
                              information is required.
                            </small>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="you@email.com"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      {this.state.message.length > 0 && (
                        <div className="alert alert-success">
                          <p>{this.state.message}</p>
                        </div>
                      )}

                      {this.state.error.length > 0 && (
                        <div className="alert alert-danger">
                          <p>{this.state.error}</p>
                        </div>
                      )}
                      <div className="row">
                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary mt-3"
                            type="submit"
                            disabled={this.state.disabled}
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
