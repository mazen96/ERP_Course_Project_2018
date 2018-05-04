let buts=document.getElementsByClassName("but");
let slides=document.getElementsByClassName("slide");

function refresh(){
    for(let i=0;i<4;i++){
        if(buts[i].classList.contains("selectedB")){
            buts[i].classList.remove("selectedB");
        }
    }
    for(let i=0;i<4;i++){
        if(!(slides[i].classList.contains("hide"))){
            slides[i].classList.add("hide");
            
        }
    }
}


function show(n){
    let temp;
    let tempB;
    refresh();
    temp=document.getElementById("slide" + n);
    tempB=document.getElementById("b"+n);
    temp.classList.remove("hide");
    tempB.classList.add("selectedB");
}