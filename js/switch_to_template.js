// Base settings for each character
var solTemplate = {
    'hairFront': 'assets/hair_front_sol_01.png',
    'hairBack': 'assets/hair_back_sol_01.png',
    'eyes': 'assets/eyes_sol_01.png',
    'mouth': 'assets/mouth_sol_01.png',
    'body': 'assets/body_sol_01.png',
    'accessory': 'assets/accessory_sol_01.png',
}


var kyTemplate = {
    'hairFront': 'assets/hair_front_ky_01.png',
    'hairBack': 'assets/hair_back_none.png',
    'eyes': 'assets/eyes_ky_01.png',
    'mouth': 'assets/mouth_ky_01.png',
    'body': 'assets/body_ky_01.png',
    'accessory': 'assets/accessory_none.png',
}


// Swap all parts to a template
function switchToTemplate(template) {
    var elem = document.getElementById('hair');
    elem.src = template.hairFront;
    
    elem.onload = function () {
        resetPosition('redrawHair');
        scrapeColours('hair', 'hairColours', 'redrawHair');
        redrawPortrait('hair', 'redrawHair');
    }
    
    var elem = document.getElementById('hairBack');
    elem.src = template.hairBack;
    
    elem.onload = function () {
        resetPosition('redrawHairBack');
        scrapeColours('hairBack', 'hairBackColours', 'redrawHairBack');
        redrawPortrait('hairBack', 'redrawHairBack');
    }
    
    var elem = document.getElementById('eyes');
    elem.src = template.eyes;
    
    elem.onload = function () {
        resetPosition('redrawEyes');
        scrapeColours('eyes', 'eyesColours', 'redrawEyes');
        redrawPortrait('eyes', 'redrawEyes');
    }
    
    var elem = document.getElementById('mouth');
    elem.src = template.mouth;
    
    elem.onload = function () {
        resetPosition('redrawMouth');
        scrapeColours('mouth', 'mouthColours', 'redrawMouth');
        redrawPortrait('mouth', 'redrawMouth');
    }
    
    var elem = document.getElementById('body');
    elem.src = template.body;
    
    elem.onload = function () {
        resetPosition('redrawBody');
        scrapeColours('body', 'bodyColours', 'redrawBody');
        redrawPortrait('body', 'redrawBody');
    }
    
    var elem = document.getElementById('accessory');
    elem.src = template.accessory;
    
    elem.onload = function () {
        resetPosition('redrawAccessory');
        scrapeColours('accessory', 'accessoryColours', 'redrawAccessory');
        redrawPortrait('accessory', 'redrawAccessory');
    }
}