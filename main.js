const container = document.querySelector('.container');
const title = document.createElement('h1');
const inputBox = document.createElement('div');
const input = document.createElement('input');
const btn = document.createElement('button');
const gameBox = document.createElement('div');
//add more advanced controlls after implementing basic functionality
// const controls = document.createElement('div'); 

title.classList.add('title');
btn.classList.add('btn');
gameBox.classList.add('gameBox');
inputBox.classList.add('inputBox');
input.classList.add('input');

title.innerHTML = 'Etch-a-Sketch';
btn.innerHTML = 'Button';
input.placeholder = 'Enter grid size'

inputBox.appendChild(input);
inputBox.appendChild(btn);

container.appendChild(title);
container.appendChild(inputBox);
container.appendChild(gameBox);