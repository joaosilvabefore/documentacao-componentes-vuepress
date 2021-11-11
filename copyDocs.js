const ncp = require('ncp').ncp;
const fs = require('fs');

const source = `${__dirname}/src/components`;
const destination = `${__dirname}/docs/guide`;

ncp(
  source,
  destination,
  {
    filter: (source) => {
      if (fs.lstatSync(source).isDirectory()) {
        return true;
      } else {
        return source.match(/.*md/) != null;
      }
    }
  },
  function (err) {
    if (err) {
      return console.error(err);
    }
  }
);