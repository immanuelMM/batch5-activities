// Board Creation

/// add a global event listener for clicks
/// have global variables for element_selected and turn(which is the color)

// white div
const white = document.getElementById('white1');
// black div
const black = document.getElementById('black1');
//control row elements
const startTime = document.getElementById('times');
/* const minBtn = document.getElementById('minBtn'); */
const reset = document.querySelector('.reset-btn');
  // randoms for functions
var sec;
var min;
var nWhtIntId;
var nBlkIntId;
const whtSideColor = white.style.background;
const blkSideColor = black.style.background;

let turn_color = "white"
let turns = []
let from_coords = []
let from_cell = ''
let to_coords = []
let to_cell = ''
let gameOn = true

let board = document.querySelector('#board') // select the html id board


function boardCreation() {
	for (let i = 7; i >= 0; i--) { //row
		for (let j = 0; j < 8; j++) { // collum

			cell = document.createElement('div') // div
			cell.id = `${j},${i}`; // id = j=collum 0 < 8 J=0 ++ / i=row 7=> 0 7--

			if (j == 0) { // all collum 0 
				cell.classList.add('cell', 'row') // class=cell row
			}
			else {
				cell.classList.add('cell') // all is cell
			}


			cell.style.backgroundColor = colorBoard(i, j) // function for background color
			createPiece(cell) // function for craete chess pieces


			board.appendChild(cell) // html id board append cell
		}
	} 
	screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)} is first!`) // function screen display
}


function createPiece(cell) { 
		i = cell.id.split(",")[1] // row
		j = cell.id.split(",")[0] // collum

		let piece = '' // initial no value
		if (i == 1 || i == 6) {
			piece = 'pawn' // 0 is the position of white pawn and 6 is the black
		}
		else if ((i == 0 || i == 7) && (j == 0 || j == 7)) {
			piece = 'rook' // 0row and 7collum position of white and black then 0j is rook left side 7j is rook rigth
		}
		else if ((i == 0 || i == 7) && (j == 1 || j == 6)) {
			piece = 'knight' // 0row and 7collum position of white and black 1j knight left side 6j is knight right
		}
		else if ((i == 0 || i == 7) && (j == 2 || j == 5)) {
			piece = 'bishop'// 0row and 7collum position of white and black 2j bishop left side 5j is bishop right
		}
		else if ((i == 0 || i == 7) && j == 4) {
			piece = 'king' // 0row and 7collum position of white and black 4j both black and white
		}
		else if ((i == 0 || i == 7) && j == 3) {
			piece = 'queen' // 0row and 7collum position of white and black 3j both black and white
		}
		else {
			return
		}
	img = document.createElement('img') // element for img src
	img.setAttribute("data-piece", piece) // attribute date-piece=black or white
	img.classList.add('piece') // class=pieces
	

	if (i == 0 || i == 1) { // 0 and 1 for white
		img.src = `white_images/${piece}.png` // insert the value to src image
		img.setAttribute("data-color", "white") //attrribute data-color=white
		
	}
	else {
		img.src = `black_images/${piece}.png` // insert the value to src image
		img.setAttribute("data-color", "black") // attribute data-color=black
	}

	cell.appendChild(img) // append in cell with image
}

function colorBoard(x,y) {
	if (x % 2 == 0) {
		if (y % 2 == 0) {
			return '#779455' // black
		}
		else {
			return '#eeeed2' // white
		}
	}
	else {
		if (y % 2 == 0) {
			return '#eeeed2' //white
		}
		else {
			return '#779455' // black
		}
	}
}

// create becnh for black  and white
let bench = document.getElementById('bench') // get the html element for id

function benchCreation() {

for (let j = 0; j < 2; j++) {  // only 3 collum for bench

	let color_bench = document.createElement('div') // div for bench
	let header = document.createElement('h2') // h2
	let next_bench = document.createElement('br') // br

	if (j == 0) { // 0 is for player white
		color_bench.id = 'white' // id=white
		header.innerHTML = 'Player 1' // insert to h2
	}
	else {// 0 else player for black
		color_bench.id = 'black' //id=black
		header.innerHTML = 'Player 2' // insert to h2
	}

	color_bench.appendChild(header) // appendchild

	for (let i = 0; i < 16; i++) {// 16 row for black and white

		cell = document.createElement('div') // create div
		cell.id = i // each cell have id 1 to 16

		if (i % 16 == 0) { // if becnh is 0 it's mean empty
			cell.classList.add('bench', 'open', 'row') // becnh open for 16 piecec got eaten 
		}
		else {
			cell.classList.add('bench', 'open') // this class is for a pieces got eaten
		}

		color_bench.appendChild(cell) // append 
	}
	bench.appendChild(next_bench)
	bench.appendChild(color_bench)
 }
}
//call the board with pieaces
boardCreation()
//call bench
benchCreation()

// click the pieces 
document.body.addEventListener('click', function(e) {

	if ((e.target.className === 'piece' || e.target.classList.contains('cell')) && gameOn) {
		nextMove(e) // function move
	}
	else if (e.target.innerHTML === 'New Game') {
		newGame() // function nextgame
	}
	else if (e.target.innerHTML === 'Undo Move') {
		if (turns.length > 0) {
			revertTurn() // function revert
			switchTurn() // function switch
			screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)} undid their last move`)
		}
		else {
			removeSelection() // function remove selection
		}
	}

})
// function for new game
function newGame() {		
	turn_color = "white"
	turns = []
	from_coords = []
	from_cell = ''
	to_coords = []
	to_cell = ''
	board.innerHTML = ''
	bench.innerHTML = ''
	boardCreation()
	benchCreation()
	resetClick();
	gameOn = true
}

//function for nextmove
function nextMove(e) {

	to_cell = e.target.className === 'piece' ? e.target.parentElement : e.target
	to_coords = to_cell.id.split(",")

	if (from_coords.length === 0 && to_cell.firstChild && to_cell.firstChild.dataset.color === turn_color) {
		from_coords = to_coords
		from_cell = to_cell
		from_cell.classList.add('selected')
	
	}
	else if (from_coords.toString() === to_coords.toString()){

		removeSelection()
	}
	else if (from_coords.length === 2 && ((to_cell.firstChild && to_cell.firstChild.dataset.color !== turn_color)
		|| !to_cell.firstChild)) {

		if (viableMove()) {
			takeTurn(from_cell, to_cell)
			if (inCheck()) {
				revertTurn()
				screenDisplay(`That move puts ${turn_color} in check!`)
			}
			else {
				screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)} ${to_cell.firstChild.dataset.piece} to ${interfaceGrid(to_cell.id)}, ${turn_color === 'white' ? 'Black\'' : 'White\''}s turn`)
				endTurn()
			}
		}
	}
}
// removing the selected cell
function removeSelection() {
	if (from_cell.classList) {
		from_cell.classList.remove('selected')
		
		if (turn_color == "white"){
			whtMaster();
			document.getElementById('blackbtn').style = "background-color:white; border-radius:100px; color:black;"
			document.getElementById('btnbg1').style = "background-image: url(timer.gif); background-size: 20px; background-repeat: no-repeat;"
			document.getElementById('whitebtn').style = "none"
			document.getElementById('btnbg').style = "none"
		}else{
			blkMaster();
			document.getElementById('blackbtn').style = "none"
			document.getElementById('btnbg1').style = "none"
			document.getElementById('whitebtn').style = "background-color:white; border-radius:20px; color:black;"
			document.getElementById('btnbg').style = "background-image: url(timer.gif); background-size: 20px; background-repeat: no-repeat;"
		}

	}
	from_cell = ''
	from_coords = []
	to_cell = ''
	to_coords = []

}

function takeTurn(from, to) {
	let turn = {}
	if (to.firstChild) {
		turn.removedPiece = to.removeChild(to.firstChild)
		toBench(turn.removedPiece)
		
	}
	piece = from.removeChild(from.firstChild)
	to.appendChild(piece)

	turn.piece = piece
	turn.from = from
	turn.to = to

	turns.push(turn)
}

function revertTurn() {
	if (turns.length === 0) {
		return turns
	}

	turn = turns.pop()

	if ('removedPiece' in turn) {
		fromBench(turn.removedPiece)
		turn.to.appendChild(turn.removedPiece)
	}

	turn.to.removeChild(turn.piece)
	turn.from.appendChild(turn.piece)
}

function endTurn() {
	removeSelection()
	switchTurn()
}

function switchTurn() {
	turn_color = turn_color === 'white' ? 'black' : turn = 'white'
	if (inCheck()) {
		screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)} is in check!`)
	}
	if (inCheckMate()) {
		screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)} is in checkmate!`)
		gameOver()
	}
}

function toBench(img) {
	img.dataset.color

	bench_color = bench.querySelector(`#${img.dataset.color}`)

	next_slot = bench_color.querySelector('.open')
	next_slot.appendChild(img)
	next_slot.classList.remove('open')
	next_slot.classList.add('closed')

}

function fromBench(img) {
	bench_color = bench.querySelector(`#${img.dataset.color}`)

	slots = bench_color.querySelectorAll(`[data-piece=${img.dataset.piece}]`)
	slot = slots[slots.length - 1].parentElement
	slot.classList.remove('closed')
	slot.classList.add('open')
}


function viableMove() {

	piece = from_cell.firstChild.dataset.piece

	if (piece === 'pawn' && pawnMoves(from_cell, to_cell).indexOf(to_coords.toString()) > -1) {
		return true
	}
	else if (piece === 'knight' && knightMoves(from_cell, to_cell).indexOf(to_coords.toString()) > -1) {
		return true
	}
	else if (piece === 'rook' && rookMoves(from_cell).indexOf(to_coords.toString()) > -1) {
		return true
	}

	else if (piece === 'bishop' && bishopMoves(from_cell).indexOf(to_coords.toString()) > -1) {
		return true
	}

	else if (piece === 'queen' && queenMoves(from_cell).indexOf(to_coords.toString()) > -1) {
		return true
	}

	else if (piece === 'king' && kingMoves(from_cell, to_cell).indexOf(to_coords.toString()) > -1) {
		return true
	}
		
}

function inCheck() {
	king = document.querySelector(`[data-piece="king"][data-color=${turn_color}]`).parentElement
	king_coords = king.id.split(",")

	opponent_color = turn_color === 'white' ? 'black' : 'white'
	opponent_pieces = document.getElementById('board').querySelectorAll(`img[data-color=${opponent_color}]`)

	check = false

	opponent_pieces.forEach((piece) => {
		piece_type = piece.dataset.piece 
		piece = piece.parentElement
		if (piece_type === 'pawn' && pawnMoves(piece).indexOf(king_coords.toString()) > -1) {
			check = true
		}

		else if (piece_type === 'knight' && knightMoves(piece).indexOf(king_coords.toString()) > -1) {
			check = true
		}

		else if (piece_type === 'rook' && rookMoves(piece).indexOf(king_coords.toString()) > -1) {
			check = true
		}

		else if (piece_type === 'bishop' && bishopMoves(piece).indexOf(king_coords.toString()) > -1) {
			check = true
		}

		else if (piece_type === 'queen' && queenMoves(piece).indexOf(king_coords.toString()) > -1) {
			check = true
		}

		else if (piece_type === 'king' && kingMoves(piece).indexOf(king_coords.toString()) > -1) {
			check = true
		}
	})

	return check
}


function inCheckMate() {

	pieces = document.getElementById('board').querySelectorAll(`img[data-color=${turn_color}]`)
	count = 0
	for (let piece of pieces) {

		paths = []
		piece_type = piece.dataset.piece 
		piece = piece.parentElement

		if (piece_type === 'pawn') {
			paths = pawnMoves(piece)
		}

		else if (piece_type === 'knight') {
			paths = knightMoves(piece)
		}

		else if (piece_type === 'rook') {
			paths = rookMoves(piece)
		}

		else if (piece_type === 'bishop') {
			paths = bishopMoves(piece)
		}

		else if (piece_type === 'queen') {
			paths = queenMoves(piece)
		}

		else if (piece_type === 'king') {
			paths = kingMoves(piece)
		}

		for (let path of paths) {
			to_path = document.getElementById(`${path}`)
			takeTurn(piece, to_path)

			if (!inCheck()) {
				revertTurn()
				return false
			}
			else {
				revertTurn()
			}
		}	
	}
	return true
}

function gameOver() {
	gameOn = false
}

function screenDisplay(text) {
	display = document.querySelector('#screen > h2')
	display.innerHTML = text
}

function interfaceGrid(id) {
	x = id.split(',')[0]
	y = id.split(',')[1]
	horizontal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	return `${horizontal[x]}, ${+y + 1}`
}


// FUNCTIONS
  // picking time control
const setTime = function (event) {
  document.getElementById('blkmin').innerHTML = document.getElementById('times').value;
  document.getElementById('whtmin').innerHTML = document.getElementById('times').value;
};
  // reset button
const resetClick = function (event) {
  whtStop();
  blkStop();
  document.getElementById('blkmin').innerHTML = document.getElementById('times').value;
  document.getElementById('whtmin').innerHTML = document.getElementById('times').value;
  document.getElementById('blksec').innerHTML = "00";
  document.getElementById('whtsec').innerHTML = "00";
  white.style.background = whtSideColor;
  black.style.background = blkSideColor;
  show();
  black.style.pointerEvents = "auto";
  white.style.pointerEvents = "none";
  times.style.pointerEvents = "auto";
  document.querySelector('#btnbg').style = "none";
  document.getElementById('blackbtn').style = "background-color:none"
  document.getElementById('whitebtn').style = "background-color:none"
};
  // alert: work in progress
const learning = function () {
  alert('Learning how to implement spacebar/keyboard control...check back in!');
};
  // black second countdown
const blkTicker = function() {
  sec = document.getElementById('blksec').innerHTML;
  min = document.getElementById('blkmin').innerHTML;
  if (sec >= 11){
    sec--;
  document.getElementById('blksec').textContent = sec;
  }
  else if (sec >= 1) {
    sec--;
  document.getElementById('blksec').textContent = '0' + sec;
  }
  else if (sec == 0 && min >= 1){
    sec = 59;
    min--;
  document.getElementById('blksec').textContent = sec;
  document.getElementById('blkmin').textContent = min;
  }
 else {
	document.getElementById('blackbtn').style = "background-color:red;"
	document.querySelector('#btnbg1').style = "none";
  	screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)} times Up! White win`)
	gameOver()
 }
};
 // white second countdown
const whtTicker = function() {
  sec = document.getElementById('whtsec').innerHTML;
  min = document.getElementById('whtmin').innerHTML;
  if (sec >= 11){
    sec--;
  document.getElementById('whtsec').textContent = sec;
  }
  else if (sec >= 1) {
    sec--;    document.getElementById('whtsec').textContent = '0' + sec;
  }
  else if (sec == 0 && min >= 1){
    sec = 59;
    min--;
  document.getElementById('whtsec').textContent = sec;
  document.getElementById('whtmin').textContent = min;

  }

  else {
	document.getElementById('whitebtn').style = "background-color:red;"
	document.querySelector('#btnbg').style = "none";
  	screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)} times Up! Black win`)
	gameOver()
 };
};
  // interval start black countdown
const blkCountdown = function () {
  nBlkIntId = setInterval(blkTicker, 1000);
};
// interval start white countdown
const whtCountdown = function () {
  nWhtIntId = setInterval(whtTicker, 1000);
};
  // end black countdown
const blkStop = function () {
  clearInterval(nBlkIntId);
};
  // end white countdown
const whtStop = function () { clearInterval(nWhtIntId);
};
  // hide instructions at game start
const hide = function () {
  document.getElementById('startInstructions').style.display = "none";
  document.getElementById('whitebtn').style = "background-color:white; border-radius:20px; color:black;"
  document.getElementById('btnbg').style = "background-image: url(timer.gif); background-size: 20px; background-repeat: no-repeat;"
};
  // show instructions at game reset
const show = function () {
  document.getElementById('startInstructions').style.display = "block";  
};
  // hide mobile instructions
const hideMobile = function () {  document.getElementById('mobileIns').style.display = "none";
};
  // show mobile instructions
const showMobile = function () {
  document.getElementById('mobileIns').style.display = 'block';
};
  // black's function container function
const blkMaster = function () {
  whtCountdown();
  blkStop();
  hide();
  hideMobile();
  black.style.pointerEvents = "none";
  white.style.pointerEvents = "auto";
  times.style.pointerEvents = "none";
};
  // white's function container function
const whtMaster = function () {
   blkCountdown();
  whtStop();
  white.style.pointerEvents = "none";
  black.style.pointerEvents = "auto";
};

//EVENTS
  // white side 
white.addEventListener('click', whtMaster);
  // black side
black.addEventListener('click', blkMaster);
  // picking time control
startTime.addEventListener('change', setTime);
  // alert: work in progress
window.addEventListener('keypress', learning);
  // reset 


