console.log('main.js');

let myImage = document.getElementById("image");
Tesseract.recognize(myImage)
.then(function(result){
    console.log(result);
    document.getElementById("result").innerHTML = result.text;
})