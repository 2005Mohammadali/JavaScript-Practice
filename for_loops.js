
//Task - print numbers from 1 to 10
for(let i = 1; i<11; i++){
    console.log(i)
}


//Task - even numbers in given range
n = Number.parseInt(prompt("Enter any number"))
for(let i = 0; i <= n; i++){
    if(i%2 == 0){
        console.log(i)
    }
}


//Task - to return powers of given number
n = Number.parseFloat(prompt("Enter any number"))
pow = 0
for(let i = 0; i <= n; i++){
    pow = 2**i
    console.log(pow)
}


//Task - print a pattern
//Pattern 1
n = 5
str = ""
for(let i = 1; i <= n; i++){
    str += "*" + " "
    console.log(str)
    //console.log(i)
}


//Pattern 2
n = Number.parseInt(prompt("Enter any number"))
str = ""
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        str += j + " "
    }
    console.log(str)

}


//Pattern 3 
n = Number.parseInt(prompt("Enter any number"))
for(let i = 1; i <= n; i++){
    let str = ""
    for(let j = 1; j<=i; j++){
        str += j + " ";
    }
    console.log(str)
}


//Task - count no. of digits in a given number
n = Number.parseInt(prompt("Enter any no."))
let count = 0
while(n != 0){
    n = Math.floor(n/10)
    count++
}
console.log(count)


//Task - sum no. of digits in a given number
n = Number.parseInt(prompt("Enter any no."))
let sum = 0
while(n != 0){
    sum += n % 10
    n = Math.floor(n/10)
}
console.log(sum)


//Task - Fibonacci series
n = Number.parseInt(prompt("Enter any number"))
fst = 0
snd = 1
console.log(fst, snd)
for(let i = snd; i <= n; i++){
    trd = fst + snd
    console.log(fst, snd, trd)
    fst = snd
    snd = trd
}


//Task - check prime number
n = Number.parseInt(prompt("Enter any number"))
for(let i = 2; i < n; i++){
    if(n % i == 0){
        console.log("Composite number")
        break
    }
    else if(n == 2){
        console.log("Prime number")
        break
    }
    else{
        console.log("Prime Number")
        break
    }
}

//Task - Factorial of given number
n = Number.parseInt(prompt("Enter any number"))
fact = 1    
for(let i = 1; i <= n; i++){
    fact = fact*i
}
console.log(fact)


