function greatest(){
    let len = arguments.length
    let largest = [0];
    let i;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > largest ) {
          largest = arguments[i];
        }
      }
      console.log(largest);
}
greatest(1,2)
greatest(1,2,3,4)
