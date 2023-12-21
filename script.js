//variable declarations
let boxnb=16;
document.documentElement.style.setProperty('--boxnb', boxnb);

const container=document.querySelector("#container");
//initial creation of console
createConsole(boxnb);

//brush weight button
const weight=document.getElementById("weight");
weight.addEventListener("click", () =>{
     boxnb=prompt("enter desired number between 10 and 100 of squares inside the console width");
     document.documentElement.style.setProperty("--boxnb", boxnb);
     createConsole(boxnb);
});

//console and on hover
function createConsole(boxnb){
    container.innerHTML="";
    for(i=0;i<(boxnb*boxnb);i++){
        const div=document.createElement("div");
        div.classList.add("box")
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor="yellow";
        });
    container.appendChild(div);
    }    
}



