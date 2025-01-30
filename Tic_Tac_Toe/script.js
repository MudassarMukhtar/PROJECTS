const boxes=document.querySelectorAll(".box");
const resetBtn=document.querySelector("#reset-btn");
const newGameBtn=document.querySelector("#new-btn");
const msgContainer=document.querySelector(".msg-container");
const msg=document.querySelector("#msg")

let turnO=true;//playX,playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [3,7,8]
]

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("box clicked")
    if(turnO){
        box.innerText="O";
        turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;

    checkWinner();
   })
});


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
     msg.innerText=`Congratulations ,winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
}


const checkWinner=()=>{
    for (let pattren of winPatterns) {
        let pos1Val=boxes[pattren[0]].innerText;
        let pos2Val=boxes[pattren[1]].innerText;
        let pos3Val=boxes[pattren[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val!=""){

            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val);
            }
                
        }
            
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


