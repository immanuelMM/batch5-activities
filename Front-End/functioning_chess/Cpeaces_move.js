function pawnMoves(from) {
	let options = []

	from_x = +from.id.split(',')[0]
	from_y = +from.id.split(',')[1]

	if (from.firstChild.dataset.color === 'white') {

		piece = document.getElementById(`${from_x + 1},${from_y + 1}`)
		if (piece && piece.firstChild && piece.firstChild.dataset.color === 'black') {
			options.push(piece.id)
		}

		piece = document.getElementById(`${from_x - 1},${from_y + 1}`)
		if (piece && piece.firstChild && piece.firstChild.dataset.color === 'black') {
			options.push(piece.id)
		}

		piece = document.getElementById(`${from_x},${from_y + 2}`)
		if (piece && !piece.firstChild && from_y === 1) {
			options.push(piece.id)
		}

		piece = document.getElementById(`${from_x},${from_y + 1}`)
		if (piece && !piece.firstChild) {
			options.push(piece.id)
		}
	}
	else if (from.firstChild.dataset.color === 'black') {

		piece = document.getElementById(`${from_x + 1},${from_y - 1}`)
		if (piece && piece.firstChild && piece.firstChild.dataset.color === 'white') {
			options.push(piece.id)
		}

		piece = document.getElementById(`${from_x - 1},${from_y - 1}`)
		if (piece && piece.firstChild && piece.firstChild.dataset.color === 'white') {
			options.push(piece.id)
		}

		piece = document.getElementById(`${from_x},${from_y - 2}`)
		if (piece && !piece.firstChild && from_y === 6) {
			options.push(piece.id)
		}

		piece = document.getElementById(`${from_x},${from_y - 1}`)
		if (piece && !piece.firstChild) {
			options.push(piece.id)
		}
	}	
	return options
}


function knightMoves(from) {
	let options = []

	x = +from.id.split(',')[0]
	y = +from.id.split(',')[1]
	twos = [2, -2]
	ones = [1, -1]

	for (let i of twos) {
		for (let j of ones) {
			i = +i
			j = +j

			piece = document.getElementById(`${x + i},${y + j}`)
			if (piece && (!piece.firstChild || (piece.firstChild && piece.firstChild.dataset.color !== turn_color))) {
				options.push(piece.id)
			}
		}
	}

	for (let i of ones) {
		for (let j of twos) {
			i = +i
			j = +j

			piece = document.getElementById(`${x + i},${y + j}`)
			if (piece && (!piece.firstChild || (piece.firstChild.dataset.color !== turn_color))) {
				options.push(piece.id)
			}
		}
	}
	return options
}

function rookMoves(from) {
	let options = []
	from_x = +from.id.split(',')[0]
	from_y = +from.id.split(',')[1]

	for (let x = from_x + 1; x < 8; x++) {
		piece = document.getElementById(`${x},${from_y}`)
		if (!piece.firstChild) {
			options.push(piece.id)
		}
		else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
			break;
		}
		else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
			options.push(piece.id)
			break;
		}
	}

	for (let x = from_x -1; x >= 0; x--) {
		piece = document.getElementById(`${x},${from_y}`)
		if (!piece.firstChild) {
			options.push(piece.id)
		}
		else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
			break;
		}
		else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
			options.push(piece.id)
			break;
		}
	}

	for (let y = from_y + 1; y < 8; y++) {
		piece = document.getElementById(`${from_x},${y}`)
		if (!piece.firstChild) {
			options.push(piece.id)
		}
		else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
			break;
		}
		else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
			options.push(piece.id)
			break;
		}
	}

	for (let y = from_y - 1; y >= 0; y--) {
		piece = document.getElementById(`${from_x},${y}`)
		if (!piece.firstChild) {
			options.push(piece.id)
		}
		else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
			break;
		}
		else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
			options.push(piece.id)
			break;
		}
	}
 	return options
}


function bishopMoves(from) {
	let options = []
	from_x = +from.id.split(',')[0]
	from_y = +from.id.split(',')[1]


	y_up = from_y + 1
	y_down = from_y - 1
	for (let x = from_x + 1; x < 8; x++) {

		if (y_up < 8) {
			piece = document.getElementById(`${x},${y_up}`)

			if (!piece.firstChild) {
				options.push(piece.id)
			}
			else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
				y_up = 9
			}
			else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
				options.push(piece.id)
				y_up = 9
			}
			y_up++
		}

		if (y_down >= 0) {
			piece = document.getElementById(`${x},${y_down}`)

			if (!piece.firstChild) {
				options.push(piece.id)
			}
			else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
				y_down = -1
			}
			else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
				options.push(piece.id)
				y_down = -1
			}
			y_down--
		}
	}

	y_up = from_y + 1
	y_down = from_y - 1

	for (let x = from_x - 1; x >= 0; x--) {

		if (y_up < 8) {
			piece = document.getElementById(`${x},${y_up}`)

			if (!piece.firstChild) {
				options.push(piece.id)
			}
			else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
				y_up = 9
			}
			else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
				options.push(piece.id)
				y_up = 9
			}
			y_up++
		}

		if (y_down >= 0) {
			piece = document.getElementById(`${x},${y_down}`)
			if (!piece.firstChild) {
				options.push(piece.id)
			}
			else if (from.firstChild.dataset.color === piece.firstChild.dataset.color) {
				y_down = -1
			}
			else if (from.firstChild.dataset.color !== piece.firstChild.dataset.color) {
				options.push(piece.id)
				y_down = -1
			}
			y_down--
		}
	}
 	return options
}


function queenMoves(from) {
	let options = []
	from_x = +from.id.split(',')[0]
	from_y = +from.id.split(',')[1]

	diagonals = bishopMoves(from)
	straights = rookMoves(from)

	for(let path of diagonals) {
		options.push(path)
	}

	for(let path of straights) {
		options.push(path)
	}

 	return options
}

function kingMoves(from) {
	let options = []
	from_x = +from.id.split(',')[0]
	from_y = +from.id.split(',')[1]

	moves = [-1,0,1]
	for (let i of moves) {
		for (let j of moves) {
			piece = document.getElementById(`${from_x + i},${from_y + j}`)
			if (piece && (!piece.firstChild || (piece.firstChild && from.firstChild.dataset.color !== piece.firstChild.dataset.color))) {
				options.push(piece.id)
			}
		}
	}
 	return options
}

