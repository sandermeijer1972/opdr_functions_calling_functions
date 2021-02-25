const belasting = function(totaal, btw) {
    return (totaal / (100 + btw)) * btw;
};

const brutoPrijs = function(totaal, btw) {
    return [totaal - belasting(totaal, btw), belasting(totaal, btw)];
};

console.log(brutoPrijs(1210,21));
