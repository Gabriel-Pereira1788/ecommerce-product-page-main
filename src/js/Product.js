import { findImages, findItem } from "./data.js";
import { Cart } from "./App.js";

class Product {
	constructor(product) {
		this.product = product;
		this.amount = 0;
		this.productImgs = this.product.querySelector(".product-imgs");
		this.imgMainClick = this.product.querySelector("#img-click");
		this.imgMain = this.productImgs.querySelector(".img-main");
		this.productGallery = this.product.querySelector(".product-gallery");
		this.gallery = this.product.querySelector(".gallery");
		this.closeBtn = this.product.querySelector(".close-btn");
		this.thumbsMain = this.productImgs.querySelectorAll(".img-thumb");
		this.thumbsGallery = [...this.gallery.querySelectorAll(".img-thumb")];
		this.imgGallery = this.gallery.querySelector(".img-main");
		this.nextBtn = this.gallery.querySelector(".next-btn");
		this.prevBtn = this.gallery.querySelector(".prev-btn");
		this.containerBuy = this.product.querySelector(".buy-product");
		this.buttonAddCart = this.containerBuy.querySelector(
			".button-add-container"
		);
		this.setAmount = this.containerBuy.querySelectorAll(".btn");

		this.imgMainClick.addEventListener("click", () =>
			this.displayGallery()
		);
		this.closeBtn.addEventListener("click", () => this.displayGallery());
		this.thumbsMain.forEach((thumb) =>
			thumb.addEventListener("click", (event) =>
				this.selectImage(event.currentTarget, this.imgMain)
			)
		);
		this.thumbsGallery.forEach((thumb) =>
			thumb.addEventListener("click", (event) =>
				this.selectImage(event.currentTarget, this.imgGallery)
			)
		);
		this.nextBtn.addEventListener("click", () => this.nextImage());
		this.prevBtn.addEventListener("click", () => this.prevImage());
		this.setAmount.forEach((btn) =>
			btn.addEventListener("click", (event) =>
				this[event.currentTarget.id]()
			)
		);
		this.buttonAddCart.addEventListener("click", (event) => {
			this.addCart();
		});
	}
	displayGallery() {
		this.productGallery.classList.toggle("gallery-desactive");
	}
	selectImage(element, img) {
		this.thumbsMain.forEach((thumb) =>
			thumb != element
				? thumb.classList.remove("select")
				: thumb.classList.add("select")
		);
		const setImage = findImages("images-fullSize", element.dataset.title);
		img.setAttribute("src", setImage);

	}
	settedElement(element) {
		if (element != null) {
			const srcElement = findImages(
				"images-fullSize",
				element.dataset.title
			);
			this.imgGallery.src = srcElement;
			this.imgGallery.dataset.title = element.dataset.title;
		}
	}
	nextImage() {
		const nextElement = this.thumbsGallery.find(
			(thumb) => thumb.dataset.title == this.imgGallery.dataset.title
		).nextElementSibling;

		this.settedElement(nextElement);
	}
	prevImage() {
		const prevElement = this.thumbsGallery.find(
			(thumb) => thumb.dataset.title == this.imgGallery.dataset.title
		).previousElementSibling;

		this.settedElement(prevElement);
	}
	buttonPlus() {
		this.amount++;
		this.containerBuy.querySelector("#amount").textContent = this.amount;
	}
	buttonMinus() {
		if (this.amount > 0) {
			this.amount--;
			this.containerBuy.querySelector("#amount").textContent =
				this.amount;
		}
	}
	addCart() {
		const informationProduct = this.product.querySelector(".info");
		const price=informationProduct.querySelector('#new-price').textContent
		const productInfos = { 
			title: informationProduct.querySelector("h1").textContent, 
			imageName:this.product.dataset.name,
			price:price.replace('$',''),
			amount:this.amount
		};
		Cart(productInfos);
	}
}

export default Product;

console.log("bla222");
