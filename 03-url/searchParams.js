const url = require('url');

const { URL } = url;

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log('myURL.searchParams', myURL.searchParams);
// myURL.searchParams URLSearchParams {
//   'page' => '3',
//   'limit' => '10',
//   'category' => 'nodejs',
//   'category' => 'javascript' }

console.log('myURL.searchParams.getAll():', myURL.searchParams.getAll('category'));
// myURL.searchParams.getAll(): [ 'nodejs', 'javascript' ]

console.log('myURL.searchParams.get():', myURL.searchParams.get('limit'));
// myURL.searchParams.get(): 10

console.log('myURL.searchParams.has():', myURL.searchParams.has('page'));
// myURL.searchParams.has(): true

console.log('myURL.searchParams.keys():', myURL.searchParams.keys());
console.log('myURL.searchParams.values():', myURL.searchParams.values());
// myURL.searchParams.keys(): URLSearchParams Iterator { 'page', 'limit', 'category', 'category' }
// myURL.searchParams.values(): URLSearchParams Iterator { '3', '10', 'nodejs', 'javascript' }

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log('myURL.searchParams.getAll():', myURL.searchParams.getAll('filter'));
// myURL.searchParams.getAll(): [ 'es3', 'es5' ]

myURL.searchParams.delete('filter');
console.log('myURL.searchParams.getAll():', myURL.searchParams.getAll('filter'));
// myURL.searchParams.getAll(): []

console.log('myURL.searchParams.toString():', myURL.searchParams.toString());
// myURL.searchParams.toString(): page=3&limit=10&category=nodejs&category=javascript
