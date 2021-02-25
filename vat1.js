const belasting = function(basisprijs, percentage) {
    return basisprijs * (percentage / 100);
};

const totaalPrijs = function(basisprijs, percentage) {
    const artikel = basisprijs + belasting(basisprijs, percentage);
    return artikel;
};

console.log(totaalPrijs(1000,21)); //1210
console.log(totaalPrijs(30, 11)); //33.30