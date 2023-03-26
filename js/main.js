// alert( document.cookie );


$(document).ready(function(){
    $("#phone_1").mask("+7(999) 999-99-99");
    $("#phone_2").mask("+7(999) 999-99-99");
    $("#phone_3").mask("+7(999) 999-99-99");
    $("#phone_4").mask("+7(999) 999-99-99");
    $("#phone_5").mask("+7(999) 999-99-99");
    $("#phone_6").mask("+7(999) 999-99-99");



});

$(document).ready(function(){
    $('.reviews').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
        
    });


    $('.navigation__lang').on('click', function(){
        $('.navigation__buttons > div').toggleClass('active', 1100);


        
    });


    $('.mobile-menu__link').on('click', function(){
        $('.mobile-menu__container').toggleClass("disactive");
        $('.mobile-menu__btn').addClass("disactive");


        
    });

    
   


    





    
    $('.one').on('click', function() {
        $('#openModal-one').toggleClass("open", 300);
    });

    $('.two').on('click', function() {
        $('#openModal-two').toggleClass("open", 300);
    });
    $('.three').on('click', function() {
        $('#openModal-three').toggleClass("open", 300);
    });
    $('.four').on('click', function() {
        $('#openModal-four').toggleClass("open", 300);
    });

    $('.five').on('click', function() {
        $('#openModal-five').toggleClass("open", 300);
    });

    $('.six').on('click', function() {
        $('#openModal-six').toggleClass("open", 300);
    });

    $('.seven').on('click', function() {
        $('#openModal-seven').toggleClass("open", 300);
    });

    $('.eight').on('click', function() {
        $('#openModal-eight').toggleClass("open", 300);
    });

    $('.nine').on('click', function() {
        $('#openModal-nine').toggleClass("open", 300);
    });

    $('.ten').on('click', function() {
        $('#openModal-ten').toggleClass("open", 300);
    });


    $('.eleven').on('click', function() {
        $('#openModal-eleven').toggleClass("open", 300);
    });

    $('.twelve').on('click', function() {
        $('#openModal-twelve').toggleClass("open", 300);
    });




    $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });


  });


//   function goDoSomething(identifier){     
//     $("data-id:"+$(identifier).data('id')+", data-option:"+$(identifier).data('option'));   
//     $('#openModal').slideToggle(100);
//     ('.questions__question').toggleClass('open', 100);
            
// }


// $('button').click(function(){
//     var data = $.parseJSON($(this).attr('data-button'));
//     alert(data.option1)
//   });

jQuery(function () {
    jQuery("#modalVote").appendTo("body");
});


$(document).ready(function(){
    $('.answer--invalid').each(function(){
     var title = $(this);
     title.html( title.text().replace(/(^\w+)/,'<span>$1</span>') );

    });
});






// QUIZ

let DATA = [
    {
        question: 'Есть ли у тебя опыт работы в курьерской доставке?',
        answers: [
            {
                id: "1",
                value: "Да",
                figure: 10370,
                
            },
            {
                id: "2",
                value: "Нет",
                figure: 7890,
            },
            
        ]
    },


    {
        question: 'Выбери способ передвижения',
        answers: [
            {
                id: "3",
                value: "Пешком",
                figure: 5165,
            },
            {
                id: "4",
                value: "На велосипеде",
                figure: 9958,
            },
            {
                id: "5",
                value: "На машине",
                figure: 15520,
            },
        ]
    },


    {
        question: 'Выбери количество часов, в течение которого ты готов выполнять заказы',
        answers: [
            {
                id: "6",
                value: "менее 4",
                figure: 0,
            },
            {
                id: "7",
                value: "4 часа",
                figure: 1680,
            },
            {
                id: "8",
                value: "8 часов",
                figure: 9935,
            },
            {
                id: "9",
                value: "12 часов",
                figure: 18345,
            },
        ]
    },

    {
        // Здесь надо умножать прошлое число на 2 и на 3 из прошлого числа которое получилось
        question: 'Выбери график, в котором ты готов выполнять заказы',
        answers: [

            {
                id: "6",
                value: "Свободный",
                figure: 0,
            },
            {
                id: "7",
                value: "5/2",
                figure: 0,
            },
            {
                id: "8",
                value: "6/1",
                figure: 0,
            },
            {
                id: "9",
                value: "2/2",
                figure: 0,
            },
        ]
    },



];


const figures = DATA.flatMap(question => question.answers.map(answer => answer.figure));
// console.log(figures[0] + figures[2]);
console.log(DATA.answers)



for (let i = 0; i < DATA.length; i++) {
    let question = DATA[i].question;
    let answers = DATA[i].answers;
    console.log(answers[0].figure);
}



const total = figures.reduce((sum, figure) => sum + figure, 0);
console.log(total);





let localResults = {};

const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const interest = document.getElementById("percent");
const results = document.getElementById("results-wrapping");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");
const btnRestartCenter = document.getElementById("restartCenter");
const summa = document.getElementById("summa");
const ansNone = document.getElementById("answer--none");
const inva = document.getElementsByClassName("answer--invalid");


const calculatorPrice = document.querySelector('.calculator__price');
const calculatorDescription = document.querySelector('.calculator__description');
const calculatorChoicewrap = document.querySelector('.calculator__choicewrap');
var style = document.createElement('style');




// Select the calculator__price element

const fontElement = calculatorPrice.querySelector('font[style="vertical-align: inherit;"]');
if (fontElement) {
  fontElement.remove();
}


window.onload = function() {

    what();
    function what(){
        inva.innerHTML = `<li>HTML</li><li>CSS</li><li>JavaScript</li>`;
        renderResults();
        summa.style.backgroundColor = "red";
        for (let i = 0; i < inva.length; i++) {
            inva[i].style.backgroundColor = "red";

            
        }

    };

}



// Loop through each element and add up the classList of each element
let classes = {};
for (let i = 0; i < inva.length; i++) {
  const classList = inva[i].classList;
  for (let j = 0; j < classList.length; j++) {
    const className = classList[j];
    if (className !== 'answer--invalid') {
      classes[className] = (classes[className] || 0) + 1;
    }
  }
}

// Log the count of each class
console.log(classes);


            

const renderQuestions = (index) => {
    renderIndicator(index);
    renderIndicatorLine(index);
    // '%'

    questions.dataset.currentStep = index;
    questions.dataset.currentSum = index;
    questions.dataset.currentLine = index;


    const renderAnswers = () => DATA[index].answers
    .map((answer) =>  `
        <li>
            <label class="calculator__button">
                <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    <h3>${answer.value}</h3>
            </label>
        </li>
    `
    )
        .join("");
        
    

    questions.innerHTML = `
    <div class="quiz-questions-item">
<!-- quiz-results-item__question -->
        <div class="quiz-questions-item__question">
            <h2 class="calculator__variantstext">${DATA[index].question}</h2>
        </div>
<!-- quiz-results -->
        <!-- mobile -->
        <div class="quiz-results">
            <div class="calculator__price d-m-block quiz-results-item">
                <span>0₽</span>
            </div>

            <p class="calculator__description d-m-block">
                Ваш примерный заработок *При выполнении от
                15 заказов за смену
            </p>
            <!-- mobile -->
        </div>
<!-- quiz-questions-item__answers -->
        <div class="quiz-questions-item__answers"><ul>${renderAnswers()}</ul>
        </div>




    </div>

    
    `;
};

    



const renderIndicator = (currentSum) => {
    indicator.innerHTML = `${currentSum}/${DATA.length}`;
};
const renderIndicatorLine = (currentLine) => {
    const percentage = ((currentLine / DATA.length) * 100).toFixed(0).toString();
    interest.innerHTML = `<span id= "perce" class= "perce">${percentage}%</span><span id= "percentage" class= "percentage"> ${currentLine}/${DATA.length}</span>`;

};

const renderSum = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};
console.log(renderIndicator)



quiz.addEventListener("change", (event) => {
    if (event.target.classList.contains("answer-input")){
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;

    }
});




function progress (){
    const stripblue = document.getElementById("stripblue");
    const perce = document.getElementById("perce");
           let width = 0;


           if (width == 100){
                clearInterval(id);
                stripblue.style.width = "0%";

            } else{
                width++;
                stripblue.style.width = perce.innerText;
            }

                
            console.log(stripblue);
            console.log(perce.innerHTML);


            
}




// function progress (){
//     const stripblue = document.getElementById("stripblue");
//     const perce = document.getElementById("perce");
//            let width = 0;
//            const id = setInterval(progressStatus,0);


//             function progressStatus(){
//                 if (width >= 100){
//                     clearInterval(id);
//                     stripblue.style.width = "100%";


//                 } else{
//                     width++;
//                     stripblue.style.width = perce.innerText;
//                 }

//         console.log(stripblue);

//             }
// }



// Конечный итог





quiz.addEventListener("click", (event) => {
    const ansNone = document.getElementById("answer--none");


    if (event.target.classList.contains("btn-next")) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        const restartQuestionIndex = Number(questions.dataset.currentStep) + 1;
        const nextQuestionCurrentLineIndex = Number(questions.dataset.currentLine) + 1;
        
        renderResults();

        if (DATA.length === nextQuestionIndex) {
            // результаты
            
            stripblue.style.width = "100%";
            // btnRestartCenter.classList.add("btn-restart--center");


            style.innerHTML = '.calculator__choicewrap { justify-content: center !important; }' + 
            '@media (max-width: 992px) { ' +
              '.calculator__choicewrap { margin-top: 154px !important;} ' +
              '.calculator__price { top: 0 !important; } ' +
              '.calculator__description { margin-top: 85px !important; } ' +
            '}';

            document.head.appendChild(style);


            questions.classList.add("questions--hidden");
            btnNext.classList.add("btn-next--hidden");
            // ТУТ
            renderResults();
            renderQuestions(nextQuestionCurrentLineIndex);

            
        } else {
            results.classList.add("results--visible");
            btnRestart.classList.add("btn-restart--visible");

            indicator.classList.add("indicator--visible");

            renderQuestions(nextQuestionIndex);
            renderQuestions(restartQuestionIndex);

            
        }

        progress();
        renderResults();
        

        btnNext.disabled = true;
        btnRestart.disabled = false;
        
    }
    
    if (event.target.classList.contains("btn-restart")) {
        localResults = {};


        results.innerHTML = ""; 

        console.log(results);


        questions.classList.remove("questions--hidden");
        indicator.classList.remove("indicator--hidden");
        results.classList.remove("results--visible");
        btnNext.classList.remove("btn-next--hidden");
        btnRestart.classList.remove("btn-restart--visible");

        btnRestart.disabled = true;
        btnNext.disabled = true;
        style.innerHTML = '';

        renderQuestions(0);
        renderResults();
        progress();
       
 
        
    }

});


// ВЫВОД ВСЕХ ТРЕХ ОТВЕТОВ
//   const getAnswers = (questionIndex) => 
//   // .map((answer) => `<span id= "answer--none" class=${getClassname(answer, questionIndex)}>${renderResults.totalNumber}</span>`)
//   // .map((answer) => `<span id= "answer--none" class=${getClassname(answer, questionIndex)}>${answer.figure}${totalNumber}</span>`)
//   ((answer) => `<span id= "answer--none" class= ${getClassname(answer, questionIndex)}>${answer.figure} ${totalNumber}</span>`)
  



const renderResults = () => {
    let content = "";


    const getClassname = (answer, questionIndex) => {
        let classname = "";
        

          
          
          if (!answer.correct && answer.id === localResults[questionIndex]) {
              classname = "answer--invalid";
              
            
          
              // MY
              // answerNone = document.getElementById("summa");
              // if (answerNone.correct){
                  //     classname = "moo";
                  
                  // }
                  
                  

                  answerNone = document.getElementById("summa");
                  greenTxt = document.getElementsByClassName("greentxt");
                  const mySet = new Set([answerNone]);
                  
                  if (greenTxt.length > 0) { 
                      mySet.forEach(elem => elem.classList.add("greentxt"));
                    }
                    
                    console.log(answerNone)
                    
                    
                    
                    // const quizResults = document.getElementById('results');
                    // for (let i = 0; i < quizResults.length; i++) {
                        // quizResults[i].remove();
                        // }
                        
                        
                        
                        
                    } else if(answer.correct) {
                        classname= "answer--valid";
                        
                    }
                    
                    return classname;
                    

        
    };



renderResults

// скопировать for и переделать его с number -1
let totalNumber = 0;
let previousTotal = 0;
    for (let i = 0; i < inva.length; i++) {

            let contentIn = inva[i].innerHTML;
            let number = parseInt(contentIn);
            totalNumber += number;
            console.log(totalNumber);

        
    }



    // if(perce.innerHTML == "50%"){
    //     let totalNumberBefore = totalNumber;
    //     console.log(totalNumberBefore);

    // }
    // console.log(totalNumberBefore);


    // let totalNumberWhenPerceIs50;

    // if (perce.innerHTML === "50%") {
    //   totalNumberWhenPerceIs50 = totalNumber;
    // }
    
    // console.log(totalNumberWhenPerceIs50);

    
    // let globalTotalNumberWhenPerceIs50;

    // if (perce.innerHTML === "50%") {
    //   globalTotalNumberWhenPerceIs50 = totalNumber;
    // }
    
    // console.log(globalTotalNumberWhenPerceIs50);



//     let globalTotalNumberWhenPerceIs50;

// function calculateGlobalTotalNumberWhenPerceIs50() {
//   if (perce.innerHTML === "50%") {
//     globalTotalNumberWhenPerceIs50 = totalNumber;
//   }
// }
// console.log(globalTotalNumberWhenPerceIs50);



let myNumber;
if (perce.innerHTML === "50%") {
    myNumber = totalNumber;
    globalTotalNumberWhenPerceIs50 = myNumber;
}
console.log(myNumber);



// let globalTotalNumberWhenPerceIs50;

// function myFunction() {
//     let myNumber;
//     if (perce.innerHTML === "50%") {
//         myNumber = totalNumber;
//         globalTotalNumberWhenPerceIs50 = myNumber;
//     }
// }

// myFunction();
// console.log(globalTotalNumberWhenPerceIs50);





    console.log(totalNumber);

    const inputElementSeven = document.querySelector('input[value="7"]');
    const inputElementEight = document.querySelector('input[value="8"]');

const getAnswers = (questionIndex) => DATA[questionIndex].answers
        // .map((answer) => `<span id= "answer--none" class=${getClassname(answer, questionIndex)}>${renderResults.totalNumber}</span>`)
        // .map((answer) => `<span id= "answer--none" class=${getClassname(answer, questionIndex)}>${answer.figure}${totalNumber}</span>`)
        // .map((answer) => `<p><span id= "answer--none" class= ${getClassname(answer, questionIndex)}>${answer.figure} </span>${totalNumber}</p>`)
        .map((answer) => {
            if (inputElementSeven && inputElementSeven.checked) {
                const result = previousTotal * 2;

                previousTotal = totalNumber;
                totalNumber = result;
              return `<p><span id="answer--none" class=${getClassname(answer, questionIndex)}>${answer.figure}</span>${result}</p>`;
            } else if (inputElementEight && inputElementEight.checked){
                return `<p><span id="answer--none" class=${getClassname(answer, questionIndex)}>${answer.figure}</span>${totalNumber * 3}</p>`;

            } else {
              return `<p><span id="answer--none" class=${getClassname(answer, questionIndex)}>${answer.figure}</span>${totalNumber}</p>`;
            }
          })



        .join ("");
        

    DATA.forEach((question, index) => {
        content += `

<div class="quiz-results" id="results">
                    <div class="calculator__information col-lg-12 col-12" id="formReset">
                        <h2 class="calculator__maintext">
                            Калькулятор твоего дохода
                        </h2>

<!-- quiz-indicator -->
                        <div class="quiz-indicator" id="indicator">${currentStep = index + 1}/3</div> 

                        <!-- нету quiz-results-item -->
                        <!-- нету quiz-results-item__question -->
                        <!-- нету ul quiz-results-item__answers -->
                        <div class="quiz-results-item">
                            <div class="quiz-results-item__question">
                                <ul class="quiz-results-item__answers">
                                    <li class="calculator__price d-mob-none">
                                        <span id= "summa" class= "summa">${getAnswers(index) + " ₽"}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        

                        <p class="calculator__description d-mob-none">
                            Ваш примерный заработок *При выполнении от
                            15 заказов за смену
                        </p>
                        
                    </div>


                </div>
                

        `;
        
    });



//     <div class="quiz-results-item">
//     <div class="quiz-results-item__question">
//         <ul class="quiz-results-item__answers">
//             <li class="calculator__price d-mob-none">${getAnswers(index)}</li>
//         </ul>
//     </div>
// </div>

    results.innerHTML = content;
    console.log(totalNumber);

};


quiz.addEventListener("DOMContentLoaded", (event) => {
    if (event.target.classList.contains("answer-input")){
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;

    }
});




renderQuestions(0);
renderResults();
