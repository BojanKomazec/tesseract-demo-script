console.log('main.js');

(function(){
    let myImage = document.getElementById("image");
    Tesseract.recognize(myImage)
    .progress(function(p) {
        console.log('progress', p);
        document.getElementById("status").innerHTML = p.status;
        document.getElementById("progress").innerHTML = p.progress;
    })
    .then(function(result){
        console.log(result);
        document.getElementById("result").innerHTML = result.text;
    });
})();