import React, { useContext } from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import Img from 'gatsby-image'
import Moment from 'react-moment';


function Listing(props) {
	console.log(props);
  const post = props.listing.node;
	return <div className="card mb-0">
						
							<div className="item-card2-img" style={{maxHeight:'240px', display:'flex'}}>
								<a href="classified.html"></a>
								<Img fluid={post.image.fluid} alt="img" className="cover-image"/>
							</div>
							
							<div className="card-body pb-0">
								<div className="item-card2">
									<div className="item-card2-desc">
										<div className="item-card2-text">
											<Link to={`/listings/${post.slug}`} className="text-dark"><h4 className="mb-0">{post.title}</h4></Link>
										</div>
										<div className="">
											<a href="#">
												<p className="pb-0 pt-0 pl-0 mx-0 mb-2 mt-2 font-weight-bold"><i className="fa fa-map-marker text-danger mr-2"></i>{post.host}</p>
											</a>
										</div>
										<p className="">
											{
												post.tags.map((tag) => {
													return <Link to={'/'} className="mr-2">#{tag.tagName}</Link>
												})
											}
										</p>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="item-card2-footer">
									<div className="item-card2-footer-u">
										<div className="row d-flex">
											<span className="review_score mr-2 badge badge-primary font-weight-bold">
												<Moment date={post.date} format="MM/DD" />
											</span>
                                            <span className="review_score mr-2 badge badge-success font-weight-bold">
												<Moment date={post.date} format="h:mma" />
											</span>
										</div>
									</div>
								</div>
							</div>
							
						</div>

} 

export default Listing

