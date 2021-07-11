






'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', ' 4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    name: 'Seattle',
    min: 23,
    max: 64,
    avg: 6.3,

    randomCustomers: [],
    avgCookiesperHour: [],

    getInfo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomArray(this.min, this.max))




        }
    },




    getavgCookiesperHour: function () {
        for (let i = 0; i < hours.length; i++) {



            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[i] * this.avg))



        }
        console.log(this.avgCookiesperHour);

    },

}

function randomArray(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Seattle.getInfo();
Seattle.getavgCookiesperHour();



Seattle.render = function () {

    let articleElement = document.createElement('article');
    let location=document.getElementById('location')
    location.appendChild(articleElement);
    let h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.avgCookiesperHour.length; i++) {
       
       let liElement= document.createElement('li');
    
       
        ulElement.appendChild(liElement);
    
        
        liElement.textContent=hours[i]  + '  ' + this.avgCookiesperHour[i];
        
    }
}
Seattle.render();


// Now for Tokyo

let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,

    randomCustomers: [],
    avgCookiesperHour: [],

    getInfo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomArray(this.min, this.max))




        }
    },




    getavgCookiesperHour: function () {
        for (let i = 0; i < hours.length; i++) {



            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[i] * this.avg))



        }
        console.log(this.avgCookiesperHour);

    },

}

function randomArray(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Tokyo.getInfo();
Tokyo.getavgCookiesperHour();



Tokyo.render = function () {

    let articleElement = document.createElement('article');
    let location2=document.getElementById('location2')
    location2.appendChild(articleElement);
    let h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.avgCookiesperHour.length; i++) {
       
       let liElement= document.createElement('li');
    
       
        ulElement.appendChild(liElement);
    
        
        liElement.textContent=hours[i]  + '  ' + this.avgCookiesperHour[i];
        
    }
}
Tokyo.render();


// Now for Dubai

let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,

    randomCustomers: [],
    avgCookiesperHour: [],

    getInfo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomArray(this.min, this.max))




        }
    },




    getavgCookiesperHour: function () {
        for (let i = 0; i < hours.length; i++) {



            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[i] * this.avg))



        }
        console.log(this.avgCookiesperHour);

    },

}

function randomArray(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Dubai.getInfo();
Dubai.getavgCookiesperHour();



Dubai.render = function () {

    let articleElement = document.createElement('article');
    let location3=document.getElementById('location3')
    location3.appendChild(articleElement);
    let h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.avgCookiesperHour.length; i++) {
       
       let liElement= document.createElement('li');
    
       
        ulElement.appendChild(liElement);
    
        
        liElement.textContent=hours[i]  + '  ' + this.avgCookiesperHour[i];
        
    }
}
Dubai.render();

// Now for Paris


let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,

    randomCustomers: [],
    avgCookiesperHour: [],

    getInfo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomArray(this.min, this.max))




        }
    },




    getavgCookiesperHour: function () {
        for (let i = 0; i < hours.length; i++) {



            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[i] * this.avg))



        }
        console.log(this.avgCookiesperHour);

    },

}

function randomArray(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Paris.getInfo();
Paris.getavgCookiesperHour();



Paris.render = function () {

    let articleElement = document.createElement('article');
    let location4=document.getElementById('location4')
    location4.appendChild(articleElement);
    let h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.avgCookiesperHour.length; i++) {
       
       let liElement= document.createElement('li');
    
       
        ulElement.appendChild(liElement);
    
        
        liElement.textContent=hours[i]  + '  ' + this.avgCookiesperHour[i];
        
    }
}
Paris.render();


// Now for Lima

let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,

    randomCustomers: [],
    avgCookiesperHour: [],

    getInfo: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCustomers.push(randomArray(this.min, this.max))




        }
    },




    getavgCookiesperHour: function () {
        for (let i = 0; i < hours.length; i++) {



            this.avgCookiesperHour.push(Math.floor(this.randomCustomers[i] * this.avg))



        }
        console.log(this.avgCookiesperHour);

    },

}

function randomArray(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Lima.getInfo();
Lima.getavgCookiesperHour();



Lima.render = function () {

    let articleElement = document.createElement('article');
    let location5=document.getElementById('location5')
    location5.appendChild(articleElement);
    let h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.avgCookiesperHour.length; i++) {
       
       let liElement= document.createElement('li');
    
       
        ulElement.appendChild(liElement);
    
        
        liElement.textContent=hours[i]  + '  ' + this.avgCookiesperHour[i];
        
    }
}
Lima.render();
