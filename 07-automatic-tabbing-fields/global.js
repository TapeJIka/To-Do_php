// Your JavaScript goes here.

window.addEventListener('load', function(){
    var first = document.getElementById('first')
    var second = document.getElementById('second')
    var third = document.getElementById('third')

    first.addEventListener("input", function(e){
        if(first.value.length == first.maxLength) {
            second.focus()
        }
    })
    second.addEventListener("input", function(e){
        if(second.value.length == second.maxLength) {
            third.focus()
        }
    })
})