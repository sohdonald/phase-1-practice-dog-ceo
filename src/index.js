// wait till after html has loaded

document.addEventListener("DOMContentLoaded", 
() => {

//let arrayCopy

console.log("%c HI", "color: firebrick");

function imgUrl () {
fetch("https://dog.ceo/api/breeds/image/random/4") // need forEach

.then((res) => res.json())
.then((object) => {
    object.message.forEach(element => {
    console.log(element)
    const makeImg = document.createElement("img");
    makeImg.src = element;
    const getDogImg = document.querySelector("#dog-image-container");
    getDogImg.append(makeImg);
    }); // foreach ends here
    }); // second .then ends here
} //imgUrl function ends here

imgUrl();
// how do we get each picture from the fetch url?
// images are in message key
let breedsArray
fetch("https://dog.ceo/api/breeds/list/all")  
.then((res) => res.json())
.then( (data) => {
    breedsArray = Object.keys(data.message);
    getBreeds(breedsArray)  
}) // second .then ends


// function breedUrl () {
//    } //breedUrl ends

let getDogBreeds = document.querySelector("#dog-breeds")

function getBreeds(breedsArray) {
    //console.log(data)
    //let getDogBreeds = document.querySelector("#dog-breeds")
    //removeChildren(getDogBreeds)
    //const breedsArray = Object.keys(data.message); // Object with big O is global object in js
    //console.log(breedsArray);
    
    //arrayCopy = [...makeDogArray] 
   
    breedsArray.forEach((dogBreed) => {
    const makeDogLiElement = document.createElement("li");
    makeDogLiElement.textContent = dogBreed;
    makeDogLiElement.addEventListener("click", () => {
    makeDogLiElement.style.color = "red"; // red color doesn't persist after refreshing website
   }) //addEventListener ends
    getDogBreeds.append(makeDogLiElement)
}) //forEach end
}
// function removeChildren(element) {
//     let child = element.lastElementChild
//     while (child) {
//         element.removeChild(child)
//         child = element.lastElementChild
//     }
// }


//breedUrl();

const breedDropdown = document.querySelector("#breed-dropdown")
//console.log(breedDropdown)
breedDropdown.addEventListener("change", (e) => {
    const breedTarget = e.target.value
    const filterBreeds = breedsArray.filter((breed) => {
        // return breeds that start with breedTarget
        return breed.charAt(0) === breedTarget   
    }) // filter end
    getDogBreeds.textContent = ""
    //console.log(filterBreeds)
    getBreeds(filterBreeds);
    // need filterBreeds to show in browser
    // perhaps we can reduce the dogbreeds lists so that
    // only the filterBreeds show
    // breedTarget gets the letter from the option
    
}) // breedDropdown end

}) // DOMContentLoaded ends


