const featuredDrinks = [
	{
		name: '南瓜派風味冷萃咖啡',
		slogan: '享受南瓜香料的涼爽滋味！',
		imagePath: '../assets/drinks/pumpkin-brew.png',
	},
	{
		name: '南瓜風味那堤',
		slogan: '杯中的秋天風味體驗',
		imagePath: '../assets/drinks/pumpkin-latte.png',
	},
	{
		name: '南瓜派風味咖啡星冰樂',
		slogan: '一口就讓你感受到南瓜的美味',
		imagePath: '../assets/drinks/pumpkin-frappuccino.png',
	},
]

const heroText = document.querySelector('.hero-content_block')
const heroImgDiv = document.querySelector('.hero-product_img')
const imgElement = document.createElement('img')

let currentIndex = 0

function updateContent() {
	heroText.innerHTML = `${featuredDrinks[currentIndex].name}<br/><span>${featuredDrinks[currentIndex].slogan}</span>`
	imgElement.src = featuredDrinks[currentIndex].imagePath

	currentIndex = (currentIndex + 1) % featuredDrinks.length
}

updateContent()

heroImgDiv.appendChild(imgElement)

setInterval(updateContent, 5000)
