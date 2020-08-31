/* eslint-disable react/prop-types */
import React from 'react';
import Media from 'react-bootstrap/Media';
import Rating from './Rating';

function Product({ data }) {
  return (
    <div>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={data.imageUrl}
          alt="imageUrl"
        />
        <Media.Body>
          <h5>{data.productName}</h5>
          {data.releasedDate}
          <Rating
            ratingjot={data.rating}
            numOfReviews={data.numOfReviews}
          />
          <p>{data.description}</p>
        </Media.Body>
      </Media>{' '}
    </div>
  );
}

export default Product;
