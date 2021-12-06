
let pVerte = document.getElementById('pverte');
let pBleue = document.getElementById('pbleue');
let pMarron = document.getElementById('pmarron');

let dechet = [
    burger = ["./imgtri/burger.JPG"],
    carton = ["./imgtri/carton.JPG"],
    papier = ["./imgtri/papier.JPG"],
    papiert = ["./imgtri/papiertoilet.JPG"],
    parfum = ["./imgtri/parfum.JPG"],
    pizza = ["./imgtri/pizza.JPG"],
    sac = ["./imgtri/sac.JPG"],
    vinr = ["./imgtri/vin.JPG"],
];

let tab1 = [];
let tab2 = [];
let tab3 = [];
let tab4 = [];

let strt = document.getElementById('start');
let image = document.createElement('img');
let img = document.getElementById('image');


strt.addEventListener('click', function (){
    let randomword = Math.floor(Math.random() * dechet.length);
    img.appendChild(image);
    image.src = dechet[randomword];
});
