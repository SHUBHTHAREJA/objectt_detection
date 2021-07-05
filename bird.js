img=""

function back(){
    window.location="index.html"
}

function preload(){
    img= loadImage("bird.png")
}

function setup(){
    canvas=createCanvas(500,350);
    canvas.center();
   }
   function modelLoaded(){
    console.log("model loaded");
    status=true;
}

function gotResults(error,results){
    if (error) {
        console.error();
    } else {
        console.log(results);
        objects=results;
    }
}


function draw(){
    image(img,0,0,550,450)

        image(img,0,0,550,450)
        fill("red");
        noFill();
        stroke("red");  
        rect(150,50,200,350); 
        text("bird",125,55);
                document.getElementById("status").innerHTML="Status Detected";
                document.getElementById("objects").innerHTML="There is 1 Object";

    
}
