
  const question = document.getElementById('ques')
  const options = document.querySelectorAll(".options")

//   console.log(question)
//   console.log(options)
  let index = 0;
  let right = 0;
  let wrong = 0;
  let total = Questions.length;
  // const data = Questions[index];

  const loadQuestion = ()=>{
    reset();
    const data = Questions[index];
    console.log(data)
    question.innerHTML = `${index+1}) ${data.ques}`;
    options[0].nextElementSibling.innerHTML = data.a
    options[1].nextElementSibling.innerHTML = data.b
    options[2].nextElementSibling.innerHTML = data.c
    options[3].nextElementSibling.innerHTML = data.d
  }
  // index++;
  loadQuestion()

function submitQuiz() {
  const data = Questions[index];
  const ans = checkAnswer();

  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;

  if (index < total) {
    loadQuestion();
  } else {
    endQuiz();
  }
}



  // check answer
  function checkAnswer()
  {
    let ans;
    options.forEach((input)=>{
        if(input.checked)
        {
            // console.log(input.value)
            // console.log(ans)
            ans = input.value;
        }
        
    })
    return ans;
  }

  //reset question
  function reset(){
    options.forEach((input)=>{
      input.checked = false
    })
  }




  function endQuiz() {
  let result = document.querySelector(".inner");
  result.innerHTML = `
    <div style="
      display: flex; 
      justify-content: center; 
      flex-direction: column;
      align-items: center; 
      width: 100%; 
      height: 100%;
      padding: 20px;
      text-align: center;
    ">
      <h2 style="margin-bottom: 20px; color: #00bcd4;">🎉 Quiz Completed!</h2>
      <p style="font-size: 18px; color: #333;">Total Questions: <strong>${total}</strong></p>
      <p style="font-size: 18px; color: green;">Correct Answers: <strong>${right}</strong></p>
      <p style="font-size: 18px; color: red;">Wrong Answers: <strong>${wrong}</strong></p>
      <button onclick="location.reload()" style="
        margin-top: 25px;
        padding: 10px 20px;
        background-color: #00bcd4;
        border: none;
        color: white;
        font-size: 16px;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      ">Try Again</button>
    </div>
  `;
}
