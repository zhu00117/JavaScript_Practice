const a=10;
if (a===10){
    console.log(`a is ${a}`);
    }
    else if (a>10){
        console.log(`a is greater than 10`);
    }else{
        console.log(`a is less than 10`);

    }

    //ternary oprator

const color = a > 10 ? 'red':'orange';
console.log(color);

//switch
switch(color){
    case'red':
        console.log('color is red');

    case 'black':
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not identified');
    
}

//function
let num3=0;
function addNums(num1,num2){
    return num3=num1+num2;
 
}
addNums(3,5);
console.log(num3);

const substactNums=(num1,num2)=>num1-num2;
console.log(substactNums(5,2));