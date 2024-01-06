 roundselect=document.querySelector("#roundselect")
 roundsSelectContainer=document.querySelector("#roundsSelectContainer")
 errorMessagePara=document.querySelector("#errorMessagePara")
 popup=document.querySelector("#popup")
closebutton=document.querySelector("#closebutton")

playButton=document.querySelector("#playButton")
nextRoundButton=document.querySelector("#nextRoundButton")
initButton=document.querySelector("#initButton")

gameControls=document.querySelectorAll(".gameControls")
userControls=document.querySelectorAll(".userControls")
computerControls=document.querySelectorAll(".computerControls")

roundID=document.querySelector("#roundID")
roundspan=roundID.querySelector("span")

countDown=document.querySelector("#countDown")

userScore=document.querySelector("#userScore")
userFireWork=document.querySelector("#userFireWork")

computerScore=document.querySelector("#computerScore")
computerFireWork=document.querySelector("#computerFireWork")
LONG_DELAY=1500
DELAY=10
SHORT_DELAY=300
isGameStarted=false
init();
currentROund=1

function init(){
    isGameStarted=false;
    userScore.innerText="0";
    computerScore.innerText="0";
     show([playButton,roundsSelectContainer])
      hide([countDown,roundID,nextRoundButton,initButton])
     roundSelect.value="3"   
}
function startgame(){
    if(roundSelect.value===""){
       disaplayError("Choose number of ROunds")
       return
    }
    hide([playButton,roundsSelectContainer])
    show([countDown,roundID])
    numberofRound=+roundSelect.value
    resetcountdown()
    currentROund=1; 
   
}
function nextROund(){
hide([nextRoundButton])
show([countDown])
resetcountdown()
}
function resetcountdown(){
    countDown.innerText="4"
    addclasses([countDown],["animate-[bounce_1s_ease-in-out_infinite]"])
    triggerCountDown()
}
function triggerCountDown(){
    if(+countDown.innerText>1){
countDown.innerText=+countDown.innerText-1
setTimeout(() => {
   triggerCountDown()
}, DELAY);
    }else{
        countDown.innerText="GO!!!"
        removeclasses([countDown],["animate-[bounce_1s_ease-in-out_infinite]"])
        enable(gameControls)
    }
}
function select(userInput){
    let computerInput=1
    // let computerInput=Math.floor(Math.random()*3)+1
   console.log({userInput,computerInput});  
        disable(gameControls,SHORT_DELAY)    
if(userInput===computerInput){
    countDown.innerText="DRAW"
}else if((userInput===1 && computerInput===3)||
         (userInput===2 && computerInput===1)||
         (userInput===3 && computerInput===2)
){
    updateScore(userScore)
    show([userFireWork])
    hide([userFireWork],1000)       
}else{
    updateScore(computerScore)
    show([computerFireWork])
    hide([computerFireWork],1000) 
    
}prepareForNextRound()

}

function prepareForNextRound(){
if(currentROund<numberofRound){
    setTimeout(() => {
        currentROund++
        roundspan.innerText=currentROund
        show([nextRoundButton])
    }, 1000);
}else{
//Gameover
const userSoreValue=+this.userScore.innerText
const computerSoreValue=+this.computerScore.innerText
if(userSoreValue==computerSoreValue){
 
    countDown.innerText="Game Over. It was Draw"
}else if(userSoreValue>computerSoreValue){
    countDown.innerText="Game Over. You Won!"
}else{
    countDown.innerText="Game Over. You Lost"
}
show([initButton])
}

}






function updateScore(element){
    countDown.innerText=""
    element.innerText= +element.innerText+1
}



function enable(elements,delay){
    setTimeout(() => {
        elements.forEach((element) => {
            element.disabled=false
        });
    }, delay);


}
function disable(elements,delay){
    setTimeout(() => {
        elements.forEach((element) => {
            element.disabled=true
        });
    }, delay);
  

}

function openpopup(){
    // popup.classList.remove("hidden")
    removeclasses([popup],['hidden'])
}
function closepopup(){
    // popup.classList.add("hidden")
    addclasses([popup],['hidden'])
}
function addclasses(elements,classes){
elements.forEach((element) => {
    classes.forEach((className)=>{
element.classList.add(className)
    })
});
}
function removeclasses(elements,classes){
    elements.forEach((element) => {
        classes.forEach((className)=>{
    element.classList.remove(className)
        })
    });
}
function hide(elements,delay){
    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('hidden')
        });
    }, delay?delay:0);
   
}
function show(elements){
    elements.forEach(element => {
        element.classList.remove('hidden')
    });
}
function disaplayError(msg){
    errorMessagePara.innerText=msg
        setTimeout(() => {
            errorMessagePara.innerText=""
        }, LONG_DELAY);
}
