// Add your code here
// FIRST OPTION OF POST
// const configurationObject = {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     })
//   };
//   fetch("http://localhost:3000/dogs", configurationObject);


// // SECOND OPTION example
// const submitData = {
//     userName: "Steve",
//     userEmail: "steve@steve.com",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//   .then(res => res.json)
//   .then(object => console.log(object))
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

// lab work
function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
        .then(res => res.json())
        .then(object => {
            document.body.innerHTML = object["id"]
        })
        .catch(error => {
            document.body.innerHTML = error.message
        });
    };

