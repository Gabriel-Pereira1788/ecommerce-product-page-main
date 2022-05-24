const buttonNav=document.querySelector('.buttonNav')
const buttonCloseNav=document.querySelector('.closeNav')
const header=document.querySelector('header')
buttonNav.addEventListener('click',()=>{
	header.classList.add('navOpen')
})
buttonCloseNav.addEventListener('click',()=>{
	header.classList.remove('navOpen')
})