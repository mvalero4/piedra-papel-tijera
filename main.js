const btnpiedra = document.getElementById('piedra');
const btnpapel = document.getElementById('papel');
const btntijera = document.getElementById('tijera');
const resultado = document.getElementById('resultado');
const maquinaImg = document.getElementById('maquina-img');
const userImg = document.getElementById('user-img');

const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

const empate = 0;
const ganar = 1;
const perder = 2;

let isPlaying = false;

btnpiedra.addEventListener('click', () => {
  play(piedra);
});

btnpapel.addEventListener('click', () => {
  play(papel);
});

btntijera.addEventListener('click', () => {
  play(tijera);
});

function play (userOpcion) {
  if(isPlaying) return;

  // isPlaying = true;
  
  userImg.src = `./Imagenes/${userOpcion}.svg`;

  resultado.innerHTML = "PENSANDO...";

  const interval = setInterval(function(){
    const opcionMaquina = calcMachineOption();
    maquinaImg.src = "./Imagenes/" + opcionMaquina + ".svg";
  }, 300);

  setTimeout(function(){

    clearInterval(interval);

    const opcionMaquina = calcMachineOption();
    const result = calcResult(userOpcion, opcionMaquina);
    
    maquinaImg.src = `./Imagenes/${opcionMaquina}.svg`;
  
    switch (result){
      case empate:
        resultado.innerHTML = "EMPATE";
        break;
  
      case ganar:
        resultado.innerHTML = "GANASTE!!!";
        break;
  
      case perder:
        resultado.innerHTML = "PERDISTE!";
    }
    // isPlaying = false;
  }, 2000);
}


function calcMachineOption(userOpcion, opcionMaquina){
  const number = Math.floor(Math.random() * 4);
  console.log(number);

  switch(number){
    case 0:
      return piedra;

    case 1:
      return papel;

    case 3:
      return tijera;
  }

}

function calcResult (userOpcion, opcionMaquina) {
    if (userOpcion === opcionMaquina) { 
      return empate;

  } else if(userOpcion === piedra){
      
      if (opcionMaquina === papel) return perder;
      if (opcionMaquina === tijera) return ganar;

  } else if (userOpcion === papel){
      
    if (opcionMaquina === tijera) return perder;
    if (opcionMaquina === piedra) return ganar;

  } else if (userOpcion === tijera){
      
    if (opcionMaquina === piedra) return perder;
    if (opcionMaquina === papel) return ganar;
  }
}