let xmlDocNameday;

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

function findMeniny(date,states) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    day = addZero(day);
    month = addZero(month);

    for (let j = 0; j < xmlDocNameday.getElementsByTagName("zaznam").length; j++){
        let tmp = "" + xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
        if (tmp === month+day){
            if (xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(states)[0]){
                tmp=xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(states)[0].childNodes[0].nodeValue;
                tmp = tmp.replace(/(?:\r\n|\r|\n)/g, "");
                return tmp;
            }
            else return "V tento deň nemá nikto meniny.";
        }
    }
}

function xmlDateToNormal(x) {
    let day = x.substr(2,2);
    if (day <10)
        day = day.replace("0","");
    let month = x.substr(0,2);
    if (month <10)
        month = month.replace("0","");
    return day + "." + month+ ".";
}

function normalizaciaStringu(tmp) {
    tmp = tmp.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tmp = tmp.toLowerCase();
    return tmp;
}

function findName(text,input) {
    for (let j = 0; j < xmlDocNameday.getElementsByTagName("zaznam").length; j++) {
        if (xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(input)[0]) {

            let tmp = "" + xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName(input)[0].childNodes[0].nodeValue;
            tmp = normalizaciaStringu(tmp);
            tmp = tmp.replace(/ /g, "");
            tmp = tmp.replace(" ", "");
            tmp = tmp.replace(/(?:\r\n|\r|\n)/g, "");
            tmp = tmp.split(",");

            if (tmp.includes(text)) {
                let x = xmlDocNameday.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
                x = xmlDateToNormal(x);
                document.getElementById("datumText").innerText = "Toto meno má meniny " + x + "v " + input+" kalendári.";
                return 1;
            } else {
                document.getElementById("datumText").innerText = "Toto meno neexistuje.";
            }
        }
    }
    return -1;
}

function findDate() {
    let text = document.getElementById("nameInput").value;
    if (!text) {
        return document.getElementById("datumText").innerText = "Nesprávny vstup";
    }
    text = normalizaciaStringu(text);
    let countries = document.getElementById("countries");
    let input_countries = countries.getElementsByTagName("input");
    let checkbox = 0;
    for (let i=0, length = input_countries.length; i<length; i++){
        if (input_countries[i].type === 'checkbox' && input_countries[i].checked===true)
            checkbox++;
    }
    if (checkbox>0)
        for (let i=0, length = input_countries.length; i<length; i++) {
            if (input_countries[i].type === 'checkbox' && input_countries[i].checked===true) {
                if (findName(text,input_countries[i].value) === 1 )
                    return;

            }
        }
    else{
        document.getElementById("datumText").innerText = "Nebol vybraný žiaden kalendár.";
    }
}
function openForm() {
    document.getElementById("namedayInput").value = "";
    document.getElementById("nameInput").value = "";
    clearDisplay();
    document.getElementById("namedayText").style.display="block";
    document.getElementById("datumText").innerText = "Napíšte meno a stlačte tlačidlo";
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
