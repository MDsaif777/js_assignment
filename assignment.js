// https://github.com/MDsaif777/js_assignment

/*    1st problem  kilometerToMeter    */

function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter;
}
var convartMeter=kilometerToMeter(2);
console.log(convartMeter);

/*     2nd problem budgetCalculator   */

function budgetCalculator(watch,mobail, laptop) {
    var watchPrice=watch*50;
    var mobailPrice= mobail * 100;
    var laptopPrice = laptop * 500;
    var result=mobailPrice+laptopPrice+watchPrice;
    return result;
}
var totalPrice=budgetCalculator(2,3,1);
console.log(totalPrice);

/*       3rd problem hotelCost      */

function hotelCost(days){
    var rent=0;
    if(days<=10){
        rent=days*100;
    }
    else if(days<=20){
        var firstPart=10*100;
        var remaining=days-10;
        var secondPart=remaining*80;
        rent=firstPart+secondPart;
    }
    else{
        var firstPart=10*100;
        var secondPart=10*80;
        var remaining=days-20;
        var thirdPart=remaining*50;
        rent=firstPart+secondPart+thirdPart;
    }
    return rent
}
var totalRent=hotelCost(21);
console.log(totalRent);

/*      4th problem megaFriend       */