canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1Width = 40;
car1Height = 20;
car1Img = "car1.png"
car1X = 0;
car1Y = 0;

car2Width = 40;
car2Height = 20;
car2Img = "car2.png"
car2X = 0;
car2Y = 20;
backgroundImg = "racing.jpeg";

function Race() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImg;

    car1ImgTag = new Image();
    car1ImgTag.onload = uploadCar1;
    car1ImgTag.src = car1Img;

    car2ImgTag = new Image();
    car2ImgTag.onload = uploadCar2;
    car2ImgTag.src = car2Img;
}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0,0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1ImgTag, car1X,car1Y, car1Width, car1Height);
}

function uploadCar2(){
    ctx.drawImage(car2ImgTag, car2X,car2Y, car2Width, car2Height);
}


window.addEventListener("keydown", my_keyDown);
function my_keyDown(e) {
    keyPressed = e.keyCode;
    if(keyPressed == "38"){
        Car1up();
        console.log("up");
    }
    if(keyPressed == "40"){
        Car1down();
        console.log("down");
    }
    if(keyPressed == "37"){
        Car1left();
        console.log("left");
    }
    if(keyPressed == "39"){
        Car1right();
        console.log("right");
    }
    




    if(keyPressed == "87"){
        Car2up();
        console.log("KEY W");
    }
    if(keyPressed == "83"){
        Car2down();
        console.log("KEY S");
    }
    if(keyPressed == "65"){
        Car2left();
        console.log("KEY A");
    }
    if(keyPressed == "68"){
        Car2right();
        console.log("KEY D");
    }


    if(car1X > 260){
        car1X = 0;
        car2X = 0;
        console.log("CAR 1 WON");
        alert("Car1 Won");
    }
    
    if(car2X > 260){
        car1X = 0;
        car2X = 0;
        console.log("CAR 2 WON");
        alert("Car2 Won");
    }
}

function Car1up()
{
    if(car1Y >= 0)
	{
        car1Y = car1Y - 10;
        console.log("When up arrow is pressed,  x = " + car1X + " | y = " +car1Y);
		 uploadBackground();
         uploadCar1();
         uploadCar2();
	}
}
function Car1down()
{
	if(car1Y <= 120)
	{
        car1Y = car1Y + 10;
        console.log("When up arrow is pressed,  x = " + car1X + " | y = " +car1Y);
		uploadBackground();
        uploadCar1();
        uploadCar2();
	}
}
function Car1left()
{
	if(car1X >= 0)
	{
        car1X = car1X - 10;
        console.log("When up arrow is pressed,  x = " + car1X + " | y = " +car1Y);
		uploadBackground();
        uploadCar1();
        uploadCar2();
	}
}
function Car1right()
{
	if(car1X <= 260)
	{
        car1X = car1X + 10;
        console.log("When up arrow is pressed,  x = " + car1X + " | y = " +car1Y);
		uploadBackground();
        uploadCar1();
        uploadCar2();
   }
}



function Car2up()
{
    if(car2Y >= 0)
	{
        car2Y = car2Y - 10;
		 uploadBackground();
         uploadCar1();
         uploadCar2();
	}
}
function Car2down()
{
	if(car2Y <= 120)
	{
        car2Y = car2Y + 10;
		uploadBackground();
        uploadCar1();
        uploadCar2();
	}
}
function Car2left()
{
	if(car2X >= 0)
	{
        car2X = car2X - 10;
		uploadBackground();
        uploadCar1();
        uploadCar2();
	}
}
function Car2right()
{
	if(car2X <= 260)
	{
        car2X = car2X + 10;
		uploadBackground();
        uploadCar1();
        uploadCar2();
   }
}


