
//function for creating deck
function Getcard(){
    let suits  = ["♠","♢","♣","♡"];
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

function shuffle(card) {
	for(var j, x, i = card.length; i; j = parseInt(Math.random() * i), x = card[--i], card[i] = card[j], card[j] = x);
	return card; 

}
function ascending(ascend){
	var ascend = Getcard();
	ascend.sort(function(a, b){return a-b});
	return ascend;
}
function Descending(){
	descend.sort(function(a, b){return b-a});
}

//shuffle
var myDeck = Getcard();
console.log('shuffle');
console.log(shuffle(myDeck)); 

//Arrange by suit
var myDeck = Getcard();
console.log('Arrange by suit');
console.log(myDeck); 

//accending and deccending
console.log('Accending and Deccending');
var a = ascending(myDeck);
var descend = Getcard();
var b = Descending(descend);
console.log(a);
console.log('decend');
console.log(b);