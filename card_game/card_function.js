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
// shuffle deck and back to zero
function reshuffle(){
    
}
function cardName(card){
    switch(card){
        case ("&spades;"):
            return "Spades";
        case ("&hearts;"):
            return "Hearts";
        case ("&diams; "):
            return "Diamonds";
        case ("&clubs; "):
            return "Clubs";
        default:
            return card;
    }
}


var deckCrad = new shuffle();// new array

var re = []; // card deal history empty

document.getElementById('deck').innerHTML = deckCrad; // get the deck 

document.getElementById('num').innerHTML = deckCrad.length; // get the length of deck

// click deal button
document.getElementById('deal-btn').addEventListener('click', ()=>{
    
    let dealed = dealCard(deckCrad); // deal one card
    
    // let suitsname = cardName(arr);
    // console.log(suitsname);
    // document.getElementById('name-suits').innerHTML = suitsname;

    document.getElementById('deck').innerHTML = deckCrad; // if pop() one card it will decreasing
    
    document.getElementById('deal').innerHTML = dealed; // get the deal
    
    document.getElementById('num').innerHTML = deckCrad.length; // will see if the the is decreasing
    
    re.push(dealed); // push to cartd history

    document.getElementById('history').innerHTML = re; //get the card history storing in array

});
document.getElementById('btn-shuffle').addEventListener('click', ()=>{

});



