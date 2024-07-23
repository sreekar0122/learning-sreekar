function sumEven(){
    let i=0,res =0,j=2
    while(i<arguments[0]){
        if(j%2==0){
            res +=j
            i++
        }
        j++
    }
    alert(res)
}
sumEven(3)