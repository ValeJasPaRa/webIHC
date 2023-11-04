const conocenos = document.querySelector("#conocenos");
const servicios = document.querySelector("#servicios");
const preguntas = document.querySelector("#preguntas");

/*Menu CONOCENOS*/
conocenos.addEventListener("click", (s) =>{
    s.preventDefault();

    const sectionS = document.querySelector(".conocenos");
    sectionS.scrollIntoView({behavior:"smooth"});
})

/*MENU preguntas y respuestas */
preguntas.addEventListener("click", (r) =>{
    r.preventDefault();

    const sectionR = document.querySelector(".preguntas");
    sectionR.scrollIntoView({behavior:"smooth"});
})

/*Menu SERVICIOS*/
servicios.addEventListener("click", (p) =>{
    p.preventDefault();

    const sectionP = document.querySelector(".servicios");
    sectionP.scrollIntoView({behavior:"smooth"});
})


