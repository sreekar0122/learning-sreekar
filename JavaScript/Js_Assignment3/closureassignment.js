function greet() {
    let name = 'John';
    function displayName() {
        return 'Hi' + ' ' + name;
    }
        return displayName;
    }
    const g1 = greet();
    console.log(g1); 
    console.log(g1());



    function calculate(x) {
    function multiply(y) {
    return x * y;
    }
    return multiply;
    }
    const multiply3 = calculate(3);
    const multiply4 = calculate(4);
    console.log(multiply3); 
    console.log(multiply3()); 
    console.log(multiply3(6)); 
    console.log(multiply4(2)); 



    function sum() {
    let a = 0;
    function increaseSum() {
    return a = a + 1;
    }
    return increaseSum;
    }
    let x = sum();
    let a = 5;
    console.log(x());
    console.log(x()); 
    console.log(a);