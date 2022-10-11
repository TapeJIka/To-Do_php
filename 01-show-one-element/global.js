window.addEventListener("load", function(){

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.

  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.

  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  
  const more_text_link = document.getElementById('more_text_link')
  
  more_text_link.addEventListener('click', function(e){
    e.preventDefault()
    var more_text_content = document.getElementById('more_text_content')
    
    more_text_content.style.display = 'block'
  })
  
});