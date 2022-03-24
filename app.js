console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//create a loop to count from 1 -100
//prints all odd numbers
for(let i=1; i <= 100; i++){
    if (i % 2 !==0){
        console.log(i) 
    }
    else{
        continue
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//create loop to count 1 -100
for(let i=1; i <= 100; i++){
    //if divisable by 3 & 5 print FIZZBUZZ
    if (i % 3 ==0 && i % 5 ==0){
        console.log("FIZZBUZZ")
    } else if (i % 3 ==0){
        console.log("FIZZ")
    } else if (i % 5 ==0){
        console.log("BUZZ")
    }
}
