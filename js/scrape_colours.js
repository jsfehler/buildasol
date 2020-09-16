function scrapeColours(elementId, outputContainer, redrawCanvas) {
    // Scrape colours from an image
    var img = document.getElementById(elementId);

    // Create temp canvas to parse through image
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    var colourData = [];

    var context = canvas.getContext('2d');
    for (var y = 0; y <= canvas.height; y++) {
        for (var x = 0; x <= canvas.width; x++) {
            var pixelData = context.getImageData(x, y, 1, 1).data;

            var pixelRGBA = [pixelData[0], pixelData[1], pixelData[2], pixelData[3]];

            var skip = false;
            // Ignore duplicate colours
            for (var j = 0; j < colourData.length; j++) {

                if ((colourData[j][0] === pixelRGBA[0]) && (colourData[j][1] === pixelRGBA[1]) && (colourData[j][2] === pixelRGBA[2])) {
                    skip = true;
                    break;
                }
            }

            if (skip === false) {
                colourData.push(pixelRGBA);
            }
        }
    }

    // Delete temp canvas
    canvas.remove();

    // Create colour boxes
    var h = document.getElementById(outputContainer);
    var canvii = [];
    for (var i = 0; i < colourData.length; i++) {
        input = document.createElement('input');
        input.width = 32;
        input.height = 32;
        input.type = 'color'
        input.value = rgbToHex(colourData[i][0], colourData[i][1], colourData[i][2], colourData[i][3])
        input.id = `${outputContainer}${i}`
        input.originalColour = [colourData[i][0], colourData[i][1], colourData[i][2], colourData[i][3]];

        h.appendChild(input);

        // recolour sprite after picking
        input.addEventListener('change', function() {
            redrawPortrait(elementId, redrawCanvas);
        })

        canvii.push(input);

        // Skip transparency
        if ((colourData[i][0] === 0) && (colourData[i][1] === 0) && (colourData[i][2] === 0) && (colourData[i][3] === 0)) {
            input.setAttribute('style', 'display:None;')
        }

    }
    // Erase previous results
    if (img.canvii !== undefined) {
        for (var i = 0; i < img.canvii.length; i++) {
            img.canvii[i].remove();
        }
    }
    img.canvii = canvii;
}