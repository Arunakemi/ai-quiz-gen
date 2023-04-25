
// ---------------------------------------- PREGUNTAS ------------------------------------------------------------
var questions = [
    ["¿Que estilo prefieres?",             
                "Realista", "Anime", "Postmoderno","Cubico",
                "Realistic, professional photo", "Anime illustration", "Postmodern drawing", "Cubic art"],
    ["¿Que planeta te gusta?",             
                "Marte", "Jupiter", "Neptuno","hoyo negro",     
                "red", "brown", "blue", "black"],
    ["¿Donde te gustaria dar una siesta?", 
                "Bosque", "Playa", "Cafe", "floreria",          
                "forest", "beach", "coffe shop", "flower shop"],
    ["¿Te gustan las fiestas?", 
                "Con mucha gente", "Reuniones con poca gente", "Prefiero estar por mi cuenta", "nadie",         
                "a lot of people", "two people", "one person", "no people"],
    ["¿Que haces en tu tiempo libre?", 
                "Bailar", "Dibujar", "Tocar un instrumento", "dormir",      
                "dancing", "drawing in canvases", "playing instruments", "sleeping"],
    ["¿Que peliculas te gustan?", 
                "Horror", "Vibrantes", "Clasicas", "rockeras",   
                "horror", "vibrant", "old", "rockabilly"],
    ["¿Con que figura geometrica te identificas?", 
                "Circulo", "Cuadrado", "Hexagono", "triangulo",           
                "circle", "cube", "hexagon","triangle"],
]

// ----------------------------------------------------------------------------------------------------------------

function getPrompt()
{
    // ---------------------- PROMPT ------------------------------------------------------------

    return findAnswer(0) + " " +
           "with  " + findAnswer(1) + " colors, " +
           "a " + findAnswer(2) + " in the background " +
           "with " + findAnswer(3) + " " + findAnswer(4) + ", " +
           "frame as " + findAnswer(5) + " looking " +
           "the background must have a " + findAnswer(6) + " figure";

    // ------------------------------------------------------------------------------------------
}




var UIRegistro  = document.getElementById('Registro');
var UIMayorEdad = document.getElementById("SoyMayorDeEdad");
var UIQuiz      = document.getElementById("Quiz"          );
var UILoadBot   = document.getElementById("CreandoBotella");
var UIImagen    = document.getElementById("Imagen"        );
UIMayorEdad.style.display = 'block';
UIRegistro.style.display  = 'none';
UIQuiz.style.display      = 'none';
UILoadBot.style.display   = 'none';
UIImagen.style.display    = 'none';

document.getElementById("regBtn").addEventListener('click', ()=>{
    UIRegistro.style.display  = 'none';
    nextQuestion();
    UIQuiz.style.display = 'block';
})
document.getElementById("mayorBtn").addEventListener('click', ()=>{
    if(document.getElementById("mayorCheck").checked)
    {
        UIMayorEdad.style.display = 'none';
        UIRegistro.style.display      = 'block';
    }
})

QuizQuestion = document.getElementById("pregunta");
QuizBtns = new Array();
QuizBtns.push( document.getElementById("btn1") );
QuizBtns.push( document.getElementById("btn2") );
QuizBtns.push( document.getElementById("btn3") );
QuizBtns.push( document.getElementById("btn4") );

var currentQst = 0;
var respuestas = new Array();
function nextQuestion() {
    QuizQuestion.innerHTML = questions[currentQst][0]
    for(let cnt=0;cnt<QuizBtns.length;cnt++)
        QuizBtns[cnt].innerHTML = questions[currentQst][cnt+1]
}

for(var cnt = 0; cnt < QuizBtns.length; cnt++)
{
    QuizBtns[cnt].addEventListener('click', (e)=>{
        respuestas.push(e.target.innerHTML);
        currentQst++;
        if(currentQst < questions.length)
        {    nextQuestion();            }
        else
        {
            UIQuiz.style.display      = 'none';
            cargarPrompt();
            UILoadBot.style.display      = 'block';
        }
    })
}

function findAnswer(i)
{
    return questions[i][questions[i].findIndex(e => e == respuestas[i])+4]
}
async function cargarPrompt() {

    var my_prompt = getPrompt();      

    UIImagen.innerHTML = "<p style='margin: 2vw'> Promt generado: " + my_prompt + "</p>";

    // Here comes all the api stuff
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer 4ec85e4d-33bf-430e-b68d-6fcbe068f685'
        },
        body: JSON.stringify({
          prompt: my_prompt,
          negativePrompt: 'asymmetric, watermarks, out of frame, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature',
          steps: 50,
          width: 512,
          height: 512,
          numberOfImages: 4,
          promptStrength: 7,
          seed: 4523184,
          enhancePrompt: true,
          upscaleBy: 'x1',
          sampler: 'ddim'
        })
      };
      
      
      var job_id = "aa";
 
      await fetch('https://api.tryleap.ai/api/v1/images/models/ee88d150-4259-4b77-9d0f-090abe29f650/inferences', options)
        .then(response => response.json())
        .then(response => {
            job_id = response.id;
        })
        .catch(err => console.error(err));

    // ...
    
    let status  = ""
    let img_url = new Array();
    do
    {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              authorization: 'Bearer 4ec85e4d-33bf-430e-b68d-6fcbe068f685'
            }
          };
          
        await  fetch('https://api.tryleap.ai/api/v1/images/models/1e7737d7-545e-469f-857f-e4b46eaa151d/inferences/' + job_id, options)
            .then(response => response.json())
            .then(response => {
                status = response.state  
                for(let cnt=0; cnt < response.images.length; cnt++)
                    img_url.push(response.images[cnt].uri);
            })
            .catch(err => console.error(err));

        await new Promise(r => setTimeout(r, 10));
    }
    while(status != "finished")

    let styleShift = true;
    img_url.forEach(e => {
        let imagenAMostrar = document.createElement("img");
        imagenAMostrar.src = e;
        imagenAMostrar.addEventListener('click', ()=>{
            console.log(e);
        });
        imagenAMostrar.className = "botonQuiz " + ((styleShift)? "left" : "right");
        styleShift = !styleShift;
        UIImagen.append(imagenAMostrar);  
    });

    UILoadBot.style.display   = 'none';
    UIImagen.style.display    = 'block';
}