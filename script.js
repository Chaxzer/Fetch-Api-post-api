//+++++++++++++++++++++++uSING FETCH ONE CAN GET DATA FROM THE SERVER+++++++++++++++++++++++++++++++

// let p =  fetch("https://api.waifu.im/search",[])// fetch automatically makes a promice
// p.then((responce)=>{
//   console.log(responce.status)
//   console.log(responce.ok)
//   console.log(responce.headers)
//   return responce.json()
// }).then((value2)=>{
//   console.log(value2.status)
// })



// // This is an asynchronous function named 'todo'
// async function todo(){
//   // Here, a POST request is being made to an API endpoint
//   let x = await fetch('https://jsonplaceholder.typicode.com/posts', todo)
//   // The response is being converted to JSON
//   let data = await x.json()
//   // The JSON data is being logged to the console
//   console.log(data)
// }

// // This is another asynchronous function named 'main'
// async function main(){
//   // The 'todo' function is being called and the program waits for it to complete
//   let data = await todo()
//   // The returned data is being logged to the console
//   console.log(data)
// }

// // The 'main' function is being called
// main()


//+++++++++++++++++++++++POST IS USE TO SEND DATA TO THE SERVER++++++++++++++++++++++++++++++

// //this is one way to post 
// // Defining the options for the POST request
// let options= {
//   // The method of the request is POST
//   method: "POST",
//   // The headers of the request
//   headers: {
//     // The content type of the request is application/json
//     "content-type": "application/json"
//   },
//   // The body of the request, which is a JSON string
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
// }

// // Making a fetch request to the 'https://jsonplaceholder.typicode.com/posts' endpoint with the defined options
// fetch('https://jsonplaceholder.typicode.com/posts', options)
// // Once the response is received, it is converted to JSON
// .then((response) => response.json())
// // The JSON response is then logged to the console
// .then((json) => console.log(json));


// This function performs a POST request to the specified API endpoint
async function post2(){
  // Using the fetch API to make a POST request with the specified options
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ // sending body data as a string of these values
      title: 'foo',  //posting title
      body: 'bar', // posting bar
      userId: 1, // posting user id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  // Once the response is received, it is converted to JSON
  .then((response) => response.json())
  // The JSON response is then logged to the console
  .then((json) => console.log(json));
}
// Calling the post2 function
post2()