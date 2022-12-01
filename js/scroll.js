const toTop = document.querySelector('.arrow-up-but');

window.addEventListener('scroll', () =>{
    if( window.pageYOffset > 120){
        toTop.classList.add('active');
    } else(
        toTop.classList.remove('active')
    )
})
function topFunction(){
    document.documentElement.scrollTop = 0;
}