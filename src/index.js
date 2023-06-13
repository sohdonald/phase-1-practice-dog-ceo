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
    // append is not working
    // we want to append the image to the html

    getDogImg.append(makeImg);
    }); // foreach ends here
    
    }); // second .then ends here

} //imgUrl function ends here

imgUrl();
// how do we get each picture from the fetch url?
// images are in message key
//imgUrl.querySelector();



}) // DOMContentLoaded ends