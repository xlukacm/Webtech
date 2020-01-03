let xmlDoc;

function loadDocument() {
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

function meninyDnes() {
    let date = new Date();
    document.getElementById("namedayToday").innerText = "Dnes má meniny: " + findToday(date);
}

function findToday(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    day = addZero(day);
    month = addZero(month);

    for (let j = 0; j < xmlDoc.getElementsByTagName("zaznam").length; j++){
        let tmp = "" + xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].childNodes[0].nodeValue;
        if (tmp === month+day){
            if (xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0])
                return xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0].childNodes[0].nodeValue;
            else return "V tento deň nemá nikto meniny.";
        }
    }
}
