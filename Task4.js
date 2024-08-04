// // Part 4: Promise Retry
// // 1. Write a function fetchWithRetry that takes a URL and a number of retries. The function should return a promise that resolves with
// the fetched data or retries the request up to the specified number of times before rejecting with an error message.

// article used for Reference
// https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g

// fetch("https://freetestapi.com/api/v1/weathers/1").then((message)=>{
//     console.log(message.body);
// })

const fetchWithRetry = (url, retries) => {
  return new Promise((res, rej) => {
    fetch(url)
      .then((response) => {
        res(response.json());
      })
      .catch((error) => {
        if (retries === 1) {
          return rej(error);
        }
        fetchWithRetry(url, retries - 1)
          .then((response) => {
            res(response.json());
          })
          .catch((error) => {
            rej(error);
          });
      });
  });
};
fetchWithRetry("https://freetestapi.com/api/v1/weathers/1", 3)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
