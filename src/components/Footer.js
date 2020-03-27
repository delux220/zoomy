import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import { colors } from '../consts/style';

export const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  color: white;
  background: ${colors.purple};
  justify-content: center;
  align-items: center;
  a {
    margin-left: 0.5em;
    color: white;
    font-weight: 700;
    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <section>
      <footer className="bg-white">
        <div className="p-0 border-top">
          <div className="container">
            <div className="p-2 text-center footer-links">
              <Link to={'/how-it-works'} className="btn btn-link text-default">
                How It Works
              </Link>
              <Link to={'/about'} className="btn btn-link text-default">
                About
              </Link>
              <Link to={'/submit'} className="btn btn-link text-default">
                Submit
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-main footer-main1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <h6>About</h6>
                <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit amet numquam iure provident voluptate essequasi,
                  veritatis totam voluptas nostrum.Lorem ipsum dolor sit amet,
                  consectetur{' '}
                </p>
                <p className="text-muted">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum .
                </p>
              </div>

              <div className="col-lg-4 col-md-12">
                <h6>Contact</h6>
                <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">
                      <i className="fa fa-home mr-3 text-primary"></i> Made in
                      Queens, NY
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12">
                <h6>Submit a Link</h6>
                <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <div className="clearfix"></div>
                <div className="input-group w-70">
                  <input
                    type="text"
                    className="form-control br-tl-3  br-bl-3 "
                    placeholder="Email"
                  />
                  <div className="input-group-append ">
                    <button
                      type="button"
                      className="btn btn-primary br-tr-3  br-br-3"
                    >
                      {' '}
                      Subscribe{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-12 col-sm-12  mt-2 mb-2 text-center ">
                Copyright © 2019{' '}
                <a href="#" className="fs-14 text-primary">
                  Cards for Qns
                </a>
                . Designed by{' '}
                <a href="#" className="fs-14 text-primary">
                  Spruko
                </a>{' '}
                All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
