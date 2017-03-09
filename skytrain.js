var millenium_line = {
"Waterfront":1,
"Burrard":2,
"Granville":3,
"Stadium-Chinatown":4,
"Main Street-Science World":5,
"Commercial Broadway":6,
"Nanaimo":7,
"29th Avenue":8,
"Joyce-Collingwood":9,
"Patterson":10,
"Metrotown":11,
"Royal Oak":12,
"Edmonds":13,
"22nd Street":14,
"New Westminster":15,
"Columbia":16,
"Sapperton":17,
"Braid":18,
"Lougheed Town Centre":19,
"Production Way-University":20,
"Lake City Way":21,
"Sperling-Burnaby Lake":22,
"Holdom":23,
"Brentwood Town Centre":24,
"Gilmore":25,
"Rupert":26,
"Renfrew":27,
"Commercial-Broadway":28,
"VCC-Clark":29
}

function skytrain(origin, destination){

var message = "";
var number_stations = 0;
var stations = "";
var final_destination = "";
var direction = "Go to the station ";

//checking if 'origin' exists inside the list "millenium line"
if(millenium_line.hasOwnProperty(origin) != true){
    return "Or it was typed incorrectly!";
    } else { //checking if 'destination' exists inside the list "millenium line"
        if (millenium_line.hasOwnProperty(destination) != true){return "destination does not exist!";}}

    if (origin === destination){return "You are already in the correct destination! You don't need to go anywhere.";}

    if (millenium_line[origin] < millenium_line[destination]){final_destination = "VCC-Clark";
        } else { if(millenium_line[origin] > millenium_line[destination]){final_destination = "Waterfront";}
    }
    if(millenium_line[origin] > millenium_line[destination]){ number_stations = millenium_line[origin] - millenium_line[destination]}
    if(millenium_line[origin] < millenium_line[destination]){ number_stations = millenium_line[destination] - millenium_line[origin]}

    if(number_stations > 1){ stations = " stations"} else if (number_stations > 0 && number_stations <2){ stations = " station"}
    
    message = direction + final_destination + ". Go for more " + number_stations + stations + ".";
    return message;

}