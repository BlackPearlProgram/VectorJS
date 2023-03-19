# VectorJS

Hello, this is my free to use Vector project!

It has Vector logic like additionn distance calculation and so on.

Initialize a Vector using the new keyword:
const vector = new Vector();

In the brackets are the values of the dimensions:
const vector = new Vector(2, 3);

It can have zero to four dimensions:
const vector0 = new Vector();
const vector1 = new Vector(2);
const vector2 = new Vector(2, 5);
const vector3 = new Vector(2, 5, 0);
const vector4 = new Vector(2, 5, 0, -4);

You can use operations.
Note that multiplications and divisions behave as shown:

const vecA = new Vector(1, 2);
const vecB = new Vector(2, 3);
let solution;

vecA ["+="] (vecB) ["+"] (0, 1);

vecA ["*="] (1, 2); // multiply x by 1 and y by 2
vecA ["/="] (2); // divide every value by 2
vecA ["/="] (new Vector(2)); // divide the x value by 2

vecA ["-="] (2);
solution = vecA ["+"] (vecB);