// wait till after html has loaded

document.addEventListener("DOMContentLoaded", 
() => {

console.log("%c HI", "color: firebrick");

function imgUrl () {
fetch("https://dog.ceo/api/breeds/image/random/4")
// need forEach


.then((res) => res.json())
.then((object) => {
    object.message.forEach(element => {
    console.log(element)
    const makeImg = document.createElement("img");
    makeImg.src = element;

    const getDogImg = document.querySelector("#dog-image-container");
    // querySelector gets the html element with
    // the id of dog-image-container

    // append is not working
    // we want to append the image to the html

    getDogImg.append(makeImg);
    }); // foreach ends here
    
    }); // second .then ends here

} //imgUrl function ends here

imgUrl();
// how do we get each picture from the fetch url?
// images are in message key

function breedUrl () {
    fetch("https://dog.ceo/api/breeds/list/all")
    //url is the path to the resource you want to fetch
    // fetch gets the data inside the resource
    
    .then((res) => res.json())
    // res is the response
    // response is sent back as json
    // converts json into js objects

    .then( (data) => {

      //we need a preventDefault here
      // submit action causes refresh
      // form elements use submit
      // we're not submitting form
        //e.preventDefault();
        // do not want white screen of death

    const getDogBreeds = document.querySelector("#dog-breeds")
        // querySelector gets the html element with
        // id= dog-breeds
        //adds the breeds to the <ul>
        console.log(getDogBreeds);
    
        // need to add the dog breeds to the ul
        // we need html elements
        // data needs html elements to display info
        // need to create li elements
        // li are list elements
        // displayed inside of the html element ul
        //.createElement is needed
        //.forEach is needed too
        //.forEach is for arrays
        // transform the keys in the object
        // into elements in an array
        const makeDogArray = Object.keys(data.message);
        // Object with big O is global object in js
        console.log(makeDogArray);
        makeDogArray.forEach((dogBreed) => {
            const makeDogLiElement = document.createElement("li");
            console.log(dogBreed);
            console.log(makeDogLiElement);
            //setAtttribute the li's textcontent
            makeDogLiElement.textContent = dogBreed;

            // need append to add to html, we need an existing element
            getDogBreeds.append(makeDogLiElement);

        }); // forEach ends
        
    console.log(data);
    }) // second .then ends
} //breedUrl ends

breedUrl();

// we need an addEventListener("click")
// what should we call the addEventListener to?
// most likely the li we just made


//li.addEventListener("click", (e) => {

//});

// need to code css inside js to change font color




}) // DOMContentLoaded ends