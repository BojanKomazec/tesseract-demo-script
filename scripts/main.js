console.log('main.js');

(function(){
    let imageList = document.getElementById("image-list");
    let image = document.getElementById("image");

    imageList.onchange = function(evt) {
        let selectedText = imageList.options[imageList.selectedIndex].text;
        let imageName = imageList.options[imageList.selectedIndex].value;
        console.log(`Selected text: ${selectedText}. Image name: ${imageName}.`);
        let selectedImagePath = "/images/" + imageName;

        image.setAttribute("src", selectedImagePath);
        image.style.display = 'none';
        image.style.display = 'block';
    };

    let buttonStart = document.getElementById("start-extraction");
    buttonStart.onclick = function(evt) {
        Tesseract.recognize(image)
        .progress(function(p) {
            console.log('progress', p);
            document.getElementById("status").innerHTML = p.status;
            document.getElementById("progress").innerHTML = p.progress;
        })
        .then(function(result){
            console.log(result);
            // let extractedText = result.text;
            let extractedText = '';
            result.lines.forEach(line => {
                extractedText += line.text + '<br/>';
            });
            document.getElementById("result").innerHTML = extractedText;
        });
    };
})();