//premenna do ktorej sa nacitava XML subor
let xmlDocNameday;

//funkcia ktora nacitava XML
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            xmlDocNameday = this.responseXML;
            clearDisplay();
        }
    };
    xhttp.open("GET", "meniny.xml", true);
    xhttp.send();
}

//funkcia ktora zobere vstup a ked je mensi ako 10 tak na zaciatok 0, aby mal 2 cifry
function addZero(number){
    if (number < 10) number ="0" + number;
    else number = number + "";
    return number;
}

function clearDisplay() {
    let countries = document.getElementById("countries");
    let input_countries = countries.getElementsByTagName("input");
    document.getElementById("dates").style.display="none";
    for (let i=0, length = input_countries.length; i<length; i++){
        let str = 'date'+input_countries[i].value;
        document.getElementById(str).style.display="none";
    }
}

function choseMeniny() {
    let namedayInput = document.getElementById("namedayInput").value;
    document.getElementById("namedayText").style.display="block";
    if (!namedayInput) {
        clearDisplay();
        return document.getElementById("namedayText").innerText = "Nesprávny vstup.";
    }
    let countries = document.getElementById("countries");
    let input_countries = countries.getElementsByTagName("input");
    document.getElementById("dates").style.display="block";
    for (let i=0, length = input_countries.length; i<length; i++) {
        let date = new Date(namedayInput);
        let str = 'date' + input_countries[i].value;

        str = str.replace(/^\s+|\s+$/g, "");
        str = str.replace(" ","");
        let findingMeniny = findMeniny(date, input_countries[i].value);
        let tmp = input_countries[i].value + ": " + findingMeniny;
        if ((str === "dateSKsviatky" || str === "dateCZsviatky") && findingMeniny === "V tento deň nemá nikto meniny.") {
            document.getElementById(str).style.display="none";
        }
        else if ((str !== "dateSKsviatky" || str !== "dateCZsviatky") && findingMeniny === "V tento deň nemá nikto meniny."){
            document.getElementById(str).style.display="none";
        }
        else{
            document.getElementById(str).style.display="block";
            document.getElementById(str).innerText = tmp ;

        }
        document.getElementById("namedayText").style.display="none";
    }
}

//funkcia ktora ma vstup datum (date) a stat (states) a na vystup dava kto ma v tento datum meniny a ked nikto nema tak da ze nikto nema
function findMeniny(date,states) {
    //mesiac a den sa daju do zvlast premennych
    let month = date.getMonth() + 1;
    let day = date.getDate();

    //prida sa im 0 ak to potrebuju, aby sa to zhodovalo s formatom v XML
    day = addZero(day);
    month = addZero(month);

    //prejde sa cely zoznam XML
    for (let j = 0; j < xmlDocNameday.getElementsByTagName("zaznam").length; j++){
        //datum z XML sa da do pomocnej premennej
        let tmp = "" + xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
        //ak sa datum z XML zhoduje z datumom na vstupe
        if (tmp === month+day){
            // a v tento datum ma niekto meniny
            if (xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(states)[0]){
                tmp=xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(states)[0].childNodes[0].nodeValue;
                tmp = tmp.replace(/(?:\r\n|\r|\n)/g, "");
                return tmp;
            }
            else return "V tento deň nemá nikto meniny.";
        }
    }
}

//funkcia ktora meni datum z XML (format napr 0410) na normalny datum (4.10.)
function xmlDateToNormal(x) {
    let day = x.substr(2,2);
    if (day <10)
        day = day.replace("0","");
    let month = x.substr(0,2);
    if (month <10)
        month = month.replace("0","");
    return day + "." + month+ ".";
}

//funkcia na zrusenie diakritiky zmensenie velkych pismen
function normalizaciaStringu(tmp) {
    tmp = tmp.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tmp = tmp.toLowerCase();
    return tmp;
}

//funkcia ktora ma na vstupe text (meno) a input (krajinu), a najde v ktory den ma toto meno meniny, ak ma, a vlozi datum do text. pola
function findName(text,input) {
    for (let j = 0; j < xmlDocNameday.getElementsByTagName("zaznam").length; j++) {
        if (xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(input)[0]) {
            //nacita sa vstup z XML
            let tmp = "" + xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(input)[0].childNodes[0].nodeValue;
            //odstrania sa velke pismena a zrusi sa diaakritika
            tmp = normalizaciaStringu(tmp);
            //odstrania sa medzeri
            tmp = tmp.replace(/ /g, "");
            tmp = tmp.replace(" ", "");
            tmp = tmp.replace(/(?:\r\n|\r|\n)/g, "");
            //rozdeli string do pola cez ciarky
            tmp = tmp.split(",");

            //ak toto pole odsahuje meno zo vstupu
            if (tmp.includes(text)) {
                //najde datum pre toto meno
                let x = xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
                //prelozi datum na normalny
                x = xmlDateToNormal(x);
                //vlozi datum do textoveho pola
                document.getElementById("datumText").innerText = "Toto meno má meniny " + x + "v " + input+" kalendári.";
                return 1;
            } else {
                //ak sa toto meno v poli nenachadza tak napise ze neexistuje
                document.getElementById("datumText").innerText = "Toto meno neexistuje.";
            }
        }
    }
    return -1;
}

//funkcia ktora sa pusti na stlacenie tlacidla, nacita si zadane meno a zisti kedy ma toto meno meniny
//ak nieje zaskrtnuty kalendar tak napise ze neni
function findDate() {
    //nacita sa vstup
    let text = document.getElementById("nameInput").value;
    if (!text) {
        return document.getElementById("datumText").innerText = "Nesprávny vstup";
    }
    //znormalizuje sa vstup
    text = normalizaciaStringu(text);
    //nacitaju sa zaskrtnute krajiny
    let countries = document.getElementById("countries");
    let input_countries = countries.getElementsByTagName("input");
    let checkbox = 0;
    //zisti sa kolko ich je zaskrtnutych
    for (let i=0, length = input_countries.length; i<length; i++){
        if (input_countries[i].type === 'checkbox' && input_countries[i].checked===true)
            checkbox++;
    }
    //ak je zaskrtnuta viac ako jedna tak sa ide kladat datum
    if (checkbox>0)
        //opakuje sa kolko krat je sakrtnute
        for (let i=0, length = input_countries.length; i<length; i++) {
            //ak je zaskrtnuta krajina tak v nej skusi najst meno
            if (input_countries[i].type === 'checkbox' && input_countries[i].checked===true) {
                if (findName(text,input_countries[i].value) === 1 )
                    return;

            }
        }
    //ak je niesu zaskrtnute tak sa vypise
    else{
        document.getElementById("datumText").innerText = "Nebol vybraný žiaden kalendár.";
    }
}
//
// onload =function() {
// // function controlPopUp() {
//     let PopupWarning = {
//         init: function() {
//             let popups_are_disabled = this.popups_are_disabled();
//             if (popups_are_disabled === true) {
//                 this.redirect_to_instruction_page();
//             } else {
//             }
//         },
//         redirect_to_instruction_page: function() {
//             window.location.href = '#popupForm';
//         },
//         redirect_to_action_page: function() {
//         },
//         popups_are_disabled: function() {
//             // let popup = window.open("#popupForm", "", "display=none,width=0,height=-1,left=100%,top=100%");
//             let popup = window.open();
//             if (!popup || popup.closed || typeof popup == 'undefined' || typeof popup.closed == 'undefined') {
//                 alert("Máš vypnuté vyskakovanie okien!");
//                 return true;
//             }
//             popup.close();
//             return false;
//         },
//     };
//     PopupWarning.init();
// };

/*
function detectPopupBlocker() {
    let test = window.open(null,"","width=100,height=100");
    try {
        test.close();
    } catch (e) {
        alert("Pop-ups blocked.");
    }
}

// Created by: Simon Willison
// http://simon.incutio.com/archive/2004/05/26/addLoadEvent
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(detectPopupBlocker);*/

//otveronie popup menu na hlavnej obrazovke
function openForm() {
    document.getElementById("namedayInput").value = "";
    document.getElementById("nameInput").value = "";
    clearDisplay();
    document.getElementById("namedayText").style.display="block";
    document.getElementById("datumText").innerText = "Napíšte meno a stlačte tlačidlo";
    document.getElementById("popupForm").style.display ="block";
}

//zatvorenie popup
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}