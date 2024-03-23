var playerHP=100;
var opponentHP=100;
var randomizer;
var turn;
var turndec=0;
var damage;
var oppdamage;
var choice;
var flipacoin;

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
    flipacoin = tossCoin();
    if(flipacoin==choice){
        playerAttack(1)
        startBattle();
    }
    else{
        startBattle();
    }
}
function calculateDamage(){
    var damage = Math.floor(Math.random()*(6-1)+1);
    return damage;
}

var b;
var c;

function opponentAction(){
    var b = Math.floor(Math.random()*2);
    return b;
}

function playerAttack(turndec){
    if (turndec==1){
        document.getElementById("displaychoice").innerHTML="You Attacked!";
        damage = calculateDamage();
        opponentHP = opponentHP - damage;
        document.getElementById("opponentHP").innerText=opponentHP;
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
                    document.getElementById("opponentHP").innerText=opponentHP;
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
                document.getElementById("opponentHP").innerText=opponentHP;
                document.getElementById("playerHP").innerText=playerHP;
                document.getElementById("oppchoice").innerHTML="The Opponent chose to Attack!";
                document.getElementById("turnEvent").innerText="You both attacked each other!  You inflict " + damage +" against them. They inflict "+oppdamage+" damage on you!";
        }
    }

    
    
}
function playerDefend(){
    document.getElementById("displaychoice").innerHTML="You Defended!";
    c=0;
    b=opponentAction();
    if(c==b){
        document.getElementById("oppchoice").innerHTML="The Opponent chose to defend!";
        document.getElementById("turnEvent").innerHTML="You both defended, you fucking pussies";
    }
    else if((c==0)&&(b==1)){
        damage=calculateDamage()
        damage = damage - 3;
        if(damage ==1 || damage ==2){
            playerHP=playerHP-damage;
            document.getElementById("oppchoice").innerHTML="The Opponent chose to attack! ";
            document.getElementById("playerHP").innerText=playerHP;
            document.getElementById("turnEvent").innerHTML="You tried to defend the opponent's attack. They inflict "+damage+" damage!";
        }
        else{
            document.getElementById("oppchoice").innerHTML="The Opponent chose to attack! ";
            document.getElementById("turnEvent").innerHTML="You completely block the Opponent's attack!";
        }

    }
}