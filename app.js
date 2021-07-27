var mainId = document.querySelector('#mainId')
var lineId = document.querySelector('#tamaLine');
var starDrumType = document.querySelector('#starDrumType');
var snareSize = document.getElementById('snareSize');
var kDrumSize = document.getElementById('kDrumSize');
var inlay = document.getElementById('inlay');
// var lineIdValue = lineId.selectedOptions[lineId.selectedIndex].value;


// SELCTING THE TAMA SERIES YOU WANT TO MAKE ###############
lineId.addEventListener('change', (event) =>{
    mainId.textContent = ''
    const value = event.target.value;
    let newText = ''
    if (value == 'tamaStarBubinga'){
        newText = 'TB';
    }else if (value == 'tamaStarMaple'){
        newText = 'TM';
    }else if (value == 'tamaStarWal'){
        newText = 'TW';
    }
    mainId.textContent += newText;

});


// CHOOSING THE TYPE OF DRUM YOU WANT TO MAKE ########
starDrumType.addEventListener('change', (event) =>{
    const value = event.target.value;
    //RESETS THE DISPLAY OF THE SELECT BOXES
    snareSize.style.display = "none";
    kDrumSize.style.display = "none";
    let newText = ''
 
    // ADDING TO ITEMID AND MAKING THE SIZE BOX
    //AVAILABLE FOR THE PARTICULAR TYPE OF DRUM
    if (value == 'sDrum'){
        newText = 'S';
        snareSize.style.display = "inline";
    }else if (value == 'kDrum'){
        newText = 'B';
        kDrumSize.style.display = "inline";
    }else if (value == 'fTom'){
        newText = 'F';
    }else if (value == 'rTom'){
        newText = 'T';
    }


    if (mainId.textContent.length == 2){
        mainId.textContent += newText;
    }   
});


snareSize.addEventListener('change', (event) =>{
    const value = event.target.value;
    let newText = ''

    inlay.style.display = "none";

    if (value == '136'){
        newText = '136';
        inlay.style.display = "inline";
    }else if (value == '1455'){
        newText = '1455';
        inlay.style.display = "inline";
    }else if (value == '1465'){
        newText = '1465';
        inlay.style.display = "inline";
    }else if (value == '148'){
        newText = '148';
        inlay.style.display = "inline";
    }


    if (mainId.textContent.length == 3){
        mainId.textContent += newText;
    } 
});

inlay.addEventListener('change', (event) =>{
    const value = event.target.value;
    let newText = ''


    if (value == 'd'){
        newText = 'D';
    }else if (value == 's'){
        newText = 'S';
    }else if (value == 'n'){
        newText = '';
    }
    
    
    if (mainId.textContent.length >= 6){
        mainId.textContent += newText;
    } 

});