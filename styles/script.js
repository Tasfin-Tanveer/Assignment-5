// add heart function
function addHeart (){
    const heartCount =document.getElementById("heart-count");
    const contactContainer = document.querySelector(".contact-container");

    let count = parseInt(heartCount.innerText);
    count++
    heartCount.innerText = count;
}