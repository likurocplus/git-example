/**
* getQuadraticRoots
* 
* INPUT:
* - No direct input to the function. The values of a, b, and c are retrieved from the input fields on the web page using `document.getElementById("a").value`, `document.getElementById("b").value`, and `document.getElementById("c").value`.
* 
* PROCESS:
* - Convert the input values from strings to floating-point numbers using `parseFloat`.
* - Call the `solveQuadraticEquation(a, b, c)` function to calculate the roots of the quadratic equation with the parameters a, b, and c.
* 
* OUTPUT:
* - Display the result of the quadratic equation's roots on the web page by setting the `textContent` property of the element with the id "result".
*/
const getQuadraticRoots = () => {
    //get a b c number 
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    
    //call function to solve
    let result = solveQuadraticEquation(a,b,c);

    //set textContent and show the result on web
    document.getElementById("result").textContent = "Result: " + result;
}

// math: ax^2 + bx + c = 0
// input: a: the term before x^2
//        b: the term before x
//        c: the integer(float...) num
// process: check condition and solve, a = 0 or a != 0 (check condition delta)
// output: roots of Quadratic Equation
const solveQuadraticEquation = (a,b,c) => {
    if(a==0){
        return (-c)/b;
    } else {
        //calculator delta
        let delta = Math.pow(b,2) - 4*a*c;
        if(delta > 0){
            return [(-b + Math.sqrt(delta))/(2*a) , (-b - Math.sqrt(delta))/(2*a)];
        } else if(delta == 0){
            return (-b)/(2*a);
        } else {
            return "No Roots";
        }
    }
}

