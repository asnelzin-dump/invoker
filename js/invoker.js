var nextSphere = 1;

var spells = {
    "wex,wex,wex": "emp",
    "quas,wex,wex": "tornado",
    "exort,wex,wex": "alacrity",
    "quas,quas,wex": "ghost-walk",
    "exort,quas,wex": "deafening-blast",
    "exort,exort,wex": "chaos-meteor",
    "quas,quas,quas": "cold-snap",
    "exort,quas,quas": "ice-wall",
    "exort,exort,quas": "forge-spirit",
    "exort,exort,exort": "sun-strike"
};

function getCombo() {
    combo = [];
    for (i = 1; i < 4; i++) {
        selector = "div#" + i;
        classList = $(selector).attr('class').split(/\s+/);
        combo.push(classList[1]);
    }
    return combo;
}

function addSphere(sid) {
    selector = "div#" + nextSphere;
    $(selector).removeClass();
    $(selector).addClass("sphere " + sid);
    nextSphere ++;
    if (nextSphere == 4)
        nextSphere = 1;
}

function playSound(spell_id) {
    audioElem = document.getElementById(spell_id);
    //audioElem.play();
    if (audioElem.paused == true) {
        audioElem.play();
    }
    else {
        audioElem.currentTime = 0;
    }
}

function invoke() {
    spell_id = spells[getCombo().sort()];
    selector = "div#spell";
    $(selector).removeClass();
    $(selector).addClass("spell " + spell_id);
    playSound(spell_id);
    nextSphere = 1;
}



$( "body" ).keypress(function( event ) {
    switch ( event.which ) {
        case 113:
            addSphere("quas");
            break;
        case 119:
            addSphere("wex");
            break;
        case 101:
            addSphere("exort");
            break;
        case 114:
            invoke();
            break
    }
});
