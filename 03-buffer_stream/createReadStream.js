// 버퍼가 편리하지만 문제점이 있다.
// 만약 용량이 100MB인 파일이 있으면 메모리에 100MB의 버퍼를 만들어야 한다.
// 이 작업은 다중 사용자 환경에서 메모리 문제를 발생시킬 수 있다.
// 버퍼의 크기를 작게 만든 후 여러 번으로 나눠 보내는 방식이 등장했는데, 이를 편리하게 만든 것이 스트림이다.

const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data:', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end:', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error:', err)
});
