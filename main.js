var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//Comentarios randoms
typewriter.typeString('Ing. en Redes Inteligentes y Ciberseguridad')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Aqui iría algo super innovador... ¡claro!, si lo hubiera pensado')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>PROGRAMADO</strong>')
    .pauseFor(2500)
    .start();