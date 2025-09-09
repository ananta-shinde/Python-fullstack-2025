
var nextInput = undefined
var prevInput = undefined
var operation = undefined

function handleNumberClick(soucrce){
    if(nextInput == undefined){
        nextInput= soucrce.innerText
    }else{
        nextInput = nextInput+soucrce.innerText
    }
    
   document.getElementById("cal-display").value = nextInput
   console.log(soucrce.innerText)
}

function handleOperatorClick(soucrce){
    prevInput = document.getElementById("cal-display").value 
    nextInput = ""
    clearResult()
    operation = soucrce.innerText
}

function calculateResult(){
    
   nextInput =  document.getElementById("cal-display").value
   prevInput =parseFloat(prevInput)
   nextInput = parseFloat(nextInput)
   var result = ""
   if(operation == "+"){
        result = prevInput+nextInput
   }else if(operation == "-"){
    result = prevInput-nextInput
   
   }else if(operation == "*"){
    result = prevInput*nextInput
   
   }else if(operation == "/"){
    result = prevInput/nextInput
   }else{
       prevInput = ""
       nextInput= ""
       operation = undefined
   }
   
   document.getElementById("cal-display").value = result
}

function clearResult(){
    document.getElementById("cal-display").value = ""
    
    // window.location.reload()
}