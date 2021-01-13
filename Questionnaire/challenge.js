
// //function contructor
// (function Quiz() {

//  //variable for Question 
//     let q1 = new Q('What does HTML stand for?',
//     ['Hyper Text Markup Language', 'Hot Mail','How to Make Lasagna'],0); 
  
//     let q2 = new Q('what is the difference in an opening tag and a closing tag?',
//     ['Opening tag has a / in front', 'Closing tag has a / in front', 'There is no difference'],1);                                       
  
//     let q3 = new Q('< br  / > What type of tag is this?',
//     ['Break tag', 'A broken one', 'Fun', 'An opening tag'],0);
  
//     let q4 = new Q('< body > Is this an opening tag or a closing tag?',
//     ['Opening', 'Closing'],0);                                       
  
//     let q5 = new Q('< / body > Is this an opening tag or a closing tag?',
//     ['Opening', 'Closing'],1);
    
//     let q6 = new Q('where is the meta tag only found?',
//     ['The last page', 'The home page','The second page'],1);                                   
    
//     let q7 = new Q('What is an element that does not have a closing tag called?',
//     ['Tag', 'Empty element', 'Closed element'],2);                                       
    
//     let q8 = new Q('Which of the following is an example of an empty element?',
//     ['< img / >', '< img > < / img >', '< / img>'],1);
    
//     let q9 = new Q('What should values always be enclosed in?',
//     ['Quotation marks', 'Commas', 'Fun', 'Parenthesis'],0);                                       
    
//     let q10 = new Q('What does < a  h r e f = ”h t t p : / / w w w . g o o g l e . c o m“  t i t l e = ” L i n k  t o   G o o g l e  ” t a r g e t = ” _  b l a n k  ” > G o o g l e  < / a > do?',
//     ['Adds a link to google on the page', 'Adds a search engine to the page', 'Nothing'],0);

//     let q11 = new Q('How many tags are in a regular element?',
//     ['2', '1', '3'],0);

//     let q12 = new Q('which is the correct way to tag an image?',
//     ['src=”image.jpg/gif” alt=”type some text', 'Src=”image.jpg/gif” alt=”type some text'],0);

//     let q13 = new Q('Where do all items for the same web site need to be saved?',
//     ['In the same folder', 'Where ever is fine', 'in different folders'],0);

//     let q14 = new Q('What is always a welcome page, and explains the purpose or topic of the site?',
//     ['Page 4', 'Homepage', 'Table of contents'],1);

//     let q15 = new Q('What does View Source do?',
//     ['Nothing', 'Brings up a note pad with the HTML code already used for the site', 'Opens a new website.'],1);

// //put all in one array
// var questions = [q1, q2, q3 ,q4, q5, q6 , q7, q8, q9 , q10, q11, q12, q13, q14, q15];
    
// //contructor question with 3 parameters
//     function Q(question, answers, correct) {
 
//         this.question = question;
 
//         this.answers = answers;
 
//         this.correct = correct;
 
//     }

// // add properties and method that display a Question
//     Q.prototype.displayQuestion = function() {
//         document.getElementById('question').innerHTML = this.question;
//         console.log(this.question);
//         console.log(' ');

//         for (let i = 0; i < this.answers.length; i++) {
            
//             console.log(i + ': ' + this.answers[i]);
 
//         }
 
//     } 

//  //add meethod to check if the answer is true or falsse
//     Q.prototype.checkAnswer = function(ans, callback) {
 
//         let addScore;
        
//         if (ans == this.correct) {
            
//             console.log(' ');
//             console.log('Correct answer!');
        
//             addScore = callback(true);
            
//         } else {
      
//             console.log('Wrong answer!');
      
//             addScore = callback(false);
      
//         }
        
//         this.displayScore(addScore);
//         this.consecutive(addScore);
//     }

// // add a method to a constrctor that can display a score
//     Q.prototype.displayScore = function(score) {
 
//         console.log('Your total score is: + ' + score + ' Points');
 
//         console.log('--*++++++++++++++++++++++++++++*--');
//         console.log(' ');
 
//     }
// // add view add consecutive correct answer 
//     Q.prototype.consecutive = function(score) {
        
//         if(score == 5){
       
//             alert('YOU GOT 5 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 10){
       
//             alert('YOU GOT 10 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 15){
       
//             alert('YOU GOT 15 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 20){
       
//             alert('YOU GOT 20 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 25){
       
//             alert('YOU GOT 25 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 30){
       
//             alert('YOU GOT 30 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 35){
       
//             alert('YOU GOT 35 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 40){
       
//             alert('YOU GOT 40 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 45){
       
//             alert('YOU GOT 45 CONSECUTIVE CORRECT ANSWER');
       
//         }else if(score == 50){
       
//             alert('YOU GOT 25 CONSECUTIVE CORRECT ANSWER');
       
//         }
    
//     }

// // function for calculate the score           
//     function score() {
 
//         let addScore = 0; // initial value 0
 
//         return function(correct) { // if answer is correct 
 
//             if (correct) {
 
//                 addScore++; // addscore value add 1 each time correct 
 
//             } 
 
//             return addScore; //return
//         }
//     }
    
//     let keepScore = score(); // store a score in a new var

//   //function for reshuffle a question 
//     function nextQuestion() {

//         let n = Math.floor(Math.random() * questions.length);
        
//         questions[n].displayQuestion();
        
//         answer = prompt('Please select the number of correct answer.');

//         if(answer != "exit"){
//             questions[n].checkAnswer(parseInt(answer), keepScore);
//             nextQuestion();
//         }
//         questions[n].checkAnswer(parseInt(answer), keepScore);
        
//     }

    
//     nextQuestion();

// })();
// Quiz Game pt 2
// - After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
// - Be careful: The game literally never ends. So include the option to quit the game if the user write 'exit' instead of the answer. 
// - Track the user's score to make the game more fun! So each time an answer i s correct, add 1 point to the score.
// - Display the score in the console. Use yet another method for this.
// - Implement a streak system where if the user get consecutive answers in multiples of 5 (5, 10, 15, 20...) an alert will pop up saying the streak. e.g. (5 in a row!).
// - Implement in everything in DOM (Design is up to you)


// //function contructor
(function Quiz() {

 //variable for Question 
    let q1 = new Q('What does HTML stand for?',
    ['Hyper Text Markup Language', 'Hot Mail','How to Make Lasagna'],0); 
  
    let q2 = new Q('what is the difference in an opening tag and a closing tag?',
    ['Opening tag has a / in front', 'Closing tag has a / in front', 'There is no difference'],1);                                       
  
    let q3 = new Q('< br  / > What type of tag is this?',
    ['Break tag', 'A broken one', 'Fun', 'An opening tag'],0);
  
    let q4 = new Q('< body > Is this an opening tag or a closing tag?',
    ['Opening', 'Closing'],0);                                       
  
    let q5 = new Q('< / body > Is this an opening tag or a closing tag?',
    ['Opening', 'Closing'],1);
    
    let q6 = new Q('where is the meta tag only found?',
    ['The last page', 'The home page','The second page'],1);                                   
    
    let q7 = new Q('What is an element that does not have a closing tag called?',
    ['Tag', 'Empty element', 'Closed element'],2);                                       
    
    let q8 = new Q('Which of the following is an example of an empty element?',
    ['< img / >', '< img > < / img >', '< / img>'],1);
    
    let q9 = new Q('What should values always be enclosed in?',
    ['Quotation marks', 'Commas', 'Fun', 'Parenthesis'],0);                                       
    
    let q10 = new Q('What does < a  h r e f = ”h t t p : / / w w w . g o o g l e . c o m“  t i t l e = ” L i n k  t o   G o o g l e  ” t a r g e t = ” _  b l a n k  ” > G o o g l e  < / a > do?',
    ['Adds a link to google on the page', 'Adds a search engine to the page', 'Nothing'],0);

    let q11 = new Q('How many tags are in a regular element?',
    ['2', '1', '3'],0);

    let q12 = new Q('which is the correct way to tag an image?',
    ['src=”image.jpg/gif” alt=”type some text', 'Src=”image.jpg/gif” alt=”type some text'],0);

    let q13 = new Q('Where do all items for the same web site need to be saved?',
    ['In the same folder', 'Where ever is fine', 'in different folders'],0);

    let q14 = new Q('What is always a welcome page, and explains the purpose or topic of the site?',
    ['Page 4', 'Homepage', 'Table of contents'],1);

    let q15 = new Q('What does View Source do?',
    ['Nothing', 'Brings up a note pad with the HTML code already used for the site', 'Opens a new website.'],1);

//put all in one array
var questions = [q1, q2, q3 ,q4, q5, q6 , q7, q8, q9 , q10, q11, q12, q13, q14, q15];



//contructor question with 3 parameters
    function Q(question, answers, correct) {
 
        this.question = question;
 
        this.answers = answers;
 
        this.correct = correct;
 
    }

// add properties and method that display a Question
    Q.prototype.displayQuestion = function() {
      var questionDom = document.querySelector('#container');
      
      let div = document.createElement('h2'); div.setAttribute('id' , 'question');
     
      var p  = document.createElement('p');   
     
      questionDom.appendChild(div);

      document.getElementById('question').innerHTML = this.question;


        for (let i = 0; i < this.answers.length; i++) {
            
         let div = document.createElement('p'); div.setAttribute('id' , i);
      
         questionDom.appendChild(div);
 
        }
        for (let i = 0; i < this.answers.length; i++) {
            
         document.getElementById(i).innerHTML = i + " - " + this.answers[i]
      
 
        }
        
 
    } 

 //add meethod to check if the answer is true or falsse
    Q.prototype.checkAnswer = function(ans, callback) {
 
        let addScore;
        
        if (ans == this.correct) {
            
            console.log(' ');
            console.log('Correct answer!');
        
            addScore = callback(true);
            
        } else {
      
            console.log('Wrong answer!');
      
            addScore = callback(false);
      
        }
        
        this.displayScore(addScore);
        this.consecutive(addScore);
    }

// add a method to a constrctor that can display a score
    Q.prototype.displayScore = function(score) {

        console.log('Your total score is: + ' + score + ' Points');
 
        console.log('--*++++++++++++++++++++++++++++*--');
        console.log(' ');
 
    }
// add view add consecutive correct answer 
    Q.prototype.consecutive = function(score) {
        
        if(score == 5){
       
            alert('YOU GOT 5 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 10){
       
            alert('YOU GOT 10 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 15){
       
            alert('YOU GOT 15 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 20){
       
            alert('YOU GOT 20 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 25){
       
            alert('YOU GOT 25 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 30){
       
            alert('YOU GOT 30 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 35){
       
            alert('YOU GOT 35 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 40){
       
            alert('YOU GOT 40 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 45){
       
            alert('YOU GOT 45 CONSECUTIVE CORRECT ANSWER');
       
        }else if(score == 50){
       
            alert('YOU GOT 25 CONSECUTIVE CORRECT ANSWER');
       
        }
    
    }

// function for calculate the score           
    function score() {
 
        let addScore = 0; // initial value 0
 
        return function(correct) { // if answer is correct 
 
            if (correct) {
 
                addScore++; // addscore value add 1 each time correct 
 
            } 
 
            return addScore; //return
        }
    }
    
    let keepScore = score(); // store a score in a new var

  //function for reshuffle a question 
    function nextQuestion() {

        let n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();
        
      //   answer = prompt('Please select the number of correct answer.');

      //   if(answer != "exit"){
      //       questions[n].checkAnswer(parseInt(answer), keepScore);
      //       nextQuestion();
      //   }
      //   questions[n].checkAnswer(parseInt(answer), keepScore);
        
    }

    
    nextQuestion();

})();