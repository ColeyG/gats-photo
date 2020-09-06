import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { allImage } = data;
  const { edges } = allImage;

  let images = [];

  edges.forEach((image, index) => {
    images.push(<img key={index} className="photo p-2 m-2 shadow-lg" src={require(`../../images/${image.node.path}`)} />);
  });

  return (
    <div className="wrapper">
      <div className="images flex flex-wrap justify-center sm:flex-col lg:flex-row items-center">
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
