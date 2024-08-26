const getQuadraticRoots = () => {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let result = solveQuadraticEquation(a,b,c);
    document.getElementById("result").textContent = "Result: " + result;
}

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
            return -1;
        }
    }
}

