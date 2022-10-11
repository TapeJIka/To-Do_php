// Your JavaScript goes here.

window.addEventListener('load', function(){
    var textbox = document.getElementById('full_name')

    textbox.addEventListener("input", function(e){
        console.log(textbox.textContent)
        var paragraph = document.getElementById("greeting")
        paragraph.innerHTML = "Hello, " + textbox.value + "!"
    })
})