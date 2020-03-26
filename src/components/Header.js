import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';
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
    neighborhoods: allDatoCmsNeighborhood(
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          name
          slug
        }
      }
    }
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
  const { neighborhoods } = data;
  console.log(data);
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
            <a
              className="header-brand"
              href="/"
              style={{
                color: '#fff',
                textTransform: 'uppercase',
                fontSize: '14px',
                letterSpacing: '3px',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,1)', fontWeight: '300' }}>
                cardsfor<strong style={{ fontWeight: '900' }}>queens</strong>
              </span>
            </a>
            <div className="d-flex order-lg-2 ml-auto">
              <div className="dropdown">
                <a
                  href="#"
                  className="nav-link pr-0 leading-none user-img"
                  data-toggle="dropdown"
                >
                  <span className="ml-2 d-none d-lg-block">
                    <span className="text-white d-none">Welcome!</span>
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
                {_map(neighborhoods.edges, hood => (
                  <li className="nav-item">
                    <Link
                      to={`/neighborhoods/${hood.node.slug}`}
                      className="nav-link"
                    >
                      {hood.node.name.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = headerTypes;
