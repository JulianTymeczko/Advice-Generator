let AdviceURL = "https://api.adviceslip.com/advice"
let diceIcon = document.getElementById("diceIcon")
let pEl = document.querySelector("p")
let h1El = document.querySelector("h1")

diceIcon.addEventListener("click", function () {
    fetch(AdviceURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        
        let adviceQuote = data.slip.advice
        pEl.textContent =  `"${adviceQuote}"`
        
        let adviceNumber = data.slip.id
        h1El.textContent = "ADVICE #" + adviceNumber
        






    })
})

