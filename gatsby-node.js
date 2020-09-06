/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const util = require('util');

const sreaddir = util.promisify(fs.readdir);

const ifIncludesAnyOf = (string, array) => {
  for (const arrayItem of array) {
    if (string.includes(arrayItem)) {
      return true;
    }
  }

  return false;
};

const getImages = async (directory, filetypes) => {
  let files = await sreaddir(directory);
  let images = [];

  files.forEach((file) => {
    if (ifIncludesAnyOf(file, filetypes)) {
      images.push(`${directory}${file}`);
    }
  });

  return images;
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const filetypes = ['.png', '.jpg', '.jpeg'];

  getImages('./images/', filetypes).then((images) => {
    images.forEach((image) => {
      image = image.replace('./images/', '');
      const node = {
        path: image,
        id: createNodeId(`Image-${image}`),
        internal: {
          type: 'Image',
          contentDigest: createContentDigest(image),
        },
      };

      actions.createNode(node);
    });
  });
};
