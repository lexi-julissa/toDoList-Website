const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You have to write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ //checks where you have clicked
        e.target.classList.toggle("checked"); //if clicked then crossed out
        saveData();
    }
    else if(e.target.tagName === "SPAN"){//if clicked then will delete parent element: list
        e.target.parentElement.remove();
        saveData();
    }
}, false );

function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("Data");
}
showTask();