const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());

console.log('끝');

// Sync 메서드를 사용하면 이전 작업이 완료되어야 다음 작업을 진행한다.
// 백그라운드가 작업하는 동안 메인 스레드는 아무 것도 하지 못하고 대기한다.
// 메인 스레드가 일하지 않고 노는 시간이 생기므로 비효율적이다.

// 동기-블로킹 방식은 백그라운드 작업 완료 여부를 계속 확인하며
// 호출한 함수가 바로 반환되지 않고 백그라운드 작업이 끝나야 반환된다.

// 비동기-논 블로킹 방식은 호출한 함수가 바로 반환되어 다음 작업으로 넘어가며
// 백그라운드 작업 완료 여부는 신경쓰지 않고 나중에 백그라운드가 알림을 줄 때 처리한다.

// 시작
// 1번 저를 여러 번 읽어보세요.
//
// 2번 저를 여러 번 읽어보세요.
//
// 3번 저를 여러 번 읽어보세요.
//
// 끝
