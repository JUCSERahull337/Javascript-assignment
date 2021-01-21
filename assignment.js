

//Problem no: 1
function kilometerToMeter(kilometerValue){
    // function for kilometer to meter conversion

    if(kilometerValue>=0)
    {
        var meterValue= kilometerValue*1000;
        return meterValue;
    }
    else{
        console.log('Kilometer Value can not be less than 0 or negetive');
    }

}
// var kilometerValue=kilometerToMeter(0);
// console.log(kilometerValue);


// Problem no: 2
function budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop){
    // function for calculating total budget
    var costOfWatch=0;
    var costOfPhone=0;
    var costOfLaptop=0;
    var totalBudget=0;
     if(numberOfWatch >=0) {

        var costOfWatch= numberOfWatch * 50;                 //cost of watch

    }
    else{
        console.log('Number of watch can not be less than 0 or negative');
    }

    if(numberOfPhone >=0){
  
        var costOfPhone= numberOfPhone * 100;                  //cost of phone
  
      }
      else{
        console.log('Number of phone can not be less than 0 or negative');
      }

      if(numberOfLaptop >=0){
  
        var costOfLaptop= numberOfLaptop * 500;              //cost of laptop
  
      }
      else{
        console.log('Number of laptop can not be less than 0 or negative');
      }

      var totalBudget = costOfWatch + costOfPhone + costOfLaptop;          //total cost
      return totalBudget;

}
//  var cost= budgetCalculator(1,5,1);
//  console.log(cost);

//Problem no: 3

function hotelCost(numberOfDays){
    // Function for finding the total hotel cost according to spent days
    var totalCost=0;
    var remainingDays=0;
    if(numberOfDays>0){
        if(numberOfDays<=10){
            totalCost = numberOfDays*100;                          // cost between 0-10 days

        }
        else if(numberOfDays<=20){
            var totalCostFirstPart= 10*100;
            var remainingDays= numberOfDays-10;
            var totalCostSecondPart= remainingDays*80;
            totalCost= totalCostFirstPart + totalCostSecondPart;   // cost between 11-20 day span


        }
        else{
            var totalCostFirstPart= 10*100;
            var totalCostSecondPart= 10*80;
            var remainingDays = numberOfDays- 20;
            var totalCostThirdPart= remainingDays*50;
            totalCost= totalCostFirstPart + totalCostSecondPart + totalCostThirdPart;   // rest of the days
        }
        return totalCost;                      // returnig total cost

    }
    else{
        console.log("Number of days can not less than equal 0 or negative");
    }

}
// var spentDays= hotelCost(21);
// console.log(spentDays);

// Problem no: 4

function megaFriend(friendArray){
    // function for finding largest string from an array of strings

    if(friendArray.length>0){
        var maxString= friendArray[0];
        for(i=0; i<friendArray.length; i++){              // accessing the array

            if(friendArray[i].length > maxString.length){  //comparing both length

                var maxString=friendArray[i];
            }
        }

        return maxString;                                   //returning max string

    }
    else{
        console.log("Entered array can not be empty or undefined ")
    }


}
// var friendArray=['rahul','sushmoy','tanmoy'];
// var largestString= megaFriend(friendArray);
// console.log(largestString);
// console.log(typeof(largestString));



