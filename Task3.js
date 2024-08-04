// Part 3: Advanced Promise Chaining
// Print out "Program started" at the start of your code.
// Create a Promise that resolves after 5 seconds with the value {data: "Hello, friend!", error: null}.
// Log out the promise while it's pending.
// Print out "Program in progress..." as well.
// Create a first Promise chain using the promise above and print out the resolved value when the first promise fulfills.
// Have this first promise return another new Promise that will fulfill after 2 seconds with the message: "First promise chain complete!".
// Print out the message from the above promise after it fulfills ("First promise chain complete!").
// Create a second Promise chain using the first promise above and print out the resolved value when the second promise fulfills.
// Have this second promise return another new Promise that will fulfill after 10 seconds with the message: "Second promise chain complete!".
// Print out the message from the above promise after it fulfills ("Second promise chain complete!").
// HINT: Use setTimeout for the delay.
// HINT2: This will be using the same promise two times:

// BONUS: Why does it work this way?

console.log("Program Started");
const Promise1= new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Hello friends");
    },5000);
})
console.log("Program in progress");

Promise1.then((message)=>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{

            res('First Promise chain completed');
        })
    })
}).then((message)=>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Second Promise chain completed");
        },10000);
    })
})