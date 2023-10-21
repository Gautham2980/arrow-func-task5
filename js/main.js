let a=prompt("enter a number");
document.write("The given number="+a+" ")

let reverse=(a)=>{
    var temp=a;
    var b;
    var result=0;


    while(a>0){
        b=a%10;
        a=parseInt(a/10);
        result=result*10+b
    }
    return result;

}

let res=reverse(a);
document.write("reverse number ="+res)