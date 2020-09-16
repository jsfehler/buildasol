function moveVertical(name, direction) {
    elems = document.getElementsByClassName(name);
    var style = window.getComputedStyle(elems[0]);
    var margin = style.getPropertyValue('margin-top');
    var margin_number = margin.replace('px', '')
    
    elems[0].style.marginTop = parseInt(margin_number) + direction;
    elems[1].style.marginTop = parseInt(margin_number) + direction;
}


function moveHorizontal(name, direction) {
    elems = document.getElementsByClassName(name);
    var style = window.getComputedStyle(elems[0]);
    var margin = style.getPropertyValue('margin-left');
    var margin_number = margin.replace('px', '')
    
    elems[0].style.marginLeft = parseInt(margin_number) + direction;
    elems[1].style.marginLeft = parseInt(margin_number) + direction;
}


// Reset position of a piece
function resetPosition(name) {
    elems = document.getElementsByClassName(name);
    var style = window.getComputedStyle(elems[0]);
    
    elems[0].style.marginLeft = 4;
    elems[1].style.marginLeft = 4;

    elems[0].style.marginTop = 7;
    elems[1].style.marginTop = 7;
}
