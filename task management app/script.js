import {initializeApp} from  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import {getDatabase, ref, push, onValue} from  "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"


const appSettings = {
    databaseURL: "https://management-9a8b7-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const taskListInDB = ref(database, "tasksList")



const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("btn");
const taskList = document.getElementById("task-list")


addTask.addEventListener('click', add)





//adding task to database

function add (){
    let inputValue = inputTask.value;
    push(taskListInDB, inputValue)
    //console.log(inputValue)

    //reading task from database ie adding to the DOM
    onValue(taskListInDB, function(snapshot){
        let listArray = object.values(snapshot.val())

        console.log(listArray)

    })

    //
    taskList.innerHTML += `<li>${inputValue}</li>`
    inputTask.value = "" 

}

