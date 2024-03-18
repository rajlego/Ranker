    document.getElementById('addInput').addEventListener("click", function() {
    var input = document.createElement('input')

    input.type = 'text'
    input.placeholder = 'Enter something!'

    document.getElementById('inputList').appendChild(input)
})