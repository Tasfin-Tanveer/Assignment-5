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

// calling and history function
const btns = document.getElementsByClassName("call-btn");
const history = document.getElementById("history-container");
const clear = document.getElementById("clear-history");

const totalCoin = document.querySelector(".total-coin"); 
    let coins = parseInt(totalCoin.innerText);

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function (){
        const card = btns[i].parentNode.parentNode;
        const title = card.querySelector(".title").innerText;
        const number = card.querySelector(".call-number").innerText;

        if (coins < 20) {
            alert("You do not have sufficient coins");
            return;
        }

        coins -= 20;
        totalCoin.innerText = coins;
        alert("Calling" + " " + title + " " + number + "..." );

        let div = document.createElement("div");
        div.className = "flex justify-between items-center bg-[#FAFAFA] p-2 rounded mb-2";

        let left = document.createElement("div");
        left.className = "flex flex-col";
        let h3 = document.createElement("h3");
        h3.textContent = title;
        h3.className = "font-bold";
        let h1 = document.createElement("h1");
        h1.textContent = number;
        h1.className = "text-gray-600 text-sm";

        left.appendChild(h3);
        left.appendChild(h1);

         let right = document.createElement("span");
        right.textContent = new Date().toLocaleTimeString();
        right.className = "text-sm text-gray-500";

        div.appendChild(left);
        div.appendChild(right);

        history.appendChild(div);
    });

    clear.addEventListener("click", function () {
        history.innerHTML = "";
    })
}