function doHover(event) {
    var element = event.target;
    element.setAttribute('style', 'fill: blue');
}

function doFixedBackGround(event) {
    var element = event.target;

    element.setAttribute('style', 'fill: red');
}

function fetchXML  (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function (evt) {
        //Do not explicitly handle errors, those should be
        //visible via console output in the browser.
        if (xhr.readyState === 4) {
            callback(xhr.responseXML);
        }
    };
    xhr.send(null);
};

fetchXML("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",function(newSVGDoc){

    var n = document.importNode(newSVGDoc.documentElement,true);
    n.style.width = '100%';
    document.documentElement.appendChild(n);

    const pths = document.getElementsByTagName('path');

    for (var i = 0; i < pths.length; i++) {
        var element = pths[i];


        element.addEventListener("mouseenter", doHover, false);
        element.addEventListener("click", doFixedBackGround, false);
    }
})
