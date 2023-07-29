// // alert( document.cookie );
// function checkParams() {

//     var phone = $('#phone_1').val();
  

     
//     if(phone.length != 0) {
//         $('#request__send-sub').removeAttr('disabled');
//     } else {
//         $('#request__send-sub').attr('disabled', 'disabled');
//     }
// }

// $('#checkbox-id').prop('checked', true);
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$(document).ready(function(){
    $("#phone_1").mask("+7(999) 999-99-99");
    $("#phone_2").mask("+7(999) 999-99-99");
    $("#phone_3").mask("+7(999) 999-99-99");
    $("#phone_4").mask("+7(999) 999-99-99");
    $("#phone_5").mask("+7(999) 999-99-99");
    $("#phone_6").mask("+7(999) 999-99-99");
    $("#phone_7").mask("+7(999) 999-99-99");



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


// кнопка 1
  document.addEventListener("DOMContentLoaded", function() {
    // Находим элементы чекбокса, поля ввода и кнопки
    const checkbox = document.getElementById("check");
    const phoneInput = document.getElementById("phone_1");
    const submitButton = document.getElementById("request__send-sub");
  
    // Создаем функцию для обработки изменений
    function handleInputChange() {
      // Проверяем, является ли чекбокс выбранным и есть ли значение в поле ввода
      if (checkbox.checked && phoneInput.value !== "") {
        // Если оба условия выполняются, включаем кнопку
        submitButton.disabled = false;
      } else {
        // В противном случае выключаем кнопку
        submitButton.disabled = true;
      }
    }
  
    // Добавляем обработчики событий на изменение значения чекбокса и ввода номера телефона
    checkbox.addEventListener("change", handleInputChange);
    phoneInput.addEventListener("input", handleInputChange);
  });



// кнопка 2
  document.addEventListener("DOMContentLoaded", function() {
// Находим элементы чекбоксов, поля ввода и кнопку
const phoneTwo = document.getElementById("phone_2");
const checkboxTwo = document.getElementById("check_2");
const checkboxThree = document.getElementById("check_3");
const submitButtonTwo = document.getElementById("request__send-sub_two");

// Создаем функцию для обработки изменений
function handleInputChange() {
  // Проверяем, являются ли оба чекбокса выбранными и есть ли значение в поле ввода
  if (checkboxTwo.checked && checkboxThree.checked && phoneTwo.value !== "") {
    // Если все условия выполняются, включаем кнопку
    submitButtonTwo.disabled = false;
  } else {
    // В противном случае выключаем кнопку
    submitButtonTwo.disabled = true;
  }
}

// Добавляем обработчики событий на изменение значения чекбоксов и ввода номера телефона
checkboxTwo.addEventListener("change", handleInputChange);
checkboxThree.addEventListener("change", handleInputChange);
phoneTwo.addEventListener("input", handleInputChange);

});



// кнопка 3
document.addEventListener("DOMContentLoaded", function() {
    // Находим элементы чекбокса, поля ввода и кнопки
    const phoneThree = document.getElementById("phone_3");
    const checkboxFour = document.getElementById("check_4");
    const submitButtonThree = document.getElementById("request__send-sub_three");
  
    // Создаем функцию для обработки изменений
    function handleInputChange() {
      // Проверяем, является ли чекбокс выбранным и есть ли значение в поле ввода
      if (checkboxFour.checked && phoneThree.value !== "") {
        // Если оба условия выполняются, включаем кнопку
        submitButtonThree.disabled = false;
      } else {
        // В противном случае выключаем кнопку
        submitButtonThree.disabled = true;
      }
    }
  
    // Добавляем обработчики событий на изменение значения чекбокса и ввода номера телефона
    checkboxFour.addEventListener("change", handleInputChange);
    phoneThree.addEventListener("input", handleInputChange);
  });





// кнопка 4
document.addEventListener("DOMContentLoaded", function() {
    // Находим элементы чекбоксов, поля ввода и кнопку
    const phoneFive = document.getElementById("phone_5");
    const checkboxFive = document.getElementById("check_5");
    const checkboxSix = document.getElementById("check_6");
    const submitButtonFour = document.getElementById("request__send-sub_four");
    
    // Создаем функцию для обработки изменений
    function handleInputChange() {
      // Проверяем, являются ли оба чекбокса выбранными и есть ли значение в поле ввода
      if (checkboxFive.checked && checkboxSix.checked && phoneFive.value !== "") {
        // Если все условия выполняются, включаем кнопку
        submitButtonFour.disabled = false;
      } else {
        // В противном случае выключаем кнопку
        submitButtonFour.disabled = true;
      }
    }
    
    // Добавляем обработчики событий на изменение значения чекбоксов и ввода номера телефона
    checkboxFive.addEventListener("change", handleInputChange);
    checkboxSix.addEventListener("change", handleInputChange);
    phoneFive.addEventListener("input", handleInputChange);
    
    });


    // кнопка 5
  document.addEventListener("DOMContentLoaded", function() {
    // Находим элементы чекбоксов, поля ввода и кнопку
    const phoneFive = document.getElementById("phone_6");
    const checkboxSeven = document.getElementById("check_7");
    const checkboxEight = document.getElementById("check_8");
    const submitButtonFive = document.getElementById("request__send-sub_five");
    
    // Создаем функцию для обработки изменений
    function handleInputChange() {
      // Проверяем, являются ли оба чекбокса выбранными и есть ли значение в поле ввода
      if (checkboxSeven.checked && checkboxEight.checked && phoneFive.value !== "") {
        // Если все условия выполняются, включаем кнопку
        submitButtonFive.disabled = false;
      } else {
        // В противном случае выключаем кнопку
        submitButtonFive.disabled = true;
      }
    }
    
    // Добавляем обработчики событий на изменение значения чекбоксов и ввода номера телефона
    checkboxSeven.addEventListener("change", handleInputChange);
    checkboxEight.addEventListener("change", handleInputChange);
    phoneFive.addEventListener("input", handleInputChange);
    
    });


// кнопка 6
  document.addEventListener("DOMContentLoaded", function() {
    // Находим элементы чекбоксов, поля ввода и кнопку
    const phoneSix = document.getElementById("phone_7");
    const checkboxNine = document.getElementById("check_9");
    const checkboxTen = document.getElementById("check_10");
    const submitButtonSix = document.getElementById("request__send-sub_six");
    
    // Создаем функцию для обработки изменений
    function handleInputChange() {
      // Проверяем, являются ли оба чекбокса выбранными и есть ли значение в поле ввода
      if (checkboxNine.checked && checkboxTen.checked && phoneSix.value !== "") {
        // Если все условия выполняются, включаем кнопку
        submitButtonSix.disabled = false;
      } else {
        // В противном случае выключаем кнопку
        submitButtonSix.disabled = true;
      }
    }
    
    // Добавляем обработчики событий на изменение значения чекбоксов и ввода номера телефона
    checkboxNine.addEventListener("change", handleInputChange);
    checkboxTen.addEventListener("change", handleInputChange);
    phoneSix.addEventListener("input", handleInputChange);
    
    });







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
                // figure: 11615,

            },
            {
                id: "9",
                value: "12 часов",
                figure: 20025,
                // figure: 18345,

            },
        ]
    },

    {
        // Здесь надо умножать прошлое число на 2 и на 3 из прошлого числа которое получилось
        question: 'Выбери график, в котором ты готов выполнять заказы',
        answers: [

            {
                id: "10",
                value: "Свободный",
                figure: 0,
            },
            {
                id: "11",
                value: "5/2",
                figure: 20,
            },
            {
                id: "12",
                value: "6/1",
                figure: 20,
            },
            {
                id: "13",
                value: "2/2",
                figure: 1120,
            },
        ]
    },


    {
        question: 'Готов ли ты привлекать друзей и знакомых на работу курьером?',
        answers: [

            {
                id: "14",
                value: "Да",
                figure: 0,
            },
            {
                id: "15",
                value: "Нет",
                figure: 0,
            },

        ]
    },
    {
        question: 'За каждого пришедшего по рекомендации курьера заплатим + 2 000 руб. Подробные условия можно узнать у вашего менеджера',
        answers: [

            {
                id: "16",
                value: "Да",
                figure: 0,
            },
            {
                id: "17",
                value: "Нет",
                figure: 0,
            },

        ]
    },

];

const figures = DATA.flatMap(question => question.answers.map(answer => answer.figure));


for (let i = 0; i < DATA.length; i++) {
    let question = DATA[i].question;
    let answers = DATA[i].answers;
}






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
const calculatorVariantstext = document.querySelector('.calculator__variantstext');
const right = document.querySelector('.right');
var style = document.createElement('style');



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

const renderQuestions = (index) => {
    renderIndicator(index);
    renderIndicatorLine(index);


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
        //    totalNumber.classList.add("#summas");


           if (width == 100){
                clearInterval(id);
                stripblue.style.width = "0%";

                // totalNumber.style.innerHTML = '#summa::before{ content: "+2000 руб за каждого привлеченного курьера";position: absolute;top: 135px;font-size: 17px;}';

            } else{
                width++;
                stripblue.style.width = perce.innerText;
            }

}


// Конечный итог

quiz.addEventListener("click", (event) => {


    if (event.target.classList.contains("btn-next")) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        const restartQuestionIndex = Number(questions.dataset.currentStep) + 1;
        const nextQuestionCurrentLineIndex = Number(questions.dataset.currentLine) + 1;
        const inputElementSixteen = document.querySelector('input[value="16"]');
        renderResults();

        if (DATA.length === nextQuestionIndex) {
            // результаты
            
            stripblue.style.width = "100%";

            style.innerHTML = '.calculator__choicewrap { justify-content: center !important; }' + 
            '@media (max-width: 992px) { ' +
              '.calculator__choicewrap { margin-top: 154px !important;} ' +
              '.calculator__price { top: 0 !important; } ' +
              '.calculator__description { margin-top: 85px !important; } ' +
            '}';

            if (inputElementSixteen && inputElementSixteen.checked) {
                style.innerHTML = '.calculator__choicewrap { justify-content: center !important; }' +
                    '.right { display: block !important; }' +
                    '@media (max-width: 992px) { ' +
                    '.calculator__choicewrap { margin-top: 207px !important;} ' +
                    '.right { width: 100%;}' +
                    '.right::before {  top: -42px; width: 100%; left: 0px;}' +
                    '.calculator__price { top: 65px !important; } ' +
                    '.calculator__description { margin-top:149px !important; } ' +
                    '}' +
                    '@media (max-width: 792px) { ' +
                    '.right::before { font-size: 21px; top: -57px;}' +
                    '}';
            }


            document.head.appendChild(style);


            questions.classList.add("questions--hidden");
            btnNext.classList.add("btn-next--hidden");
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


const renderResults = () => {
    let content = "";


    const getClassname = (answer, questionIndex) => {
        let classname = "";
        

          
          
          if (!answer.correct && answer.id === localResults[questionIndex]) {
              classname = "answer--invalid";
              

                  answerNone = document.getElementById("summa");
                  greenTxt = document.getElementsByClassName("greentxt");
                  const mySet = new Set([answerNone]);
                  
                  if (greenTxt.length > 0) { 
                      mySet.forEach(elem => elem.classList.add("greentxt"));
                    }

                        
                    } else if(answer.correct) {
                        classname= "answer--valid";
                        
                    }
                    
                    return classname;
                    

        
    };



renderResults

let totalNumber = 0;
let globalI;
let globalIOneHalf;
let glo;
let globalThirty;
let gloOneHalf;
let gloThirty;

    const inputElementSeven = document.querySelector('input[value="11"]');

    const fig = DATA.flatMap(question => question.answers.map(answer => answer.figure));
    const eleventhElementThirty = fig[11];
    const eleventhElement11 = fig[10];
    const eleventhElement12 = fig[12];
    const eleventhElement13 = fig[13];


    for (let i = 0; i < inva.length; i++) {
        

            let contentIn = inva[i].innerHTML;
            let number = parseInt(contentIn);
            totalNumber += number;

            if(i === 1){
                globalThirty = totalNumber * 3;
                globalI = totalNumber * 2;
                globalIOneHalf = totalNumber * 1.5;


            }

            if(i === 2){
                gloThirty = globalThirty - totalNumber;
                glo = globalI - totalNumber;
                gloOneHalf = globalIOneHalf - totalNumber;

            }
    }


const answerToUpdate = DATA.flatMap(question => question.answers).find(answer => answer.figure === eleventhElement11);
const answerToUpdate13 = DATA.flatMap(question => question.answers).find(answer => answer.figure === eleventhElement12);
const answerToUpdate12 = DATA.flatMap(question => question.answers).find(answer => answer.figure === eleventhElement13);

const answerToUpdateThirty = DATA.flatMap(question => question.answers).find(answer => answer.figure === eleventhElementThirty);

if (answerToUpdate) {
    answerToUpdate.figure = glo;

}

if(percentage.innerHTML == " 3/6"){

    answerToUpdate13.figure = gloOneHalf;


}

if (answerToUpdateThirty) {
    answerToUpdateThirty.figure = gloThirty;
  }


const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<p><span id= "answer--none" class= ${getClassname(answer, questionIndex)}>${answer.figure} </span>${totalNumber}</p>`)
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
                                        <div class = "right"></div>
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

    results.innerHTML = content;

};


quiz.addEventListener("DOMContentLoaded", (event) => {
    if (event.target.classList.contains("answer-input")){
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;

    }
});



renderQuestions(0);
renderResults();









