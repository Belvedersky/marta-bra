const data = require('./public/data/catalog.json');
// console.log(data)
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
      //const catalog = data;
      
      data.forEach(item => {
        paths[`/catalog/${item.link}`] = { page: '/catalog/[name]', query: { name: item.link } };
      });
      return paths;
    },
    devIndicators: {
        autoPrerender: false,
      }
    
})