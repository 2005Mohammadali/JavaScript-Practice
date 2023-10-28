// Task - person eligible for blood donation

age = Number.parseInt(prompt("Enter you age"))
if(age >= 18){
    gender = prompt("Enter your gender")
    if(gender == "Male"){
        weight = prompt("Enter your weight")
        if(weight >= 60){
            disease = prompt("Do you have sugar? (yes/no)")
            if(disease != "yes"){
                alert("Congratulations! You can donate")
            }
            else{
                alert("Oops! You can not donate")
            }
        }
        else{
            alert("Oops! You can not donate")
        }    
    }
    else if(gender == "Female"){
        weight = prompt("Enter your weight")
        if(weight >= 50){
            disease = prompt("Do you have sugar? (yes/no)")
            if(disease != "yes"){
                alert("Congratulations! You can donate")
            }
            else{
                alert("Oops! You can not donate")
            }
        }
        else{
            alert("Oops! You can not donate")
        }
    }
    else{
        alert("Enter valid gender")
    }
}
else{
    alert("Oops! You can not donate")
}


//Task - Check triangle validity

side1 = Number.parseFloat(prompt("Enter side 1"))
side2 = Number.parseFloat(prompt("Enter side 2"))
side3 = Number.parseFloat(prompt("Enter side 3"))
if((side1 + side2) >= side3 && (side2 + side3) >= side1 && (side1 + side3) >= side2){
    alert("It is a valid triangle")
}
else{
    alert("Invalid Traingle")
}

//Task - Divisiblity
n = Number.parseInt(prompt("Enter any number"))

if(n % 7 == 0){
    alert("Divisible by 7")
}
else{
    alert("not divisible by 7")
}

//Task - Electricity Bill Calculator
unit = Number.parseInt(prompt("Enter no. of units used"))

if(unit <= 50){
    console.log("Your electricity bill costs ", unit * 2.0)
}
else if(unit > 50 && unit < 101){
    console.log("Your electricity bill costs ", unit * 2.50)
}
else if(unit > 100 && unit < 251){
    console.log("Your electricity bill costs ", unit * 5.5)
}
else{
    console.log("Your electricity bill costs ", unit * 9.0)
}

//Task - Income tax Calculator
salary = Number.parseFloat(prompt("Enter your annual salary"))

if(salary < 250000){
    console.log("No Taxes applicable")
}
else if(salary >= 250000 && salary <= 500000){
    console.log("Your tax is ", salary * (5/100))
}
else if (salary >= 500001 && salary <= 1000000){
    console.log("Your tax is ", salary * (20/100))
}
else if (salary > 1000000){
    console.log("Your tax is ", salary * (30/100))
}
else{
    console.log("Invalid salary input")
}

//Task - Check vowel or consonant
alpha = prompt("Type any alphabet")
if(alpha == "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u"){
    console.log("Its a vowel")
}
else if(alpha == "A" || alpha == "E" || alpha == "I" || alpha == "O" || alpha == "U"){
    console.log("Its a vowel")
}
else{
    console.log("Its a consonant")
}

//Task - check odd or even
check = Number.parseInt(prompt("Enter any number"))
if(check % 2 == 0){
    console.log("It is an even number")
}
else{
    console.log("It is an odd number")
}

//Task - Check leap year
year = Number.parseInt(prompt("Enter any year"))
if(((year%4 == 0) && (year%100 != 0)) || (year%400 == 0)){
    console.log(`The year ${year} is a leap year.`)
}
else{
    console.log(`The year ${year} is not a leap year.`)
}