import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { allImage } = data;
  const { edges } = allImage;

  let images = [];

  edges.forEach((image) => {
    console.log(image.node.path);

    images.push(<img src={require(`../../images/${image.node.path}`)} alt />);
  });

  return (
    <div className="wrapper">
      <h1>hello</h1>
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
