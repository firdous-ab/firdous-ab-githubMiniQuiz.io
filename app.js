const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
    //console.log(score);
  });

  //show result on page
  scrollTo(0, 0); // this will take us to the of the webpage after submiting so we can see the score for the quiz
  //result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

//THE WINDOW OBJECT
//the window object is the global object in frontend and javascript. it's the mother of all objects. everything we do in frontend and javaScript is stored in the window object

// console.log("hello");
// window.console.log("hello");

// console.log(document.querySelector("form"));
// console.log(window.document.querySelector("form"));

//alert("hello");
//window.alert("hello");

// setTimeout(() => {
//   //this will wait a few seconds before carrying out the callback function
//   alert("Hello, ninjas");
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//   console.log("hello");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
