# VectorJS

# What is this?

VectorJS is a free to use Vector math system for your JavaScript programs.<br>
It has fancy syntax that is easy to learn.
<br><br><br>

# Basics

Here is how you create a vector:

```JavaScript
const vec = new Vector(1, 2); // The first value x is 1 and y is 2
```
A Vector can have from 0 dimensions up to 4 dimensions:
```JavaScript
const vec_0 = new Vector();
const vec_4 = new Vector(1, 2, 3, 4);
```
You can chain actions but note that it calculates from left to right. <br>
This is important but go to the section [Operations](#operations) first to understand better.
```JavaScript
const vec = new Vector(0, 1) ["+"] (0, 1) ["*"] (1, 2);
vec ["+="] (3) ["*="] (2, true);
// vec is now (3, 8);
```
To set and get the dimensions, just write down the dimension:
```JavaScript
const vec = new Vector(5, 3, 4);
vec.x += 1; // x = 6
console.log(vec.y); // console: 3
```
As you will see later, multiple inputs will count as a Vector:
```JavaScript
(vec) // variables that are Vectors
(new Vector(4, 1, 3)) // new Vectors
(0, 3) // Numbers only in the brackets
({x: 6, y: 4, z: 0, w: 3}) // Objects
```
<br><br>



# Operations

Simply write your operation into a string in square brackets (+, -, *, /):
```JavaScript
const vec_a = new Vector(1, 2);
const vec_b = new Vector(3, 4);
const vec_c = vec_a ["+"] (vec_b); // vec_c is now (4, 6)
```

To change a vectors value, use +=, -=, *=, /=:
```JavaScript
const vec = new Vector(1, 2);
vec ["+="] (2, 2); // vec_c is now (3, 4)
```

IMPORTANT <br>
If you want to change all values, the input has to be a number and after that, write a boolean down!
```JavaScript
const vec = new Vector(1, 2);
vec ["+="] (2, true); // vec_c is now (3, 4)
```
<br><br>



# Additional Functions

## Dimensions:
```JavaScript
const vec = new Vector(1, 2, 3, 4);

// get dimesions
vec ["dm"] (); // (returns 4)

// set dimensions
vec ["dm"] (2); // returns vector (1, 2)

vec ["dm"] (4) // vec is now (1, 2, 0, 0)

vec ["dm"] (0) // vec is now ()

// the second value indicates the number that will be created
vec ["dm"] (3, 1) // vec is now (1, 1, 1)
```
That means that you elegantly can create Vectors:
```JavaScript
const vec = new Vector() ["dm"] (3, 1); // vec is now (1, 1, 1)
```
<br>

## Distances:
Normal:
```JavaScript
const vec_a = new Vector(1, 0);
const vec_b = new Vector(0, 0);

const dist = vec_a ["dist"] (vec_b); // dist is 1
```
With different dimensions:
```JavaScript
const vec_a = new Vector(1, 1);
const vec_b = new Vector(1); // gets treated as (1, 0)

const dist = vec_a ["dist"] (vec_b); // dist is 1
```