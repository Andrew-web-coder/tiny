const fs = require('fs');
const pkg = require('./package.json')


fs.writeFile("README.md", "Hey there " + pkg.version, function() {}); 
