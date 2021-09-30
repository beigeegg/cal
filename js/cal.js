const btn = document.querySelectorAll('.btn');
const display = document.querySelector('.display')



let calculater = [];
let calLeft = '';
let calRight = '';
let math = '';

console.log(calculater)

btn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    console.log(event.target.outerHTML);
    const data = event.target.innerText;

    if(data === '1'){
      calculater.push('1')
      display.innerText = calculater.join('');
    }
    else if(data === '2'){
      calculater.push('2')
      display.innerText = calculater.join('');
      
    }
    else if(data === '3'){
      calculater.push('3')
      display.innerText = calculater.join('');
      
    }
    else if(data === '4'){
      calculater.push('4')
      display.innerText = calculater.join('');
    }
    else if(data === '5'){
      calculater.push('5')
      display.innerText = calculater.join('');
    }
    else if(data === '6'){
      calculater.push('6')
      display.innerText = calculater.join('');
    }
    else if(data === '7'){
      calculater.push('7')
      display.innerText = calculater.join('');
    }
    else if(data === '8'){
      calculater.push('8')
      display.innerText = calculater.join('');
    }
    else if(data === '9'){
      calculater.push('9')
      display.innerText = calculater.join('');
    }
    else if(data === '0'){
      calculater.push('0')
      display.innerText = calculater.join('');
    }
    else if(data === '+'){
      math = '+';
      calLeft  = calculater.join('');
      calculater = [];
    }
    else if(data === '-'){
      math = '-';
      calLeft  = calculater.join('');
      calculater = [];
    }
    else if(data === '='){
      calRight  = calculater.join('');
      const result = math === '+' ? sum(calLeft,calRight) : minus(calLeft, calRight);
      display.innerText = result;

    }
    else if(data === 'claer'){
      console.log()
    }
  })
})

function sum(left, right) {
  console.log(left, right)
  const leftData = parseInt(left, 10);
  const rightData = parseInt(right, 10);
  console.log(leftData, rightData);
  return leftData + rightData;
}
function minus(left, right) {
  console.log(left, right)
  const leftData = parseInt(left, 10);
  const rightData = parseInt(right, 10);
  console.log(leftData, rightData);
  return leftData - rightData;
}