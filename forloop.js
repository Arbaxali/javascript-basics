days =['mon','tue','wed','thu','fri','sat']
//for(let index = 0; index<=days.length-1; index++){
//    console.log(days[index])
//}
days.forEach(function(day, index) {
    console.log(`starts with ${index+1} --${day}`);
    
});