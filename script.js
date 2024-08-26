
//function to get value a b c from input(index) and set result textcontent have result  
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
//        c: the integer num
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

