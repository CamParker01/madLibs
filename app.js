function createParagraph(){
     // console.log('create paragraph has been called');
     var wordOne  = document.getElementById('Noun1').value;
     var wordTwo  = document.getElementById('Noun2').value;
     var wordThree  = document.getElementById('Name').value;
     var wordFour  = document.getElementById('Verb').value;
     var wordFive  = document.getElementById('Noun3').value;
     var wordSix  = document.getElementById('Animals').value;
     var wordSeven  = document.getElementById('Emotion').value;
     var wordEight  = document.getElementById('Noun4').value;
    
     











    var paragraph = '<p> Say the photographer said as the camera flashed! ' + wordOne +  ' and I had gone to'+ wordTwo+ 'to get our photos taken today. The first photo we really wanted was a picture of us dressed as'+ wordThree +'pretending to be a'+ wordFour + 'When we saw the proofs of it, I was a bit' + wordFive 
   + "because it looked different than in my head. (I hadn't imagined so many"+ wordSix +'behind us.) However, the second photo was exactly what I wanted. We both looked like crazy people wearing'+ wordSeven +'and'+ wordEight + 'do exactly what I had in mind!</p>' ;


//    console.log(paragraph);
        document.getElementById('answer').innerHTML = paragraph;


}