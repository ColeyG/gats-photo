import React, { useState } from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { allImage } = data;
  const { edges } = allImage;

  const [jumboState, setJumboState] = useState(false);
  const [jumboImage, setJumboImageState] = useState('');

  let images = [];
  let jumbo = null;

  const imageClickHandler = (e) => {
    e.preventDefault();

    console.log(e.target.src);
    setJumboImageState(e.target.src);

    setJumboState(!jumboState);
  };

  const jumboClickHandler = (e) => {
    e.preventDefault();
    setJumboState(!jumboState);
  };

  edges.forEach((image, index) => {
    images.push(<div className="w-full" key={index}><img className="photo object-cover" onClick={imageClickHandler} src={require(`../../images/${image.node.path}`)} /></div>);
  });

  if (jumboState) {
    jumbo = <div onClick={jumboClickHandler} className="jumbo-box bg-mint bg-opacity-25 sticky top-0 left-0 z-10 w-screen h-screen p-1">
      <img src={jumboImage} />
    </div>;
  }

  return (
    <div className="light-box relative w-screen h-screen overflow-x-hidden">
      {jumbo}
      <div className="wrapper">
        <div className="images grid sm:grid-cols-1 md:grid-cols-3">
          {images}
        </div>
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
