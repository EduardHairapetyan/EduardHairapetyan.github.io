const buttons = document.getElementsByClassName('buttons');
const firstButt = document.getElementById('button1');
const secondButt = document.getElementById('button2');
const thirdButt = document.getElementById('button3');


const colors = ["aquamarine", "deepskyblue", "olivedrab", "orange", "indigo" , "green", "maroon"];
let colorIndex = 0;

function transformToCircle(button) {
button.style.width = '250px';
button.style.height = '250px';
button.style.borderRadius = '50%';
button.style.border = 'none';
button.style.backgroundColor = colors[colorIndex];
colorIndex = (colorIndex + 1) % colors.length;
}

firstButt.onclick = () => transformToCircle(firstButt);
secondButt.onclick = () => transformToCircle(secondButt);
thirdButt.onclick = () => transformToCircle(thirdButt);