console.log(00000);
console.log(111);
setTimeout(() => console.log('aaaaa'), 4000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


console.log(222);
console.log(333);
console.log(444);
console.log(555);