let emojis = [
"🚗",
"🚗",
"🚓",
"🚓",
"🚕",
"🚕",
"🛺",
"🛺",
"🚙",
"🚙",
"🚌",
"🚌",
"🚘",
"🚘",
"🚜",
"🚜",
];



let openCards = [];


let shuffleEmojis = emojis.sort(()=>(Math.random()> 0.5)? 2 : -1)

const loopEmojis = shuffleEmojis.forEach((_,i) =>{
    let box = document.createElement("div")
    box.className = "item"
    box.onclick = handleClick
    box.innerText = shuffleEmojis[i]
    document.querySelector(".game")
    .appendChild(box)
})

function handleClick () {
    if(openCards.length < 2){
        this.classList.add("boxOpen")
        openCards.push(this);
    }
    
    if(openCards.length === 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    if(openCards[0].innerText === openCards[1].innerText){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }
    openCards =[];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você Venceu!");
        const gameReset = [...document.querySelectorAll(".item")] 
        gameReset.forEach((e,i) =>{
            e.classList.remove("boxMatch")
            e.classList.remove("boxOpen")
        })
        setTimeout(timeReset,1000)
        }   
    }

function timeReset(){
    location.reload()
}