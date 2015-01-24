/**
 Daniel Koval
 1/22/15
 The Duel #3
 */

//self-executing function
(function(){

    console.log("Fight!!!");

    //Define dom pieces
    var fighter1_txt = document.querySelector("Thor").querySelector("p");
    var fighter2_txt = document.querySelector("IM").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");

    //What two superheros are going to battle?
    //Player One and Player Two names
    var fighter1 = ["Thor",30,100];  //Array for fighter number one
    var fighter2 = ["Ironman",30,100];  //Array for fighter number two

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

    function fight(){
        alert(fighter1[0]+":"+fighter1[2]+"  **START!!**  "+fighter2[0]+":"+ //Input array for both fighters
        fighter2[2]);
        for (var i = 0; i < 10; i++)
        {
            //Create a way to randomly assess damage
            //random formula for health damage
            var minDamage1 = fighter1[1] * .5;  //Input array for both fighters
            var minDamage2 = fighter2[1] * .5;  //Input array for both fighters
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //inflict the damage
            fighter1[2]-=f1;  //Changed so array is input
            fighter2[2]-=f2;  //Changed so array is input

            console.log(fighter1[2]+" "+fighter2[2]);

        //check for a winner
        var result = winnerCheck();
        console.log(result);
        if (result==="no winner")  //If there is no winner, function will move on to next progressive round
        {
            round++;
            alert(fighter1[0]+":"+fighter1[2]+"  **ROUND "+round+" OVER"+"** "+fighter2[0]+":"+fighter2[2]);

        } else{
            alert(result);
            break;
        };

        };

    };

    function winnerCheck(){
    var result="no winner";
    if (fighter1[2]<1 && fighter2[2]<1)                 //See if both fighters' health is <1 - both lose
    {
        result = "GAME OVER! You are both dead!";
    } else if(fighter1[2]<1){                           //See if fighter ones' health is <1 - fighter two wins
        result ="GAME OVER! " +fighter2[0]+" WINS!!!"
    } else if(fighter2[2]<1)                            //See if fighter twos' health is <1 - fighter one wins
    {
        result ="GAME OVER! " +fighter1[0]+" WINS!!!"
    };
    return result;
    };

    /***** The program gets started below *****/
    fight();

})();