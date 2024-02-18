const inputBox= document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");
const addTaskes= document.querySelector("#add-task")
addTaskes.addEventListener("click", ()=>{
    if(inputBox.value ===""){
        alert("You Are Must Write Anything");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)
        let span =document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);
    }
    inputBox.value=""
    saveData();
});
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();