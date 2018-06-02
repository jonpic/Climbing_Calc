var yosDS = {
    one:"5.0",
    two:"5.1/5.2",
    three:"5.3/5.4",
    four:"5.5",
    five:"5.6",
    six:"5.7",
    seven:"5.8",
    eight:"5.9",
    nine:"5.10a",
    ten:"5.10b",
    eleven:"5.10c",
    twelve:"5.10d",
};

var french = {
    one:"1",
    two:"2",
    three:"3",
    four:"4a",
    five:"4b",
    six:"4c",
    seven:"5a",
    eight:"V2-",
    nine:"V2",
    ten:"V2+",
    eleven:"V3-",
    twelve:"V3",
};

var uiaa = {
    one:"I",
    two:"II",
    three:"III",
    four:"IV",
    five:"IV+",
    six:"V",
    seven:"V+",
    eight:"VI-",
    nine:"VI",
    ten:"VI+",
    eleven:"VII-",
    twelve:"VII",
};

var hueco = {
    one:"N/A",
    two:"N/A",
    three:"N/A",
    four:"N/A",
    five:"N/A",
    six:"N/A",
    seven:"N/A",
    eight:"VB",
    nine:"V0-",
    ten:"V0",
    eleven:"V0+",
    twelve:"V1-",
    thirteen:"V1",
    fourteen:"V1+",
    fifteen:"V2-",
    sixteen:"V2",
    seventeen:"V2+",
    eighteen:"V3-",
    nineteen:"V3",
};

var gb = {
    one:"3a",
    two:"3b",
    three:"3c",
    four:"4a",
    five:"4b",
    six:"4c",
    seven:"4c",
    eight:"5a",
    nine:"5a",
    ten:"5b",
    eleven:"5b",
    twelve:"5b",
};

var australian = {
    one:"11",
    two:"11",
    three:"12",
    four:"13",
    five:"14",
    six:"15",
    seven:"16",
    eight:"17",
    nine:"18",
    ten:"19",
    eleven:"20",
    twelve:"21",
};

var font = {
    one:"N/A",
    two:"N/A",
    three:"N/A",
    four:"N/A",
    five:"N/A",
    six:"N/A",
    seven:"N/A",
    eight:"3",
    nine:"4-",
    ten:"4",
    eleven:"4+",
    twelve:"5",
    thirteen:"5+",
    fourteen:"6a",
    fifteen:"6a+",
    sixteen:"6b",
    seventeen:"6b+",
    eighteen:"6c",
    nineteen:"6c+",
};

var skill = {
    one:"Novice",
    two:"Novice",
    three:"Novice",
    four:"Beginner",
    five:"Beginner",
    six:"Beginner",
    seven:"Beginner",
    eight:"Intermediate",
    nine:"Intermediate",
    ten:"Intermediate",
    eleven:"Intermediate",
    twelve:"Intermediate",
};




var grade = "";
var converter = function(userInput) {
    switch(userInput) {
        case "1":
            $("#hueco-converted").text(hueco.one);
            $("#yds-converted").text(yosDS.one);
            $("#french-converted").text(french.one);
            $("#uiaa-converted").text(uiaa.one);
            $("#gb-converted").text(gb.one);
            $("#aus-converted").text(australian.one);
            $("#font-converted").text(font.one);
            $("#skill-converted").text(skill.one);
            break;
        case "2":
            $("#hueco-converted").text(hueco.two);
            $("#yds-converted").text(yosDS.two);
            $("#french-converted").text(french.two);
            $("#uiaa-converted").text(uiaa.two);
            $("#gb-converted").text(gb.two);
            $("#aus-converted").text(australian.two);
            $("#font-converted").text(font.two);
            $("#skill-converted").text(skill.two);
            break;
        case "3":
            $("#hueco-converted").text(hueco.three);
            $("#yds-converted").text(yosDS.three);
            $("#french-converted").text(french.three);
            $("#uiaa-converted").text(uiaa.three);
            $("#gb-converted").text(gb.three);
            $("#aus-converted").text(australian.three);
            $("#font-converted").text(font.three);
            $("#skill-converted").text(skill.three);
            break;
        case "4":
            $("#hueco-converted").text(hueco.four);
            $("#yds-converted").text(yosDS.four);
            $("#french-converted").text(french.four);
            $("#uiaa-converted").text(uiaa.four);
            $("#gb-converted").text(gb.four);
            $("#aus-converted").text(australian.four);
            $("#font-converted").text(font.four);
            $("#skill-converted").text(skill.four);
            break;
        case "5":
            $("#hueco-converted").text(hueco.five);
            $("#yds-converted").text(yosDS.five);
            $("#french-converted").text(french.five);
            $("#uiaa-converted").text(uiaa.five);
            $("#gb-converted").text(gb.five);
            $("#aus-converted").text(australian.five);
            $("#font-converted").text(font.five);
            $("#skill-converted").text(skill.five);
            break;
        case "6":
            $("#hueco-converted").text(hueco.six);
            $("#yds-converted").text(yosDS.six);
            $("#french-converted").text(french.six);
            $("#uiaa-converted").text(uiaa.six);
            $("#gb-converted").text(gb.six);
            $("#aus-converted").text(australian.six);
            $("#font-converted").text(font.six);
            $("#skill-converted").text(skill.six);
            break;
        case "7":
            $("#hueco-converted").text(hueco.seven);
            $("#yds-converted").text(yosDS.seven);
            $("#french-converted").text(french.seven);
            $("#uiaa-converted").text(uiaa.seven);
            $("#gb-converted").text(gb.seven);
            $("#aus-converted").text(australian.seven);
            $("#font-converted").text(font.seven);
            $("#skill-converted").text(skill.seven);
            break;
        case "8":
            $("#hueco-converted").text(hueco.eight);
            $("#yds-converted").text(yosDS.eight);
            $("#french-converted").text(french.eight);
            $("#uiaa-converted").text(uiaa.eight);
            $("#gb-converted").text(gb.eight);
            $("#aus-converted").text(australian.eight);
            $("#font-converted").text(font.eight);
            $("#skill-converted").text(skill.eight);
            break;
        case "9":
            $("#hueco-converted").text(hueco.nine);
            $("#yds-converted").text(yosDS.nine);
            $("#french-converted").text(french.nine);
            $("#uiaa-converted").text(uiaa.nine);
            $("#gb-converted").text(gb.nine);
            $("#aus-converted").text(australian.nine);
            $("#font-converted").text(font.nine);
            $("#skill-converted").text(skill.nine);
            break;
        case "10":
            $("#hueco-converted").text(hueco.ten);
            $("#yds-converted").text(yosDS.ten);
            $("#french-converted").text(french.ten);
            $("#uiaa-converted").text(uiaa.ten);
            $("#gb-converted").text(gb.ten);
            $("#aus-converted").text(australian.ten);
            $("#font-converted").text(font.ten);
            $("#skill-converted").text(skill.ten);
            break;
        case "11":
            $("#hueco-converted").text(hueco.eleven);
            $("#yds-converted").text(yosDS.eleven);
            $("#french-converted").text(french.eleven);
            $("#uiaa-converted").text(uiaa.eleven);
            $("#gb-converted").text(gb.eleven);
            $("#aus-converted").text(australian.eleven);
            $("#font-converted").text(font.eleven);
            $("#skill-converted").text(skill.eleven);
            break;
        case "12":
            $("#hueco-converted").text(hueco.twelve);
            $("#yds-converted").text(yosDS.twelve);
            $("#french-converted").text(french.twelve);
            $("#uiaa-converted").text(uiaa.twelve);
            $("#gb-converted").text(gb.twelve);
            $("#aus-converted").text(australian.twelve);
            $("#font-converted").text(font.twelve);
            $("#skill-converted").text(skill.twelve);
            break;
        default:
            text = "You did something wrong";
    }
};

$("#convert-btn").on("click", function() {
    grade = (document.getElementById("drop-down-choice").value);
    console.log(grade);
    converter(grade);
    
    
});
