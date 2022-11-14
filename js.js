let select = document.getElementById('select');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');
let pokeElejido = document.getElementById('elejido');

select.addEventListener('click', discheck1);
select2.addEventListener('click', discheck2);
select3.addEventListener('click', discheck3);

pokeElejido.addEventListener('click', elejiste);

class Selectores{
    constructor(nombre,vida,ataque,foto){
        this.nombre = nombre
        this.vida = vida
        this.ataque = ataque
        this.foto = foto
    }
}
let ratata = new Selectores('ratata',100,20,'Rattata.png');



function discheck1(){
    if(select.checked == true){
        select2.checked = false;
        select3.checked = false;

    }
}
function discheck2(){
    if(select2.checked == true){
        select.checked = false;
        select3.checked = false;

    }
}
function discheck3(){
    if(select3.checked == true){
        select2.checked = false;
        select.checked = false;

    }
}


function elejiste(){
    if(select.checked == true){
        alert(select.value);
    }else if(select2.checked == true){
        alert(select2.value);
    }else if(select3.checked == true){
        alert(select3.value);
    }
    else{
        alert('eleccion no valida');
    }
}

