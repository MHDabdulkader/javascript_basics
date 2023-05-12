const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function show(){
    display.innerHTML = this.value;
    setTimeout( ()=>{
        thanks.innerHTML = `You have typed: ${this.value}`;
    }, 1000);
}

searchInput.addEventListener("keyup", show)