
// invert a string
let word=''
word = prompt("Donnez votre chaine de charactere ?....")
console.log(word)
let tab = [1,2,4,8];
// condition filter pair numbers 
let reverse=''
for(let i=word.length -1 ; i >=0; i-- ) {
  reverse += word[i];
}
console.log(reverse)
 
// getcount of a string 
let s=0;
let getCount = (s) =>s.length;
console.log(getCount(word));


// define the max element of an array
function max(tab){
        for (const numb of tab){
        if(maximum>numb){
            maximum=numb
        }       
    }   
    return maximum
}

// calculate the sum of a table
function sum (tab){
    return tab.reduce((acc, val) => acc + val,0);
}

// filter pair elements of a table 
function filter(tab){
    let arr=[];
    for (const element of tab) {
        if(element%2==0){
            arr.push(element);
        }
    }
    return arr
}
console.log(filter([1,2,6,3,3,3,4,8]))



// facatorial
function factorial(y){
    fact =1;
    for (let i=y; i > 0; i-- ) {
        fact*=i
    }
    return fact
}
console.log(factorial(5))

// prime number

// filter prime elements
function filterprime(z){
    let num
    if (num<2){
        return 'not prime'
    }
        for (i=2; i <= Math.sqrt(num); i++) {
            if(num % i == 0  ){
                return 'not prime'
             }
        }
        return num
}
