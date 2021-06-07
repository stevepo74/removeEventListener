// .removeEventListener()

// const circle = document.querySelector('.circle');
// let count = 0;

// function toggleColor() {
//   circle.classList.toggle('red-circle');
//   count++
//   console.log(count);
//   if (count > 10) {
//     circle.removeEventListener('click', toggleColor);
//   }
// }

// circle.addEventListener('click', toggleColor);

const movingCircle = document.querySelector(".circle");
let count = 0;

function circleDown() {
  count += 20;
  movingCircle.style.top = count + "px";
  console.log(count);
  if (count > 200) {
    movingCircle.removeEventListener("click", circleDown);
  }
}

movingCircle.addEventListener("click", circleDown);
