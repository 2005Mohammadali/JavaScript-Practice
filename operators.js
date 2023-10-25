// Area of Circle
radius = prompt("Enter radius ");
radius = Number.parseFloat(radius)
area_circle = 3.14*radius**2;
console.log(area_circle)

// Circumference of a circle
circum = 2*3.14*radius
console.log(circum)

// Area of rectangle
length = Number.parseFloat(prompt("enter length "))
breadth = Number.parseFloat(prompt("Enter breadth "))
area_rect = length * breadth
console.log(area_rect)

// Perimeter of rectangle
peri_rect = 2 * (length + breadth)
console.log(peri_rect)

// area of square
side = Number.parseFloat(prompt("Enter side "))
area_sqr = side**2
console.log(area_sqr)

//perimeter of square
peri_sqr = 4 * side
console.log(peri_sqr)

//volume of sphere 
rad = Number.parseFloat(prompt("Enter radius"))
vol_sphere = (4/3)*3.14*rad**3
console.log(vol_sphere)

//surface area of sphere
surf_sphere = 4 * 3.14 * rad**2 
console.log(surf_sphere)

//Area of right angled triangle
base = Number.parseFloat(prompt("Enter base"))
height = Number.parseFloat(prompt("Enter height"))
area_right_tri = 0.5 * base * height
console.log(area_right_tri)

//Area of equilateral triangle
side_e = Number.parseFloat(prompt("Enter side"))
area_equi_tri = ((3**0.5)/4) * side_e**2
//area_equi_tri = 0.433 * side_e**2
console.log(area_equi_tri)

//Simple Interest
p = Number.parseFloat(prompt("Enter Pricipal amount"))
r = Number.parseFloat(prompt("Enter interest rate"))
t = Number.parseFloat(prompt("Enter time period"))
simpleInterest = p * (r/100) * t
console.log(simpleInterest)

//Compound Interest
n = Number.parseFloat(prompt("Enter no. of times interest compounded per year"))
A = p * (1 + (r/n))**(n*t)
console.log(A)

//Convert years into days
year = Number.parseInt(prompt("Enter no. of years"))
days = year * 365
console.log(days)

// largest of two numbers
no1 = Number.parseFloat(prompt("Enter any number1"))
no2 = Number.parseFloat(prompt("Enter any number2"))
console.log(no1 > no2? `${no1} is greater` : `${no2} is greater`)
























































































































































































































































