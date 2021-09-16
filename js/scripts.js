function bannerAnimation(){
    //animation from: https://www.sliderrevolution.com/resources/css-text-animation/
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });
      
      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx+1))
    });
}

function scrolltoView(){
    $('a[role]').click(function() {
        let target = $('#' + $(this).attr('target'));
        let navBarHeight = $('.nav-bar').height();
        $('html, body').animate({
            scrollTop: target.offset().top - navBarHeight
        }, 800);
    });
}


$( document ).ready(function() {
    $('#modal-content').load('modal-content.html');
    bannerAnimation();
    scrolltoView();
});