let items = [
    {
        batchid: 434,
        unit: 'ounce',
        weight: 12.21
    },
    {
        batchid: 414, 
        unit: 'gram', 
        weight: 199.54 
    },
    { 
        batchid: 522, 
        unit: 'ounce', 
        weight: 18.88 
    }
]

let ounceToGramRate = 28.3495231;

let convertOunchesToGrams = items.forEach((element) => {
    //if unit property has value "ounce"
    if(element.unit == 'ounce'){

        //unit value set to "grams"
        element.unit = 'gram';
        //weight value converted to grams from ounces (1 ounce = 28.3495231 grams)
        element.weight *= ounceToGramRate;
        //format weight value to 2 digits
        element.weight = element.weight.toFixed(2);
    }
})

console.log(items);