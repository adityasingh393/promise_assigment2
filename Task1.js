console.log("Program Started");
const Promise1 =new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve("Program compeletes");
    // },2000);
    setTimeout(()=>{
        reject("Progam Failed");
    },2000);
    setTimeout(()=>{
        resolve("Promise succssful");
    },3000)
});
console.log("Program is in progres");

Promise1.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})
;