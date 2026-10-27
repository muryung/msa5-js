console.log("Hello world!");
try {
    // 내가 실행할 처리를 작성
    console.log(test.name);
} catch (error) {
    // try문 안에서 에러나 예외가 발생했을 때 처리할 로직
    console.log("Error 발생");
    console.log(error.name); // 발생한 에러명
    console.log(error.message); // 발생한 에러 내용
    console.log(error.stack); // 발생한 에러 상세 정보
}

try {
    console.log(1);

    // 강제 예외 발생 시키기
    throw new Error("강제로 예외 발생 시켰다.");

    console.log(2);
} catch (error) {
    console.log(error.stack);
}

// finally : 예외 여부와 상관없이 무조건 실행되는 로직을 작성하기 위해 사용
try {
    console.log(1);
    throw new Error();
} catch (error) {
    console.log("error");
} finally {
    console.log("finally");
}

// 에러를 상세하게 처리하는 방법
// 여러 종류의 예외를 처리하고 싶을 때,
// instanceof 연산자를 사용해서 예외를 구체적으로 처리
try {
    throw new ReferenceError();
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Syntax Error");
    } else if (error instanceof ReferenceError) {
        console.log("참조 에러");
    } else {
        console.log("에러!");
    }
}
