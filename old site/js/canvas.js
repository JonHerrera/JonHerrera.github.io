//calling canvas to draw on
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("selfie");

//making the circle
ctx.drawImage(img, 25, 0, 225, 250, 0, 0, 250, 250);
//calling an image(img, clipStartx. clipStarty, clipWidth, clipHeight, x, y, width, height)
ctx.globalCompositeOperation='destination-atop';
//the image will only appear ontop of where it overlapped the destination
ctx.beginPath();
ctx.arc(125, 125, 120, 0, 2 * Math.PI);
//making the circle with some space for the border below
ctx.fillStyle = "black";
ctx.fill();
ctx.arc(125, 125, 125, 0, 2 * Math.PI);
//the radius is just a bit bigger to look like a border
ctx.fillStyle = "#6C7A89";
ctx.fill();



