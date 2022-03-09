const url = require('url');

const { URL } =  url;

// url 모듈 내부에 있는 URL생성자에 주소를 넣어주면 WHATWG 방식으로 분해된다.
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log('new URL()', myURL);
// new URL() URL {
//   href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor',
//   origin: 'http://www.gilbut.co.kr',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'www.gilbut.co.kr',
//   hostname: 'www.gilbut.co.kr',
//   port: '',
//   pathname: '/book/bookList.aspx',
//   search: '?sercate1=001001000',
//   searchParams: URLSearchParams { 'sercate1' => '001001000' },
//   hash: '#anchor'
// }

// WHATWG 객체로 분해되었던 주소를 원래대로 조합한다.
console.log('url.format():',url.format(myURL));
// url.format(): http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor


// url.parse에 주소를 넣어주면 기존 노드방식으로 주소가 분해된다.
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('parsedUrl:', parsedUrl);
// parsedUrl: Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.gilbut.co.kr',
//   port: null,
//   hostname: 'www.gilbut.co.kr',
//   hash: '#anchor',
//   search: '?sercate1=001001000',
//   query: 'sercate1=001001000',
//   pathname: '/book/bookList.aspx',
//   path: '/book/bookList.aspx?sercate1=001001000',
//   href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'
// }

// 기존 노드방식의 객체로 분해되었던 주소를 원래대로 조합한다.
console.log('url.format():', url.format(parsedUrl));
// url.format(): http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor
