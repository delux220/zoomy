import React, { useContext } from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Moment from 'react-moment';

function Listing(props) {
  console.log('here');
  console.log(props);

      var post = props.listing;

      if (props.listing.node) {
        post = props.listing.node;
      }
  
       

 
  return (
    <div className="card mb-0">
      <div
        className="item-card2-img"
        style={{ maxHeight: '240px', display: 'flex' }}
      >
        <a href={post.link} target="_blank"></a>
        <Img fluid={post.image.fluid} alt="img" className="cover-image" />
      </div>

      <div className="card-body pb-0">
        <div className="item-card2">
          <div className="item-card2-desc">
            <div className="item-card2-text">
              <Link to={`/listings/${post.slug}`} className="text-dark">
                <h4 className="mb-0">{post.title}</h4>
              </Link>
            </div>
            <div className="">
              <a href={post.link} target="_blank">
                <p className="pb-0 pt-0 pl-0 mx-0 mb-2 mt-2 font-weight-bold">
                  <i className="fa fa-map-marker text-danger mr-2"></i>
                  {post.address}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="item-card2-footer">
          <div className="item-card2-footer-u">
            <a className="btn btn-primary btn-block" href={post.link} target="_blank">Purchase Gift Card</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
