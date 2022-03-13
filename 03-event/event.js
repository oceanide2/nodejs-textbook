const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});

myEvent.on('event2', () => {
  console.log('이벤트 2');
});

myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});

myEvent.once('event3', () => {
  console.log('이벤트 3');
});

myEvent.emit('event1');
// 이벤트 1

myEvent.emit('event2');
// 이벤트 2
// 이벤트 2 추가

myEvent.emit('event3');
// 이벤트 3
myEvent.emit('event3');
// 이벤트 3 발생하지 않음

myEvent.on('event4', () => {
  console.log('이벤트 4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4');
// 이벤트 4 발생하지 않음

const myListener = () => {
  console.log('이벤트 5');
};

myEvent.on('event5', myListener);
myEvent.removeListener('event5', myListener);
myEvent.emit('event5');
// 이벤트 5 실행되지 않음

console.log(myEvent.listenerCount('event2'));
// 2
