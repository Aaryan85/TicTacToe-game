let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msg-cnt");
let msg=document.querySelector(".msg");
let newgameBtn=document.querySelector("#newgame-btn");

 let turnO=true;

 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText="X";
        box.style.color="blue";
        turnO=false;
    }
    else{
         box.innerText="O";
         box.style.color="red";
         turnO=true;
    }
    box.disabled=true;
    checkWinner();

    })
});

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations!!! , winner: "Player ${winner}"`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
    let pos1val =boxes[pattern[0]].innerText;
    let pos2val =boxes[pattern[1]].innerText;
    let pos3val =boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val!= "" && pos3val!= ""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
    }
      }
};

newgameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




