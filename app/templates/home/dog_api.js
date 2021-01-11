function getCatFact() {
  //fetch('https://cat-fact.herokuapp.com/facts')
  fetch('https://cors-anywhere.herokuapp.com/https://dog-api.kinduff.com/api/facts')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // const obj = JSON.parse(response);
      const value = response.facts
      console.log(response)
      document.getElementById("my-cat-fact").innerHTML = value;

      // Examine the text in the response
      // response.json().then(function(data) {
      //   console.log(data);
      //   const random = data[Math.floor(Math.random() * data.length)];
      //   document.getElementById("my-cat-fact").innerHTML = random['text'];
      // });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      console.log("Hello",response)
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        var imageURL = data.message;
        document.getElementById("my-dog-image").innerHTML = `<img src="${imageURL}">`;
        // document.getElementById("my-dog-image").innerHTML = str1.concat("<img src=",data,">")
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

// WIP
// function getDogImage(){
//   $.getJSON("https://ancient-dusk-93363.herokuapp.com/https://dog.ceo/api/breeds/image/random", function (image) {
//       response.json
//       var body = XMLHttpRequest.response;
//       console.log(dog_img)
//       $(".dog_img").attr("src", dog_img);
//       document.getElementById("my-dog-image").innerHTML = `<img src="${dog_img}">`;
//   }); 
//}