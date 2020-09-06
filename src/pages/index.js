import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { allImage } = data;
  const { edges } = allImage;

  let images = [];

  edges.forEach((image, index) => {
    images.push(<img key={index} className="p-2" src={require(`../../images/${image.node.path}`)} />);
  });

  return (
    <div className="wrapper">
      <div className="images">
        {images}
      </div>
    </div>
  );
};

export const pageQuery = graphql`query MyQuery {
  allImage {
    edges {
      node {
        id
        path
      }
    }
  }
}`;
