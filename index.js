// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    let left = dodger.style.left.replace("px", ""); 
    let leftValue = parseInt(left, 10); 
  
    if (leftValue > 0) { 
      dodger.style.left = `${leftValue - 10}px`; 
    }
  }
  
 
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    let left = dodger.style.left.replace("px", ""); 
    let leftValue = parseInt(left, 10); 
  
    if (leftValue < 360) { 
      dodger.style.left = `${leftValue + 10}px`; 
    }
  }
  
