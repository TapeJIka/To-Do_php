// Your JavaScript goes here.

window.addEventListener("load", function(){
    const button = document.getElementById('button')

    button.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelectorAll('.toggle_me').forEach(function(e) {
            if(e.style.display == 'none'){
                e.style.display = 'block'
            } else {
                e.style.display = 'none'
            }
        })
    })
})