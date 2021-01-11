(function Quiz() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    } 
    Question.prototype.checkAnswer = function(ans, callback) {
        let sc;
        
        if (ans == this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
            
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('================================');
    }
    
    let q1 = new Question('What does HTML stand for?',
                                            ['Hyper Text Markup Language', 'Hot Mail','How to Make Lasagna'],
                                            0); 
                                      
    let q2 = new Question('what is the difference in an opening tag and a closing tag?',
                                            ['Opening tag has a / in front', 'Closing tag has a / in front', 'There is no difference'],
                                            2);                                       
    let q3 = new Question('< br  / > What type of tag is this?',
                                            ['Break tag', 'A broken one', 'Fun', 'An opening tag'],
                                            1);
    let q4 = new Question('< body > Is this an opening tag or a closing tag?',
                                            ['Opening', 'Closing'],
                                            1);                                       
    let q5 = new Question('< / body > Is this an opening tag or a closing tag?',
                                            ['Opening', 'Closing'],
                                            2);
    let q6 = new Question('where is the meta tag only found?',
                                            ['The last page', 'The home page','The second page'],
                                            2);                                   
    let q7 = new Question('What is an element that does not have a closing tag called?',
                                            ['Tag', 'Empty element', 'Closed element'],
                                            2);                                       
    let q8 = new Question('Which of the following is an example of an empty element?',
                                            ['< img / >', '< img > < / img >', '< / img>'],
                                            2);
    let q9 = new Question('What should values always be enclosed in?',
                                            ['Quotation marks', 'Commas', 'Fun', 'Parenthesis'],
                                            1);                                       
    let q10 = new Question('What does < a  h r e f = ”h t t p : / / w w w . g o o g l e . c o m“  t i t l e = ” L i n k  t o   G o o g l e  ” t a r g e t = ” _  b l a n k  ” > G o o g l e  < / a > do?',
                                            ['Adds a link to google on the page', 'Adds a search engine to the page', 'Nothing'],
                                            1);
    let questions = [q1, q2, q3 ,q4, q5, q6 , q7, q8, q9 , q10];
            
    function score() {
        let sc = 0;
        return function(correct) {
           if (correct) {
               sc++;
           } 
           return sc;
        }
    }
    
    let keepScore = score();
   
    function nextQuestion() {
        let n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();
        
        answer = prompt('Please select the correct answer.');

        questions[n].checkAnswer(parseInt(answer), keepScore);

    }
    nextQuestion();
    
})();

console.log('hey');