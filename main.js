const calculator = document.getElementsByClassName("calculator")[0]

calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('arithmetic')) {
    document.calculator.output.value += event.target.value;
  }
})

document.getElementsByClassName("clear")[0].addEventListener('click', (event) => {
  document.calculator.output.value = '';
})

document.getElementsByClassName("plus-minus")[0].addEventListener('click', (event) => {
  if (calculator.output.value[0] != '-') {
    document.calculator.output.value = ('-' + calculator.output.value);
  }
  else {
    document.calculator.output.value = calculator.output.value.slice(1);
  }
})

document.getElementsByClassName("evaluate")[0].addEventListener('click', (event) => {
  document.calculator.output.value = eval(calculator.output.value);
})

document.addEventListener('click', (event) => {
  output = document.getElementsByClassName("output")[0]
  output.focus();
  output.scrollLeft = output.scrollWidth;
})
