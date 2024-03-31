var reset = document.querySelector('#reset');
var arr = [
    [1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];

reset.addEventListener("click", () => {
    window.location.reload();
});

let x = 1; let y = 0;
for(let i = 0; i < 9; i ++){
    document.querySelectorAll(".box")[i].addEventListener("click", () => {
        if(x % 2 == 1){
            if(document.querySelectorAll(".box")[i].textContent === ""){
                document.querySelectorAll(".box")[i].textContent = "X"; x ++;
            }
            else alert("You cannot overwrite a played event");
        }
        else{
            if(document.querySelectorAll(".box")[i].textContent === ""){
                document.querySelectorAll(".box")[i].textContent = "O";
                x ++;
            }
            else alert("You cannot overwrite a played event");
        }
        for(let j = 0; j < 8; j ++){
            if(document.querySelectorAll(".box")[arr[j][0] - 1].textContent === "X" && document.querySelectorAll(".box")[arr[j][1] - 1].textContent === "X" && document.querySelectorAll(".box")[arr[j][2] - 1].textContent === "X"){
                document.querySelector(".winner h1").textContent = "Winner : Player with X";
                document.querySelector(".winner").style.display = "flex";
                y ++;
            }
            if(document.querySelectorAll(".box")[arr[j][0] - 1].textContent === "O" && document.querySelectorAll(".box")[arr[j][1] - 1].textContent === "O" && document.querySelectorAll(".box")[arr[j][2] - 1].textContent === "O"){
                document.querySelector(".winner h1").textContent = "Winner : Player with O";
                document.querySelector(".winner").style.display = "flex";
                y ++;
            }
        }
        if(x == 10 && y == 0){
            document.querySelector(".winner h1").textContent = "Its a tie between both of you";
            document.querySelector(".winner").style.display = "flex";
        }
     });
}