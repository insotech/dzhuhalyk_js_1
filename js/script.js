function pow(num, step) {
    
    var newNum = +num;
    var newStep = +step;
    
    var roundNum = Math.round(newNum);
    var roundStep = Math.round(newStep);
    var result = roundNum;
    
    if(roundNum == 0, roundStep ==0){
       result = 1; 
    }
  
    for (var i = 1; i < roundStep; i++) {
    result *= roundNum; 
    }
    
    return result;
}

var num = prompt('Введіть число. Якщо введене число неціле, воно буде заокруглене!', ''); 

var step = prompt('Введіть степінь', ''); 

var newResult = pow(num, step);

console.log(newResult);

