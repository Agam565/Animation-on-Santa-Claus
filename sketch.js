import img from "./img.js";
import Player from "./Player.js";
const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 999 * 1.2;
canvas.height = 571 * 1.2;
const background = img("background.jpg");
const player = new Player
function game(){
ctx.drawImage(background,0,0, 999*1.2,571*1.2);
player.draw(ctx);
}
setInterval(game,1000/60)