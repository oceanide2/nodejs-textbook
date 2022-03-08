const path = require('path');

const string = __filename;

console.log('filename:', __filename);
// /Users/oceanide/github/nodejs-textbook/03-path/path.js

console.log('dirname:', __dirname);
// dirname: /Users/oceanide/github/nodejs-textbook/03-path

console.log('path.sep: ', path.sep);
// path.sep: /

console.log('path.delimiter:', path.delimiter);
// path.delimiter: :

console.log('path.dirname():', path.dirname(string));
// path.dirname(): /Users/oceanide/github/nodejs-textbook/03-path

console.log('path.extname():', path.extname(string));
// path.extname(): .js

console.log('path.basename():', path.basename(string));
// path.basename(): path.js

console.log('path.basename - extname:', path.basename(string, path.extname(string)));
// path.basename - extname: path

console.log('path.parse()', path.parse(string));
//path.parse() {
//  root: '/',
//  dir: '/Users/oceanide/github/nodejs-textbook/03-path',
//  base: 'path.js',
//  ext: '.js',
//  name: 'path'
//}

console.log('path.format():', path.format({
  dir: '/Users/oceanide/github/nodejs-textbook/03-path',
  name: 'path',
  ext: '.js',
}));
// path.format(): /Users/oceanide/github/nodejs-textbook/03-path/path.js

console.log('path.normalize():', path.normalize('/Users//oceanide//github//nodejs-textbook//03-path.js'));
// path.normalize(): /Users/oceanide/github/nodejs-textbook/03-path..js

console.log('path.isAbsolute():', path.isAbsolute('/Users/oceanide'));
// path.isAbsolute(): true

console.log('path.isAbsolute():', path.isAbsolute('./03-path'));
// path.isAbsolute: false

console.log('path.relative():', path.relative('/Users/oceanide/github/nodejs-textbook/03-path', '/Users/oceanide/'));
// path.relative(): ../../..

console.log('path.join:', path.join(__dirname, '..', '..', '/Users', '.', '/oceanide'));
// path.join: /Users/oceanide/github/Users/oceanide

console.log('path.resolve:', path.resolve(__dirname, '..', 'Users', '.', '/oceanide'));
// path.resolve: /oceanide
