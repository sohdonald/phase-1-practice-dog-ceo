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
    getDogImg.append(makeImg);
    }); // foreach ends here
    }); // second .then ends here
} //imgUrl function ends here

imgUrl();
// how do we get each picture from the fetch url?
// images are in message key

function breedUrl () {
    fetch("https://dog.ceo/api/breeds/list/all")  
        .then((res) => res.json())
        .then( (data) => {
    const getDogBreeds = document.querySelector("#dog-breeds")
        const makeDogArray = Object.keys(data.message); // Object with big O is global object in js
        arrayCopy = [...makeDogArray] 
        console.log(makeDogArray);
        makeDogArray.forEach((dogBreed) => {
            const makeDogLiElement = document.createElement("li");
            makeDogLiElement.textContent = dogBreed;
            makeDogLiElement.addEventListener("click", () => {
            makeDogLiElement.style.color = "red"; // red color doesn't persist after refreshing website
           }) //addEventListener ends
            getDogBreeds.append(makeDogLiElement)
        }); // forEach ends        
    
    }) // second .then ends
} //breedUrl ends

breedUrl();

const breedDropdown = document.querySelector("#breed-dropdown")
//console.log(breedDropdown)
breedDropdown.addEventListener("change", (e) => {
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


