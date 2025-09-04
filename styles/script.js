// add heart function
function addHeart (){
    const heartCount =document.getElementById("heart-count");
    const contactContainer = document.querySelector(".contact-container");

    let count = parseInt(heartCount.innerText);
    count++
    heartCount.innerText = count;
}

// copy number function
function copyNumber (){
    const copyCount = document.getElementById("copy-count");
    const numberToCopy = event.target.parentElement.parentElement.querySelector(".call-number").innerText;

    alert("Number copied: " + numberToCopy);
    
    let count = parseInt(copyCount.innerText);
    navigator.clipboard.writeText(numberToCopy);
    count++
    copyCount.innerText = count;
}