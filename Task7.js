// 1.Create a function fetchWithRace that takes an array of URLs and a timeout value in milliseconds.
// The function should return a promise that resolves with the first successful response or rejects with a timeout error if no request completes within the specified time.

// article for refrence
// https://medium.com/@brenthoover/applying-a-timeout-to-promises-with-promise-race-8ab5fa0edafc

const fetchWithRace = (urls, time) => {
  const timeoutPromise = new Promise((res, rej) => {
    setTimeout(() => {
    rej("timout");
    }, time);
  });

  const fetchUrl = urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch(() => console.log("eorrr"))
  );
  return Promise.race([timeoutPromise, ...fetchUrl]);
};

const urls = [
  "https://freetestapi.com/api/v1/weatherss/1",
  "https://fakestoreapi.com/prodsucts/n1",
];
fetchWithRace(urls, 2000)
  .then((result) => {
    console.log(result);
  })
  .catch((errr) => {
    console.log(errr);
  });
