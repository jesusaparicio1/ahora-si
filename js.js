let pokemon = document.getElementById('pokemon');
let pokemon2 = document.getElementById('pokemon2');
let pokemon3 = document.getElementById('pokemon3');
let pokeElejido = document.getElementById('elejido');

pokemon.addEventListener('click', discheck1);
pokemon2.addEventListener('click', discheck2);
pokemon3.addEventListener('click', discheck3);



pokeElejido.addEventListener('click', elejiste);

function discheck1(){
    if(pokemon.checked == true){
        pokemon2.checked = false;
        pokemon3.checked = false;

    }
}
function discheck2(){
    if(pokemon2.checked == true){
        pokemon.checked = false;
        pokemon3.checked = false;

    }
}
function discheck3(){
    if(pokemon3.checked == true){
        pokemon2.checked = false;
        pokemon.checked = false;

    }
}


function elejiste(){
    if(pokemon.checked == true){
        alert(pokemon.value);
    }else if(pokemon2.checked == true){
        alert(pokemon2.value);
    }else if(pokemon3.checked == true){
        alert(pokemon3.value);
    }
    else{
        alert('eleccion no valida');
    }
}