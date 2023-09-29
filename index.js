// Your code here
const dodger = document.getElementById("dodger");
undefined
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
undefined
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
undefined


function moveDodgerRight() {
  
  let dodger = document.getElementById("dodger"); 
  let currentLeft = parseInt(dodger.style.left || 0, 10);

  let moveAmount = 10;

  let newLeft = currentLeft + moveAmount;
  dodger.style.left = newLeft + "px";
}


