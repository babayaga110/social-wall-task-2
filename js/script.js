const menuBtn = document.querySelector(".menu")
const closeBtn = document.querySelector(".close")

menuBtn.addEventListener('click', function(){
    document.querySelector(".nav-list").style.display="flex"
})
closeBtn.addEventListener('click', function(){
    document.querySelector(".nav-list").style.display="none"
})