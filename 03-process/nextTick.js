// 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백함수를 먼저 처리하게 만든다.
// resolve된 promise도 nextTick처럼 다른 콜백보다 우선적으로 처리된다.

setImmediate(() => {
  console.log('immediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));
