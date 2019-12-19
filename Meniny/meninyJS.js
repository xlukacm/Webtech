let xmlDoc;

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            xmlDoc = this.responseXML;
            meninyDnes();
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

function choseMeniny() {
    let meninyInput = document.getElementById("meninyInput").value;
    if (!meninyInput)
        return document.getElementById("meninyText").innerText = "Nesprávny vstup.";
    let date = new Date(meninyInput);
    document.getElementById("meninyText").innerText = "V tento deň má meniny: " + findMeniny(date);
}

function meninyDnes() {
    let date = new Date();
    document.getElementById("meninyDnes").innerText = "Dnes má meniny: " + findMeniny(date);
}

function findMeniny(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    day = addZero(day);
    month = addZero(month);

    for (let j = 0; j < xmlDoc.getElementsByTagName("zaznam").length; j++){
        let pomoc = "" + xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
        if (pomoc === month+day){
            if (xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0])
                return xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0].childNodes[0].nodeValue;
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

function normalizaciaStringu(pomoc) {
    pomoc = pomoc.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    pomoc = pomoc.toLowerCase();
    return pomoc;
}

function findName(text,input) {
    for (let j = 0; j < xmlDoc.getElementsByTagName("zaznam").length; j++) {
        if (xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName(input)[0]) {

            let pomoc = "" + xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName(input)[0].childNodes[0].nodeValue;
            pomoc = normalizaciaStringu(pomoc);
            pomoc = pomoc.replace(/ /g, "");
            pomoc = pomoc.replace(" ", "");
            pomoc = pomoc.replace(/(?:\r\n|\r|\n)/g, "");
            pomoc = pomoc.split(",");

            if (pomoc.includes(text)) {
                let x = xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
                x = xmlDateToNormal(x);
                document.getElementById("datumText").innerText = "Toto meno má meniny " + x;
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
    let staty = document.getElementById("staty");
    let input_staty = staty.getElementsByTagName("input");
    let checkbox = 0;
    for (let i=0, length = input_staty.length; i<length; i++){
        if (input_staty[i].type === 'checkbox' && input_staty[i].checked===true)
            checkbox++;
    }
    if (checkbox>0)
        for (let i=0, length = input_staty.length; i<length; i++) {
            if (input_staty[i].type === 'checkbox' && input_staty[i].checked===true) {
                findName(text,input_staty[i].value);
            }
        }
    else{
        document.getElementById("datumText").innerText = "Nebol vybraný žiaden kalendár.";
    }
}