const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn1");
let notes = document.querySelector(".input-box");

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true")
    img.src = "trash.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})