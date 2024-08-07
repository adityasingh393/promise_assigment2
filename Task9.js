// 1. Write a function fetchSequentially that takes an array of URLs and returns a promise. 
// This promise should resolve with an array of results, fetched sequentially in the given order.

//this can be implemented by using promise.all and promise.allsetlled as well but im doing it with es2018 for loop
//article used fr refrence https://www.geeksforgeeks.org/how-to-execute-multiple-promises-sequentially-in-javascript/

const fetchSequentially = (urls) => {
    return urls.map((url) => {
        return new Promise((res, rej) => {
        fetch(url)
        .then((response) => res(response.json()))
        .catch((error) => rej(error));
        });
    });
};

const PromiseExecution = async (promises) => {
      const result_aarray = [];
    for (let promise of promises) {
      try {
         const resolvedValue = await promise;
            result_aarray.push(resolvedValue);
        }
        catch (error) {
          result_aarray.push("error in this api");
        }
    }
    return result_aarray;
};

const urls = [
    "https://freetestapi.com/api/v1/weathervs/1",
    "https://fakestoreapi.com/products/1",
  ];

const promises = fetchSequentially(urls);
PromiseExecution(promises).then((result) => {
 console.log(result);
});
