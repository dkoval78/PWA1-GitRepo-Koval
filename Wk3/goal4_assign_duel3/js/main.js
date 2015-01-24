/**
 Daniel Koval
 1/22/15
 The Duel #3
 */

//self-executing function
(function(){

    console.log("Fight!!!");

    //Define dom pieces
    var fighter1_txt = document.querySelector("#Thor").querySelector("p");
    var fighter2_txt = document.querySelector("#IM").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");

    console.log();

    //Set up click event
    button.addEventListener("click", fight, false);

    //Array
    var fighters = [
        {

            name:"Thor",
            damage:30,
            health:100
        },
        {
            name:"Ironman",
            damage:30,
            health:100

            }];


    //Old code
    //What damage will they be assigned?
    //Player One and Player Two damage
   //Old code var playerOneDamage = "30";
    //Old code var playerTwoDamage = "30";

    //Start each superhero with 100 health
    //Player One and Player Two health
    //Old code var playerOneHealth = "100";
    //Old code var playerTwoHealth = "100";

    //Initiate the round
    var round=1;

    //Initialize DOM innerHTML
    round.txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

    //Fight function
    function fight(){
        //alert(fighter1[0]+":"+fighter1[2]+"  **START!!**  "+fighter2[0]+":"+ //Input array for both fighters
        //fighter2[2]);
        //for (var i = 0; i < 10; i++)
        fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name = ":  " + fighters[1].health;

            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);

            //Inflict damage
            fighters[0].health -= f1;
            fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);

        {
            //Create a way to randomly assess damage
            //random formula for health damage
            //var minDamage1 = fighter1[1] * .5;  //Input array for both fighters
            //var minDamage2 = fighter2[1] * .5;  //Input array for both fighters
            //var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            //var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //inflict the damage
            //fighter1[2]-=f1;  //Changed so array is input
            //fighter2[2]-=f2;  //Changed so array is input

            //console.log(fighter1[2]+" "+fighter2[2]);

        //check for a winner
        var result = winnerCheck();
        console.log(result);

            round_txt.innerHTML = "ROUND #" + round + " Results:";
            round++;

            if (result==="no winner")  //If there is no winner, function will move on to next progressive round
        {
                fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

            //round++;
            //alert(fighter1[0]+":"+fighter1[2]+"  **ROUND "+round+" OVER"+"** "+fighter2[0]+":"+fighter2[2]);

        } else{
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            //Disable button
            button.removeEventListener("click", fight, false);
            //alert(result);
            //break;

            //button.onclick
            document.querySelector('buttonblue').innterHTML = 'DONE!';
        };

        };

    };

    function winnerCheck(){
    var result="no winner";
    if (fighters[0].health <1 && fighters[1].health <1)                 //See if both fighters' health is <1 - both lose
    {
        result = "GAME OVER! You are both dead!";
    } else if(fighters[0].health<1){                           //See if fighter ones' health is <1 - fighter two wins
        result ="GAME OVER! " +fighters[1].name+" WINS!!!"
    } else if(fighters[1].health<1)                            //See if fighter twos' health is <1 - fighter one wins
    {
        result ="GAME OVER! " +fighters[0].name+" WINS!!!"
    };
    return result;
    };

    /***** The program gets started below *****/
    fight();

})();