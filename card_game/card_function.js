
//Global variable for DOM
var DOMdeck = document.getElementById('deck');
var DOMdeal = document.getElementById('deal');
var DOMnum = document.getElementById('num');
var DOMhistory = document.getElementById('history');
var DOMbtn = document.getElementById('deal-btn');
var DOMreset = document.getElementById('btn-shuffle');
var DOMpre = document.getElementById("pre");
var DOMnext = document.getElementById("next");

var re = []; // card deal history empty
var deckCrad = new shuffle();// new array


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

function PreNext(){
    
    for(var i=1; i < deckCrad.length; i++){
        
        let a = DOMhistory.innerHTML;
        
        DOMpre.disabled = false;
        
        if(a = a[i]){
            
            DOMnext.disabled = false;
            
        }
    
    }
}

DOMdeck.innerHTML = deckCrad; // get the deck 

DOMnum.innerHTML = deckCrad.length; // get the length of deck

DOMpre.disabled = true;

DOMnext.disabled = true;

// click deal button

DOMpre.addEventListener('click', function(){
    
    let b = re.shift();

    deckCrad.push(b)

    DOMhistory.innerHTML = re;
   
    if(re == 0){

        DOMpre.disabled = true;
   
    }else{
   
        DOMnum.innerHTML = deckCrad.length;
   
        DOMdeck.innerHTML = deckCrad;
   
        DOMdeal.innerHTML = b;  
    }
});

DOMnext.addEventListener('click', ()=>{
    
 

});

DOMbtn.addEventListener('click', ()=>{
    
    let dealed = dealCard(deckCrad); // deal one card
    if(deckCrad == 0 ){
        DOMbtn.disabled = true;
        DOMdeck.innerHTML = "<h2 style='color:red;'>No more available card</h2>"
    
    }else{
    
    PreNext()
    
    re.push(dealed); // push to cartd history  

    DOMhistory.innerHTML = re; //get the card history storing in array
        
    DOMdeck.innerHTML = deckCrad;//get the latest deck
    
    DOMdeal.innerHTML = dealed; // get the deal
    
    DOMnum.innerHTML = deckCrad.length; // get the latest number of card

    }     
});
// reset card and shuffle
DOMreset.addEventListener('click', ()=>{
    
    var b = deckCrad = shuffle(); // back to 52 cards
    
    DOMdeck.innerHTML = b; // get the deck
    
    DOMnum.innerHTML = b.length; // get the numbers of card
    
    DOMhistory.innerHTML = re = []; // reset history
    
    DOMdeal.innerHTML = ""; // reset deal card

});







