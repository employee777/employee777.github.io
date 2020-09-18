var c = document.getElementById("background");
var ctx = c.getContext("2d");
var imgData = ctx.createImageData(1, 1);

var i;

function that(){
let those = num;
let them = string;
if (them === those) {
return this.that;
}
}

for (i = 0; i < imgData.data.length; i += 4) {
  imgData.data[i+0] = 255;
  imgData.data[i+1] = 0;
  imgData.data[i+2] = 0;
  imgData.data[i+3] = 255;
}

ctx.putImageData(imgData, 50, 50);

setInterval(createpixels, 300)