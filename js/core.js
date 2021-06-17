export class HoverBoard {
	constructor(element, options = {}) {
		this.$board = document.querySelector(element)
		this.colors = options.colors || ['red', 'green', 'blue', 'yellow', 'white']
		this.bgSquare = options.bgSquare || '#000'
		this.shadowSquare = options.shadowSquare || '#000'

		this.init()
	}

	setColor(el) {
		const color = this.getRandomColor()
		el.style.backgroundColor = color
		el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
	}

	removeColor(el) {
		el.style.backgroundColor = this.bgSquare
		el.style.boxShadow = `0 0 2px ${this.shadowSquare}`
	}

	getRandomColor() {
		const idx = Math.floor(Math.random() * this.colors.length)
		return this.colors[idx]
	}

	init() {
		const { width, height } = this.$board.getBoundingClientRect()
		const square = document.createElement('div')
		square.classList.add('square')
		this.$board.append(square)

		const widthSquared = Math.floor(
			width /
				(square.offsetWidth +
					(parseFloat(window.getComputedStyle(square)['marginLeft']) +
						parseFloat(window.getComputedStyle(square)['marginRight'])))
		)

		const heightSquared = Math.floor(
			height /
				(square.offsetHeight +
					(parseFloat(window.getComputedStyle(square)['marginTop']) +
						parseFloat(window.getComputedStyle(square)['marginBottom'])))
		)

		const quantity = widthSquared * heightSquared

		for (let i = 0; i < quantity; i++) {
			const square = document.createElement('div')
			square.classList.add('square')

			this.$board.innerHTML = ''
			setTimeout(() => this.$board.append(square), 0)

			square.addEventListener('mouseover', () => this.setColor(square))
			square.addEventListener('mouseleave', () => this.removeColor(square))
		}
	}

	render() {
		this.init()
	}
}
