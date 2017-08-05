function changeBackgroundColor (elementSelector, toColor) {
    document.querySelector(elementSelector).style.backgroundColor = toColor;
}


function reisOpp(){
    console.log("Reiser seg opp");
}

function snu (grader) {
    console.log("Snur ", grader , " grader");
}

function walk (meter) {
    console.log("Gå ", meter, " meter")
}

function plukkOpp ( ting ) {
    console.log("Plukk opp", ting)
}

function settNed (ting) {
    console.log("Sett ned", ting)
}


function hent (ting) {
    console.log("Hent: ", ting)

    reisOpp();


    snu(90);
    walk(1.5)
    snu(-90)
    walk(2.5)
    snu(-90)
    walk (1)
    

    plukkOpp(ting)
    

    snu (180)
    walk (1)
    snu (90)
    walk (2.5)
    snu (90)
    walk (1.5)
    snu (90)
    
    
    settNed(ting)

}



hent('frokostjuice')
hent ('telefon')
hent ('polarbrød')
hent ('hodetelefoner')

