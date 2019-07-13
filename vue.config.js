const fs = require('fs');

module.exports = {
    devServer: {
      https: {
        key: fs.readFileSync(''),
        cert: fs.readFileSync(''),
        ca: fs.readFileSync(''),
      }
    }
  }