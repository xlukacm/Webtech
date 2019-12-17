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
    let date = new Date(document.getElementById("meninyInput").value);
    document.getElementById("meninyText").innerText = "V tento den má meniny: " + findMeniny(date);
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

function findDate() {
    let text = document.getElementById("nameInput").value;
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.toLowerCase();

    for (let j = 0; j < xmlDoc.getElementsByTagName("zaznam").length; j++){
        if (xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0]){
            let pomoc = "" + xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0].childNodes[0].nodeValue;
            pomoc = pomoc.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            pomoc = pomoc.toLowerCase();
            if(pomoc.includes(text)){
                let x = xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
                let day = x.substr(0,2);
                day = day.replace("0","");
                let month = x.substr(2,2);
                month = month.replace("0","");
                x = day + "." + month + ".";
                document.getElementById("datumText").innerText = "Toto meno ma meniny " + x;
            }
        }
    }
    return -1;
}