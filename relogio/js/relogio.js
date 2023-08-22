const horas = document.querySelector('#horas')

const minutos = document.querySelector('#minutos')

const segundos = document.querySelector('#segundos')

const relogio = setInterval(() => {

    let sistema = new Date();

    let hr = sistema.getHours();
    let min = sistema.getMinutes();
    let seg = sistema.getSeconds();


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

},1000);