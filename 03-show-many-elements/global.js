  
window.addEventListener("load", function(){
    const button = document.getElementById('button')

    button.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelectorAll('.show_me').forEach(function(e) {
            e.style.display = 'block';
        });
    })
})