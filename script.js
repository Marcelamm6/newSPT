'use strict';

const _1A = {
  id: '1A',
  name: 'Goten',
  strength: 90000000,
  height: 1.4,
  intellect: 95,
  technique: 105,
  transformation: 1,
  img: 'images/goten.png',
};
const _1B = {
  id: '1B',
  name: 'Goku',
  strength: 500000000,
  height: 1.85,
  intellect: 150,
  technique: 390,
  transformation: 4,
  img: 'images/Goku1.png',
};
const _1C = {
  id: '1C',
  name: 'Vegeta',
  strength: 460000000,
  height: 1.69,
  intellect: 160,
  technique: 245,
  transformation: 3,
  img: 'images/vegeta.png',
};
const _1D = {
  id: '1D',
  name: 'Gohan',
  strength: 470000000,
  height: 1.85,
  intellect: 155,
  technique: 245,
  transformation: 3,
  img: 'images/gohan.png',
};
const _2A = {
  id: '2A',
  name: 'Piccolo',
  strength: 365000000,
  height: 2.0,
  intellect: 160,
  technique: 270,
  transformation: 2,
  img: 'images/piccolo.png',
};
const _2B = {
  id: '2B',
  name: 'Trunks',
  strength: 365000000,
  height: 1.8,
  intellect: 155,
  technique: 163,
  transformation: 1,
  img: 'images/miraitrunks.png',
};
const _2C = {
  id: '2C',
  name: 'Trunks',
  strength: 95000000,
  height: 1.45,
  intellect: 98,
  technique: 110,
  transformation: 1,
  img: 'images/trunks.png',
};
const _2D = {
  id: '2D',
  name: 'Kuririn',
  strength: 70000000,
  height: 1.55,
  intellect: 150,
  technique: 175,
  transformation: 0,
  img: 'images/kuririn.png',
};
const _3A = {
  id: '3A',
  name: 'Kame',
  strength: 8000,
  height: 1.6,
  intellect: 155,
  technique: 300,
  transformation: 0,
  img: 'images/mestrekame.png',
};
const _3B = {
  id: '3B',
  name: 'Yamcha',
  strength: 50000000,
  height: 1.8,
  intellect: 100,
  technique: 145,
  transformation: 0,
  img: 'images/yancha.png',
};
const _3C = {
  id: '3C',
  name: 'Tenshinhan',
  strength: 65000000,
  height: 1.9,
  intellect: 120,
  technique: 180,
  transformation: 0,
  img: 'images/tenshinhan.png',
};
const _3D = {
  id: '3D',
  name: 'Raditz',
  strength: 70000,
  height: 1.95,
  intellect: 80,
  technique: 80,
  transformation: 1,
  img: 'images/raditz.png',
};
const _4A = {
  id: '4A',
  name: 'Freeza',
  strength: 100000000,
  height: 1.67,
  intellect: 135,
  technique: 245,
  transformation: 3,
  img: 'images/freeza.png',
};
const _4B = {
  id: '4B',
  name: 'Nappa',
  strength: 80000,
  height: 2.1,
  intellect: 60,
  technique: 56,
  transformation: 1,
  img: 'images/nappa.png',
};
const _4C = {
  id: '4C',
  name: 'Zarbon',
  strength: 65000000,
  height: 1.9,
  intellect: 100,
  technique: 145,
  transformation: 1,
  img: 'images/zarbon.png',
};
const _4D = {
  id: '4D',
  name: 'Dodoria',
  strength: 60000000,
  height: 1.69,
  intellect: 99,
  technique: 144,
  transformation: 0,
  img: 'images/dodoria.png',
};
const _5A = {
  id: '5A',
  name: '17',
  strength: 300000000,
  height: 1.7,
  intellect: 130,
  technique: 160,
  transformation: 0,
  img: 'images/17.png',
};
const _5B = {
  id: '5B',
  name: '19',
  strength: 90000000,
  height: 1.7,
  intellect: 100,
  technique: 85,
  transformation: 0,
  img: 'images/19.png',
};
const _5C = {
  id: '5C',
  name: 'Maki Gero',
  strength: 70000000,
  height: 1.75,
  intellect: 200,
  technique: 90,
  transformation: 0,
  img: 'images/makigero.png',
};
const _5D = {
  id: '5D',
  name: 'Ginyu',
  strength: 70000000,
  height: 2.5,
  intellect: 80,
  technique: 165,
  transformation: 0,
  img: 'images/ginyu.png',
};
const _6A = {
  id: '6A',
  name: '16',
  strength: 310000000,
  height: 2.0,
  intellect: 135,
  technique: 165,
  transformation: 0,
  img: 'images/16.png',
};
const _6B = {
  id: '6B',
  name: '18',
  strength: 295000000,
  height: 1.7,
  intellect: 130,
  technique: 160,
  transformation: 0,
  img: 'images/18.png',
};
const _6C = {
  id: '6C',
  name: 'Cell',
  strength: 400000000,
  height: 1.95,
  intellect: 135,
  technique: 400,
  transformation: 3,
  img: 'images/cell.png',
};
const _6D = {
  id: '6D',
  name: 'Dabura',
  strength: 400000000,
  height: 2.1,
  intellect: 140,
  technique: 165,
  transformation: 0,
  img: 'images/dabura.png',
};
const _7A = {
  id: '7A',
  name: 'Mr. Satan',
  strength: 300,
  height: 1.95,
  intellect: 100,
  technique: 50,
  transformation: 0,
  img: 'images/satan.png',
};
const _7B = {
  id: '7B',
  name: 'Boo',
  strength: 560000000,
  height: 1.7,
  intellect: 50,
  technique: 410,
  transformation: 3,
  img: 'images/bu.png',
};
const _7C = {
  id: '7C',
  name: 'Majin Boo',
  strength: 490000000,
  height: 2.0,
  intellect: 45,
  technique: 410,
  transformation: 0,
  img: 'images/majinbu.png',
};
const _7D = {
  id: '7D',
  name: 'Videl',
  strength: 500,
  height: 1.65,
  intellect: 154,
  technique: 55,
  transformation: 0,
  img: 'images/videl.png',
};
const _8B = {
  id: '8B',
  name: 'Tao Pai Pai',
  strength: 600,
  height: 1.8,
  intellect: 110,
  technique: 80,
  transformation: 0,
  img: 'images/taopaipai.png',
};
const _8C = {
  id: '8C',
  name: 'Chaos',
  strength: 6000,
  height: 1.0,
  intellect: 94,
  technique: 147,
  transformation: 0,
  img: 'images/chaos.png',
};

const characters = [
  _1A,
  _1B,
  _1C,
  _1D,
  _2A,
  _2B,
  _2C,
  _2D,
  _3A,
  _3B,
  _3C,
  _3D,
  _4A,
  _4B,
  _4C,
  _4D,
  _5A,
  _5B,
  _5C,
  _5D,
  _6A,
  _6B,
  _6C,
  _6D,
  _7A,
  _7B,
  _7C,
  _7D,
  _8B,
  _8C,
];

////////////Separando as cartas de forma aleatória/////////////////

let cartas = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
  ],
  aleatoriasCartas = [],
  i = cartas.length,
  j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i + 1));
  aleatoriasCartas.push(cartas[j]);
  cartas.splice(j, 1);
}

// console.log(aleatoriasCartas);

let player1 = aleatoriasCartas.splice(15);
let player2 = aleatoriasCartas;

// console.log(player1, player2);

///////////// Colocando as informações nas cartas (html)/////////////

let id = document.querySelectorAll('.numero');
let nome = document.querySelectorAll('.nome');
let imagem = document.querySelectorAll('.imagem');
let forca = document.querySelectorAll('.forca');
let altura = document.querySelectorAll('.altura');
let inteligencia = document.querySelectorAll('.inteligencia');
let tecnicas = document.querySelectorAll('.tecnicas');
let transformacoes = document.querySelectorAll('.transformacoes');

// console.log(id);

const cartaPlayer1 = function (i) {
  id[0].innerHTML = characters[player1[i]].id;
  nome[0].innerHTML = characters[player1[i]].name;
  imagem[0].src = characters[player1[i]].img;
  forca[0].innerHTML = formaNumero(characters[player1[i]].strength);
  altura[0].innerHTML = characters[player1[i]].height;
  inteligencia[0].innerHTML = characters[player1[i]].intellect;
  tecnicas[0].innerHTML = characters[player1[i]].technique;
  transformacoes[0].innerHTML = characters[player1[i]].transformation;
};

const cartaPlayer2 = function (i) {
  id[1].innerHTML = characters[player2[i]].id;
  nome[1].innerHTML = characters[player2[i]].name;
  imagem[1].src = characters[player2[i]].img;
  forca[1].innerHTML = formaNumero(characters[player2[i]].strength);
  altura[1].innerHTML = characters[player2[i]].height;
  inteligencia[1].innerHTML = characters[player2[i]].intellect;
  tecnicas[1].innerHTML = characters[player2[i]].technique;
  transformacoes[1].innerHTML = characters[player2[i]].transformation;
};

cartaPlayer1(0);
cartaPlayer2(0);

/////////////////Arrumando os números///////////////////

function formaNumero(numero) {
  return new Intl.NumberFormat('pt-BR').format(numero);
}

///////////////////////Comparando cartas/////////////////////

const atributos = document.querySelector('.atributos');

atributos.addEventListener('click', function (e) {
  // Seleciona a div//
  const clicado = e.target.closest('.caracteristicas');
  const valorClicado = clicado.children[1].textContent;
  //Seleciona o valor mas não se clicar no nome ou no próprio valor//
  // const clicado = e.target.children[1];

  console.log(valorClicado);
});
