// // 1. Write a function fetchWithTimeout that takes a URL and a timeout value in milliseconds.
// //  The function should return a promise that resolves with the fetched data or rejects with a timeout error if the 
// // request takes longer than the specified timeout.

const fetchWithTimeout =(url, time)=>{
    const timeout= new Promise ((res, rej)=>{
        setTimeout(()=>{
            rej(`timeout ho gya" ${time}` )
        },time);
    });
     const Promise1 =new Promise((res, rej)=>{
        fetch(url).then((data)=>{
            return(data.json()) 
        .then((data)=>{
            res(data);
        })}   
    ).catch((error)=>{rej(error)})
     })
    return  Promise.race([timeout, Promise1])
}
const url ="https://freetestapi.com/api/v1/weathers/1"

fetchWithTimeout(url,10000).then((data)=>console.log(data)).catch((error)=>console.log(error));