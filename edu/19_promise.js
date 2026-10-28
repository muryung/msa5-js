// 콜백 지옥
// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");
//         setTimeout(() => {
//             console.log("C");
//         }, 500);
//     }, 1000);
// }, 1500);

// 콜백 지옥을 회피하기 위해서 프로미스 사용
const timer = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(str);

            if (str == "A" || str == "B" || str == "C") {
                resolve({ code: "허용", word: str });
            } else {
                reject(new Error("허용하지 않은 문자 입력"));
            }
        }, 500);
    });
};

timer("A")
    .then((result) => {
        // resolve 일 떄 실행되는 코드
        console.log(result.code, result.word);
        return timer("B"); // 동기 처리를 하기 위한 방법
    })
    .then((result) => {
        console.log(result.code, result.word);
        return timer("C");
    })
    .then((result) => {
        console.log(result.code, result.word);
    })
    .catch((error) => {
        // reject 일 때 실행되는 코드 작성
        console.log(error.message);
    })
    .finally(() => {
        // 성공 여부와 관계 없이 무조건 실행되는 코드
        console.log("파이널리");
    });
