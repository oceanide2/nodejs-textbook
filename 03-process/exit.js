// process.exit()는 서버 이외의 독립적인 프로그램에서 수동으로 노드를 멈추기 위해서 사용한다.
let i = 1;

setInterval(() => {
  if (i === 5) {
    console.log('종료!');
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);
