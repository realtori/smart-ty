
let sidebarbutton = document.querySelector('.sidebarbutton')
let cancel = document.querySelector('.cancel')
let sidebar = document.querySelector('.sidebar')

sidebarbutton.addEventListener('click',()=>{
    sidebar.classList.add('visible')
})

console.log(cancel);

cancel.addEventListener('click',()=>{
    sidebar.classList.remove('visible')
    cancel.style.background = 'red'
})

