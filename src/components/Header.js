import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import { colors } from '../consts/style';
import { spin } from '../style/animations';
import { headerTypes } from '../types/propTypes';

const Wrapper = styled.div`
  background: ${colors.purple};
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 4rem;
  margin: auto;
  animation: ${spin} 10s linear infinite;
`;

const headerQuery = graphql`
  {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function Header({ location }) {
  const data = useStaticQuery(headerQuery);

  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  useEffect(() => console.log(location), [location]);

  return (
    <div>
      <div className="header py-4">
        <div className="container">
          <div className="d-flex">
            <a className="header-brand" href="index.html">
              Q-munity
            </a>
            <div className="d-flex order-lg-2 ml-auto">
              <div className="dropdown">
                <a
                  href="#"
                  className="nav-link pr-0 leading-none user-img"
                  data-toggle="dropdown"
                >
                  <span className="ml-2 d-none d-lg-block">
                    <span className="text-white">Welcome!</span>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow ">
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon icon icon-user"></i> My Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon icon icon-speech"></i> Inbox
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon  icon icon-settings"></i>{' '}
                    Account Settings
                  </a>
                  <a className="dropdown-item" href="login.html">
                    <i className="dropdown-icon icon icon-power"></i> Log out
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="header-toggler d-lg-none ml-3 ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse4"
            >
              <span className="header-toggler-icon"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg order-lg-first">
              <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="nav-link "
                    data-toggle="dropdown"
                  >
                    DASHBOARD{' '}
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="index.html" className="dropdown-item ">
                      Dashboard 01
                    </a>
                    <a href="index2.html" className="dropdown-item ">
                      Dashboard 02
                    </a>
                    <a href="index3.html" className="dropdown-item ">
                      Dashboard 03
                    </a>
                    <a href="index4.html" className="dropdown-item ">
                      Dashboard 04
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="widgets.html" className="nav-link ">
                    WIDGETS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    UI DESIGN
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow mega-menu">
                    <div className="row">
                      <div className="col-md-6">
                        <a href="charts.html" className="dropdown-item ">
                          Graph Charts
                        </a>
                        <a href="chart-line.html" className="dropdown-item ">
                          line Charts
                        </a>
                        <a href="chart-donut.html" className="dropdown-item ">
                          Donut Charts
                        </a>
                        <a href="chart-pie.html" className="dropdown-item ">
                          Pie Charts
                        </a>
                        <a href="cards.html" className="dropdown-item ">
                          Cards design
                        </a>
                        <a href="maps.html" className="dropdown-item ">
                          Maps
                        </a>
                        <a href="sweetalert.html" className="dropdown-item ">
                          Sweet alert
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a href="time-line.html" className="dropdown-item ">
                          Timeline
                        </a>
                        <a href="chat.html" className="dropdown-item ">
                          Default Chat
                        </a>
                        <a href="counters.html" className="dropdown-item ">
                          Counters
                        </a>
                        <a href="loaders.html" className="dropdown-item ">
                          Loaders
                        </a>
                        <a href="notify.html" className="dropdown-item ">
                          Notifications
                        </a>
                        <a href="rangeslider.html" className="dropdown-item ">
                          Range slider
                        </a>
                        <a href="scroll.html" className="dropdown-item ">
                          Content Scroll bar
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="nav-link active"
                    data-toggle="dropdown"
                  >
                    UI ElEMENTS
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow mega-menu">
                    <div className="row">
                      <div className="col-md-6">
                        <a href="alerts.html" className="dropdown-item ">
                          Alerts
                        </a>
                        <a href="buttons.html" className="dropdown-item ">
                          Buttons
                        </a>
                        <a href="colors.html" className="dropdown-item ">
                          Colors
                        </a>
                        <a href="chart.html" className="dropdown-item ">
                          Sample Charts
                        </a>
                        <a href="avatars.html" className="dropdown-item ">
                          Avatars
                        </a>
                        <a href="avatar-round.html" className="dropdown-item ">
                          RoundAvatars
                        </a>
                        <a href="avatar-radius.html" className="dropdown-item ">
                          RadiusAvatars
                        </a>
                        <a href="accordion.html" className="dropdown-item ">
                          Accordion
                        </a>
                        <a href="dropdown.html" className="dropdown-item ">
                          Dropdown
                        </a>
                        <a href="list.html" className="dropdown-item ">
                          List
                        </a>
                        <a href="tags.html" className="dropdown-item ">
                          Tags
                        </a>
                        <a href="pagination.html" className="dropdown-item ">
                          Pagination
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a href="modal.html" className="dropdown-item ">
                          Modal
                        </a>
                        <a href="navigation.html" className="dropdown-item ">
                          Navigation
                        </a>
                        <a href="progress.html" className="dropdown-item ">
                          Progress
                        </a>
                        <a href="typography.html" className="dropdown-item ">
                          Typography
                        </a>
                        <a
                          href="tooltipandpopover.html"
                          className="dropdown-item "
                        >
                          Tooltip &amp; Popover
                        </a>
                        <a href="breadcrumbs.html" className="dropdown-item ">
                          Breadcrumbs
                        </a>
                        <a href="badge.html" className="dropdown-item ">
                          Badges
                        </a>
                        <a href="jumbotron.html" className="dropdown-item ">
                          Jumbotron
                        </a>
                        <a href="panels.html" className="dropdown-item ">
                          Panel
                        </a>
                        <a href="thumbnails.html" className="dropdown-item ">
                          Thumbnails
                        </a>
                        <a href="mediaobject.html" className="dropdown-item ">
                          Mediaobject
                        </a>
                        <a href="tabs.html" className="dropdown-item ">
                          Tabs
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    PAGES
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="profile.html" className="dropdown-item ">
                      Profile
                    </a>
                    <a href="editprofile.html" className="dropdown-item ">
                      Edit Profile
                    </a>
                    <a href="login.html" className="dropdown-item ">
                      Login
                    </a>
                    <a href="register.html" className="dropdown-item ">
                      Register
                    </a>
                    <a href="forgot-password.html" className="dropdown-item ">
                      Forgot password
                    </a>
                    <a href="email.html" className="dropdown-item ">
                      Email
                    </a>
                    <a href="emailservices.html" className="dropdown-item ">
                      Email Inbox
                    </a>
                    <a href="empty.html" className="dropdown-item ">
                      Empty page
                    </a>
                    <a href="construction.html" className="dropdown-item ">
                      Under Construction
                    </a>
                    <a href="lockscreen.html" className="dropdown-item ">
                      Lock screen
                    </a>
                    <a href="400.html" className="dropdown-item ">
                      400 error
                    </a>
                    <a href="401.html" className="dropdown-item ">
                      401 error
                    </a>
                    <a href="403.html" className="dropdown-item ">
                      403 error
                    </a>
                    <a href="404.html" className="dropdown-item ">
                      404 error
                    </a>
                    <a href="500.html" className="dropdown-item ">
                      500 error
                    </a>
                    <a href="503.html" className="dropdown-item ">
                      503 error
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    FORMS
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="form-elements.html" className="dropdown-item ">
                      Form Elements
                    </a>
                    <a href="form-wizard.html" className="dropdown-item ">
                      form-wizard Elements
                    </a>
                    <a href="wysiwyag.html" className="dropdown-item ">
                      Text Editor
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="gallery.html" className="nav-link">
                    GALLERY
                  </a>
                </li>
                <li className="nav-item">
                  <a href="profile.html" className="nav-link">
                    PROFILE
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    {' '}
                    COMPONENTS
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="pricing.html" className="dropdown-item ">
                      Pricing tables
                    </a>
                    <a href="crypto-currencies.html" className="dropdown-item ">
                      Crypto-currencies
                    </a>
                    <a href="users-list.html" className="dropdown-item ">
                      User-list
                    </a>
                    <a href="icons.html" className="dropdown-item ">
                      Icons
                    </a>
                    <a href="icons2.html" className="dropdown-item ">
                      Icons 2
                    </a>
                    <a href="tables.html" className="dropdown-item ">
                      Tables
                    </a>
                    <a href="datatable.html" className="dropdown-item ">
                      Data Tables
                    </a>
                    <a href="store.html" className="dropdown-item ">
                      Store
                    </a>
                    <a href="blog.html" className="dropdown-item ">
                      Blog
                    </a>
                    <a href="invoice.html" className="dropdown-item ">
                      Invoice
                    </a>
                    <a href="carousel.html" className="dropdown-item ">
                      Carousel
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = headerTypes;
