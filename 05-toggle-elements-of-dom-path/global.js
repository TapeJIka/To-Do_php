// Your JavaScript goes here.

window.addEventListener('load', function(){
    const button = document.getElementById("toggle_button")

    button.addEventListener('click', function(){
        document.querySelectorAll('.second_five li').forEach((e) => {
            if(e.style.display == 'block') {
                e.style.display = 'none'
            } else {
                e.style.display = 'block';
            }
        });
    });
});