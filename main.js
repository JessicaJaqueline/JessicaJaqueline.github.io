let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Egresada de la carrera Ingenierìa Industrial. ¡Estoy abierta a explorar posibilidades!')
  .pauseFor(200)
  .deleteChars(10)
  .start();
