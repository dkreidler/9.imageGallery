var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
    var src = newImage.getAttribute('src');

    var eventHandlers = [];

    function createEventHandlers(i) {
        return function() {
            //console.log('My value is ' + i);
        };
    }
    for (var i = 0; i <= 5; i++) {
        eventHandlers[i] = createEventHandlers(i);
    }
    for (var j = 0; j <= 5; j++) {
        eventHandlers[j];
    }
    //var j = i;
    console.log('Image source is: ' + src);
}

// newImage.addEventListener('click', displayedImage.setAttribute('src', src));


/* Wiring up the Darken/Lighten button */