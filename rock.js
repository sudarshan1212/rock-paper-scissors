 roundselect=document.querySelector("#roundselect")
 roundsSelectContainer=document.querySelector("#roundsSelectContainer")
 errorMessagePara=document.querySelector("#errorMessagePara")
 popup=document.querySelector("#popup")
closebutton=document.querySelector("#closebutton")

playButton=document.querySelector("#playButton")
nextRoundButton=document.querySelector("#nextRoundButton")
initButton=document.querySelector("#initButton")

gameControls=document.querySelectorAll("#gameControls")
userControls=document.querySelectorAll("#userControls")
computerControls=document.querySelectorAll("#computerControls")

roundID=document.querySelector("#roundID")
// roundspan=roundID.querySelector("span")

countDown=document.querySelector("#countDown")

userScore=document.querySelector("#userScore")
userFireWork=document.querySelector("#userFireWork")

computerScore=document.querySelector("#computerScore")
computerFireWork=document.querySelector("#computerFireWork")
LONG_DELAY=1500
DELAY=1000
SHORT_DELAY=300
isGameStarted=false
init();

currentROund=undefined

function init(){
    isGameStarted=false;
    userScore.innerText="0";
    computerScore.innerText="0";
     show([playButton,roundsSelectContainer])
      hide([countDown,roundID,nextRoundButton,initButton])
     roundSelect.value="5"   
}
function startgame(){
    if(roundSelect.value===""){
       disaplayError("Choose number of ROunds")
    }
    hide([playButton,roundsSelectContainer])
    show([countDown,roundID])
    currentROund=1; 
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
    }
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
function hide(elements){
    elements.forEach(element => {
        element.classList.add('hidden')
    });
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