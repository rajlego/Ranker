const { create } = require("domain");
const { text } = require("stream/consumers");

document.getElementById('catButton').addEventListener('click', function() {
    document.getElementById('catDisplay').textContent = 'Cat';
});

document.getElementById('addInput').addEventListener("click", function() {
    var input = document.createElement('input')

    input.type = 'text'
    input.placeholder = 'Enter something!'

    document.getElementById('inputList').appendChild(input)
})