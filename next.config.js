const data = require("./public/data/catalog/catalog.json");
var fs = require("fs");
var cyrillicToTranslit = require("cyrillic-to-translit-js");

// console.log(data)
module.exports = {
  // target: 'serverless',
  // exportTrailingSlash: true,
  exportPathMap: function() {
    const paths = {
      "/": { page: "/" },
      "/catalog": { page: "/" },
      "/certificate": { page: "/certificate" },
      "/contacts": { page: "/contacts" },
      "/cooperation": { page: "/cooperation" }
    };
    //const catalog = data;
    fs.readFile("public/data/data.json", function(err, data) {
      if (err) throw err;
      let catalog = JSON.parse(data);
      let newCatalog = [];
      // console.log(catalog.CatalogList[0])
      catalog.CatalogList.forEach(item => {
        item.image = "/"+item.image.split("/").splice(2,3).join("/")
        item.link = cyrillicToTranslit().transform(
          item.title.toLowerCase(),
          "_"
        );
        paths[`/catalog/${item.link}`] = {
          page: "/catalog/[name]",
          query: { name: item.link }
        };
        newCatalog.push(item);
      });
      fs.writeFile(
        "public/data/catalog/catalog.json",
        JSON.stringify(newCatalog),
        err => {
          if (err) throw err;
        }
      );
     
    });
    return paths;
  },
  devIndicators: {
    autoPrerender: false
  }
};
