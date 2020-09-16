function redrawPortrait(elementId, outputContainer) {
    // var c = document.getElementById(outputContainer);
    var redrawCanvases = document.getElementsByClassName(outputContainer)
    redrawContext1x = redrawCanvases[0].getContext('2d')
    redrawContext2x = redrawCanvases[1].getContext('2d')

    var img = document.getElementById(elementId);
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    for (var y = 0; y <= 80; y++) {
        for (var x = 0; x <= 64; x++) {
            data = canvas.getContext('2d').getImageData(x, y, 1, 1);
            rgba = data.data;

            // For every pixel, check if colour has been replaced

            ff = false;
            for (var z = 0; z < img.canvii.length; z++) {
                if (rgba[0] === img.canvii[z].originalColour[0] && rgba[1] === img.canvii[z].originalColour[1] && rgba[2] === img.canvii[z].originalColour[2]) {
                    ff = hexToRgb(img.canvii[z].value)
                    ff.a = rgba[3];
                    var zz = img.canvii[z].value
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
