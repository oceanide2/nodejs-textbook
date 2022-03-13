// 노드는 파일을 읽을 때 메모리에 파일 크기만큼 공간을 마련해두며
// 파일 데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있도록 한다.
// 이때 메모리에 저장된 데이터가 바로 버퍼이다.

// 할당된 메모리에 저장된 데이터가 버퍼라기 보다는 할당된 메모리 자체를 버퍼라고 봐야하는 것 아닌가?

const buffer = Buffer.from('저를 버퍼로 바꿔주세요');

console.log('from():', buffer);
// from(): <Buffer ec a0 80 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 ec a3 bc ec 84 b8 ec 9a 94>

console.log('length:', buffer.length);
// length: 32

console.log('toString():', buffer.toString());
// toString(): 저를 버퍼로 바꿔주세요


const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);

console.log('concat():', buffer2.toString());
// concat(): 띄엄 띄엄 띄어쓰기


const buffer3 = Buffer.alloc(5);

console.log("alloc():", buffer3);
// alloc(): <Buffer 00 00 00 00 00>

console.log("toString():", buffer3.toString());
// toString(): 
