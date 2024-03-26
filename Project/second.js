var playerHP=100;
var opponentHP=100;
var randomizer;
var turn;
var turndec=0;
var damage;
var oppdamage;
var choice;
var holder;
var tosscoin;
function setGame(){
    document.getElementById("attack").disabled=true;
    document.getElementById("defend").disabled=true;
    document.getElementById("Heads").disabled=false;
    document.getElementById("Tails").disabled=false;
    playerHP=100;
    opponentHP=100;

    document.getElementById("choice").innerHTML="";
    document.getElementById("coin").innerHTML="";
    document.getElementById("displaychoice").innerHTML="";
    document.getElementById("oppchoice").innerHTML="";
    document.getElementById("turnEvent").innerHTML="";
    document.getElementById("playerHP").innerHTML="Player: "+ playerHP;
    document.getElementById("opponentHP").innerHTML="Opponent: "+ opponentHP;
}
setGame();
function checkHP(playerHP,opponentHP){
    if(playerHP<=0){
        playerHP=0;
        document.getElementById("playerHP").innerHTML="Player: "+ playerHP;
        document.getElementById("turnEvent").innerHTML="Opponent won!";
        document.getElementById("attack").disabled=true;
        document.getElementById("defend").disabled=true;
        document.getElementById("Heads").disabled=true;
        document.getElementById("Tails").disabled=true;
    }
    if(opponentHP<=0){
        opponentHP=0;
        document.getElementById("opponentHP").innerHTML="Opponent: "+ opponentHP;
        document.getElementById("turnEvent").innerHTML="Player won!";
        document.getElementById("attack").disabled=true;
        document.getElementById("defend").disabled=true;
        document.getElementById("Heads").disabled=true;
        document.getElementById("Tails").disabled=true;
    }
    if(opponentHP<=0&&playerHP<=0){
        playerHP=0;
        document.getElementById("playerHP").innerHTML="Player: "+ playerHP;
        opponentHP=0;
        document.getElementById("opponentHP").innerHTML="Opponent: "+ opponentHP;
        document.getElementById("turnEvent").innerHTML="No one won!";
        document.getElementById("attack").disabled=true;
        document.getElementById("defend").disabled=true;
        document.getElementById("Heads").disabled=true;
        document.getElementById("Tails").disabled=true;
    }
}
function tossCoin(){
    randomizer = Math.floor(Math.random()*10);
    if(randomizer%2==0){
        document.getElementById("coin").innerHTML="Coin is Heads";
        flipacoin = "Heads";
        return flipacoin;
    }
    else{
        document.getElementById("coin").innerHTML="Coin is Tails";  
        flipacoin = "Tails";
        return flipacoin;
    }

}
function turnBattle(choice){
    document.getElementById("choice").innerHTML="You chose "+choice+"!";
    document.getElementById("Heads").disabled=true;
    document.getElementById("Tails").disabled=true;
    flipacoin = tossCoin();
    if(flipacoin==choice){
            document.getElementById("attack").disabled=false;
            document.getElementById("defend").disabled=true;
    }
    else{
        enableAction();
        damage=calculateDamage();
        playerHP=playerHP-damage;
        document.getElementById("oppchoice").innerHTML="The Opponent chose to attack! ";
        document.getElementById("playerHP").innerText="Player: "+ playerHP;
        document.getElementById("turnEvent").innerHTML="They inflict "+damage+" damage!";
    }
    
}
function enableAction(){
    document.getElementById("attack").disabled=false;
    document.getElementById("defend").disabled=false;
}
var b;
var c;



function calculateDamage(){
    var damage = Math.floor(Math.random()*(6-1)+1);
    return damage;
}
function opponentAction(){
    var holder = Math.floor(Math.random()*2);
    return holder;
}
function playerAttack(turndec){
    enableAction();

    if (turndec==1){
        document.getElementById("displaychoice").innerHTML="You Attacked!";
        damage = calculateDamage();
        opponentHP = opponentHP - damage;
        document.getElementById("opponentHP").innerText="Opponent: "+ opponentHP;
        document.getElementById("turnEvent").innerText="You inflict " + damage +" against them.";
    }
    else{
        document.getElementById("displaychoice").innerHTML="You Attacked!";
        b=opponentAction();
        switch(b){
            case 0:
                damage=calculateDamage()
                damage = damage - 3;
                if(damage ==1 || damage ==2){
                    document.getElementById("oppchoice").innerHTML="The Opponent chose to defend!";
                    opponentHP=opponentHP-damage;
                    document.getElementById("opponentHP").innerText="Opponent: "+ opponentHP;
                    document.getElementById("turnEvent").innerText="You inflict "+damage+" damage!";
                }
                else{
                    document.getElementById("oppchoice").innerHTML="The Opponent chose to defend! ";
                    document.getElementById("turnEvent").innerText="You inflict "+damage+" damage!";
                    document.getElementById("turnEvent").innerText="The Opponent Completely blocked your attack";
                }
                break;
            case 1:
                damage = calculateDamage();
                opponentHP = opponentHP - damage;
                oppdamage = calculateDamage();
                playerHP=playerHP-oppdamage;
                document.getElementById("turnEvent").innerText="You both attacked each other!";
                document.getElementById("opponentHP").innerText="Opponent: "+ opponentHP;
                document.getElementById("playerHP").innerText="Player: "+ playerHP;
                document.getElementById("oppchoice").innerHTML="The Opponent chose to Attack!";
                document.getElementById("turnEvent").innerText="You both attacked each other!  You inflict " + damage +" against them. They inflict "+oppdamage+" damage on you!";
        }
    }
    checkHP(playerHP,opponentHP);
}
function playerDefend(){
    enableAction();

    document.getElementById("displaychoice").innerHTML="You Defended!";
    choice=0; /*Shows that the choice is to defend; 0 is defend, 1 is attack*/
    holder=opponentAction();
    if(choice==holder){
        document.getElementById("oppchoice").innerHTML="The Opponent chose to defend!";
        document.getElementById("turnEvent").innerHTML="You both defended, you fucking pussies";
    }
    else if((choice==0)&&(holder==1)){
        damage=calculateDamage()
        damage = damage - 3;
        if(damage ==1 || damage ==2){
            playerHP=playerHP-damage;
            document.getElementById("oppchoice").innerHTML="The Opponent chose to attack! ";
            document.getElementById("playerHP").innerText="Player: "+ playerHP;
            document.getElementById("turnEvent").innerHTML="You tried to defend the opponent's attack. They inflict "+damage+" damage!";
        }
        else{
            document.getElementById("oppchoice").innerHTML="The Opponent chose to attack! ";
            document.getElementById("turnEvent").innerHTML="You completely block the Opponent's attack!";
        }

    }
    checkHP(playerHP,opponentHP);
}