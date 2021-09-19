import sum from './utils/sum';

const content = document.getElementById('content');
const heading = document.createElement('h1');

// heading.innerHTML = `Hi there! This is a ${sum(1, 2)}`;
heading.innerHTML = `Hi there`;
content.appendChild(heading);
