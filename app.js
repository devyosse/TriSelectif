let dechetsJaune = ["carton","sac", "papiertoilet"];
let dechetsBleue = ["journal", "papier"];
let dechetsMarron = ["pizza", "burger"];
let dechetsVerte = ["parfum", "vin"];

let img = document.getElementById('imgRandom');
let poubelleJaune = document.getElementById('pjaune');
let poubelleBleue = document.getElementById('pbleue');
let poubelleMarron = document.getElementById('pmarron');
let poubelleVerte = document.getElementById('pverte');
let point = 0;
let score = document.getElementById('score');
let texte = document.getElementById('text');

function dechet() {
    let dechets = dechetsJaune.concat(dechetsBleue, dechetsMarron, dechetsVerte);
    let random = Math.floor(Math.random() * dechets.length);
    img.src = "/imgtri/" + dechets[random] + ".JPG";
    img.title = dechets[random];
}

function verifDechets(dechets){
    if(dechets.includes(img.title)){
        point++;
        let index = dechets.indexOf(img.title);
        dechets.splice(index, 1);
        texte.innerHTML = "Bonne réponse !";
    }
    else{
        point--;
        texte.innerHTML = "Faux ce n'est pas la bonne poubelle";
    }
    score.innerHTML = point;
}


document.getElementById('start').addEventListener('click', function (){
    dechet();
});

poubelleJaune.addEventListener('click', function () {
    verifDechets(dechetsJaune);
    dechet();
});

poubelleBleue.addEventListener('click', function (){
    verifDechets(dechetsBleue);
    dechet();
});

poubelleMarron.addEventListener('click', function (){
    verifDechets(dechetsMarron);
    dechet();
});

poubelleVerte.addEventListener('click', function (){
    verifDechets(dechetsVerte);
    dechet();
});


// pense a 2 tableaux
// un avec lettre de chaque mots
// un avec des span

