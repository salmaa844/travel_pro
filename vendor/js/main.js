const loding = document.querySelector('.loding')
const scrolltoupbtn = document.querySelector('.scroll-to-top')
const whysection = document.querySelector('.why')
const contantsection = document.querySelector('.contant')

window.addEventListener('scroll', function () {
    if (window.scrollY > whysection.offsetTop) {
        scrolltoupbtn.classList.remove('opacity-0', 'invisible')
    } else {
        scrolltoupbtn.classList.add('opacity-0', 'invisible')
    }
    if (window.scrollY > contantsection.offsetTop) {
        scrolltoupbtn.classList.remove('opacity-0', 'invisible')
    } else {
        scrolltoupbtn.classList.add('opacity-0', 'invisible')
    }

})
window.addEventListener('load', function () {
    setTimeout(function () {
        loding.classList.add('opacity=0', 'invisible')
        document.body.style.overflow = 'auto'
    }, 2000);
})
scrolltoupbtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})