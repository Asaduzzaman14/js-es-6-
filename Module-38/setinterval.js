
// console.log('fist');

// setInterval(() => {
//     console.log('third');
// }, 2000)

// console.log('second');

let sec = 0;
const start = setInterval(() => {
    console.log(sec++);
    if (sec > 10) {
        clearInterval(start)
    }
}, 1000)