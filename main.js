const ad_id=document.querySelector(".advice-id");
const ad_text=document.querySelector("#advice-text q");
const dice=document.getElementById("dice");

window.onload=generateAdvice();
dice.addEventListener("click",
    generateAdvice
)
function generateAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response=>response.json())
    .then((data)=>{
      ad_id.textContent=data.slip.id;
      ad_text.textContent=data.slip.advice ; 

    }
    )
}