const toTop = document.querySelector('.arrow-up-but');

window.addEventListener('scroll', () =>{
    if( window.pageYOffset > 120){
        toTop.classList.add('active');
    } else(
        toTop.classList.remove('active')
    )
})

/* function showMenu(){
    document.querySelector('nav').classList.add('active-menu')
}
function closeMenu(){
    document.querySelector('nav').classList.add('animate__flipOutX')
    document.querySelector('nav').delay(2000).classList.remove('active-menu')
}
document.querySelector('nav').classList.remove('animate__flipOutX') */

function topFunction(){
    document.documentElement.scrollTop = 0;
}