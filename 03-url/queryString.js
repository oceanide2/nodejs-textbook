const url = require('url');
const queryString = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = queryString.parse(parsedUrl.query);

// 기존 노드 방식으로 query string을 처리하면 url, querystring 모듈을 함께 사용해야 한다
console.log('queryString.parse()', query);
// queryString.parse() [Object: null prototype] {
//   page: '3',
//   limit: '10',
//   category: [ 'nodejs', 'javascript' ]
// }

console.log('queryString.stringify()', queryString.stringify(query));
// queryString.stringify() page=3&limit=10&category=nodejs&category=javascript
