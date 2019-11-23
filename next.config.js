const fs = require("fs");
const cyrillicToTranslit = require("cyrillic-to-translit-js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const getPathsForDir = dir => {
  console.log(` ${dir.split("/")[1].toUpperCase()} ✨`);
  //\x1b[35m
  return fs
    .readdirSync(dir)
    .map(fileName => {
      const file = cyrillicToTranslit().transform(fileName, "-");
      const path = file.substring(0, file.length - 3);
      const color =  (dir.split("/")[1] === "catalog") ? "\x1b[36m" : "\x1b[35m";

      console.log(
        `[${color} ${dir.split("/")[1]}\x1b[0m ] https://martabra.ru/${dir.split("/")[1]}/${path}`
      );
      fs.rename(dir + "/" + fileName, dir + "/" + file, function(err) {
        if (err) throw err;
      });

      return {
        [`/${dir.split("/")[1]}/${path}`]: {
          page: `/${dir.split("/")[1]}/[name]`,
          query: {
            name: path
          }
        }
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

const somePageRedirect = () => {
  return {
    "/": { page: "/" },
    "/catalog": { page: "/" }
  };
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    console.log(defaultPathMap);
    return {
      ...defaultPathMap,
      ...somePageRedirect,
      ...getPathsForDir("content/catalog"),
      ...getPathsForDir("content/blog")
    };
  }
});
