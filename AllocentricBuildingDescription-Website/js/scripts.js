var building1 = `Grundform des Gebäudes: Rechteckig, liegend
<br> Haupteingang: Doppeltür, Glas
<br> Position Haupteingang: Am Fasanengarten 5, längere Seite, mittig
<br> Warnung: Fahrradständer neben Haupteingang
<br> Anzahl Stockwerke: 10, 
<br> Etagen: -2 bis 7
<br> Anzahl Toiletten: 5 Herren-Toiletten, barrierefrei, 5 Damen-Toiletten, barrierefrei
<br> Barrierefreiheit: 1 taktiler Gebäudeplan in Etage 0, Leitsysteme in Etage 0, Etage 3, Etage 4, Etage 7, 10 barrierefreie Toiletten`;

var building2 = `Grundform des Gebäudes: Rechteckig, liegend
<br> Haupteingang: Drehtür, Glas
<br> Position Haupteingang: Am Fasanengarten 10, längere Seite, mittig
<br> Warnung: Parkplatz vor Haupteingang, Baustelle neben Haupteingang
<br> Anzahl Stockwerke: 5, 
<br> Etagen: 0 bis 5
<br> Anzahl Toiletten: 5 Herren-Toiletten, 5 Damen-Toiletten
<br> Barrierefreiheit: 1 taktiler Gebäudeplan in Etage 0, 4 barrierefreie Toiletten`;

var building1Floor1 = `Grundform des Stockwerks: Rechteckig liegend, 4 Raum-Blöcke jeweils in Ecken, getrennt durch Gänge, Gangstruktur: Plus-förmig, mittig, 
<br> Position der Räume: an allen äußeren Ecken, 1 Raum pro innerer Block in 3 Ecken, 1 Ecke mit zwei Räumen
<br> Barrierefreiheit: 1 taktiler Gebäudeplan in Foyer 
<br> Anzahl Gänge: 2
<br> 12 Uhr-6 Uhr-Gänge: senkrecht, Gang 1
<br> 3 Uhr-9 Uhr-Gänge: waagrecht, Gang 2 
<br> Anzahl Foyers: 1 
<br> Position der Foyers: Foyer 1: Stockwerk-mittig, quadratisch 
<br> Definition des Bezugspunkts: von Aufzug aus, geradeaus ist 12 Uhr 
<br> Lage des Bezugspunkts: längere Seite Stockwerk, Seiten-mittig, Gang 1, Richtung längere Seite von Gebäudemitte`;

var building1Floor1Foyer1 = `Auslegung des Foyers: quadratisch, Stockwerk-mittig
<br> Länge des Foyers: 5 mal 5 Meter 
<br> Barrierefreiheit: 1 taktiler Gebäudeplan in 6 Uhr-9 Uhr-Ecke
<br> Gekreuzt von: Gang 1 senkrecht, Gang 2 waagrecht`;

var building1Floor1Hallway1 = `Auslegung des Gangs: senkrecht, 12 Uhr-6 Uhr-Gang
<br> Länge des Gangs: 5 Meter
<br> Erreichbare Räume: 12 Uhr-Seite, Raum 101, Raum 104, 6 Uhr-Seite, Raum 102, Aufzug 1
<br> Erreichbare Stockwerke: Aufzug 1 - Stockwerke -2 bis 7
<br> Anbindung an: Foyer 1
<br> Gekreuzt von:  Gang 2 waagrecht beide Richtungen`;

var building1Floor1Hallway2 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 5 Meter
<br> Erreichbare Räume: 3 Uhr-Seite, Raum 101, Raum 102, 9 Uhr-Seite, Raum 103, Raum 104
<br> Anbindung an: Foyer 1
<br> Gekreuzt von:  Gang 1 senkrecht beide Richtungen`;

var building1Floor2 = `Grundform des Stockwerks: Rechteckig, 1 innerer Raum-Block, mittig, Gangstruktur U-förmig, links-liegend, an 3 Seiten um Raumblock
<br> Position der Räume: an allen äußeren Wänden, 8 Räume im inneren Raum-Block
<br> Barrierefreiheit: 2 barrierefreie Toiletten im Gang
<br> Toiletten: 1 Herrentoilette barrierefrei, 1 Damentoilette barrierefrei
<br> Anzahl Gänge: 3
<br> 12 Uhr-6 Uhr-Gänge: senkrecht, Gang 2
<br> 3 Uhr-9 Uhr-Gänge: waagrecht, Gang 1, Gang 3
<br> Definition des Bezugspunkts: von Aufzug aus, geradeaus ist 12 Uhr
<br> Lage des Bezugspunkts: Stockwerk-6 Uhr-Seite, längere Seite von Stockwerk, Gang 1, Richtung 9 Uhr von Gang 1`;

var building1Floor2Hallway1 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang, Wand zu Wand
<br> Länge des Gangs: 15 Meter
<br> Erreichbare Räume: 6 Uhr-Seite, Raum 206 bis 208, Aufzug 1, 12 Uhr-Seite, Raum 209 bis 2012
<br> Erreichbare Stockwerke Aufzug: Aufzug 1 - Stockwerke -1 bis 4
<br> Anbindung an: Gang 2 senkrecht`;

var building1Floor2Hallway2 = `Auslegung des Gangs: senkrecht, 12 Uhr-6 Uhr-Gang
<br> Länge des Gangs: 5 Meter
<br> Warnung: Hindernis vor Damentoilette
<br> Erreichbare Räume: 3 Uhr-Seite, 1 Herrentoilette, 1 Damentoilette
<br> Anbindung an: Gang 1 waagrecht beide Richtungen
<br> Abbiegung in: Gang 3 waagrecht`;

var building1Floor2Hallway3 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 10 Meter
<br> Erreichbare Räume: 12 Uhr-Seite Raum 201 bis 203, Treppe 1, 6 Uhr-Seite Raum 213 bis 216
<br> Erreichbare Stockwerke Treppe: Treppe 1 - Stockwerke -1 bis 5
<br> Abbiegen in: Gang 2 senkrecht`;

var building2Floor1 = `Grundform des Stockwerks: Rechteckig, zwei innere Raum-Blöcke getrennt durch Gang, Gangstruktur: Rauten-förmig, liegend
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
<br> Erreichbare Räume: 6 Uhr-Seite, Raum 104 bis 105, Aufzug 1
<br> Erreichbare Stockwerke Aufzug: Aufzug 1 - Stockwerke 0 bis 3
<br> Anbindung an: Gang 7 senkrecht
<br> Abbiegung in: Gang 2 diagonal, Gang 6 diagonal `;

var building2Floor1Hallway2 = `Auslegung des Gangs: diagonal, 5 Uhr-11 Uhr-Gang
<br> Länge des Gangs: 4 Meter
<br> Erreichbare Räume: 8 Uhr-Seite, Raum 105
<br> Abbiegung in: Gang 1 waagrecht, Gang 3 diagonal`;

var building2Floor1Hallway3 = `Auslegung des Gangs: diagonal, 2 Uhr-8 Uhr-Gang
<br> Länge des Gangs: 3 Meter
<br> Abbiegung in: Gang 2 diagonal, Gang 4 waagrecht`;

var building2Floor1Hallway4 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 10 Meter
<br> Erreichbare Räume: 12 Uhr-Seite, Raum 101 bis 103
<br> Anbindung an: Gang 7 senkrecht
<br> Abbiegung in: Gang 3 diagonal, Gang 5 diagonal `;

var building2Floor1Hallway5 = `Auslegung des Gangs: diagonal, 5 Uhr-11 Uhr-Gang
<br> Länge des Gangs: 4 Meter
<br> Erreichbare Räume: 2 Uhr-Seite, Raum 103
<br> Abbiegung in: Gang 4 waagrecht, Gang 6 diagonal`;

var building2Floor1Hallway6 = `Auslegung des Gangs: diagonal, 2 Uhr-8 Uhr-Gang
<br> Länge des Gangs: 3 Meter
<br> Erreichbare Räume: 5 Uhr-Seite, Raum 104
<br> Abbiegung in: Gang 1 waagrecht, Gang 5 diagonal`;

var building2Floor1Hallway7 = `Auslegung des Gangs: senkrecht, 12 Uhr-6 Uhr-Gang
<br> Länge des Gangs: 5 Meter
<br> Erreichbare Räume: 6 Uhr-Seite, 1 Herrentoilette, 12 Uhr-Seite, 1 Damentoilette
<br> Anbindung an: Gang 1 waagrecht beide Richtungen, Gang 4 waagrecht beide Richtungen`;

var building2Floor2 = `Grundform des Stockwerks: Quadratisch, 2 Raum-Blöcke im Inneren, von Gängen umgeben, Gangstruktur: Leiter-förmig, H-förmig, abweichend
<br> Position der Räume: Räume an allen Wänden des Gebäudes, 2 innere Blöcke, 3 Räume pro Block
<br> Barrierefreiheit: 1 barrierefreier Aufzug, 2 barrierefreie Toiletten
<br> Toiletten: 1 Herrentoilette barrierefrei, 1 Damentoilette barrierefrei
<br> Anzahl Gänge: 6, 
<br> 12 Uhr–6 Uhr–Verbindungen: senkrecht, Gang 2, Gang 4 
<br> 2 Uhr–8 Uhr-Verbindung: diagonal, Gang 6
<br> 3 Uhr–9 Uhr–Verbindungen: waagrecht, Gang 1, Gang 5, Gang 3 
<br> Definition Bezugspunkt: Von Aufzug, aus Aufzug raus ist 12 Uhr
<br> Lage des Bezugspunkts: Innerer Block, Gebäudemitte, mittig im Block`;

var building2Floor2Hallway1 = `Auslegung des Gangs: waagrecht, 3 Uhr–9 Uhr–Gang, Wand zu Wand
<br> Länge: 15 Meter
<br> Barrierefreiheit: 1 barrierefreier Aufzug im Gang
<br> Erreichbare Räume: 12 Uhr-Seite, Raum 201 bis R205, 6 Uhr-Seite, Raum 214, Aufzug 1
<br> Erreichbare Stockwerke Aufzug: Aufzug 1 - Stockwerke 0 bis 5
<br> Gekreuzt von: Gang 2 senkrecht
<br> Anbindung an: Gang 4 senkrecht, Gang 6 diagonal`;

var building2Floor2Hallway2 = `Auslegung des Gangs: senkrecht, 12 Uhr-6 Uhr-Gang
<br> Länge des Gangs: 15 Meter
<br> Erreichbare Räume: 3 Uhr-Seite, Raum 208, 1 Herrentoilette, barrierefrei, 1 Damentoilette, barrierefrei 9 Uhr-Seite, Raum 214
<br> Anbindung an: Gang 5 waagrecht
<br> Gekreuzt von: Gang 1 waagrecht
<br> Abbiegung in: Gang 3 waagrecht`;

var building2Floor2Hallway3 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 10 Meter
<br> Erreichbare Räume: 12 Uhr-Seite, Raum 216 bis 218, 6 Uhr-Seite, Raum 209, Raum 210
<br> Abbiegung in: Gang 2 senkrecht, Gang 4 senkrecht`;

var building2Floor2Hallway4 = `Auslegung des Gangs: senkrecht, 12 Uhr-6 Uhr-Gang
<br> Länge des Gangs: 10 Meter
<br> Erreichbare Räume: 3 Uhr-Seite, Raum 215, 9 Uhr-Seite, Raum 211 bis 213
<br> Anbindung an: Gang 1 waagrecht, beide Richtungen, Gang 5 waagrecht, Gang 6 diagonal 
<br> Abbiegung in: Gang 3 waagrecht`;

var building2Floor2Hallway5 = `Auslegung des Gangs: waagrecht, 3 Uhr-9 Uhr-Gang
<br> Länge des Gangs: 10 Meter
<br> Erreichbare Räume: 12 Uhr-Seite, Raum 215
<br> Anbindung an: Gang 2 senkrecht, beide Richtungen, Gang 4 senkrecht, beide Richtungen`;

var building2Floor2Hallway6 = `Auslegung des Gangs: diagonal, 2 Uhr-8 Uhr-Gang
<br> Länge des Gangs: 2 Meter
<br> Anbindung an: Gang 1 waagrecht, Gang 4 senkrecht`;



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
            var optionArray = ["building1Floor1Hallway1|Gang 1", "building1Floor1Hallway2|Gang 2", "building1Floor1Foyer1|Foyer 1"];
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
            textField.innerHTML = "Gebäude 1: <br>" + building1;
        } else if (hallwayPicker.value == 'defaultHallway') {
            choosingFloorFromBuilding(textField, floorPicker.value);
        } else {
            choosingHallwayFromFloor(textField, hallwayPicker.value);
        }
    } else if (buildingPicker.value == '2') {
        if (floorPicker.value == 'defaultFloor') {
            textField.innerHTML = "Gebäude 2: <br>" + building2;
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
            textID.innerHTML = "Gebäude 1 Stockwerk 1: <br>" + building1Floor1;
            break;
        case 'building1Floor2':
            textID.innerHTML = "Gebäude 1 Stockwerk 2: <br>" + building1Floor2;
            break;
        case 'building2Floor1':
            textID.innerHTML = "Gebäude 2 Stockwerk 1: <br>" + building2Floor1;
            break;
        case 'building2Floor2':
            textID.innerHTML = "Gebäude 2 Stockwerk 2: <br>" + building2Floor2;
            break;
        default:
            textID.innerHTML = 'Hier steht die Beschreibung eines Gebäudes, eines Flurs oder eines Gangs/Foyers.....';
            break;
    }
}

function choosingHallwayFromFloor(textID, hallwayID) {
    switch (hallwayID) {
        case 'building1Floor1Foyer1':
            textID.innerHTML = "Gebäude 1 Stockwerk 1 Foyer 1: <br>" + building1Floor1Foyer1;
            break;
        case 'building1Floor1Hallway1':
            textID.innerHTML = "Gebäude 1 Stockwerk 1 Gang 1: <br>" + building1Floor1Hallway1;
            break;
        case 'building1Floor1Hallway2':
            textID.innerHTML = "Gebäude 1 Stockwerk 1 Gang 2: <br>" + building1Floor1Hallway2;
            break;
        case 'building1Floor2Hallway1':
            textID.innerHTML = "Gebäude 1 Stockwerk 2 Gang 1: <br>" + building1Floor2Hallway1;
            break;
        case 'building1Floor2Hallway2':
            textID.innerHTML = "Gebäude 1 Stockwerk 2 Gang 2: <br>" + building1Floor2Hallway2;
            break;
        case 'building1Floor2Hallway3':
            textID.innerHTML = "Gebäude 1 Stockwerk 2 Gang 3: <br>" + building1Floor2Hallway3;
            break;
        case 'building2Floor1Hallway1':
            textID.innerHTML = "Gebäude 2 Stockwerk 1 Gang 1: <br>" + building2Floor1Hallway1;
            break;
        case 'building2Floor1Hallway2':
            textID.innerHTML = "Gebäude 2 Stockwerk 1 Gang 2: <br>" + building2Floor1Hallway2;
            break;
        case 'building2Floor1Hallway3':
            textID.innerHTML = "Gebäude 2 Stockwerk 1 Gang 3: <br>" + building2Floor1Hallway3;
            break;
        case 'building2Floor1Hallway4':
            textID.innerHTML = "Gebäude 2 Stockwerk 1 Gang 4: <br>" + building2Floor1Hallway4;
            break;
        case 'building2Floor1Hallway5':
            textID.innerHTML = "Gebäude 2 Stockwerk 1 Gang 5: <br>" + building2Floor1Hallway5;
            break;
        case 'building2Floor1Hallway6':
            textID.innerHTML = "Gebäude 2 Stockwerk 1 Gang 6: <br>" + building2Floor1Hallway6;
            break;
        case 'building2Floor1Hallway7':
            textID.innerHTML = "Gebäude 2 Stockwerk 1 Gang 7: <br>" + building2Floor1Hallway7;
            break;
        case 'building2Floor2Hallway1':
            textID.innerHTML = "Gebäude 2 Stockwerk 2 Gang 1: <br>" + building2Floor2Hallway1;
            break;
        case 'building2Floor2Hallway2':
            textID.innerHTML = "Gebäude 2 Stockwerk 2 Gang 2: <br>" + building2Floor2Hallway2;
            break;
        case 'building2Floor2Hallway3':
            textID.innerHTML = "Gebäude 2 Stockwerk 2 Gang 3: <br>" + building2Floor2Hallway3;
            break;
        case 'building2Floor2Hallway4':
            textID.innerHTML = "Gebäude 2 Stockwerk 2 Gang 4: <br>" + building2Floor2Hallway4;
            break;
        case 'building2Floor2Hallway5':
            textID.innerHTML = "Gebäude 2 Stockwerk 2 Gang 5: <br>" + building2Floor2Hallway5;
            break;
        case 'building2Floor2Hallway6':
            textID.innerHTML = "Gebäude 2 Stockwerk 2 Gang 6: <br>" + building2Floor2Hallway6;
            break;
        default:
            textID.innerHTML = 'Hier steht die Beschreibung eines Gebäudes, eines Flurs oder eines Gangs/Foyers.....';
            break;
    }

}