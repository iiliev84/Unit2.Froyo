
const userInput = prompt(
    "Please enter your favourite flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

    const flavorsArray = userInput.split(",");
    console.log("Your flavors selection:", flavorsArray)

    function countFlavors(arr){
        const flavorCounts  = {}
        for (let i = 0; i < arr.length; i++) {
            if (flavorCounts[arr[i]]){  
                flavorCounts[arr[i]] ++;
              } else{
                flavorCounts[arr[i]] = 1;
              }               
        }
        return flavorCounts ;
      }
      const result = countFlavors(flavorsArray);
      console.log("The frequencies of your flavors:",result);