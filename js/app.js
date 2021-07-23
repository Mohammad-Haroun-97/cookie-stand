

'use strict';


////////////////////////////////////////////////


function randomArray(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let hours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', ' 4pm', '5pm', '6pm', '7pm'];

let places =[];  
function Place(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalCookiesPerDay=0
    this.randomCustomers = [];
    this.avgCookiesperHour = [];
    places.push(this);


    


}

Place.prototype.getrandomCustomers = function () {
    for (let i = 0; i < hours.length; i++) {
        
        this.randomCustomers.push(randomArray(this.min, this.max))
    }
    
};

Place.prototype.getavgCookiesperHour = function () {
    for (let i = 0; i < hours.length; i++) {
        

        this.avgCookiesperHour.push(Math.floor(this.randomCustomers[i] * this.avg))
        

        this.totalCookiesPerDay +=this.avgCookiesperHour[i];



    }

    
};



let Seattle = new Place('Seattle', 26, 65, 6.3);
let Tokyo = new Place('Tokyo', 3, 24, 1.2);
let Dubai = new Place('Dubai', 11, 38, 3.7);
let Paris = new Place('Paris', 20, 38, 2.3);
let Lima = new Place('Lima', 2, 16, 4.6);






let final = document.getElementById('final');
let table = document.createElement('table');
table.setAttribute('id','table')
final.appendChild(table);


// Header function

function makeHeader(){
    let headerRow = document.createElement('tr');
table.appendChild(headerRow);

let firstTh = document.createElement('th');
headerRow.appendChild(firstTh);
firstTh.textContent='Name';

for (let i = 0; i < hours.length; i++) {
    let hoursTh = document.createElement('th')
    headerRow.appendChild(hoursTh);
    hoursTh.textContent=hours[i];
}

let lastTh = document.createElement('th');
headerRow.appendChild(lastTh);
lastTh.textContent='Daily Location Total';


}


// Rendor Method

Place.prototype.render=function(){

    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let nameTd = document.createElement('th');
dataRow.appendChild(nameTd);

nameTd.textContent=this.name;

for (let i=0 ; i < hours.length; i++) {

    let cookiesTd=document.createElement('td');
dataRow.appendChild(cookiesTd);

cookiesTd.textContent=this.avgCookiesperHour[i];

    
}

let totalTd = document.createElement('td');
dataRow.appendChild(totalTd);

totalTd.textContent=this.totalCookiesPerDay;


}


// \\\\\\\\\\\\\\\\\\\\\\\\


    

// Footer function

function makefooter(){

    let footerRow = document.createElement('tr');
table.appendChild(footerRow);

let firstTh = document.createElement('th');
footerRow.appendChild(firstTh);

firstTh.textContent='Totals';

let totalOfTotals=0;

for (let i = 0; i < hours.length; i++) {

    let totalForEachhour=0;
    for (let j = 0; j < places.length; j++) {
        totalForEachhour+=places[j].avgCookiesperHour[i];
        totalOfTotals+=places[j].avgCookiesperHour[i];
        
    }

    let footerTh=document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent=totalForEachhour
}

let lastTh = document.createElement('th');
    footerRow.appendChild(lastTh);

    
lastTh.textContent=totalOfTotals;





}




makeHeader();

for (let i = 0; i < places.length; i++) {
    places[i].getrandomCustomers();
   places[i].getavgCookiesperHour();
   
   places[i].render();
    
}

makefooter();


// EVENTS // EVENTS// EVENTS// EVENTS
let form=document.getElementById('form');
form.addEventListener('submit',formSubmitter);



function deleteRow() {
    
    document.getElementById('table').deleteRow(-1);
    

    
}

function formSubmitter(event) {
    console.log(event);
    event.preventDefault();




    let name=event.target.PlaceName.value;

    let min=event.target.Minimum.value;

    let max=event.target.Maximum.value;

    let avg=event.target.Average.value;

    
    let addedLocation=new Place(name, min, max, avg)
    deleteRow();
    addedLocation.getrandomCustomers();
    addedLocation.getavgCookiesperHour();
    addedLocation.render();
    makefooter();

    
    
    
}