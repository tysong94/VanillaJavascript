// Element 객체들
const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS_Key = 'toDos'

// 객체를 담을 배열
let toDoArray = [];

/*---------------------------------------------------------*/
init();

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

// ToDo List 보여주기
function loadToDos() {
    const toDoString = localStorage.getItem(TODOS_LS_Key); 
    if(toDoString !== null) {
        toDoArray = JSON.parse(toDoString);
        toDoArray.forEach(function(toDo) {
            paintToDo(toDo.id, toDo.text);
        })
    }
}

// ToDo List 등록 & ToDo 저장
function handleSubmit(event) {
    event.preventDefault();
    
    let newId;
    if(toDoArray.length === 0) {
        newId = 1;
    } else {
        newId = toDoArray[toDoArray.length - 1].id + 1
    }
    const text = toDoInput.value;
    
    paintToDo(newId, text);

    // Array에 새 Obj 추가
    const toDoObj = {
        id: newId,
        text: text 
    };
    toDoArray.push(toDoObj);
    saveToDos();
    
    toDoInput.value = "";
}

function paintToDo(newId, text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); 
    const span = document.createElement("span"); 
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
          
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem(TODOS_LS_Key, JSON.stringify(toDoArray));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDoArray.filter(function(toDoObj) {
        return toDoObj.id !== parseInt(li.id);
    });
    toDoArray = cleanToDos;
    saveToDos();
}
