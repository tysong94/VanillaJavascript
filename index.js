const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    //  아래랑 똑같은 기능을 한다.
    title.classList.toggle(CLICKED_CLASS);    
    
    // const hasClass = title.classList.contains(CLICKED_CLASS); // true or false 반환

    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

function init() {
    title.addEventListener("click", handleClick);
}
init();