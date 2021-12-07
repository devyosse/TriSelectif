const dechets = [
    "burger",
    "papier",
    "papiertoilet",
    "parfum",
    "pizza",
    "vin",
];

let dechetsJaune = ["carton","sac"];
let dechetsBleue = [""];


let random = Math.floor(Math.random() * dechets.length);
let img = document.getElementById('imgRandom');
let poubelleJaune = document.getElementById('pjaune');
let poubelleBleue = document.getElementById('pbleue');
let poubelleMarron = document.getElementById('pmarron');
let poubelleVerte = document.getElementById('pverte');
let point = 0;

function dechet(){
    random = Math.floor(Math.random() * dechets.length);
    img.src = "/imgtri/" +dechets[random] + ".JPG";
}

//image aléatoire
document.getElementById('start').addEventListener('click', function (){
    dechet();
});

poubelleJaune.addEventListener('click', function (){
    dechet();
});

poubelleBleue.addEventListener('click', function (){
    dechet();
});

poubelleMarron.addEventListener('click', function (){
    dechet();
});

poubelleVerte.addEventListener('click', function (){
    dechet();
});



function VerifDechets(){

}
