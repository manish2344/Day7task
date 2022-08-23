//Day 7 task 
//1.Solving problems using array functions on the rest countries' data.
//a.Get all the countries from the Asia continent /region using the Filter function
let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true)
request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
        //using filter method
    let countryname = data.filter((element) => element.region === "Asia");

    console.log(countryname);


}

request.send()

//b. Get all the countries with a population of less than 2 lakhs using Filter function
let request2 = new XMLHttpRequest();
request2.open('GET', 'https://restcountries.com/v3.1/all', true)
request2.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
        //using filter method
    let countrypopulation = data.filter((element) => element.population >= 200000);
    console.log(countrypopulation);



}

request2.send()
    //c Print the following details name, capital, flag using forEach function
let request3 = new XMLHttpRequest();
request3.open('GET', 'https://restcountries.com/v3.1/all', true)
request3.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
        ///console.log(data);
        ///using foreach method
    data.forEach(element => {
        console.log(`
        name:${element.name.common}
        flag:${element.flag}
        capital:${element.capital}`);
    });

}
request3.send()
    /////////////////////////////
    //d. Print the total population of countries using reduce function

let request4 = new XMLHttpRequest();

request4.open('GET', 'https://restcountries.com/v3.1/all', true)
request4.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
        //console.log(data);

    //using reduce method for counting all population
    let totalpopulation = data.reduce((oldpopulation, newpopulation) => {
        return oldpopulation + newpopulation.population
    }, 0)
    console.log(totalpopulation);
}

request4.send()

////////////////////////////
//e. Print the country which uses US Dollars as currency.
let request5 = new XMLHttpRequest();

request5.open('GET', 'https://restcountries.com/v3.1/all', true)
request5.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
        //using filter method 
    let countrypopulation = data.filter((element) => element.currencies === 'KW');
    console.log(countrypopulation);
    // console.log(data);

}

request5.send()