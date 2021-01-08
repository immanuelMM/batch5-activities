

//function for creating deck
function Getcard(){
    let suits  = ["&hearts;","&diams;","&spades;","&clubs;"];
    let values = [ "A","2","3","4","5","6","7","8","9","10","J","Q","k",];
    let deck = [];
for (let i = 0; i < 4; i++){
   for(let x = 0; x < 13; x++){
          let card =  suits[i] + values[x];
    	    deck.push(card);
    }  
} 
return deck;
}
// shuffle
function shuffle() {
    let card = Getcard()
	for(var j, x, i = card.length; i; j = parseInt(Math.random() * i), x = card[--i], card[i] = card[j], card[j] = x);
	return card; 
}
//deal card
function dealCard(deck){
     let deal = deck.pop();
     return deal;  
}

var deckCrad = new shuffle();
var re = [];
document.getElementById('deck').innerHTML = deckCrad;

document.getElementById('num').innerHTML = deckCrad.length;

document.getElementById('deal-btn').addEventListener('click', ()=>{
    var arr = dealCard(deckCrad);
    var b = document.getElementById('deck').innerHTML = deckCrad;
    document.getElementById('deal').innerHTML = arr;
    document.getElementById('num').innerHTML = deckCrad.length;
    re.push(arr);
    document.getElementById('history').innerHTML = re;
});
document.getElementById('btn-shuffle').addEventListener('click', ()=>{
   document.getElementById('deck').innerHTML = deckCrad;
});



