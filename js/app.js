import { HoverBoard } from './core.js'

const hb = new HoverBoard('#board', {
	colors: ['#1d1d1d'],
	bgSquare: '#fff',
})

const board = document.querySelector('#board')
const createBtn = document.querySelector('#create')

createBtn.addEventListener('click', () => {
	const heightBoard = +prompt('Enter board height...')

	if (
		heightBoard == '' ||
		heightBoard == null ||
		heightBoard == 0 ||
		heightBoard < 30
	)
		return

	board.style.height = `${heightBoard}px`
	hb.init()
})
