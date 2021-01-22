
// https://github.com/nisar-makdum/Assignment-3


//Problem-1 solved (Kilometer To Meter.)
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var convert = kilometerToMeter(162.28);
console.log(convert)




//Problem-2 solved (Budget Calculator.)
function budgetCalculator(watch, phone, laptop){
    var buyWatch = watch * 50;
    var buyPhone = phone * 30;
    var buyLaptop = laptop * 20;
    var totalBuy = buyWatch + buyPhone + buyLaptop;
    
    return totalBuy;
}

var totalPrice = budgetCalculator(50, 100, 500);
console.log(totalPrice)




//Problem-3 solved (Hotel Cost.)
function hotelCost(totalDays){
    var spentMoney = 0;
    if(totalDays <= 10){
        spentMoney = totalDays * 100;
    }
    else if(totalDays <= 20){
        var firstSpent = 10 * 100;
        var remaining = totalDays - 10;
        var secondSpent = remaining * 80;
        spentMoney = firstSpent + secondSpent;
    }
    else{
        var firstSpent = 10 * 100;
        var secondSpent = 10 * 80;
        var remaining = totalDays - 20;
        var thirdSpent = remaining * 50;
        spentMoney = firstSpent + secondSpent + thirdSpent;
    }
    
    return spentMoney;
}

var totalSpentMoney = hotelCost(30);
console.log(totalSpentMoney);




//Problem-4 solved (Mega Friend.)
function megaFriend(name){
    var megaName = name[0];
    for (var i = 0; i < name.length; i++){
        if(name[i].length > megaName.length){
            megaName = name[i];
        }
    }
    
    return megaName;
}

var name = ['RafsanRana', 'Mehrab', 'ArinIslam', 'TanshinAhmad' , 'ShahrukhAhmad'];
console.log(megaFriend(name))
   