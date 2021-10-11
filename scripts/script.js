console.log('Hello, friends!');

window.onload = function() {
    var btn = document.querySelector('button');
    
    btn.onclick = function() {
        console.log('Maybe conflict happened');
        alert("Hello world!!!");
    }
}