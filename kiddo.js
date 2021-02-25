const volwassen = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const begroeting = function(age) {
    if (volwassen(age)) {
        return ("Hello there");
    } else {
        return ("Hey kiddo");
    }
};

console.log(begroeting(34));
console.log(begroeting(12));
console.log(begroeting(98));
