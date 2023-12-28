;(function () {
	const o = document.createElement('link').relList
	if (o && o.supports && o.supports('modulepreload')) return
	for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e)
	new MutationObserver((e) => {
		for (const t of e)
			if (t.type === 'childList')
				for (const s of t.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && i(s)
	}).observe(document, { childList: !0, subtree: !0 })
	function l(e) {
		const t = {}
		return (
			e.integrity && (t.integrity = e.integrity),
			e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
			e.crossOrigin === 'use-credentials'
				? (t.credentials = 'include')
				: e.crossOrigin === 'anonymous'
				? (t.credentials = 'omit')
				: (t.credentials = 'same-origin'),
			t
		)
	}
	function i(e) {
		if (e.ep) return
		e.ep = !0
		const t = l(e)
		fetch(e.href, t)
	}
})()
const n = [
		{ name: '南瓜派風味冷萃咖啡', slogan: '享受南瓜香料的涼爽滋味！', imagePath: '..assets/drinks/pumpkin-brew.png' },
		{ name: '南瓜風味那堤', slogan: '杯中的秋天風味體驗', imagePath: '..assets/drinks/pumpkin-latte.png' },
		{
			name: '南瓜派風味咖啡星冰樂',
			slogan: '一口就讓你感受到南瓜的美味',
			imagePath: '..assets/drinks/pumpkin-frappuccino.png',
		},
	],
	u = document.querySelector('.hero-content_block'),
	d = document.querySelector('.hero-product_img'),
	c = document.createElement('img')
let r = 0
function a() {
	;(u.innerHTML = `${n[r].name}<br/><span>${n[r].slogan}</span>`), (c.src = n[r].imagePath), (r = (r + 1) % n.length)
}
a()
d.appendChild(c)
setInterval(a, 5e3)
