var mainId = document.querySelector('#series');
var type = document.querySelector('#type');
var size = document.querySelector('#size');
var hoopsId = document.querySelector('#hoopsId');
var inlay = document.querySelector('#inlay');
var hoops = document.querySelector('#hoops');
var lineId = document.querySelector('#tamaLine');
var starDrumType = document.querySelector('#starDrumType');
var snareSize = document.getElementById('snareSize');
var kDrumSize = document.getElementById('kDrumSize');
var inlayOption = document.querySelector('#inlayOption');
var outputId = ''
var retail = document.getElementById('retail');
var map = document.getElementById('map');
var cost = document.getElementById('cost');
var gp = document.getElementById('gp');
// var lineIdValue = lineId.selectedOptions[lineId.selectedIndex].value;


//setting pricing for each itemID ###############################
var pricing = [
    {
        id: 'TBS1465',
        retail: 1647.00,
        map: 999.00,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBS136',
        retail: 1647.00,
        map: 999.00,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    }
]

function outputItemId(){
    outputId = mainId.textContent + type.textContent + size.textContent + inlay.textContent + hoopsId.textContent;
}


//COMPARES THE MAIN ITEM ID TO EACH OBJECT IN PRICING##############
//THEN IF IT FINDS A MATCH IT CHANGES THE PRICING TO FIT THAT ITEM
//ID PER THE PRICELIST#############################################
function outputPrice(){
    for (i = 0; i < pricing.length; i++){
        // retail.textContent = '';
        // map.textContent = '';
        // cost.textContent = '';
        // gp.textContent = '';

        if (outputId.includes(pricing[i].id)){
            retail.textContent = `Retail: $ ${pricing[i].retail}`;
            map.textContent = `MAP: $ ${pricing[i].map}`;
            cost.textContent = `Cost: $ ${pricing[i].cost}`;
            gp.textContent = `GP: $ ${pricing[i].map - pricing[i].cost}`;
        } 


    }
}


// function calulateCost(){
//     return (this.map * 0.5) * 0.8;
// }


// SELCTING THE TAMA SERIES YOU WANT TO MAKE ###############
lineId.addEventListener('change', (event) =>{
    //resetting values####
    series.textContent = ''
    hoops.style.display = "none";


    const value = event.target.value;
    let newText = ''
    if (value == 'tamaStarBubinga'){
        newText = 'TB';
        hoops.style.display = "inline";
    }else if (value == 'tamaStarMaple'){
        newText = 'TM';
        hoops.style.display = "inline";
    }else if (value == 'tamaStarWal'){
        newText = 'TW';
    }
    series.textContent = newText;
    outputItemId()
    outputPrice()
});


// CHOOSING THE TYPE OF DRUM YOU WANT TO MAKE ##############
starDrumType.addEventListener('change', (event) =>{
    type.textContent = ''
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

    type.textContent = newText;
    outputItemId()
    outputPrice()
});


//Selecting Drum sizes #################################

//SNARE DRUMS ##########################################
snareSize.addEventListener('change', (event) =>{
    size.textContent = '';
    const value = event.target.value;
    let newText = '';


    if (value == '136'){
        newText = '136';
    }else if (value == '1455'){
        newText = '1455';
    }else if (value == '1465'){
        newText = '1465';
    }else if (value == '148'){
        newText = '148';
    }

    size.textContent = newText;
    outputItemId()
    outputPrice()
});



//Selecting inlay option ###############################
inlayOption.addEventListener('change', (event) =>{
    inlay.textContent = '';
    const value = event.target.value;
    let newText = '';

    
    if (value == 's'){
        newText = 'S';
    }else if (value == 'n'){
        newText = '';
    }
    
    
    inlay.textContent = newText;
    outputItemId()
    outputPrice()

});


// SETTING THE HOOP FINISH ##################
hoops.addEventListener('change', (event) =>{
    //Resetting the values
    hoopsId.textContent = '';
    const value = event.target.value;
    let newText = '';


    if (value == 'match'){
        newText = '';
    }else if (value == 'brown'){
        newText = 'B';
    }else if (value == 'natural'){
        newText = 'N';
    }
    
    hoopsId.textContent = newText;
    outputItemId()
    outputPrice()
});

