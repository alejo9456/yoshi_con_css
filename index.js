
const body = document.querySelector('body');


const origenX = window.innerWidth/2;
const origenY = window.innerHeight/2;
const eye_izq = document.getElementsByClassName("yoshi__eye__iris")[0]
const eye_der = document.getElementsByClassName("yoshi__eye__iris")[1]

console.log(eye_izq)
console.log(eye_der)

body.addEventListener('mousemove', ( m )=>{
    eye_izq.classList.remove('left_eyes');
    eye_izq.classList.remove('right_eyes');
    eye_izq.classList.remove('top_eyes');
    eye_izq.classList.remove('bottom_eyes');
    eye_der.classList.remove('left_eyes');
    eye_der.classList.remove('right_eyes');
    eye_der.classList.remove('top_eyes');
    eye_der.classList.remove('bottom_eyes');
    if( m.clientX > origenX  && m.clientY <origenY ){
        console.log("Primer cuadrante",m.clientX , m.clientY)
        eye_izq.classList.add('right_eyes');
        eye_der.classList.add('right_eyes');
    }
    if( m.clientX < origenX  && m.clientY <origenY ){
        console.log("Segundo cuadrante",m.clientX , m.clientY)
        eye_izq.classList.add('left_eyes');
        eye_der.classList.add('left_eyes');
    }
    if( m.clientX < origenX  && m.clientY >origenY ){
        console.log("Tercer cuadrante", m.clientX , m.clientY)
    }
    if( m.clientX > origenX  && m.clientY >origenY ){
        console.log("Cuarto cuadrante", m.clientX , m.clientY)
    }
})

console.log( window.innerWidth)
console.log( window.innerHeight)