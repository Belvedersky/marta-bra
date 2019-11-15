

module.exports = ({
    // target: 'serverless',
    // exportTrailingSlash: true,
    exportPathMap: function() {
      const paths = {
        '/': { page: '/' },
        '/certificate' :  { page: '/certificate' },
        '/contacts': { page: '/contacts' },
        '/cooperation': { page: '/cooperation' }, 
      }

      // const catalogData = Catalog.Catalog;
      // catalogData.forEach(item => {
      //   paths[`/catalog/${item.title}`] = { page: '/catalog/[title]', query: { title: item.title } };
      // });

      return paths;
    },
    devIndicators: {
        autoPrerender: false,
      }
    
})