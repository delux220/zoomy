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
                <h6>About this site</h6>
                <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p className="text-muted">
                  Just a quickly put together website listing out as many businesses with gift cards purchasable online
                </p>
                <p className="text-muted">
                  We hope that you purchase a gift card from businesses that you've patroned regularly to help mitigate the impact of the NYC shutdown during the Covid-19 pandemic.
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
                <h6>Know a Place That Needs Help?</h6>
                <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <div className="clearfix"></div>
                <div className="">
                  <p className="text-muted">Submit a link to us. We have a simple form ready for you to send us information. We just ask that all submitted businesses offer a gift card purchasable online. 
                    <br/><Link to={'/submit'} className="font-weight-bold text-primary">Go here to submit</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-12 col-sm-12  mt-2 mb-2 text-center ">
                Copyright © 2020{' '}
                <a href="#" className="fs-14 text-primary mr-2">
                  Cards for Qns
                </a>
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
