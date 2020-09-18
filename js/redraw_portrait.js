function redrawPortrait(elementId, outputContainer) {
    // var c = document.getElementById(outputContainer);
    var redrawCanvases = document.getElementsByClassName(outputContainer)
    redrawContext1x = redrawCanvases[0].getContext('2d')
    redrawContext2x = redrawCanvases[1].getContext('2d')

    var img = document.getElementById(elementId);
    var tempCanvas = document.createElement('canvas');
    tempCanvas.width = img.width;
    tempCanvas.height = img.height;

    var tempCanvasContext = tempCanvas.getContext('2d');
    tempCanvasContext.drawImage(img, 0, 0, img.width, img.height);

    for (var y = 0; y <= 80; y++) {
        for (var x = 0; x <= 64; x++) {
            data = tempCanvasContext.getImageData(x, y, 1, 1);
            rgba = data.data;

            // For every pixel, check if colour has been replaced
            ff = false;
            for (var z = 0; z < img.canvii.length; z++) {
                var canvas = img.canvii[z];
                if (rgba[0] === canvas.originalColour[0] && rgba[1] === canvas.originalColour[1] && rgba[2] === canvas.originalColour[2]) {
                    ff = hexToRgb(canvas.value)
                    ff.a = rgba[3];
                }
            }

            if (ff) {
                var d = redrawContext1x.createImageData(1, 1);

                d.data[0] = ff.r;
                d.data[1] = ff.g;
                d.data[2] = ff.b;
                d.data[3] = ff.a;

                redrawContext1x.putImageData(d, x, y);
                redrawContext2x.putImageData(d, x, y);
                ff = false;
            }
        }
    }
}
