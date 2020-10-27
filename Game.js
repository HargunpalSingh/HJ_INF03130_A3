const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is late night, you are sitting outside a coffee shop. You need some money to get something to eat. You are starving. Meanwhile, a person entering the coffee shop looks at you with awe. He decides to help you. He offers to buy you food tonight. Would you take his offer?(Y/N)";
                this.stateCur = GameState.FOOD;
                break;
            case GameState.FOOD:
                if(sInput.toLowerCase().match("y")){
                    sReply = "The person gets you what you wanted to eat. You feel so happy and ask him for anything that you could do for him. The person agrees and asks you to drop a parcel to  his girlfriend's house. He said she is mad at him and does not want to see him anymore but he wants to give her an apology gift. Would you help him out?(Y/N)";
                    this.stateCur = GameState.PARCEL;
                }
                else{
                    sReply ="The man is startled. He asks you again and you answer with a firm no. He jumps into his car and drives away. You kinda regret what you did. Your stomach starts squeaking, you get more hungry. An hour later, you see the same man pulling over to the coffee shop. This time he comes straight to you and asks you again if you still need help. Would you take his help now? (Y/N)";
                }
                break;
            case GameState.PARCEL:
                if(sInput.toLowerCase().match("y")){
                    sReply = "The person hands you the parcel and asks you to get into his car. You do the same. After 15 minutes of drive, he pulls over to the side of a small street and points to that one house. Apparently, it is his girlfriend's house. You get out of the car. As you start walking towards the main door, you hear a tire screech. The person ran away. You start feeling a bit afraid. You approach the main door, ring the doorbell to hear nothing. You knock the door and wait. There is no reply. You stay there knocking and shouting for the next 10 minutes. There is no reply. Would you DROP the parcel at the main door, TAKE the parcel with you or try to BREAK IN??";
                    this.stateCur = DOOR;
                }
                else {
                    sReply = "You firmly deny to help him out. He asks again, you raise your voice and ask him to get out of here. He takes out a gun from his sleeve and shoots in your head. Thanks for playing.";
                    this.stateCur = GameState.WELCOMING;
                } 
                break;
            case GameState.DOOR:
                if(sInput.toLowerCase().match("drop")) {
                    sReply = "There is no one in the house, the person who gave you the parcel left and you are already afraid. You drop the parcel at the main door and start running away from the house. On your way, you see the stranger's car just down the street. You hear another tire screech. The car comes straight up to you. The stranger rams you with his car. You are dead. Thanks for dying.";
                    this.stateCur = GameState.WELCOMING;
                }
                if(sInput.toLowerCase().match("take")) {
                    sReply = "You take the parcel back with you. On your way back, you see the stranger standing with his car just across the street. You approach him. He asks you if you had given the parcel to her. Just as you are about to explain anything to him, he notices the parcel in your hand. He grows furious and says 'I had given you one single task and yet you failed to do it.' He opens his coat, takes out a dagger and stabs you. You are a dead man. Thanks for dying.";
                    this.stateCur = GameState.WELCOMING;
                }
                else {
                    sReply = "You figured out the door is already not locked. Here you just stepped in and suddenly a lady comes in front of you. On asking why you are here, you explained everything about the parcel and the man who gave it. On this she says that the man was already dead a couple of years back. Do you want to RUN back or still CONTINUE the talk with lady?";
                    this.stateCur = GameState.DEADMAN;
                }
                break;
            case GameState.DEADMAN:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "You start running away from the house. On your way, you see the stranger's car just down the street. You hear another tire screech. The car comes straight up to you. The stranger rams you with his car. You are dead. Thanks for dying.";
                    this.stateCur = GameState.WELCOMING;
                }
                else {
                    sReply = "On continuing your talk, she asks you to open the parcel for her. Do AGREE or NOT?";
                    this.stateCur = GameState.OPEN;
                }
            case GameState.OPEN:
                if(sInput.toLowerCase().match("agree")){
                    sReply = "On opening the box. You see the same man's head in it, who gave you the parcel. On this, the girl says let me send you what happened with his boyfriend. On this she pulls out a dagger and stabs you. Game over. Thanks for playing.";
                    this.stateCur = GameState.WELCOMING;

                }else{
                    sReply = "Girl respects your disapproval and protectively escort you till your home. Thanks for playing. HAHA Happy Halloween.";
                    this.stateCur = GameState.WELCOMING;
    
                }
                break;
        }
        return([sReply]);
    }
}


/*const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is a dark and rainy night. Bang! You have a flat tire. Too bad you don't have a spare. Do you WAIT or GO to the spooky mansion for help?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                }else{
                    sReply ="On the door is a large knocker. Do you knock or run back to your car to wait?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("knock")){
                    sReply = "The door opens and you are greeted by a hunch-back butler. He asks you to come in. Do you go in or run back to the car?"
                    this.stateCur = GameState.BUTLER;
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.BUTLER:
                if(sInput.toLowerCase().match("run")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }else{
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;
    
                }
                break;
            case GameState.TOAST:
                if(sInput.toLowerCase().match("toast")){
                    sReply = "you enter a new world of adventure ... game over";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                }
        }
        return([sReply]);
    }
}*/