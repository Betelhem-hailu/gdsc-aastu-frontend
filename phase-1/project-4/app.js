const colors = ['Blue','Yellow','Pink','Purple','Green','Red'];
let change = document.getElementById('change');
let box = document.getElementById('box');
let text = document.getElementById('text');
change.addEventListener('click',function(){
    var randomC = colors[Math.floor(Math.random() * colors.length)]
    box.style.backgroundColor = randomC
    text.innerHTML = randomC
})