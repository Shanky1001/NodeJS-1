// console.log("Hello World");
// var a = 20;
// console.log(a+50);

const fs = require('fs');
fs.writeFileSync("data.json", JSON.stringify({ name: "Shashank Rai", desg: "Frontend Developer" }));

// Making Code Asynchronus

console.log('Hello');

const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        console.log("World");
    }, 2000)
})

wait.then(() => {
    console.log("This is Shashank Rai");
})  