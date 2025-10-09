function printCount(count=1){
    while(count<10){
        console.log(count)
        count++
    }
}

const addition =(n1,n2)=>{
    console.log(n1+n2)
}

const isPositive = (n)=>{n>0}
const isEven = (n)=>(n%2 == 0)

const demo = (n1,predicate)=>{
    if(predicate(n1)){
        console.log("value is positive")
    }
    else{
        console.log("value is negative")
    }
}


const names = ["mango","apple","banana"]

const printValues = (value)=>{console.log(value)}
names.forEach((value)=>{console.log(value+20)})

demo(20,isPositive)











