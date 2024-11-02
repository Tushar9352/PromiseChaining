function firstFunction(param1, param2) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(param1 + param2), 1000);
    });
}

function secondFunction(resultFromFirst) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(resultFromFirst * 2), 1000);
    });
}

function thirdFunction(resultFromSecond) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(resultFromSecond - 3), 1000);
    });
}

function fourthFunction(resultFromThird) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(resultFromThird / 2), 1000);
    });
}

function fifthFunction(resultFromFourth) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(resultFromFourth + 5), 1000);
    });
}

firstFunction(5, 10)
    .then(secondFunction)
    .then(thirdFunction)
    .then(fourthFunction)
    .then(fifthFunction)
    .then((result) => console.log('Final result:', result));
