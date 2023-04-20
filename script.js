var UIRegistro  = document.getElementById("Registro"      );
var UIMayorEdad = document.getElementById("SoyMayorDeEdad");
var UIQuiz      = document.getElementById("Quiz"          );
var UILoadBot   = document.getElementById("CreandoBotella");
var UIImagen    = document.getElementById("Imagen"        );
UIRegistro.style.display  = 'block';
UIMayorEdad.style.display = 'none';
UIQuiz.style.display      = 'none';
UILoadBot.style.display   = 'none';
UIImagen.style.display    = 'none';

function nextQuestion();

document.getElementById("regBtn").addEventListener('click', ()=>{
    UIRegistro.style.display  = 'none';
    UIMayorEdad.style.display = 'block';
})
document.getElementById("mayorBtn").addEventListener('click', ()=>{
    UIMayorEdad.style.display = 'none';
    UIQuiz.style.display      = 'block';
    nextQuestion();
})

QuizQuestion = document.getElementById("pregunta");
QuizBtn_1 = document.getElementById("btn1");
QuizBtn_2 = document.getElementById("btn2");
QuizBtn_3 = document.getElementById("btn3");

function nextQuestion() {
    QuizQuestion.innerHTML = "La pregunta es tal tal"
    QuizBtn_1.innerHTML = "LA RESPUESTA ES TAL 1"
    QuizBtn_2.innerHTML = "LA RESPUESTA ES TAL 2"
    QuizBtn_3.innerHTML = "LA RESPUESTA ES TAL 3"
}