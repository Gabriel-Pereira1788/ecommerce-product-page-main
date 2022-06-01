export const makeId = () => {
	let performanceNumbers = performance.now().toString(36);
	let random = Math.random().toString(36);
	let result = performanceNumbers + random;
	return result.replaceAll(".", "");
};

const dataProducts = [
	{
		id: makeId(),
		title: "fall limited edition sneakers",
		price: 250,
		descont:true,
		valueDescont:50,
		info: "These low-profile sneakers are your perfect casual wear companion. With a durable rubber outsole, they'll stand up to anything the weather can throw at you.",
		"image-main": "./images/image-product-1.jpg",
		"images-fullSize": [
			"./images/image-product-1.jpg",
			"./images/image-product-2.jpg",
			"./images/image-product-3.jpg",
			"./images/image-product-4.jpg",
		],
		"images-thumbs": [
			"./images/image-product-1-thumbnail.jpg",
			"./images/image-product-2-thumbnail.jpg",
			"./images/image-product-3-thumbnail.jpg",
			"./images/image-product-4-thumbnail.jpg",
		],
	},
];

export const titleImage= (src) =>{
	const title=src.replace('./images/','').replace('-thumbnail','').replace('.jpg','')
	return title
}

export const findItem = (titleProduct) =>
	[...dataProducts].find((product) => product.title == titleProduct);

export const findImages = (imageArr, lookingFor) => {
	let newArr;
	[...dataProducts].forEach((item) => {
		newArr = item[imageArr].find((img) => img.includes(lookingFor));
	});
	return newArr;
};

export default dataProducts;
