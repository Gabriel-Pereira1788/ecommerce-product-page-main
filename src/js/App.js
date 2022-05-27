import dataProducts from "./data.js";
import { findItem, titleImage, findImages } from "./data.js";
import Product from "./Product.js";

const getELement = (element) => document.querySelector(element);

const header = document.querySelector("header");
const cartButton = document.querySelector(".cartButton");
const cartShop = document.querySelector(".cart-shop");
const buttonNav = header.querySelector(".buttonNav");
const buttonCloseNav = header.querySelector(".closeNav");

const valueConvert = (value) => {
	return value.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};

export function Cart({ title, price, amount, imageName }) {
	const imageCart = findImages("images-thumbs", imageName);
	const productAdds = header.querySelector("#product-adds");

	const priceFinish = parseFloat(price) * amount;
	const container = cartShop.querySelector(".container-cart");
	
	const htmlCart = `  <img src=${imageCart} class="image-cart">
        <div class="productInformation">
          <h3 class="name-product"> ${title}</h3>
          <div class="price-cart">
            <span id="price-product">${price}</span>
            <span id="number-product">x ${amount}</span>
            <span id="price-finish">${valueConvert(priceFinish)}</span>
          </div>
        </div> 
        <button class="remove-product"><img src="./images/icon-delete.svg" alt="icon delete item"></button>
        `;

	if(amount > 0){
		container.innerHTML = htmlCart
		productAdds.innerHTML = amount
		productAdds.classList.remove('cart-desactive')
			container.classList.remove("empty");
	}

	const buttonRemove = document.querySelector(".remove-product");
	buttonRemove.addEventListener("click", () => {
		container.innerHTML = `   <div id="empty-message">
          <p>Your cart is empty.</p>
        </div>`;
		container.classList.add("empty");
		productAdds.classList.add("cart-desactive");
	});
}

function productImages(dataProduct) {
	const imgsMain = document.querySelectorAll(".img-main");

	imgsMain.forEach((img) => {
		img.setAttribute("src", dataProduct["image-main"]);
		img.setAttribute("data-title", titleImage(dataProduct["image-main"]));
	});
	return {
		imageName: titleImage(dataProduct["image-main"]),
		get Thumbs() {
			return dataProduct["images-thumbs"]
				.map((src) => {
					return `<div class="img-thumb" data-title="${titleImage(
						src
					)}">
		<img src="${src}" alt="image thumb of product ${dataProduct.title}">
		</div>`;
				})
				.join("");
		},
	};
}

function productInfo({ id, title, info, descont, valueDescont, price }) {
	const infoContainer = getELement(".info");
	const product = getELement(".product");
	product.setAttribute("data-id", id);
	product.setAttribute("data-title", title);
	const titleProduct = infoContainer.querySelector("h1");
	const paragraphInfo = infoContainer.querySelector("p");
	const priceProduct = infoContainer.querySelector(".price-product");
	titleProduct.innerHTML = title;
	paragraphInfo.innerHTML = info;

	const calcDescont = (price / 100) * valueDescont;

	const priceHTML = {
		descontProduct: `<div id ='price'>
			<div id='new-price'>${valueConvert(calcDescont)}</div>
			<div id='descont'>${valueDescont}%</div>
		</div> 
		<div id="price-previous">${valueConvert(price)}</div>`,
		noDescont: `<div id='price'>
		<div id="new-price">${valueConvert(price)}</div>
		</div>`,
	};
	if (descont) {
		priceProduct.innerHTML = priceHTML.descontProduct;
	} else {
		priceProduct.innerHTML = priceHTML.noDescont;
	}
	// console.log(valueConvert(price))
}

function setProduct(productTitle) {
	const imgFind = findItem(productTitle);
	const productMaked = productImages(imgFind);
	const thumbs = [...document.querySelectorAll(".product-thumbs")];
	thumbs.forEach((thumb) => (thumb.innerHTML = productMaked.Thumbs));
	console.log(imgFind);
	productInfo(imgFind);
	return productMaked;
}

window.addEventListener("DOMContentLoaded", () => {
	const productTitle = setProduct("fall limited edition sneakers").imageName;
	const productContainer = document.querySelector(".product");
	productContainer.setAttribute("data-name", productTitle);
	const product = new Product(productContainer);
	// new Product(product)
});

buttonNav.addEventListener("click", () => header.classList.add("navOpen"));
buttonCloseNav.addEventListener("click", () =>
	header.classList.remove("navOpen")
);
cartButton.addEventListener("click", () =>
	cartShop.classList.toggle("cart-desactive")
);
