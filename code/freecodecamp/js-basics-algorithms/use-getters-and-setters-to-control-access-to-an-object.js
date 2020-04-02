/* Alter code below this line */
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit
    }
    // getter 
    get temperature() {
        return this._fahrenheit = 5 / 9 *              (this._fahrenheit - 32)
    }
    // setter 
    set temperature(fahrenheit) {
    this._fahrenheit = fahrenheit
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp)
