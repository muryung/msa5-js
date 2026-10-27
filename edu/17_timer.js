// 타이머 함수

// setTimeOut(cb, ms[, ...args]);
// 설정한 일정 시간 후에 콜백함수를 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args를 추가
// return 값은 timeoutId 정수값 (타이머 고유한 직렬값)

console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");

// // 해당 ID의 setTimeout 을 취소 시킨다.
// clearTimeout(timeoutId);

// setInterval(cb, ms, [...args]): number
// 설정한 일정 시간마다 콜백함수를 실행
// return 값은 intervalId 정수값 (해당 인터벌의 고유한 식별값)
const intervalId = setInterval(() => {
    console.log("인터벌");
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);
