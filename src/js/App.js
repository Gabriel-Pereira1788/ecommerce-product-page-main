const buttonNav=document.querySelector('.buttonNav')
const buttonCloseNav=document.querySelector('.closeNav')
const cartButton = document.querySelector('.cartButton')
const cartShop=document.querySelector('.cart-shop')
const header=document.querySelector('header')
const imgMain=document.querySelector('#img-click')
const productGallery=document.querySelector('.product-gallery')
const closeBtn=document.querySelector('.close-btn')

buttonNav.addEventListener('click',()=>{
	header.classList.add('navOpen')
})
buttonCloseNav.addEventListener('click',()=>{
	header.classList.remove('navOpen')
})

cartButton.addEventListener('click',()=>{
	cartShop.classList.toggle('cart-desactive')
})

imgMain.addEventListener('click',()=>{
	
	productGallery.classList.toggle('gallery-desactive')
})

closeBtn.addEventListener('click',()=>{
	productGallery.classList.toggle('gallery-desactive')
})
