const roundselect=document.querySelector("#roundSelect")
const roundsSelectContainer=document.querySelector("#roundsSelectContainer")
const errorMessagePara=document.querySelector("#errorMessagePara")
const popup=document.querySelector("#popup")
const  closebutton=document.querySelector("#closebutton")

const  playButton=document.querySelector("#playButton")
const  nextRoundButton=document.querySelector("#nextRoundButton")
const  initButton=document.querySelector("#initButton")

const  gameControls=document.querySelectorAll("#gameControls")
const  userControls=document.querySelectorAll("#userControls")
const  computerControls=document.querySelectorAll("#computerControls")

const  roundID=document.querySelectorAll("#roundID")
const roundspan=roundID.querySelector('span')

const countDown=document.querySelector("#countDown")

const userScore=document.querySelector("#userScore")
const userFireWork=document.querySelector("#userFireWork")

const computerScore=document.querySelector("#computerScore")
const computerFireWork=document.querySelector("#computerFireWork")
 

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