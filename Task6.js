// // Create a function fetchAllWithErrors that takes an array of URLs and returns a promise.
// // This promise should resolve with an array of results if all requests are successful or reject with the first error encountered.

// const urls=[
//     "https://freetestapi.com/api/v1/weathers/1",
//     "https://fakestoreapi.com/proddfucts/1",
// ]
// const fetchAllWithError =(urls)=>{
//     const Promise1= new Promise((res, rej)=>{
//        const resultPromise=urls.map((url)=>{
//         fetch(url).then((response)=>{
//             res(response.data);
//         })
//         .catch((error)=>{
//             rej(error);
//         });
//         const data =Promise.all(resultPromise.map((result)=>{
//             console.log(result);
//         }));
//        })
//     })
// }
// fetchAllWithError(urls)

// Article used for Reference
// https://www.geeksforgeeks.org/how-to-fetch-an-array-of-urls-with-promise-all/

const fetchAllWithError = (urls) => {
  const fetchPromises = urls.map((url) =>
    fetch(url).then((response) => {
      return response.json();
    })
  );
  return Promise.all(fetchPromises)
    .then((results) => results)
    .catch(() => console.log("error"));
};
const urls = [
  "https://freetestapi.com/api/v1/weathers/1",
  "https://fakestoreapi.com/products/1",
];

fetchAllWithError(urls)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
