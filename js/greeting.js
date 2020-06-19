const form = document.querySelector(".js-form"), 
    input = form.querySelector("input"), 
    greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser", 
    SHOWING_CN = "showing";

init();

function init() {
    loadName();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) { 
        askForName();
    } else  {
        paintGreeting(currentUser);
    }
}

// currentUser가 없을 때 from을 보여준다.
function askForName() { 
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// form 서브밋시 동작
function handleSubmit(event) {
    event.preventDefault(); // 기본동작을 막음. 페이지가 새로고침되고 어딘가로 보내지는...
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

// 로컬 스토리지에 키, 밸루로 저장.
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

// currentUser가 있을 때 form을 없애고 h4를 보여준다.
function paintGreeting(text) { 
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;
}