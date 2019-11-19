const fs = require("fs");
const cyrillicToTranslit = require("cyrillic-to-translit-js");
const blogPostsFolder = 'content/catalog';

const getPathsForCatalog = () => {
  return fs.readdirSync(blogPostsFolder)
  .map(fileName => {
    const file = cyrillicToTranslit().transform(fileName,"-")
    const path = file.substring(0, file.length - 3);
    console.log(`martabra.ru/catalog/${path}`)
    fs.rename("content/catalog/"+fileName, "content/catalog/"+file,  function (err) {
        if (err) throw err;
        // console.log(`File ${fileName} \n renamed to ${file} \n` );
    });
    return {
        [`/catalog/${path}`]: {
          page: '/catalog/[name]',
          query: {
            name: path,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
}


module.exports = {
    webpack: configuration => {
        configuration.module.rules.push({
          test: /\.md$/,
          use: 'frontmatter-markdown-loader',
        });
        return configuration;
    },
    async exportPathMap(defaultPathMap) {
      return {
        ...defaultPathMap,
        ...getPathsForCatalog(),
      };
    },
};
  