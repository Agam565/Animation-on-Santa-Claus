import PlayerStates from "./PlayerStates.js";
import SpriteAnimation from "./SpriteAnimation.js";
export default class Player{
    constructor(){
    this.state = PlayerStates.idle;
    this.#createAnimations();
    document.addEventListener("keydown", this.#keydown);
    document.addEventListener("keyup",this.#keyup);
    }
    draw(ctx){
    this.#setState();
    const animation = this.animatons.find((animation)=>animation.isFor(this.state));
    const image = animation.getImage();
    const x = -40;
    let y = 100;
    if(this.state === PlayerStates.slide){
    y = 200;
    }
    ctx.drawImage(image,x,y);
    }
    #setState(){
        if(this.deadPressed){
        this.state = PlayerStates.dead;
        }
 else if(this.slidePressed){
    this.state = PlayerStates.slide;
}
    else if(this.jumpPressed){
      this.state = PlayerStates.jump;
        }
    else if(this.runPressed && this.rightPressed){
this.state = PlayerStates.run;
        }
    else if(this.rightPressed){
    this.state = PlayerStates.walk
    }
    else{
    this.state = PlayerStates.idle;
    }
    }
    #createAnimations(){
        this.idleAnimation = new SpriteAnimation("Idle (?).png",16,6,PlayerStates.idle);
        this.runAnimation = new SpriteAnimation("Run (?).png",11,10,PlayerStates.run);
        this.walkAnimation = new SpriteAnimation("Walk (?).png",13,6,PlayerStates.walk);
        this.jumpAnimation = new SpriteAnimation("Jump (?).png",16,4,PlayerStates.jump);
        this.slideAnimation = new SpriteAnimation("Slide (?).png",11,6,PlayerStates.slide);
        this.deadAnimation = new SpriteAnimation("Dead (?).png",17,6,PlayerStates.dead,true);
this.animatons = [
    this.idleAnimation,
    this.runAnimation,
    this.walkAnimation,
    this.jumpAnimation,
    this.slideAnimation,
    this.deadAnimation,
];
    }
    #keydown = (event) => {
        switch(event.code){
        case "ArrowRight":
        this.rightPressed = true;
        break;
        case "ArrowDown":
            this.slidePressed = true;
             break;
        case "ShiftLeft":
            this.runPressed = true;
            break;
            case "Space":
            this.jumpPressed = true;
            break;
        case "KeyD":
            this.deadPressed = true;
            break;
            case "KeyR":
                this.deadPressed = false;
                this.deadAnimation.reset();
                break;
        }
    }
    #keyup = (event) => {
            switch(event.code){
            case "ArrowRight":
            this.rightPressed = false;
            break;
            case "ArrowDown":
                this.slidePressed = false;
                 break;
            case "ShiftLeft":
            this.runPressed = false;
            break;
            case "Space":
                this.jumpPressed = false;
                break;
        
            }
    }
}