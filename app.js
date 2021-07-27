var mainId = document.querySelector('#mainId')
var lineId = document.querySelector('#tamaLine');
var lineIdValue = lineId.selectedOptions[lineId.selectedIndex].value;

// mainId.innerText = 'o';
if (lineIdValue == 'tamaStarBubinga'){
    mainId.innerText = 'TB';
}else if (lineIdValue == 'tamaStarMaple'){
    mainId.innerText = 'TM';
}
