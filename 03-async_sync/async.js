const fs = require('fs');

console.log('시작');

fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});

fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});

fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});

console.log('끝');

// 비동기 메서드는 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어가기 때문에
// 실행할 때마다 수행 결과가 달라질 수 있다.

// 시작
// 끝
// 1번 저를 여러 번 읽어보세요.
//
// 2번 저를 여러 번 읽어보세요.
//
// 3번 저를 여러 번 읽어보세요.

// 시작
// 끝
// 1번 저를 여러 번 읽어보세요.
//
// 3번 저를 여러 번 읽어보세요.
//
// 2번 저를 여러 번 읽어보세요.
