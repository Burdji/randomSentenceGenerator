//Welcome to this random sentence generator. To play just go to the terminal and type:
//node sentenceGenerator.js
//Enjoy! :)

function sentenceGenerator(firstTime){
    const readline = require('readline').createInterface({
       input: process.stdin,
       output: process.stdout
   });
   let names=['Pesho','Svilen','Vlado','Yanko','Jivko','Savko','Curko','Petya','Sashka','Cura','Minka','Ivka','Kateto','Aneliq','Dimka','Radka', ];
   let places=['Sofia','Varna','Burgas','Plovdiv','Ohrid','Yambol','Milano','Madrid','Paris','Miami','Venice'];
   let verbs=['plays','jogs','skates','sits','watches','drives','dances','works','shops','has lunch','smokes','vapes'];
   let adverbs=['rapidly','boldly','randomly','relaxingly','assertively','ambitiously','rigorously','condifently','intensely','firmly'];
   let distance=['near','around','in','infront','behind','inside','next to','close to','in the middle of'];
   let details=['the park','the cinema','the mall','the court','the bathroom','the library','the classroom','the hall','the hotel','the motel','the gas station','the supermaket','the store','the restaurant','the cafe'];
   function getWord(arr){
       let word=arr[Math.floor(Math.random()*arr.length)];
       return word;    
   }
   let name=getWord(names);
   let place=getWord(places);
   let verb=getWord(verbs);
   let adverb=getWord(adverbs);
   let proximity=getWord(distance);
   let detail=getWord(details);
   let who=`${name} from ${place}`;
   let action=`${adverb} ${verb}`;
   let where=`${proximity} ${detail}`;
   let sentence=`${who} ${action} ${where}`;
   if(firstTime)console.log(`Welcome to our random sentence generator! Have fun!`);
   console.log(sentence);
   let recursiveAsyncReadLine = function () {
       readline.question('Press enter to generate a new one.', string => {
           readline.close();
           return sentenceGenerator(0);
   });
   }
   recursiveAsyncReadLine();
}
sentenceGenerator(1);