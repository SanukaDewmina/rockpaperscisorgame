const result = document.getElementById("winlosetieboard");
const computerScore = document.getElementById("computerscore");
const yourScore = document.getElementById("yourscore");

 const winnotifi = document.getElementById("winmsg");
 const lostnotifi = document.getElementById("lostmsg");
 const tienotifi = document.getElementById("tiemsg");

 
let yourscorecounter=0;
let computerscorecounter=0;

 let botscore;
let humanscore;

function clickone(){
  humanscore =0;
  botscore= Math.floor((Math.random()*3));

  if(humanscore==botscore){
    tienotifi.style.display="block";
    lostnotifi.style.display="none";
    winnotifi.style.display="none";

  }
  else if(humanscore + 1 == botscore){
    computerscorecounter++;
    computerScore.textContent=`Computer: ${computerscorecounter}`;
    lostnotifi.style.display="block";
    tienotifi.style.display="none";
    winnotifi.style.display="none";
  }
  else if(humanscore + 2 == botscore){
    yourscorecounter ++;
    yourScore.textContent=`${yourscorecounter} :you`;
    winnotifi.style.display="block";
    tienotifi.style.display="none";
    lostnotifi.style.display="none";
  }
}
  

function clicktwo(){
  humanscore = 1;
  botscore= Math.floor((Math.random()*3));
  
  if(humanscore==botscore){
    tienotifi.style.display="block";
    lostnotifi.style.display="none";
    winnotifi.style.display="none";
  }
  else if(humanscore + 1 == botscore){
    yourscorecounter ++;
    yourScore.textContent=`${yourscorecounter} :you`;
    winnotifi.style.display="block";
    tienotifi.style.display="none";
    lostnotifi.style.display="none";
  }
  else if(humanscore - 1 == botscore){
    computerscorecounter++;
    computerScore.textContent=`Computer: ${computerscorecounter}`;
    lostnotifi.style.display="block";
    tienotifi.style.display="none";
    winnotifi.style.display="none";
  }

}

function clicktree(){
  humanscore = 2;
  botscore= Math.floor((Math.random()*3));
  
  if(humanscore==botscore){
    tienotifi.style.display="block";
    lostnotifi.style.display="none";
    winnotifi.style.display="none";
  }
  else if(humanscore - 1 == botscore){
    computerscorecounter++;
    computerScore.textContent=`Computer: ${computerscorecounter}`;
    lostnotifi.style.display="block";
    tienotifi.style.display="none";
    winnotifi.style.display="none";
  }
  else if(humanscore - 2 == botscore){
    yourscorecounter ++;
    yourScore.textContent=`${yourscorecounter} :you`;
    winnotifi.style.display="block";
    tienotifi.style.display="none";
    lostnotifi.style.display="none";
    
  }
}

function resetpoints(){
  yourscorecounter = 0;
  computerscorecounter =  0;
  computerScore.textContent=`Computer: ${computerscorecounter}`;
  yourScore.textContent=`${yourscorecounter} :you`;
}