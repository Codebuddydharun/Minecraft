var canvas= new fabric.Canvas("myCanvas");

playerX=10;
playerY=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,left:playerX
        });
        canvas.add(player_object);
    });
}

function object_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playerY,left:playerX
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);
if(e.shiftKey==true && keypress=='80'){
    console.log("shift+p");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keypress=='77'){
    console.log("shift+m");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(keypress=='38'){
    up();
    console.log("up");
}
if(keypress=='40'){
    down();
    console.log("down");
}
if(keypress=='37'){
    left();
    console.log("left");
}
if(keypress=='39'){
    right();
    console.log("right");
}
if(keypress=='87'){
    object_update("wall.jpg");
    console.log("w");
}
if(keypress=='71'){
    object_update("ground.png");
    console.log("g");
}
if(keypress=='76'){
    object_update("light_green.png");
    console.log("l");
}
if(keypress=='84'){
    object_update("trunk.jpg");
    console.log("t");
}
if(keypress=='82'){
    object_update("roof.jpg");
    console.log("r");
}
if(keypress=='89'){
    object_update("yellow_wall.png");
    console.log("y");
}
if(keypress=='68'){
    object_update("dark_green.png");
    console.log("d");
}
if(keypress=='85'){
    object_update("unique.png");
    console.log("u");
}
if(keypress=='67'){
    object_update("cloud.jpg");
    console.log("c");
}
}