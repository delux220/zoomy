import React, { useContext } from 'react';
import styled from 'styled-components';

function Listing(props) {
  const post = props.data.markdownRemark;
  return <div className="card mb-0"></div>;
}

export default Listing;
