const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// check if the input is empty
function addTask(){
    if(inputBox.value === ''){
        alert('add a task...');
    }

    //add input to task list
    else{
        let li = document.createElement("li"); //create the task list
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //add the delete icon to added task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //clear input after added task
}
//check and uncheck added task
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    //remove added task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);