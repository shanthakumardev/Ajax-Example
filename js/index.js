// create an object for making API call
var xhttp = new XMLHttpRequest();
var res;

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
         console.log('response',JSON.parse(this.response));
         res = JSON.parse(this.response);
         displayFlightNames();
    }
};

xhttp.open("GET", "https://api.spacexdata.com/v3/launches", true);
//initate the request
xhttp.send();


//method: GET, POST, PUT, PATCH, DELETE
//URL
//asynchrous/synchrous


function displayFlightNames(property='mission_name') {
    document.getElementById('missionDetils').innerHTML ='';
    for(var i =0; i < res.length; i++) {
        console.log('mision Name', res[i][property]);
        document.getElementById('missionDetils').innerHTML += `
                                            <div>
                                                <span>${res[i][property]}</span>
                                                <img src='${res[i].links.mission_patch_small}' height="100px"/>
                                            </div>`;
    }
}

function changeProperty(event) {
    console.log('event', event.target.value);
    displayFlightNames(event.target.value);
}