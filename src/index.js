// wait till after html has loaded

document.addEventListener("DOMContentLoaded", 
() => {

let arrayCopy

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

      //do we need a preventDefault here?
      // submit action causes refresh by default
      // do not want white screen of death
      // form elements use submit
      // we're not submitting form
        //e.preventDefault(); is not needed
        

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
        arrayCopy = [...makeDogArray]
        // Object with big O is global object in js
        console.log(makeDogArray);
        makeDogArray.forEach((dogBreed) => {
            const makeDogLiElement = document.createElement("li");
            //console.log(dogBreed);
            //console.log(makeDogLiElement);
            //setAtttribute the li's textcontent
            makeDogLiElement.textContent = dogBreed;
            makeDogLiElement.addEventListener("click", () => {
                makeDogLiElement.style.color = "red"; 
                // red color doesn't persist after refreshing website
           }) //addEventListener ends
           // is this organized?
            // need append to add to html, we need an existing element    
            getDogBreeds.append(makeDogLiElement)
           // .append should be the last thing here
        }); // forEach ends        
    console.log(data);
    }) // second .then ends
} //breedUrl ends

breedUrl();

// we need an addEventListener("click")
// what should we call the addEventListener to?
// most likely the li we just made

//li.addEventListener("click", (e) => {
 //   .getElementById().style.color = "red";
//});

// should look something like this

// where should this code be?

// need to code css inside js to change font color
// we can do this with .getElementById().style.color = "red";

// Challenge 4 is asking us to filter
// need to use filter method
// make a dropdown
/* note that there is a <select> html element with
the id "#breed-dropdown"

we want <option value="a"> to filter the ul with
only the breeds starting with letter "a"
*/

const breedDropdown = document.querySelector("#breed-dropdown")
//console.log(breedDropdown)
breedDropdown.addEventListener("change", (e) => {
    //console.log(e.target)
    const breedTarget = e.target.value
    const filterBreeds = arrayCopy.filter((breed) => {
        // return breeds that start with breedTarget
        return breed.charAt(0) === breedTarget
        // need to append something, but what and where?
    })
    console.log(filterBreeds)

    // breedTarget gets the letter from the option
    
    
})
}) // DOMContentLoaded ends