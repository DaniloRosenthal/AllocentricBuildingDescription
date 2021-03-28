var building1 = `Grundform des Gebäudes: Rechteckig
<br> Haupteingang: Doppeltür, Glas
<br> Position Haupteingang: Am Fasanengarten 5, längere Seite, mittig
<br> Warnung: Fahrradständer neben Haupteingang
<br> Stockwerkanzahl: 10, 
<br> Etagen: -2 bis 7
<br> Anzahl der Toiletten: 5 Herren-Toiletten, 5 Damen-Toiletten
<br> Barrierefreiheit: 1 taktiler Gebäudeplan in Etage 0, Leitsysteme in Etage 0, Etage 3, Etage 4, Etage 7, 10 barrierefreie Toiletten`;

var building2 = "";

var building1Floor1 = `Grundform des Stockwerks: Rechteckig, Gänge Plus-förmig, 4 Raum-Blöcke in Ecken getrennt durch Gänge
<br> Position der Räume: an allen äußeren Ecken, 1 Raum pro innerer Block in 3 Ecken, 1 Ecke mit zwei Räumen
<br> Barrierefreiheit: 1 taktiler Plan in Foyer 
<br> Anzahl Gänge: 7
<br> 12 Uhr-6 Uhr-Gänge: senkrecht, Gang 1
<br> 3 Uhr-9 Uhr-Gänge: waagrecht, Gang 2 
<br> Anzahl Foyers: 1 
<br> Position Foyer: Foyer 1: Stockwerk-mittig, quadratisch 
<br> Definition des Bezugspunkts: von Aufzug aus, geradeaus ist 12 Uhr 
<br> Lage des Bezugspunkts: Stockwerk-mittig, längere Seite, Gang 1, 6 Uhr-Seite, Richtung 9 Uhr von Gang 1`;

var building1Floor1Foyer1 = `Auslegung des Foyers: quadratisch, Stockwerk-mittig
<br> Länge des Foyers: 5x5 Meter 
<br> Barrierefreiheit: taktiler Gebäudeplan in 3 Uhr-6 Uhr-Eck
<br> Gekreuzt von: Gang 1 senkrecht, Gang 2 waagrecht`;

var building1Floor1Hallway1 = ``;
var building1Floor1Hallway2 = ``;

var building1Floor2 = `Grundform des Stockwerks: Rechteckig, Gänge U-förmig, links-liegend, 1 innerer Raum-Block
<br> Position der Räume: an allen äußeren Wänden, 8 Räume im inneren Raum-Block
<br> Barrierefreiheit: 2 barrierefreie Toiletten
<br> Toiletten: 1 Herrentoilette barrierefrei, 1 Damentoilette barrierefrei
<br> Anzahl Gänge: 3
<br> 12 Uhr-6 Uhr-Gänge: senkrecht, Gang 2
<br> 3 Uhr-9 Uhr-Gänge: waagrecht, Gang 1, Gang 3
<br> Definition des Bezugspunkts: von Aufzug aus, geradeaus ist 12 Uhr
<br> Lage des Bezugspunkts: Stockwerk-6 Uhr-Seite, längere Seite von Stockwerk, Gang 1, Richtung 9 Uhr von Gang 1`;

var building1Floor2Hallway1 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 15 Meter
<br> Erreichbare Räume: Raum 206-208 6 Uhr-Seite, Aufzug 1 6 Uhr-Seite, Raum 209-2012 12-Uhr-Seite
<br> Erreichbare Stockwerke Aufzug 1: -1 bis 4
<br> Anbindung an: Gang 2 senkrecht`;

var building1Floor2Hallway2 = `Auslegung des Gangs: senkrecht, 12 Uhr-6 Uhr-Gang
<br> Länge des Gangs: 5 Meter
<br> Warnung: Hindernis vor Damentoilette
<br> Erreichbare Räume: 1 Herrentoilette, 1 Damentoilette
<br> Anbindung an:  Gang 1 waagrecht beide Richtungen
<br> Abbiegen in: Gang 3 waagrecht`;

var building1Floor2Hallway3 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 10 Meter
<br> Erreichbare Räume: Treppe 1 12 Uhr-Seite, Raum 201-203 12-Uhr-Seite, Raum 213-216 6 Uhr-Seite
<br> Erreichbare Stockwerke Treppe 1: -1 bis 5
<br> Abbiegen in: Gang 2 senkrecht`;

var building2Floor1 = `Grundform des Stockwerks: Rechteckig, Gänge Rauten-förmig, liegend, zwei innere Raum-Blöcke getrennt durch Gang
<br> Position der Räume: an allen äußeren Wänden, 1 Raum pro innerer Block
<br> Toiletten: 1 Herrentoilette, 1 Damentoilette
<br> Anzahl Gänge: 7
<br> 12 Uhr-6 Uhr-Gänge: senkrecht, Gang 7
<br> 1 Uhr-7 Uhr-Gänge: diagonal, Gang 3, Gang 6
<br> 3 Uhr-9 Uhr-Gänge: waagrecht, Gang 1, Gang 4
<br> 5 Uhr-11 Uhr-Gänge: diagonal, Gang 2, Gang 5
<br> Definition des Bezugspunkts: von Aufzug aus, geradeaus ist 12 Uhr
<br> Lage des Bezugspunkts: 6 Uhr-Seite, längere Seite, Gang 1, mittig von Gang`;

var building2Floor1Hallway1 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 10 Meter
<br> Warnung: Stufe an Anbindung an Gang 7
<br> Erreichbare Räume: Raum 204-205 6 Uhr-Seite, Aufzug 1 6 Uhr-Seite
<br> Erreichbare Stockwerke Aufzug 1: -1 bis 5
<br> Anbindung an: Gang 2 diagonal, Gang 7 senkrecht, Gang 6 diagonal`;

var building2Floor1Hallway2 = ``;
var building2Floor1Hallway3 = ``;
var building2Floor1Hallway4 = ``;
var building2Floor1Hallway5 = ``;
var building2Floor1Hallway6 = ``;
var building2Floor1Hallway7 = ``;

var building2Floor2 = `Grundform des Stockwerks: Quadratisch
<br> Toiletten: 1 Herrentoilette barrierefrei, 1 Damentoilette barrierefrei
<br> Anzahl Gänge: 6, 
<br> 3 9 Uhr–3 Uhr–Verbindungen: Gang 1, Gang 5, Gang 3 
<br> 2 12 Uhr–6 Uhr–Verbindungen: Gang 2, Gang 4 
<br> 1 8 Uhr–2 Uhr-Verbindung: Gang 6
<br> Räume an allen Wänden des Gebäudes, 2 Raum-Blöcke im Inneren, von Gängen umgeben
<br> Definition Bezugspunkt: Von Aufzug, aus Aufzug raus ist 12 Uhr
<br> Lage Aufzug/Bezugspunkt: Innerer Block, ca. Gebäudemitte, mittig im Block`;

var building2Floor2Hallway1 = `Auslegung des Ganges: 9 Uhr – 3 Uhr –Verbindung, Von 9 Uhr-Wand bis 3-Uhr-Wand
<br> Länge: ca. 15 Meter
<br> Erreichbare Räume: 12 Uhr - Seite R201-R205
<br> Erreichbare Räume: 6 Uhr-Seite R214 und Aufzug 1
<br> Erreichbare Stockwerke Aufzug: -2 bis 4
<br> Gekreuzt von: Gang 2
<br> Anbindung an: Gang 4 und Gang 6`;

var building2Floor2Hallway2 = ``;
var building2Floor2Hallway3 = ``;
var building2Floor2Hallway4 = ``;
var building2Floor2Hallway5 = ``;
var building2Floor2Hallway6 = ``;



function buildingSwitch(selectID1, selectID2, selectID3) {
    var s1 = document.getElementById(selectID1);
    var s2 = document.getElementById(selectID2);
    var s3 = document.getElementById(selectID3);
    s2.innerHTML = "";
    s3.innerHTML = "";
    if (s1.value == "1") {
        var optionArray = ["building1Floor1|Stockwerk 1", "building1Floor2|Stockwerk 2"];
    } else if (s1.value == "2") {
        var optionArray = ["building2Floor1|Stockwerk 1", "building2Floor2|Stockwerk 2"];
    } else if (s1.value == "Default") {
        s2.innerHTML = "";
        s3.innerHTML = "";
    }


    var defaultFloor = document.createElement("option");
    defaultFloor.text = "Default";
    defaultFloor.value = "defaultFloor";
    s2.add(defaultFloor);
    s2.selectedIndex = '0';


    var defaultHallway = document.createElement("option");
    defaultHallway.text = "Default";
    defaultHallway.value = "defaultHallway";
    s3.add(defaultHallway);
    s3.selectedIndex = '0';

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.text = pair[1];
        newOption.value = pair[0];
        s2.add(newOption);
    }
}

function floorSwitch(selectID1, selectID2, select3) {
    var building = document.getElementById(selectID1);
    var floor = document.getElementById(selectID2);
    var hallway = document.getElementById(select3);
    hallway.innerHTML = "";
    if (building.value == '1') {

        if (floor.value == "building1Floor1") {
            var optionArray = ["building1Floor1Hallway1|Gang 1", "building1Floor1Hallway2|Gang 2", "building1Floor1Foyer1|Flur 1"];
        } else if (floor.value == "building1Floor2") {
            var optionArray = ["building1Floor2Hallway1|Gang 1", "building1Floor2Hallway2|Gang 2", "building1Floor2Hallway3|Gang 3"];
        } else if (floor.value == "default") {
            hallway.innerHTML = "";
        }
    } else if (building.value == '2') {
        if (floor.value == "building2Floor1") {
            var optionArray = ["building2Floor1Hallway1|Gang 1", "building2Floor1Hallway2|Gang 2", "building2Floor1Hallway3|Gang 3", 
            "building2Floor1Hallway4|Gang 4", "building2Floor1Hallway5|Gang 5", "building2Floor1Hallway6|Gang 6", "building2Floor1Hallway7|Gang 7"];
        } else if (floor.value == "building2Floor2") {
            var optionArray = ["building2Floor2Hallway1|Gang 1", "building2Floor2Hallway2|Gang 2", "building2Floor2Hallway3|Gang 3", 
            "building2Floor2Hallway4|Gang 4", "building2Floor2Hallway5|Gang 5", "building2Floor2Hallway6|Gang 6"];
        } else if (floor.value == "default") {
            hallway.innerHTML = "";
        }
    }


    var defaultHallway = document.createElement("option");
    defaultHallway.text = "Default";
    defaultHallway.value = "defaultHallway";
    hallway.add(defaultHallway);
    hallway.selectedIndex = '0';

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.text = pair[1];
        newOption.value = pair[0];
        hallway.add(newOption);
    }
}

function descriptionStart(textID, picker1, picker2, picker3) {
    var textField = document.getElementById(textID);
    var buildingPicker = document.getElementById(picker1);
    var floorPicker = document.getElementById(picker2);
    var hallwayPicker = document.getElementById(picker3);

    if (buildingPicker.value == '1') {
        if (floorPicker.value == 'defaultFloor') {
            textField.innerHTML = building1;
        } else if (hallwayPicker.value == 'defaultHallway') {
            choosingFloorFromBuilding(textField, floorPicker.value);
        } else {
            choosingHallwayFromFloor(textField, hallwayPicker.value);
        }
    } else if (buildingPicker.value == '2') {
        if (floorPicker.value == 'defaultFloor') {
            textField.innerHTML = building2;
        } else if (hallwayPicker.value == 'defaultHallway') {
            choosingFloorFromBuilding(textField, floorPicker.value);
        } else {
            choosingHallwayFromFloor(textField, hallwayPicker.value);
        }
    } else {
        textField.innerHTML = 'Hier steht die Beschreibung eines Gebäudes, eines Flurs oder eines Gangs/Foyers.....';
    }
}

function choosingFloorFromBuilding(textID, floorID) {
    switch (floorID) {
        case 'building1Floor1':
            textID.innerHTML = building1Floor1;
            break;
        case 'building1Floor2':
            textID.innerHTML = building1Floor2;
            break;
        case 'building2Floor1':
            textID.innerHTML = building2Floor1;
            break;
        case 'building2Floor2':
            textID.innerHTML = building2Floor2;
            break;
        default:
            textID.innerHTML = 'Hier steht die Beschreibung eines Gebäudes, eines Flurs oder eines Gangs/Foyers.....';
            break;
    }
}

function choosingHallwayFromFloor(textID, hallwayID) {
    switch (hallwayID) {
        case 'building1Floor1Foyer1':
            textID.innerHTML = building1Floor1Foyer1;
            break;
        case 'building1Floor1Hallway1':
            textID.innerHTML = building1Floor1Hallway1;
            break;
        case 'building1Floor1Hallway2':
            textID.innerHTML = building1Floor1Hallway2;
            break;
        case 'building1Floor2Hallway1':
            textID.innerHTML = building1Floor2Hallway1;
            break;
        case 'building1Floor2Hallway2':
            textID.innerHTML = building1Floor2Hallway2;
            break;
        case 'building1Floor2Hallway3':
            textID.innerHTML = building1Floor2Hallway3;
            break;
        case 'building2Floor1Hallway1':
            textID.innerHTML = building2Floor1Hallway1;
            break;
        case 'building2Floor1Hallway2':
            textID.innerHTML = building2Floor1Hallway2;
            break;
        case 'building2Floor1Hallway3':
            textID.innerHTML = building2Floor1Hallway3;
            break;
        case 'building2Floor1Hallway4':
            textID.innerHTML = building2Floor1Hallway4;
            break;
        case 'building2Floor1Hallway5':
            textID.innerHTML = building2Floor1Hallway5;
            break;
        case 'building2Floor1Hallway6':
            textID.innerHTML = building2Floor1Hallway6;
            break;
        case 'building2Floor1Hallway7':
            textID.innerHTML = building2Floor1Hallway7;
            break;
        case 'building2Floor2Hallway1':
            textID.innerHTML = building2Floor2Hallway1;
            break;
        case 'building2Floor2Hallway2':
            textID.innerHTML = building2Floor2Hallway2;
            break;
        case 'building2Floor2Hallway3':
            textID.innerHTML = building2Floor2Hallway3;
            break;
        case 'building2Floor2Hallway4':
            textID.innerHTML = building2Floor2Hallway4;
            break;
        case 'building2Floor2Hallway5':
            textID.innerHTML = building2Floor2Hallway5;
            break;
        case 'building2Floor2Hallway6':
            textID.innerHTML = building2Floor2Hallway6;
            break;
        default:
            textID.innerHTML = 'Hier steht die Beschreibung eines Gebäudes, eines Flurs oder eines Gangs/Foyers.....';
            break;
    }

}