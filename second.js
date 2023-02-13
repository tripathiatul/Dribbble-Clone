const backTopButton = document.getElementById('backtop')
const topper = document.getElementById('backToTop')
backTopButton.addEventListener('click',()=>{
    window.scrollTo({
        top : 0, behavior :"smooth"
    })
})