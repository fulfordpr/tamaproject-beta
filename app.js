// tama series
var mainId = document.querySelector('#series');
var lineId = document.querySelector('#tamaLine');
//drum type
var type = document.querySelector('#type');
//star series drums
var starDrumType = document.querySelector('#starDrumType');
var kDrumSizeStar = document.getElementById('kDrumSizeStar');
var snareSize = document.getElementById('snareSize');
var tDrumSizeStar = document.getElementById('tDrumSizeStar');
var fDrumSizeStar = document.getElementById('fDrumSizeStar');
//drum sizes
var size = document.querySelector('#size');
//add ons
var hoopsId = document.querySelector('#hoopsId');
var hoops = document.querySelector('#hoops');
var inlay = document.querySelector('#inlay');
var inlayOption = document.querySelector('#inlayOption');
//pricing
var retail = document.getElementById('retail');
var map = document.getElementById('map');
var cost = document.getElementById('cost');
var gp = document.getElementById('gp');

var outputId = ''
// var lineIdValue = lineId.selectedOptions[lineId.selectedIndex].value;


// function password(){
//     let pass = prompt('What is the secret code?');

//     while (pass != 'SweetH2o'){
//         pass;
//     }
// }




//setting pricing for each itemID ###############################
var pricing = [
    //Star Snares ###################
    {
        id: 'TBS136',
        retail: 1647.00,
        map: 999.00,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBS1455',
        retail: 1647.00,
        map: 999.00,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBS1465',
        retail: 1647.00,
        map: 999.00,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBS148',
        retail: 1647.00,
        map: 999.00,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    //###################################
    //Star Kicks ########################
    //###################################
    {
        id: 'TBB1612',
        retail: 3891.00,
        map: 2362.39,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB1814',
        retail: 4002,
        map: 2429.79,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB1815',
        retail: 4002,
        map: 2429.79,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB1816',
        retail: 4002,
        map: 2429.79,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2014',
        retail: 4155,
        map: 2522.68,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2016',
        retail: 4155,
        map: 2522.68,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2017S',
        retail: 4155,
        map: 2522.68,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2018',
        retail: 4155,
        map: 2522.68,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2214',
        retail: 4374,
        map: 2655.64,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2216',
        retail: 4374,
        map: 2655.64,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2217',
        retail: 4374,
        map: 2655.64,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2218',
        retail: 4374,
        map: 2655.64,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2414',
        retail: 4610,
        map: 2798.93,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2416',
        retail: 4610,
        map: 2798.93,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2417',
        retail: 4610,
        map: 2798.93,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2418',
        retail: 4610,
        map: 2798.93,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2614',
        retail: 5012,
        map: 3043,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBB2616',
        retail: 5012,
        map: 3043,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    //####################################################
    //STAR RACK TOMS #####################################
    //####################################################
    {
        id: 'TBT0806',
        retail: 1410,
        map: 856.07,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT0807',
        retail: 1410,
        map: 856.07,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT0808S',
        retail: 1410,
        map: 856.07,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1065',
        retail: 1555,
        map: 944.11,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1007',
        retail: 1555,
        map: 944.11,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1008',
        retail: 1555,
        map: 944.11,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1009',
        retail: 1555,
        map: 944.11,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1010',
        retail: 1555,
        map: 944.11,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1207',
        retail: 1743,
        map: 1058.25,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1208',
        retail: 1743,
        map: 1058.25,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1209S',
        retail: 1743,
        map: 1058.25,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1210',
        retail: 1743,
        map: 1058.25,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1211',
        retail: 1743,
        map: 1058.25,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1375',
        retail: 1934,
        map: 1174.21,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1309',
        retail: 1934,
        map: 1174.21,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1310',
        retail: 1934,
        map: 1174.21,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1311',
        retail: 1934,
        map: 1174.21,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1312',
        retail: 1934,
        map: 11174.21,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1408',
        retail: 2127,
        map: 1291.39,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1410',
        retail: 2127,
        map: 1291.39,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1411',
        retail: 2127,
        map: 1291.39,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1412',
        retail: 2127,
        map: 1291.39,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBT1413',
        retail: 2127,
        map: 1291.39,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    //####################################################
    //STAR RACK TOMS #####################################
    //####################################################
    {
        id: 'TBF1312',
        retail: 2163,
        map: 1369.71,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1412',
        retail: 2256,
        map: 1369.71,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1413',
        retail: 2256,
        map: 1369.71,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1414',
        retail: 2256,
        map: 1369.71,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1513',
        retail: 2383,
        map: 1446.82,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1514',
        retail: 2383,
        map: 1446.82,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1515',
        retail: 2383,
        map: 1446.82,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1614',
        retail: 2527,
        map: 1446.82,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1615',
        retail: 2527,
        map: 1446.82,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1616',
        retail: 2527,
        map: 1446.82,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1814',
        retail: 2673,
        map: 1622.89,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1815',
        retail: 2673,
        map: 1622.89,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    {
        id: 'TBF1816',
        retail: 2673,
        map: 1622.89,
        get cost(){
            return (this.map * 0.5) * .8;
        }
    },
    

]


function outputItemId(){
    outputId = mainId.textContent + type.textContent + size.textContent + inlay.textContent + hoopsId.textContent;
}


//COMPARES THE MAIN ITEM ID TO EACH OBJECT IN PRICING##############
//THEN IF IT FINDS A MATCH IT CHANGES THE PRICING TO FIT THAT ITEM
//ID PER THE PRICELIST#############################################
function outputPrice(){
    for (i = 0; i < pricing.length; i++){
        if (outputId.includes(pricing[i].id)){
            retail.textContent = `Retail: $ ${pricing[i].retail}`;
            map.textContent = `MAP: $ ${pricing[i].map}`;
            cost.textContent = `Cost: $ ${pricing[i].cost.toFixed(2)}`;
            gp.textContent = `GP: $ ${(pricing[i].map - pricing[i].cost).toFixed(2)}`;
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
        inlayOption.style.display = "inline";
    }else if (value == 'tamaStarMaple'){
        newText = 'TM';
        hoops.style.display = "inline";
        inlayOption.style.display = "inline";
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
    kDrumSizeStar.style.display = "none";
    tDrumSizeStar.style.display = "none";
    fDrumSizeStar.style.display = "none";
    let newText = ''
    
 
    // ADDING TO ITEMID AND MAKING THE SIZE BOX
    //AVAILABLE FOR THE PARTICULAR TYPE OF DRUM
    if (lineId.value == "tamaStarBubinga" || lineId.value == "tamaStarMaple"){
        if (value == 'sDrum'){
            newText = 'S';
            snareSize.style.display = "inline";
        }else if (value == 'kDrum'){
            newText = 'B';
            kDrumSizeStar.style.display = "inline";
        }else if (value == 'fTom'){
            newText = 'F';
            fDrumSizeStar.style.display = "inline";
        }else if (value == 'rTom'){
            newText = 'T';
            tDrumSizeStar.style.display = "inline";
        }
    
        type.textContent = newText;
    } else if (lineId.value == "tamaStarWal"){
        if (value == 'sDrum'){
            newText = 'S';
            snareSize.style.display = "inline";
        }else if (value == 'kDrum'){
            newText = 'B';
            kDrumSizeStar.style.display = "inline";
        }else if (value == 'fTom'){
            newText = 'F';
            fDrumSizeStar.style.display = "inline";
        }else if (value == 'rTom'){
            newText = 'T';
            tDrumSizeStar.style.display = "inline";
        }
    
        type.textContent = newText;
    }
    outputItemId()
    outputPrice()
    
});





//Selecting Drum sizes #################################

//SNARE DRUMS ##########################################
snareSize.addEventListener('change', (event) =>{
    size.textContent = '';
    const value = event.target.value;
    let newText = value;
    size.textContent = newText;
    outputItemId()
    outputPrice()
});


//Kick Drum Sizes #######################################
kDrumSizeStar.addEventListener('change', (event) =>{
    size.textContent = '';
    const value = event.target.value;
    let newText = value;
    size.textContent = newText;
    outputItemId()
    outputPrice()
});


//Tom Drum Sisez #######################################
tDrumSizeStar.addEventListener('change', (event) =>{
    size.textContent = '';
    const value = event.target.value;
    let newText = value;
    size.textContent = newText;
    outputItemId()
    outputPrice()
});


fDrumSizeStar.addEventListener('change', (event) =>{
    size.textContent = '';
    const value = event.target.value;
    let newText = value;
    size.textContent = newText;
    outputItemId()
    outputPrice()
});







//Selecting inlay option ###############################
inlayOption.addEventListener('change', (event) =>{
    inlay.textContent = '';
    const value = event.target.value;
    let newText = '';
    if (value != "Choose"){
        newText = value;
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

    if (value != "Choose" && value != "match" ){
        newText = value
    }

    hoopsId.textContent = newText;
    outputItemId()
    outputPrice()
});

