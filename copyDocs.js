const ncp = require('ncp').ncp;
const fs = require('fs');

const source = `${__dirname}/src/components`;
const destination = `${__dirname}/docs/components`;

const sourceMainPage = `${__dirname}/src/README.md`;
const destinationMainPage = `${__dirname}/docs/README.md`;

ncp(sourceMainPage, destinationMainPage);

ncp(
  source,
  destination,
  {
    filter: (source) => {
      if (fs.lstatSync(source).isDirectory()) {
        return true;
      } else {
        return source.match(/README.md/) != null || source.match(/snipets.*/);
      }
    }
  },
  function (err) {
    if (err) {
      return console.error(err);
    }
  }
);