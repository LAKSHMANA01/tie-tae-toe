let boxes = document.querySelectorAll(".box");
let rest = document.querySelector(".rest");
let msg = document.querySelector("#msg");
let mycontainer = document.querySelector(".msgcontainer");
let btmstart = document.querySelector("#newstart");

// player of enter here 2 player

let turno = true;

let winnpatten = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];


const resetbox = () => {
    turno = true;
    enebleboxes();
    mycontainer.classList.add("hide");
    

}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked butten")
        if (turno) {
            // player if its enter the box here click condition change enter somthing
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X  ";
            turno = true;
        }
        box.disabled = true;
        checkwinner();

    })


}

);

const desebleboxes = () => {
    for (box of boxes) {
        box.disabled = true;
       
    }

    }




const enebleboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}












const showing12 = (winner) => {
    msg.innerText = `Congratulations, you win ${winner}`;
    mycontainer.classList.remove("hide");
}

const checkwinner = () => {
    for (let patten of winnpatten) {
        let posval1 = boxes[patten[0]].innerText;
        let posval2 = boxes[patten[1]].innerText;
        let posval3 = boxes[patten[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                // console.log("winner", posval1)
                showing12(posval1);


            }


        }


    }
}

rest.addEventListener("click",resetbox);

btmstart.addEventListener("click",resetbox)