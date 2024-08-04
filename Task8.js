// 1.Create a function fetchAnyWithErrors that takes an array of URLs and returns a promise.
// This promise should resolve with the first successful response or reject with an aggregated error message if all requests fail.


 const fetchAnyWithErrors =(urls)=>{
    const fetchUrl = urls.map((url)=>
        fetch(url).then((response)=>{
            return response.json();
        }).catch(()=>{
            console.log("error occuerd")
        })
    )
    return Promise.any(fetchUrl)
    .then((data)=>data)
    .catch((error)=>{
        console.log(error);
    })
 }

const urls=[
"https://freetestapi.com/api/v1/weathersds/1",
 "https://fakestoreapi.com/productds/1",
];

fetchAnyWithErrors(urls).then((data)=>console.log(data))
.catch((err)=>console.log(err));